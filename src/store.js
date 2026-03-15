import { reactive } from "vue";

export const commentsCache = reactive({
	items: [],
	stats: null,
	loaded: false,
});
