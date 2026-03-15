<template>
  <k-panel-inside>
    <k-view class="k-loop-comments-view">
      <k-header>
        {{ t('moinframe.loop.panel.label') }}
        <template #buttons>
          <k-button icon="refresh" size="sm" :disabled="loading" @click="load">
            {{ t('moinframe.loop.panel.refresh') }}
          </k-button>
        </template>
      </k-header>

      <k-tabs :tab="props.tab" :tabs="filterTabs" />

      <template v-if="loading">
        <k-icon type="loader" class="k-loop-loader" />
      </template>

      <template v-else-if="filteredComments.length === 0">
        <k-empty icon="chat" style="margin-top: var(--spacing-5)">
          {{ t('moinframe.loop.panel.noComments') }}
        </k-empty>
      </template>

      <template v-else>

        <k-section v-for="group in groupedItems" :key="group.pageTitle" class="k-loop-group" :label="group.pageTitle">
          <template slot="options">
            <k-button-group slot="buttons">
              <k-button icon="edit" variant="filled" size="sm" :link="group.panelUrl"
                :text="t('moinframe.loop.panel.editPage')" />
              <k-button icon="open" variant="filled" size="sm" :link="group.pageUrl" target="_blank" />
            </k-button-group>
          </template>
          <div class="k-items k-list-items" data-layout="list">
            <k-item v-for="item in group.items" :key="item.id" :text="item.text" :info="item.info" :image="item.image"
              :options="item.options" :buttons="item.buttons" @option="(e) => onOption(e, item)"></k-item>
          </div>
        </k-section>
      </template>
    </k-view>
  </k-panel-inside>
</template>

<script setup>
import { useApi, usePanel, ref, computed, onMounted } from "kirbyuse";
import { commentsCache } from "../store.js";

const { get, post } = useApi();
const { t, notification } = usePanel();

const props = defineProps({
  tab: { type: String, default: "open" },
});

const loading = ref(false);
const comments = ref([]);

const filterTabs = computed(() => {
  const openCount = comments.value.filter((c) => c.status !== "RESOLVED").length;
  return [
    { name: "open", label: t("moinframe.loop.panel.filter.open"), link: "loop", badge: openCount },
    { name: "resolved", label: t("moinframe.loop.panel.filter.resolved"), link: "loop/resolved" },
  ];
});

const filteredComments = computed(() => {
  if (props.tab === "open") return comments.value.filter((c) => c.status !== "RESOLVED");
  if (props.tab === "resolved") return comments.value.filter((c) => c.status === "RESOLVED");
  return comments.value;
});

const items = computed(() =>
  filteredComments.value.map((c) => {
    const resolved = c.status === "RESOLVED";
    const replyCount = (c.replies ?? []).length;
    const replyText = replyCount > 0 ? ` · ${replyCount} ${t('moinframe.loop.panel.replies')}` : "";

    return {
      id: c.id,
      commentId: c.id,
      text: c.comment.length > 80 ? c.comment.substring(0, 80) + "…" : c.comment,
      info: `${c.author}${replyText}`,
      pageTitle: c.pageTitle,
      pageUrl: c.pageUrl,
      panelUrl: c.panelUrl,
      image: {
        icon: resolved ? "check" : "circle",
        back: resolved ? "green-200" : "blue-200",
        color: resolved ? "green-600" : "blue-600",
      },
      pagePath: c.pagePath,
      resolved,
      buttons: [
        {
          text: t('moinframe.loop.panel.drawer.open'),
          click: () => openDrawer(c.id)
        }
      ],
      options: [
        ...(c.pagePath
          ? [{ text: t('moinframe.loop.panel.openPage'), icon: "open", click: "openPage" }]
          : []),
        resolved
          ? { text: t('moinframe.loop.panel.unresolve'), icon: "undo", click: "unresolve" }
          : { text: t('moinframe.loop.panel.resolve'), icon: "check", click: "resolve" },
      ],
    };
  })
);

const groupedItems = computed(() => {
  const groups = {};
  for (const item of items.value) {
    const key = item.pageTitle;
    if (!groups[key]) {
      groups[key] = {
        pageTitle: key,
        pageUrl: item.pageUrl,
        panelUrl: item.panelUrl,
        items: [],
      };
    }
    groups[key].items.push(item);
  }
  return Object.values(groups);
});

function openDrawer(id) {
  panel.drawer.open('loop/comments/' + id);
}

async function load() {
  loading.value = true;
  try {
    const [commentsData] = await Promise.all([
      get("loop/comments"),
    ]);
    comments.value = commentsData ?? [];
    commentsCache.items = comments.value;
    commentsCache.loaded = true;
  } catch (e) {
    notification.error(e.message ?? "Failed to load comments");
  } finally {
    loading.value = false;
  }
}

async function onOption(action, item) {
  if (action === "resolve") {
    try {
      await post(`loop/comments/${item.commentId}/resolve`);
      await load();
    } catch (e) {
      notification.error(e.message);
    }
  } else if (action === "unresolve") {
    try {
      await post(`loop/comments/${item.commentId}/unresolve`);
      await load();
    } catch (e) {
      notification.error(e.message);
    }
  } else if (action === "openPage" && item.pagePath) {
    window.open(`${window.location.origin}/panel/${item.pagePath}`, "_blank");
  }
}

onMounted(() => {
  if (commentsCache.loaded) {
    comments.value = commentsCache.items;
  }
  load();
});
</script>

<style>
.k-loop-filters {
  margin-top: var(--spacing-2);
  margin-bottom: var(--spacing-8);
}

.k-loop-loader {
  margin-inline: auto;
  margin-block: var(--spacing-5);
}

.k-loop-group+.k-loop-group {
  margin-top: var(--spacing-6);
}

.k-loop-group-label {
  margin-bottom: var(--spacing-2);
}
</style>
