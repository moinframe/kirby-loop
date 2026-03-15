(function() {
  "use strict";
  const globalVue = window.Vue;
  function usePanel() {
    return window.panel;
  }
  function useApi() {
    return usePanel().api;
  }
  const computed = globalVue.computed;
  globalVue.customRef;
  globalVue.defineAsyncComponent;
  globalVue.defineComponent;
  globalVue.effectScope;
  globalVue.getCurrentInstance;
  globalVue.getCurrentScope;
  globalVue.h;
  globalVue.inject;
  globalVue.isProxy;
  globalVue.isReactive;
  globalVue.isReadonly;
  globalVue.isRef;
  globalVue.isShallow;
  globalVue.markRaw;
  globalVue.nextTick;
  globalVue.onActivated;
  globalVue.onBeforeMount;
  globalVue.onBeforeUnmount;
  globalVue.onBeforeUpdate;
  globalVue.onDeactivated;
  globalVue.onErrorCaptured;
  const onMounted = globalVue.onMounted;
  globalVue.onRenderTracked;
  globalVue.onRenderTriggered;
  globalVue.onScopeDispose;
  globalVue.onServerPrefetch;
  globalVue.onUnmounted;
  globalVue.onUpdated;
  globalVue.provide;
  globalVue.proxyRefs;
  globalVue.reactive;
  globalVue.readonly;
  const ref = globalVue.ref;
  globalVue.shallowReactive;
  globalVue.shallowReadonly;
  globalVue.shallowRef;
  globalVue.toRaw;
  globalVue.toRef;
  globalVue.toRefs;
  globalVue.triggerRef;
  globalVue.unref;
  globalVue.useAttrs;
  globalVue.useCssModule;
  globalVue.useCssVars;
  globalVue.useListeners;
  globalVue.useSlots;
  globalVue.watch;
  globalVue.watchEffect;
  globalVue.watchPostEffect;
  globalVue.watchSyncEffect;
  const commentsCache = Vue.reactive({
    items: [],
    loaded: false
  });
  function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
    var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
    if (render) {
      options.render = render;
      options.staticRenderFns = staticRenderFns;
      options._compiled = true;
    }
    return {
      exports: scriptExports,
      options
    };
  }
  const _sfc_main = {
    __name: "Area",
    props: {
      tab: { type: String, default: "open" }
    },
    setup(__props) {
      const props = __props;
      const { get, post } = useApi();
      const { t, notification } = usePanel();
      const loading = ref(false);
      const comments = ref([]);
      const filterTabs = computed(() => {
        const openCount = comments.value.filter((c) => c.status !== "RESOLVED").length;
        return [
          { name: "open", label: t("moinframe.loop.panel.filter.open"), link: "loop", badge: openCount },
          { name: "resolved", label: t("moinframe.loop.panel.filter.resolved"), link: "loop/resolved" }
        ];
      });
      const filteredComments = computed(() => {
        if (props.tab === "open") return comments.value.filter((c) => c.status !== "RESOLVED");
        if (props.tab === "resolved") return comments.value.filter((c) => c.status === "RESOLVED");
        return comments.value;
      });
      const items = computed(
        () => filteredComments.value.map((c) => {
          const resolved = c.status === "RESOLVED";
          const replyCount = (c.replies ?? []).length;
          const replyText = replyCount > 0 ? ` · ${replyCount} ${t("moinframe.loop.panel.replies")}` : "";
          return {
            id: c.id,
            commentId: c.id,
            text: c.comment.length > 80 ? c.comment.substring(0, 80) + "…" : c.comment,
            info: `${c.author}${replyText}`,
            pageTitle: c.pageTitle,
            pageUrl: c.pageUrl,
            panelUrl: c.panelUrl,
            image: {
              icon: resolved ? "check" : "circle",
              back: resolved ? "green-200" : "blue-200",
              color: resolved ? "green-600" : "blue-600"
            },
            pagePath: c.pagePath,
            resolved,
            buttons: [
              {
                text: t("moinframe.loop.panel.drawer.open"),
                click: () => openDrawer(c.id)
              }
            ],
            options: [
              ...c.pagePath ? [{ text: t("moinframe.loop.panel.openPage"), icon: "open", click: "openPage" }] : [],
              resolved ? { text: t("moinframe.loop.panel.unresolve"), icon: "undo", click: "unresolve" } : { text: t("moinframe.loop.panel.resolve"), icon: "check", click: "resolve" }
            ]
          };
        })
      );
      const groupedItems = computed(() => {
        const groups = {};
        for (const item of items.value) {
          const key = item.pageTitle;
          if (!groups[key]) {
            groups[key] = {
              pageTitle: key,
              pageUrl: item.pageUrl,
              panelUrl: item.panelUrl,
              items: []
            };
          }
          groups[key].items.push(item);
        }
        return Object.values(groups);
      });
      function openDrawer(id) {
        panel.drawer.open("loop/comments/" + id);
      }
      async function load() {
        loading.value = true;
        try {
          const [commentsData] = await Promise.all([
            get("loop/comments")
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
        }
      }
      onMounted(() => {
        if (commentsCache.loaded) {
          comments.value = commentsCache.items;
        }
        load();
      });
      return { __sfc: true, get, post, t, notification, props, loading, comments, filterTabs, filteredComments, items, groupedItems, openDrawer, load, onOption };
    }
  };
  var _sfc_render = function render() {
    var _vm = this, _c = _vm._self._c, _setup = _vm._self._setupProxy;
    return _c("k-panel-inside", [_c("k-view", { staticClass: "k-loop-comments-view" }, [_c("k-header", { scopedSlots: _vm._u([{ key: "buttons", fn: function() {
      return [_c("k-button", { attrs: { "icon": "refresh", "size": "sm", "disabled": _setup.loading }, on: { "click": _setup.load } }, [_vm._v(" " + _vm._s(_setup.t("moinframe.loop.panel.refresh")) + " ")])];
    }, proxy: true }]) }, [_vm._v(" " + _vm._s(_setup.t("moinframe.loop.panel.label")) + " ")]), _c("k-tabs", { attrs: { "tab": _setup.props.tab, "tabs": _setup.filterTabs } }), _setup.loading ? [_c("k-icon", { staticClass: "k-loop-loader", attrs: { "type": "loader" } })] : _setup.filteredComments.length === 0 ? [_c("k-empty", { staticStyle: { "margin-top": "var(--spacing-5)" }, attrs: { "icon": "chat" } }, [_vm._v(" " + _vm._s(_setup.t("moinframe.loop.panel.noComments")) + " ")])] : _vm._l(_setup.groupedItems, function(group) {
      return _c("k-section", { key: group.pageTitle, staticClass: "k-loop-group", attrs: { "label": group.pageTitle } }, [_c("template", { slot: "options" }, [_c("k-button-group", { attrs: { "slot": "buttons" }, slot: "buttons" }, [_c("k-button", { attrs: { "icon": "edit", "variant": "filled", "size": "sm", "link": group.panelUrl, "text": _setup.t("moinframe.loop.panel.editPage") } }), _c("k-button", { attrs: { "icon": "open", "variant": "filled", "size": "sm", "link": group.pageUrl, "target": "_blank" } })], 1)], 1), _c("div", { staticClass: "k-items k-list-items", attrs: { "data-layout": "list" } }, _vm._l(group.items, function(item) {
        return _c("k-item", { key: item.id, attrs: { "text": item.text, "info": item.info, "image": item.image, "options": item.options, "buttons": item.buttons }, on: { "option": (e) => _setup.onOption(e, item) } });
      }), 1)], 2);
    })], 2)], 1);
  };
  var _sfc_staticRenderFns = [];
  _sfc_render._withStripped = true;
  var __component__ = /* @__PURE__ */ normalizeComponent(
    _sfc_main,
    _sfc_render,
    _sfc_staticRenderFns
  );
  __component__.options.__file = "/Users/justuskraft/Server/kirby-loop/src/components/Area.vue";
  const Area = __component__.exports;
  panel.plugin("moinframe/loop", {
    components: {
      "k-loop-comments-view": Area
    }
  });
})();
