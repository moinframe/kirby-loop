<template>
  <section class="k-loop-comments-section">
    <header class="k-section-header">
      <k-headline>{{ label }}</k-headline>
      <k-button-group>
        <k-button icon="refresh" size="xs" variant="filled" :disabled="loading" @click="load" />
      </k-button-group>
    </header>

    <template v-if="loading">
      <k-icon type="loader" class="k-loop-section-loader" />
    </template>

    <k-empty v-else-if="items.length === 0" icon="chat">
      {{ t('moinframe.loop.panel.noComments') }}
    </k-empty>

    <div v-else class="k-items k-list-items" data-layout="list">
      <k-item v-for="item in items" :key="item.id" :text="item.text" :info="item.info" :options="item.options"
        :image="item.image" @option="(action) => onOption(action, item)" @click="(e) => onItemClick(e, item.id)">
        <span slot="image" :data-comment-id="item.id"
          :style="`--back: var(--color-${item.image.back});--color: var(--color-${item.image.color});`">
          <k-icon-frame :icon="item.image.icon" :back="item.image.back" :color="item.image.color" />
        </span>
      </k-item>
    </div>
  </section>
</template>

<script setup>
import { useApi, usePanel, useSection, ref, computed, onMounted, watch } from "kirbyuse";
import { loopBus } from "../store.js";

const props = defineProps({
  name: { type: String, default: null },
  parent: { type: String, default: null },
});

const { post } = useApi();
const panel = usePanel();
const { t, notification } = panel;
const section = useSection();

const loading = ref(false);
const label = ref(t("moinframe.loop.panel.label"));
const comments = ref([]);

const items = computed(() =>
  comments.value.map((c) => {
    const resolved = c.status === "RESOLVED";
    const replyText = c.replyCount > 0 ? ` · ${c.replyCount} ${t("moinframe.loop.panel.replies")}` : "";

    return {
      id: c.id,
      text: c.comment.length > 80 ? c.comment.substring(0, 80) + "…" : c.comment,
      info: `${c.author}${replyText}`,
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
  panel.drawer.open("loop/comments/" + id);
}

async function load() {
  loading.value = true;
  try {
    const response = await section.load({ parent: props.parent, name: props.name });
    label.value = response.label ?? t("moinframe.loop.panel.label");
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
      await post(`loop/comments/${item.id}/${action}`);
      // Reloads this section and any other mounted section via the watcher.
      loopBus.revision++;
    } catch (e) {
      notification.error(e.message);
    }
  }
}

// Reload when any section changes a comment's status.
watch(() => loopBus.revision, () => load());

onMounted(load);
</script>

<style>
.k-loop-comments-section {
  margin-bottom: var(--spacing-8);
}

.k-loop-comments-section .k-section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-2);
}

.k-loop-section-loader {
  margin-inline: auto;
  margin-block: var(--spacing-5);
}
</style>
