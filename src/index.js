import "./index.css";
import Area from "./components/Area.vue";
import CommentsField from "./components/CommentsField.vue";

panel.plugin("moinframe/loop", {
	components: {
		"k-loop-comments-view": Area,
	},
	fields: {
		"loop-comments": CommentsField,
	},
});
