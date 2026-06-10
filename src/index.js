import "./index.css";
import Area from "./components/Area.vue";
import CommentsSection from "./components/CommentsSection.vue";

panel.plugin("moinframe/loop", {
	components: {
		"k-loop-comments-view": Area,
	},
	sections: {
		"loop-comments": CommentsSection,
	},
});
