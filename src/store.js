import { reactive } from "vue";

export const commentsCache = reactive({
	items: [],
	loaded: false,
});

// Bumped whenever a comment's status changes, so other mounted
// components (e.g. multiple sections on one page) can reload.
export const loopBus = reactive({
	revision: 0,
});
