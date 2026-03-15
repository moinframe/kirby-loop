import { reactive } from "vue";

export const commentsCache = reactive({
	items: [],
	loaded: false,
});
