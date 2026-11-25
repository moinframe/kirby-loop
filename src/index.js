import "./index.css";
import CommentsView from "./components/CommentsView.vue";
import CommentsField from "./components/CommentsField.vue";

panel.plugin("moinframe/loop", {
	components: {
		"k-loop-comments-view": CommentsView,
	},
	fields: {
		"loop-comments": CommentsField,
	},
});
