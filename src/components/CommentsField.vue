<template>
  <k-field :help="help" :input="false" :label="label" :name="name" :type="type" class="k-loop-comments-field">
    <template #options>
      <k-button-group>
        <k-button icon="refresh" size="xs" variant="filled" :disabled="loading" @click="load" />
      </k-button-group>
    </template>

    <template v-if="loading">
      <k-icon type="loader" class="k-loop-field-loader" />
    </template>

    <k-empty v-else-if="items.length === 0" icon="chat">
      {{ t('moinframe.loop.panel.noComments') }}
    </k-empty>

    <div v-else class="k-items k-list-items" data-layout="list">
      <k-item v-for="item in items" :key="item.id" :text="item.text" :info="item.info" :options="item.options"
        :image="item.image" @option="(action) => onOption(action, item)" @click="(e) => onItemClick(e, item.id)">
        <template #image>
          <button type="button" :data-comment-id="item.id" :title="t('moinframe.loop.panel.openOnPage')"
            :aria-label="`${t('moinframe.loop.panel.openOnPage')} #${item.id}`"
            :style="`--back: var(--color-${item.image.back});--color: var(--color-${item.image.color});`"
            @click.stop="openOnPage(item)">
            <k-icon-frame :icon="item.image.icon" :back="item.image.back" :color="item.image.color" />
          </button>
        </template>
      </k-item>
    </div>
  </k-field>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useApi, usePanel } from "kirbyuse";
import { loopBus } from "../store.js";

defineOptions({ inheritAttrs: false });

const props = defineProps({
  help: String,
  label: String,
  name: String,
  type: String,
  status: String,
  endpoints: Object,
});

const api = useApi();
const panel = usePanel();
const { t, notification } = panel;

const loading = ref(false);
const comments = ref([]);

const items = computed(() =>
  comments.value.map((c) => {
    const resolved = c.status === "RESOLVED";
    const replyLabel = t(c.replyCount === 1 ? "moinframe.loop.panel.reply" : "moinframe.loop.panel.replies");
    const replyText = c.replyCount > 0 ? ` · ${c.replyCount} ${replyLabel}` : "";
    const langText = c.lang ? ` · ${c.lang.toUpperCase()}` : "";

    return {
      id: c.id,
      text: c.comment.length > 80 ? `${c.comment.substring(0, 80)}…` : c.comment,
      info: `${c.author}${replyText}${langText}`,
      pageUrl: c.pageUrl,
      image: {
        icon: "",
        back: resolved ? "green-500" : "blue-400",
        color: resolved ? "green-800" : "blue-800",
      },
      options: [
        { icon: "edit", text: t("moinframe.loop.panel.drawer.open"), click: "openDrawer" },
        resolved
          ? { text: t("moinframe.loop.panel.unresolve"), icon: "undo", click: "unresolve" }
          : { text: t("moinframe.loop.panel.resolve"), icon: "check", click: "resolve" },
      ],
    };
  })
);

function onItemClick(e, id) {
  if (!e.target.closest(".k-item-title")) return;
  openDrawer(id);
}

function openDrawer(id) {
  panel.drawer.open(`loop/comments/${id}`);
}

function openOnPage(item) {
  if (!item.pageUrl) return;
  window.open(`${item.pageUrl}#loop-comment-${item.id}`, "_blank");
}

async function load() {
  loading.value = true;
  try {
    const response = await api.get(props.endpoints.field);
    comments.value = response.comments ?? [];
  } catch (e) {
    notification.error(e.message ?? "Failed to load comments");
  } finally {
    loading.value = false;
  }
}

async function onOption(action, item) {
  if (action === "openDrawer") {
    openDrawer(item.id);
  } else if (action === "resolve" || action === "unresolve") {
    try {
      await api.post(`loop/comments/${item.id}/${action}`);
      // Reloads this field and any other mounted loop-comments field via the watcher.
      loopBus.revision++;
    } catch (e) {
      notification.error(e.message);
    }
  }
}

watch(() => loopBus.revision, () => load());

onMounted(load);
</script>

<style scoped>
.k-loop-comments-field :deep(.k-item-title) {
  cursor: pointer;
}

.k-loop-field-loader {
  margin-inline: auto;
  margin-block: var(--spacing-5);
}
</style>
