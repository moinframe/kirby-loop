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

        <k-section v-for="group in groupedItems" :key="group.pageId" class="k-loop-group" :label="group.label">
          <template slot="options">
            <k-button-group slot="buttons">
              <k-button icon="edit" variant="filled" size="sm" :link="group.panelUrl"
                :text="t('moinframe.loop.panel.editPage')" />
              <k-button icon="open" variant="filled" size="sm" :link="group.pageUrl" target="_blank" />
            </k-button-group>
          </template>
          <div class="k-items k-list-items" data-layout="list">
            <k-item v-for="item in group.items" :key="item.id" :text="item.text" :info="item.info"
              :options="item.options" :buttons="item.buttons" :image="item.image" @option="(e) => onOption(e, item)"
              @click="(e) => onItemClick(e, item.commentId)">
              <span slot="image" :data-comment-id="item.id" :title="t('moinframe.loop.panel.openOnPage')"
                :style="`--back: var(--color-${item.image.back});--color: var(--color-${item.image.color});`"
                @click.stop="openOnPage(item)">
                <k-icon-frame :icon="item.image.icon" :back="item.image.back" :color="item.image.color" />
              </span>
            </k-item>
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
      pageId: c.page,
      pageTitle: c.pageTitle,
      titlePath: c.titlePath ?? [c.pageTitle],
      pageUrl: c.pageUrl,
      panelUrl: c.panelUrl,
      image: {
        icon: "",
        back: resolved ? "green-500" : "blue-400",
        color: resolved ? "green-800" : "blue-800",
      },
      pagePath: c.pagePath,
      resolved,
      buttons: [],
      options: [
        {
          icon: "edit",
          text: t('moinframe.loop.panel.drawer.open'),
          click: "openDrawer"
        },
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

function compareTitlePath(a, b) {
  const pa = a.titlePath;
  const pb = b.titlePath;
  const len = Math.min(pa.length, pb.length);
  for (let i = 0; i < len; i++) {
    const cmp = pa[i].localeCompare(pb[i], undefined, { sensitivity: "base", numeric: true });
    if (cmp !== 0) return cmp;
  }
  // Shorter path (the ancestor) sorts before its descendants.
  return pa.length - pb.length;
}

const groupedItems = computed(() => {
  const groups = {};
  for (const item of items.value) {
    const key = item.pageId;
    if (!groups[key]) {
      groups[key] = {
        pageId: key,
        pageTitle: item.pageTitle,
        titlePath: item.titlePath,
        label: item.titlePath.join(" › "),
        pageUrl: item.pageUrl,
        panelUrl: item.panelUrl,
        items: [],
      };
    }
    groups[key].items.push(item);
  }
  return Object.values(groups).sort(compareTitlePath);
});

function onItemClick(e, id) {
  if (!e.target.closest('.k-item-title')) return;
  openDrawer(id);
}

function openDrawer(id) {
  panel.drawer.open('loop/comments/' + id);
}

function openOnPage(item) {
  if (!item.pageUrl) return;
  window.open(`${item.pageUrl}#loop-comment-${item.commentId}`, "_blank");
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
  } else if (action === "openDrawer") {
    openDrawer(item.commentId);
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

.k-loop-group .k-item-title {
  cursor: pointer;
}

.k-loop-group-label {
  margin-bottom: var(--spacing-2);
}
</style>
