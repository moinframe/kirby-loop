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

      <k-stats :reports="statsReports" size="huge" />

      <div class="k-loop-filters" style="margin-top: var(--spacing-3); display: flex; gap: var(--spacing-2);">
        <k-button
          size="sm"
          :variant="filter === 'all' ? 'filled' : 'default'"
          @click="filter = 'all'"
        >
          {{ t('moinframe.loop.panel.filter.all') }}
        </k-button>
        <k-button
          size="sm"
          :variant="filter === 'open' ? 'filled' : 'default'"
          @click="filter = 'open'"
        >
          {{ t('moinframe.loop.panel.filter.open') }}
        </k-button>
        <k-button
          size="sm"
          :variant="filter === 'resolved' ? 'filled' : 'default'"
          @click="filter = 'resolved'"
        >
          {{ t('moinframe.loop.panel.filter.resolved') }}
        </k-button>
      </div>

      <template v-if="loading">
        <k-icon type="loader" style="margin-inline: auto; margin-block: var(--spacing-5);" />
      </template>

      <template v-else-if="filteredComments.length === 0">
        <k-empty icon="chat" style="margin-top: var(--spacing-5)">
          {{ t('moinframe.loop.panel.noComments') }}
        </k-empty>
      </template>

      <div v-else class="k-items k-list-items" data-layout="list" style="margin-top: var(--spacing-5)">
        <k-item
          v-for="item in items"
          :key="item.id"
          :text="item.text"
          :info="item.info"
          :image="item.image"
          :link="item.link"
          :target="item.target"
        >
          <template #options>
            <k-options-dropdown
              :options="item.options"
              class="k-item-options-dropdown"
              @option="(action) => onOption(action, item)"
            />
          </template>
        </k-item>
      </div>
    </k-view>
  </k-panel-inside>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useApi, usePanel } from "kirbyuse";
import { commentsCache } from "../store.js";

const api = useApi();
const { t, notification } = usePanel();

const loading = ref(false);
const comments = ref([]);
const stats = ref(null);
const filter = ref("all");

const statsReports = computed(() => {
  const s = stats.value;
  if (!s) return [];
  return [
    { label: t('moinframe.loop.panel.stats.total'), value: String(s.total) },
    { label: t('moinframe.loop.panel.stats.open'), value: String(s.open), theme: s.open > 0 ? "negative" : "default" },
    { label: t('moinframe.loop.panel.stats.resolved'), value: String(s.resolved) },
    { label: t('moinframe.loop.panel.stats.today'), value: String(s.today) },
  ];
});

const filteredComments = computed(() => {
  if (filter.value === "open") return comments.value.filter((c) => c.status !== "RESOLVED");
  if (filter.value === "resolved") return comments.value.filter((c) => c.status === "RESOLVED");
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
      info: `${c.pageTitle} · ${c.author}${replyText}`,
      image: {
        icon: resolved ? "check" : "circle",
        back: resolved ? "green-200" : "orange-200",
        color: resolved ? "green-600" : "orange-600",
      },
      link: c.pageUrl ?? undefined,
      target: c.pageUrl ? "_blank" : undefined,
      pagePath: c.pagePath,
      resolved,
      options: [
        resolved
          ? { text: t('moinframe.loop.panel.unresolve'), icon: "undo", click: "unresolve" }
          : { text: t('moinframe.loop.panel.resolve'), icon: "check", click: "resolve" },
        ...(c.pagePath
          ? [{ text: t('moinframe.loop.panel.openPage'), icon: "open", click: "openPage" }]
          : []),
      ],
    };
  })
);

async function load() {
  loading.value = true;
  try {
    const [commentsData, statsData] = await Promise.all([
      api.get("loop/comments"),
      api.get("loop/stats"),
    ]);
    comments.value = commentsData ?? [];
    stats.value = statsData ?? null;
    commentsCache.items = comments.value;
    commentsCache.stats = stats.value;
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
      await api.post(`loop/comments/${item.commentId}/resolve`);
      await load();
    } catch (e) {
      notification.error(e.message);
    }
  } else if (action === "unresolve") {
    try {
      await api.post(`loop/comments/${item.commentId}/unresolve`);
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
    stats.value = commentsCache.stats;
  }
  load();
});
</script>
