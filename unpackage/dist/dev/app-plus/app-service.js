if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$7 = {
    name: "fui-list-cell",
    emits: ["click"],
    props: {
      //padding值，上、右、下、左,nvue下padding-right(右)无效
      padding: {
        type: Array,
        default() {
          return [];
        }
      },
      //margin-top 单位rpx
      marginTop: {
        type: [Number, String],
        default: 0
      },
      //margin-bottom 单位rpx
      marginBottom: {
        type: [Number, String],
        default: 0
      },
      //背景颜色
      background: {
        type: String,
        default: ""
      },
      //是否有点击效果
      highlight: {
        type: Boolean,
        default: true
      },
      //是否需要右侧箭头
      arrow: {
        type: Boolean,
        default: false
      },
      arrowColor: {
        type: String,
        default: ""
      },
      //是否显示上边框
      topBorder: {
        type: Boolean,
        default: false
      },
      //是否显示下边框
      bottomBorder: {
        type: Boolean,
        default: true
      },
      //边框颜色，非nvue下传值则全局默认样式失效
      borderColor: {
        type: String,
        default: ""
      },
      //上边框left值，单位rpx
      topLeft: {
        type: [Number, String],
        default: 0
      },
      //上边框right值，单位rpx
      topRight: {
        type: [Number, String],
        default: 0
      },
      //下边框left值，单位rpx
      bottomLeft: {
        type: [Number, String],
        default: -1
      },
      //下边框right值，单位rpx
      bottomRight: {
        type: [Number, String],
        default: 0
      },
      //border-radius圆角值
      radius: {
        type: String,
        default: "0"
      },
      index: {
        type: Number,
        default: 0
      }
    },
    computed: {
      getPadding() {
        let padding = this.padding;
        if (Array.isArray(padding) && padding.length === 0) {
          const app2 = uni && uni.$fui && uni.$fui.fuiListCell;
          padding = app2 && app2.padding;
          if (!padding || Array.isArray(padding) && padding.length === 0) {
            padding = ["32rpx", "32rpx"];
          }
        }
        return padding;
      },
      getArrowColor() {
        const app2 = uni && uni.$fui && uni.$fui.fuiListCell;
        return this.arrowColor || app2 && app2.arrowColor || "#B2B2B2";
      },
      getBorderColor() {
        let color2 = this.borderColor;
        return color2;
      },
      getBottomLeft() {
        const app2 = uni && uni.$fui && uni.$fui.fuiListCell;
        let left = this.bottomLeft;
        const c_left = app2 && app2.bottomLeft;
        if (left === -1) {
          left = c_left === void 0 || c_left === null ? 32 : c_left;
        }
        return left;
      }
    },
    methods: {
      handleClick() {
        this.$emit("click", {
          index: this.index
        });
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["fui-list__cell", { "fui-highlight": $props.highlight, "fui-list__cell-background": !$props.background }]),
        style: vue.normalizeStyle({ paddingTop: $options.getPadding[0] || 0, paddingRight: $options.getPadding[1] || 0, paddingBottom: $options.getPadding[2] || $options.getPadding[0] || 0, paddingLeft: $options.getPadding[3] || $options.getPadding[1] || 0, background: $props.background, marginTop: $props.marginTop + "rpx", marginBottom: $props.marginBottom + "rpx", borderRadius: $props.radius }),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.handleClick && $options.handleClick(...args))
      },
      [
        $props.topBorder ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 0,
            style: vue.normalizeStyle({ background: $options.getBorderColor, left: $props.topLeft + "rpx", right: $props.topRight + "rpx" }),
            class: vue.normalizeClass(["fui-cell__border-top", { "fui-cell__border-color": !$options.getBorderColor }])
          },
          null,
          6
          /* CLASS, STYLE */
        )) : vue.createCommentVNode("v-if", true),
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
        $props.bottomBorder ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 1,
            style: vue.normalizeStyle({ background: $options.getBorderColor, left: $options.getBottomLeft + "rpx", right: $props.bottomRight + "rpx" }),
            class: vue.normalizeClass(["fui-cell__border-bottom", { "fui-cell__border-color": !$options.getBorderColor }])
          },
          null,
          6
          /* CLASS, STYLE */
        )) : vue.createCommentVNode("v-if", true),
        $props.arrow ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 2,
            class: "fui-cell__arrow",
            style: vue.normalizeStyle({ "border-color": $options.getArrowColor })
          },
          null,
          4
          /* STYLE */
        )) : vue.createCommentVNode("v-if", true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-21bbda1f"], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-list-cell/fui-list-cell.vue"]]);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = { ...defaultSettings };
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data = JSON.parse(raw);
        Object.assign(currentSettings, data);
      } catch (e) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e) {
          }
          currentSettings = value;
        }
      };
      hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
        if (pluginId === this.plugin.id) {
          this.fallbacks.setSettings(value);
        }
      });
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  }
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && pluginDescriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(pluginDescriptor, hook) : null;
      const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list.push({
        pluginDescriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
   * vuex v4.1.0
   * (c) 2022 Evan You
   * @license MIT
   */
  var storeKey = "store";
  function forEachValue(obj, fn) {
    Object.keys(obj).forEach(function(key) {
      return fn(obj[key], key);
    });
  }
  function isObject(obj) {
    return obj !== null && typeof obj === "object";
  }
  function isPromise(val) {
    return val && typeof val.then === "function";
  }
  function assert(condition, msg) {
    if (!condition) {
      throw new Error("[vuex] " + msg);
    }
  }
  function partial(fn, arg) {
    return function() {
      return fn(arg);
    };
  }
  function genericSubscribe(fn, subs, options) {
    if (subs.indexOf(fn) < 0) {
      options && options.prepend ? subs.unshift(fn) : subs.push(fn);
    }
    return function() {
      var i = subs.indexOf(fn);
      if (i > -1) {
        subs.splice(i, 1);
      }
    };
  }
  function resetStore(store2, hot) {
    store2._actions = /* @__PURE__ */ Object.create(null);
    store2._mutations = /* @__PURE__ */ Object.create(null);
    store2._wrappedGetters = /* @__PURE__ */ Object.create(null);
    store2._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
    var state = store2.state;
    installModule(store2, state, [], store2._modules.root, true);
    resetStoreState(store2, state, hot);
  }
  function resetStoreState(store2, state, hot) {
    var oldState = store2._state;
    var oldScope = store2._scope;
    store2.getters = {};
    store2._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    var wrappedGetters = store2._wrappedGetters;
    var computedObj = {};
    var computedCache = {};
    var scope = vue.effectScope(true);
    scope.run(function() {
      forEachValue(wrappedGetters, function(fn, key) {
        computedObj[key] = partial(fn, store2);
        computedCache[key] = vue.computed(function() {
          return computedObj[key]();
        });
        Object.defineProperty(store2.getters, key, {
          get: function() {
            return computedCache[key].value;
          },
          enumerable: true
          // for local getters
        });
      });
    });
    store2._state = vue.reactive({
      data: state
    });
    store2._scope = scope;
    if (store2.strict) {
      enableStrictMode(store2);
    }
    if (oldState) {
      if (hot) {
        store2._withCommit(function() {
          oldState.data = null;
        });
      }
    }
    if (oldScope) {
      oldScope.stop();
    }
  }
  function installModule(store2, rootState, path, module, hot) {
    var isRoot = !path.length;
    var namespace = store2._modules.getNamespace(path);
    if (module.namespaced) {
      if (store2._modulesNamespaceMap[namespace] && true) {
        console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join("/"));
      }
      store2._modulesNamespaceMap[namespace] = module;
    }
    if (!isRoot && !hot) {
      var parentState = getNestedState(rootState, path.slice(0, -1));
      var moduleName = path[path.length - 1];
      store2._withCommit(function() {
        {
          if (moduleName in parentState) {
            console.warn(
              '[vuex] state field "' + moduleName + '" was overridden by a module with the same name at "' + path.join(".") + '"'
            );
          }
        }
        parentState[moduleName] = module.state;
      });
    }
    var local = module.context = makeLocalContext(store2, namespace, path);
    module.forEachMutation(function(mutation, key) {
      var namespacedType = namespace + key;
      registerMutation(store2, namespacedType, mutation, local);
    });
    module.forEachAction(function(action, key) {
      var type = action.root ? key : namespace + key;
      var handler = action.handler || action;
      registerAction(store2, type, handler, local);
    });
    module.forEachGetter(function(getter, key) {
      var namespacedType = namespace + key;
      registerGetter(store2, namespacedType, getter, local);
    });
    module.forEachChild(function(child, key) {
      installModule(store2, rootState, path.concat(key), child, hot);
    });
  }
  function makeLocalContext(store2, namespace, path) {
    var noNamespace = namespace === "";
    var local = {
      dispatch: noNamespace ? store2.dispatch : function(_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type = args.type;
        if (!options || !options.root) {
          type = namespace + type;
          if (!store2._actions[type]) {
            console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type);
            return;
          }
        }
        return store2.dispatch(type, payload);
      },
      commit: noNamespace ? store2.commit : function(_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type = args.type;
        if (!options || !options.root) {
          type = namespace + type;
          if (!store2._mutations[type]) {
            console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type);
            return;
          }
        }
        store2.commit(type, payload, options);
      }
    };
    Object.defineProperties(local, {
      getters: {
        get: noNamespace ? function() {
          return store2.getters;
        } : function() {
          return makeLocalGetters(store2, namespace);
        }
      },
      state: {
        get: function() {
          return getNestedState(store2.state, path);
        }
      }
    });
    return local;
  }
  function makeLocalGetters(store2, namespace) {
    if (!store2._makeLocalGettersCache[namespace]) {
      var gettersProxy = {};
      var splitPos = namespace.length;
      Object.keys(store2.getters).forEach(function(type) {
        if (type.slice(0, splitPos) !== namespace) {
          return;
        }
        var localType = type.slice(splitPos);
        Object.defineProperty(gettersProxy, localType, {
          get: function() {
            return store2.getters[type];
          },
          enumerable: true
        });
      });
      store2._makeLocalGettersCache[namespace] = gettersProxy;
    }
    return store2._makeLocalGettersCache[namespace];
  }
  function registerMutation(store2, type, handler, local) {
    var entry = store2._mutations[type] || (store2._mutations[type] = []);
    entry.push(function wrappedMutationHandler(payload) {
      handler.call(store2, local.state, payload);
    });
  }
  function registerAction(store2, type, handler, local) {
    var entry = store2._actions[type] || (store2._actions[type] = []);
    entry.push(function wrappedActionHandler(payload) {
      var res = handler.call(store2, {
        dispatch: local.dispatch,
        commit: local.commit,
        getters: local.getters,
        state: local.state,
        rootGetters: store2.getters,
        rootState: store2.state
      }, payload);
      if (!isPromise(res)) {
        res = Promise.resolve(res);
      }
      if (store2._devtoolHook) {
        return res.catch(function(err) {
          store2._devtoolHook.emit("vuex:error", err);
          throw err;
        });
      } else {
        return res;
      }
    });
  }
  function registerGetter(store2, type, rawGetter, local) {
    if (store2._wrappedGetters[type]) {
      {
        console.error("[vuex] duplicate getter key: " + type);
      }
      return;
    }
    store2._wrappedGetters[type] = function wrappedGetter(store3) {
      return rawGetter(
        local.state,
        // local state
        local.getters,
        // local getters
        store3.state,
        // root state
        store3.getters
        // root getters
      );
    };
  }
  function enableStrictMode(store2) {
    vue.watch(function() {
      return store2._state.data;
    }, function() {
      {
        assert(store2._committing, "do not mutate vuex store state outside mutation handlers.");
      }
    }, { deep: true, flush: "sync" });
  }
  function getNestedState(state, path) {
    return path.reduce(function(state2, key) {
      return state2[key];
    }, state);
  }
  function unifyObjectStyle(type, payload, options) {
    if (isObject(type) && type.type) {
      options = payload;
      payload = type;
      type = type.type;
    }
    {
      assert(typeof type === "string", "expects string as the type, but found " + typeof type + ".");
    }
    return { type, payload, options };
  }
  var LABEL_VUEX_BINDINGS = "vuex bindings";
  var MUTATIONS_LAYER_ID = "vuex:mutations";
  var ACTIONS_LAYER_ID = "vuex:actions";
  var INSPECTOR_ID = "vuex";
  var actionId = 0;
  function addDevtools(app2, store2) {
    setupDevtoolsPlugin(
      {
        id: "org.vuejs.vuex",
        app: app2,
        label: "Vuex",
        homepage: "https://next.vuex.vuejs.org/",
        logo: "https://vuejs.org/images/icons/favicon-96x96.png",
        packageName: "vuex",
        componentStateTypes: [LABEL_VUEX_BINDINGS]
      },
      function(api) {
        api.addTimelineLayer({
          id: MUTATIONS_LAYER_ID,
          label: "Vuex Mutations",
          color: COLOR_LIME_500
        });
        api.addTimelineLayer({
          id: ACTIONS_LAYER_ID,
          label: "Vuex Actions",
          color: COLOR_LIME_500
        });
        api.addInspector({
          id: INSPECTOR_ID,
          label: "Vuex",
          icon: "storage",
          treeFilterPlaceholder: "Filter stores..."
        });
        api.on.getInspectorTree(function(payload) {
          if (payload.app === app2 && payload.inspectorId === INSPECTOR_ID) {
            if (payload.filter) {
              var nodes = [];
              flattenStoreForInspectorTree(nodes, store2._modules.root, payload.filter, "");
              payload.rootNodes = nodes;
            } else {
              payload.rootNodes = [
                formatStoreForInspectorTree(store2._modules.root, "")
              ];
            }
          }
        });
        api.on.getInspectorState(function(payload) {
          if (payload.app === app2 && payload.inspectorId === INSPECTOR_ID) {
            var modulePath = payload.nodeId;
            makeLocalGetters(store2, modulePath);
            payload.state = formatStoreForInspectorState(
              getStoreModule(store2._modules, modulePath),
              modulePath === "root" ? store2.getters : store2._makeLocalGettersCache,
              modulePath
            );
          }
        });
        api.on.editInspectorState(function(payload) {
          if (payload.app === app2 && payload.inspectorId === INSPECTOR_ID) {
            var modulePath = payload.nodeId;
            var path = payload.path;
            if (modulePath !== "root") {
              path = modulePath.split("/").filter(Boolean).concat(path);
            }
            store2._withCommit(function() {
              payload.set(store2._state.data, path, payload.state.value);
            });
          }
        });
        store2.subscribe(function(mutation, state) {
          var data = {};
          if (mutation.payload) {
            data.payload = mutation.payload;
          }
          data.state = state;
          api.notifyComponentUpdate();
          api.sendInspectorTree(INSPECTOR_ID);
          api.sendInspectorState(INSPECTOR_ID);
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: Date.now(),
              title: mutation.type,
              data
            }
          });
        });
        store2.subscribeAction({
          before: function(action, state) {
            var data = {};
            if (action.payload) {
              data.payload = action.payload;
            }
            action._id = actionId++;
            action._time = Date.now();
            data.state = state;
            api.addTimelineEvent({
              layerId: ACTIONS_LAYER_ID,
              event: {
                time: action._time,
                title: action.type,
                groupId: action._id,
                subtitle: "start",
                data
              }
            });
          },
          after: function(action, state) {
            var data = {};
            var duration = Date.now() - action._time;
            data.duration = {
              _custom: {
                type: "duration",
                display: duration + "ms",
                tooltip: "Action duration",
                value: duration
              }
            };
            if (action.payload) {
              data.payload = action.payload;
            }
            data.state = state;
            api.addTimelineEvent({
              layerId: ACTIONS_LAYER_ID,
              event: {
                time: Date.now(),
                title: action.type,
                groupId: action._id,
                subtitle: "end",
                data
              }
            });
          }
        });
      }
    );
  }
  var COLOR_LIME_500 = 8702998;
  var COLOR_DARK = 6710886;
  var COLOR_WHITE = 16777215;
  var TAG_NAMESPACED = {
    label: "namespaced",
    textColor: COLOR_WHITE,
    backgroundColor: COLOR_DARK
  };
  function extractNameFromPath(path) {
    return path && path !== "root" ? path.split("/").slice(-2, -1)[0] : "Root";
  }
  function formatStoreForInspectorTree(module, path) {
    return {
      id: path || "root",
      // all modules end with a `/`, we want the last segment only
      // cart/ -> cart
      // nested/cart/ -> cart
      label: extractNameFromPath(path),
      tags: module.namespaced ? [TAG_NAMESPACED] : [],
      children: Object.keys(module._children).map(
        function(moduleName) {
          return formatStoreForInspectorTree(
            module._children[moduleName],
            path + moduleName + "/"
          );
        }
      )
    };
  }
  function flattenStoreForInspectorTree(result, module, filter, path) {
    if (path.includes(filter)) {
      result.push({
        id: path || "root",
        label: path.endsWith("/") ? path.slice(0, path.length - 1) : path || "Root",
        tags: module.namespaced ? [TAG_NAMESPACED] : []
      });
    }
    Object.keys(module._children).forEach(function(moduleName) {
      flattenStoreForInspectorTree(result, module._children[moduleName], filter, path + moduleName + "/");
    });
  }
  function formatStoreForInspectorState(module, getters, path) {
    getters = path === "root" ? getters : getters[path];
    var gettersKeys = Object.keys(getters);
    var storeState = {
      state: Object.keys(module.state).map(function(key) {
        return {
          key,
          editable: true,
          value: module.state[key]
        };
      })
    };
    if (gettersKeys.length) {
      var tree = transformPathsToObjectTree(getters);
      storeState.getters = Object.keys(tree).map(function(key) {
        return {
          key: key.endsWith("/") ? extractNameFromPath(key) : key,
          editable: false,
          value: canThrow(function() {
            return tree[key];
          })
        };
      });
    }
    return storeState;
  }
  function transformPathsToObjectTree(getters) {
    var result = {};
    Object.keys(getters).forEach(function(key) {
      var path = key.split("/");
      if (path.length > 1) {
        var target = result;
        var leafKey = path.pop();
        path.forEach(function(p) {
          if (!target[p]) {
            target[p] = {
              _custom: {
                value: {},
                display: p,
                tooltip: "Module",
                abstract: true
              }
            };
          }
          target = target[p]._custom.value;
        });
        target[leafKey] = canThrow(function() {
          return getters[key];
        });
      } else {
        result[key] = canThrow(function() {
          return getters[key];
        });
      }
    });
    return result;
  }
  function getStoreModule(moduleMap, path) {
    var names = path.split("/").filter(function(n) {
      return n;
    });
    return names.reduce(
      function(module, moduleName, i) {
        var child = module[moduleName];
        if (!child) {
          throw new Error('Missing module "' + moduleName + '" for path "' + path + '".');
        }
        return i === names.length - 1 ? child : child._children;
      },
      path === "root" ? moduleMap : moduleMap.root._children
    );
  }
  function canThrow(cb) {
    try {
      return cb();
    } catch (e) {
      return e;
    }
  }
  var Module = function Module2(rawModule, runtime) {
    this.runtime = runtime;
    this._children = /* @__PURE__ */ Object.create(null);
    this._rawModule = rawModule;
    var rawState = rawModule.state;
    this.state = (typeof rawState === "function" ? rawState() : rawState) || {};
  };
  var prototypeAccessors$1 = { namespaced: { configurable: true } };
  prototypeAccessors$1.namespaced.get = function() {
    return !!this._rawModule.namespaced;
  };
  Module.prototype.addChild = function addChild(key, module) {
    this._children[key] = module;
  };
  Module.prototype.removeChild = function removeChild(key) {
    delete this._children[key];
  };
  Module.prototype.getChild = function getChild(key) {
    return this._children[key];
  };
  Module.prototype.hasChild = function hasChild(key) {
    return key in this._children;
  };
  Module.prototype.update = function update2(rawModule) {
    this._rawModule.namespaced = rawModule.namespaced;
    if (rawModule.actions) {
      this._rawModule.actions = rawModule.actions;
    }
    if (rawModule.mutations) {
      this._rawModule.mutations = rawModule.mutations;
    }
    if (rawModule.getters) {
      this._rawModule.getters = rawModule.getters;
    }
  };
  Module.prototype.forEachChild = function forEachChild(fn) {
    forEachValue(this._children, fn);
  };
  Module.prototype.forEachGetter = function forEachGetter(fn) {
    if (this._rawModule.getters) {
      forEachValue(this._rawModule.getters, fn);
    }
  };
  Module.prototype.forEachAction = function forEachAction(fn) {
    if (this._rawModule.actions) {
      forEachValue(this._rawModule.actions, fn);
    }
  };
  Module.prototype.forEachMutation = function forEachMutation(fn) {
    if (this._rawModule.mutations) {
      forEachValue(this._rawModule.mutations, fn);
    }
  };
  Object.defineProperties(Module.prototype, prototypeAccessors$1);
  var ModuleCollection = function ModuleCollection2(rawRootModule) {
    this.register([], rawRootModule, false);
  };
  ModuleCollection.prototype.get = function get(path) {
    return path.reduce(function(module, key) {
      return module.getChild(key);
    }, this.root);
  };
  ModuleCollection.prototype.getNamespace = function getNamespace(path) {
    var module = this.root;
    return path.reduce(function(namespace, key) {
      module = module.getChild(key);
      return namespace + (module.namespaced ? key + "/" : "");
    }, "");
  };
  ModuleCollection.prototype.update = function update$1(rawRootModule) {
    update([], this.root, rawRootModule);
  };
  ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
    var this$1$1 = this;
    if (runtime === void 0)
      runtime = true;
    {
      assertRawModule(path, rawModule);
    }
    var newModule = new Module(rawModule, runtime);
    if (path.length === 0) {
      this.root = newModule;
    } else {
      var parent = this.get(path.slice(0, -1));
      parent.addChild(path[path.length - 1], newModule);
    }
    if (rawModule.modules) {
      forEachValue(rawModule.modules, function(rawChildModule, key) {
        this$1$1.register(path.concat(key), rawChildModule, runtime);
      });
    }
  };
  ModuleCollection.prototype.unregister = function unregister(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    var child = parent.getChild(key);
    if (!child) {
      {
        console.warn(
          "[vuex] trying to unregister module '" + key + "', which is not registered"
        );
      }
      return;
    }
    if (!child.runtime) {
      return;
    }
    parent.removeChild(key);
  };
  ModuleCollection.prototype.isRegistered = function isRegistered(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    if (parent) {
      return parent.hasChild(key);
    }
    return false;
  };
  function update(path, targetModule, newModule) {
    {
      assertRawModule(path, newModule);
    }
    targetModule.update(newModule);
    if (newModule.modules) {
      for (var key in newModule.modules) {
        if (!targetModule.getChild(key)) {
          {
            console.warn(
              "[vuex] trying to add a new module '" + key + "' on hot reloading, manual reload is needed"
            );
          }
          return;
        }
        update(
          path.concat(key),
          targetModule.getChild(key),
          newModule.modules[key]
        );
      }
    }
  }
  var functionAssert = {
    assert: function(value) {
      return typeof value === "function";
    },
    expected: "function"
  };
  var objectAssert = {
    assert: function(value) {
      return typeof value === "function" || typeof value === "object" && typeof value.handler === "function";
    },
    expected: 'function or object with "handler" function'
  };
  var assertTypes = {
    getters: functionAssert,
    mutations: functionAssert,
    actions: objectAssert
  };
  function assertRawModule(path, rawModule) {
    Object.keys(assertTypes).forEach(function(key) {
      if (!rawModule[key]) {
        return;
      }
      var assertOptions = assertTypes[key];
      forEachValue(rawModule[key], function(value, type) {
        assert(
          assertOptions.assert(value),
          makeAssertionMessage(path, key, type, value, assertOptions.expected)
        );
      });
    });
  }
  function makeAssertionMessage(path, key, type, value, expected) {
    var buf = key + " should be " + expected + ' but "' + key + "." + type + '"';
    if (path.length > 0) {
      buf += ' in module "' + path.join(".") + '"';
    }
    buf += " is " + JSON.stringify(value) + ".";
    return buf;
  }
  function createStore(options) {
    return new Store(options);
  }
  var Store = function Store2(options) {
    var this$1$1 = this;
    if (options === void 0)
      options = {};
    {
      assert(typeof Promise !== "undefined", "vuex requires a Promise polyfill in this browser.");
      assert(this instanceof Store2, "store must be called with the new operator.");
    }
    var plugins = options.plugins;
    if (plugins === void 0)
      plugins = [];
    var strict = options.strict;
    if (strict === void 0)
      strict = false;
    var devtools = options.devtools;
    this._committing = false;
    this._actions = /* @__PURE__ */ Object.create(null);
    this._actionSubscribers = [];
    this._mutations = /* @__PURE__ */ Object.create(null);
    this._wrappedGetters = /* @__PURE__ */ Object.create(null);
    this._modules = new ModuleCollection(options);
    this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
    this._subscribers = [];
    this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    this._scope = null;
    this._devtools = devtools;
    var store2 = this;
    var ref = this;
    var dispatch = ref.dispatch;
    var commit = ref.commit;
    this.dispatch = function boundDispatch(type, payload) {
      return dispatch.call(store2, type, payload);
    };
    this.commit = function boundCommit(type, payload, options2) {
      return commit.call(store2, type, payload, options2);
    };
    this.strict = strict;
    var state = this._modules.root.state;
    installModule(this, state, [], this._modules.root);
    resetStoreState(this, state);
    plugins.forEach(function(plugin) {
      return plugin(this$1$1);
    });
  };
  var prototypeAccessors = { state: { configurable: true } };
  Store.prototype.install = function install(app2, injectKey) {
    app2.provide(injectKey || storeKey, this);
    app2.config.globalProperties.$store = this;
    var useDevtools = this._devtools !== void 0 ? this._devtools : true;
    if (useDevtools) {
      addDevtools(app2, this);
    }
  };
  prototypeAccessors.state.get = function() {
    return this._state.data;
  };
  prototypeAccessors.state.set = function(v) {
    {
      assert(false, "use store.replaceState() to explicit replace store state.");
    }
  };
  Store.prototype.commit = function commit(_type, _payload, _options) {
    var this$1$1 = this;
    var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;
    var mutation = { type, payload };
    var entry = this._mutations[type];
    if (!entry) {
      {
        console.error("[vuex] unknown mutation type: " + type);
      }
      return;
    }
    this._withCommit(function() {
      entry.forEach(function commitIterator(handler) {
        handler(payload);
      });
    });
    this._subscribers.slice().forEach(function(sub) {
      return sub(mutation, this$1$1.state);
    });
    if (options && options.silent) {
      console.warn(
        "[vuex] mutation type: " + type + ". Silent option has been removed. Use the filter functionality in the vue-devtools"
      );
    }
  };
  Store.prototype.dispatch = function dispatch(_type, _payload) {
    var this$1$1 = this;
    var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;
    var action = { type, payload };
    var entry = this._actions[type];
    if (!entry) {
      {
        console.error("[vuex] unknown action type: " + type);
      }
      return;
    }
    try {
      this._actionSubscribers.slice().filter(function(sub) {
        return sub.before;
      }).forEach(function(sub) {
        return sub.before(action, this$1$1.state);
      });
    } catch (e) {
      {
        console.warn("[vuex] error in before action subscribers: ");
        console.error(e);
      }
    }
    var result = entry.length > 1 ? Promise.all(entry.map(function(handler) {
      return handler(payload);
    })) : entry[0](payload);
    return new Promise(function(resolve, reject) {
      result.then(function(res) {
        try {
          this$1$1._actionSubscribers.filter(function(sub) {
            return sub.after;
          }).forEach(function(sub) {
            return sub.after(action, this$1$1.state);
          });
        } catch (e) {
          {
            console.warn("[vuex] error in after action subscribers: ");
            console.error(e);
          }
        }
        resolve(res);
      }, function(error) {
        try {
          this$1$1._actionSubscribers.filter(function(sub) {
            return sub.error;
          }).forEach(function(sub) {
            return sub.error(action, this$1$1.state, error);
          });
        } catch (e) {
          {
            console.warn("[vuex] error in error action subscribers: ");
            console.error(e);
          }
        }
        reject(error);
      });
    });
  };
  Store.prototype.subscribe = function subscribe(fn, options) {
    return genericSubscribe(fn, this._subscribers, options);
  };
  Store.prototype.subscribeAction = function subscribeAction(fn, options) {
    var subs = typeof fn === "function" ? { before: fn } : fn;
    return genericSubscribe(subs, this._actionSubscribers, options);
  };
  Store.prototype.watch = function watch$1(getter, cb, options) {
    var this$1$1 = this;
    {
      assert(typeof getter === "function", "store.watch only accepts a function.");
    }
    return vue.watch(function() {
      return getter(this$1$1.state, this$1$1.getters);
    }, cb, Object.assign({}, options));
  };
  Store.prototype.replaceState = function replaceState(state) {
    var this$1$1 = this;
    this._withCommit(function() {
      this$1$1._state.data = state;
    });
  };
  Store.prototype.registerModule = function registerModule(path, rawModule, options) {
    if (options === void 0)
      options = {};
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
      assert(path.length > 0, "cannot register the root module by using registerModule.");
    }
    this._modules.register(path, rawModule);
    installModule(this, this.state, path, this._modules.get(path), options.preserveState);
    resetStoreState(this, this.state);
  };
  Store.prototype.unregisterModule = function unregisterModule(path) {
    var this$1$1 = this;
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
    }
    this._modules.unregister(path);
    this._withCommit(function() {
      var parentState = getNestedState(this$1$1.state, path.slice(0, -1));
      delete parentState[path[path.length - 1]];
    });
    resetStore(this);
  };
  Store.prototype.hasModule = function hasModule(path) {
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
    }
    return this._modules.isRegistered(path);
  };
  Store.prototype.hotUpdate = function hotUpdate(newOptions) {
    this._modules.update(newOptions);
    resetStore(this, true);
  };
  Store.prototype._withCommit = function _withCommit(fn) {
    var committing = this._committing;
    this._committing = true;
    fn();
    this._committing = committing;
  };
  Object.defineProperties(Store.prototype, prototypeAccessors);
  var mapActions = normalizeNamespace(function(namespace, actions) {
    var res = {};
    if (!isValidMap(actions)) {
      console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object");
    }
    normalizeMap(actions).forEach(function(ref) {
      var key = ref.key;
      var val = ref.val;
      res[key] = function mappedAction() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var dispatch = this.$store.dispatch;
        if (namespace) {
          var module = getModuleByNamespace(this.$store, "mapActions", namespace);
          if (!module) {
            return;
          }
          dispatch = module.context.dispatch;
        }
        return typeof val === "function" ? val.apply(this, [dispatch].concat(args)) : dispatch.apply(this.$store, [val].concat(args));
      };
    });
    return res;
  });
  function normalizeMap(map) {
    if (!isValidMap(map)) {
      return [];
    }
    return Array.isArray(map) ? map.map(function(key) {
      return { key, val: key };
    }) : Object.keys(map).map(function(key) {
      return { key, val: map[key] };
    });
  }
  function isValidMap(map) {
    return Array.isArray(map) || isObject(map);
  }
  function normalizeNamespace(fn) {
    return function(namespace, map) {
      if (typeof namespace !== "string") {
        map = namespace;
        namespace = "";
      } else if (namespace.charAt(namespace.length - 1) !== "/") {
        namespace += "/";
      }
      return fn(namespace, map);
    };
  }
  function getModuleByNamespace(store2, helper, namespace) {
    var module = store2._modulesNamespaceMap[namespace];
    if (!module) {
      console.error("[vuex] module namespace not found in " + helper + "(): " + namespace);
    }
    return module;
  }
  const tabs = [{
    id: "basics",
    name: "基础组件",
    data: [{
      icon: "color",
      name: "Color 色彩",
      vip: false,
      page: "color"
    }, {
      icon: "card",
      name: "Text 文本",
      vip: false,
      page: "text"
    }, {
      icon: "icon",
      name: "Icon 图标",
      vip: false,
      page: "icon"
    }, {
      icon: "button",
      name: "Button 按钮",
      vip: false,
      page: "button"
    }, {
      icon: "footer",
      name: "Footer 页脚",
      vip: false,
      page: "footer"
    }, {
      icon: "animation",
      name: "Animation 动画",
      vip: false,
      page: "animation"
    }]
  }, {
    id: "layout",
    name: "布局组件",
    data: [{
      icon: "layout",
      name: "Layout 栅格布局",
      vip: false,
      page: "layout"
    }, {
      icon: "grid",
      name: "Grid 宫格",
      vip: false,
      page: "grid"
    }, {
      icon: "list",
      name: "List 列表",
      vip: false,
      page: "list"
    }, {
      icon: "card",
      name: "Card 卡片",
      vip: false,
      page: "card"
    }, {
      icon: "label",
      name: "Section 标题栏",
      vip: false,
      page: "section"
    }]
  }, {
    id: "form",
    name: "表单组件",
    data: [{
      icon: "input",
      name: "Input 输入框",
      vip: false,
      page: "input"
    }, {
      icon: "inputnumber",
      name: "InputNumber 数字输入框",
      vip: false,
      page: "inputNumber"
    }, {
      icon: "label",
      name: "Label 标签",
      vip: false,
      page: "label"
    }, {
      icon: "radio",
      name: "Radio 单选框",
      vip: false,
      page: "radio"
    }, {
      icon: "checkbox",
      name: "Checkbox 复选框",
      vip: false,
      page: "checkbox"
    }, {
      icon: "switch",
      name: "Switch 开关",
      vip: false,
      page: "switch"
    }, {
      icon: "textarea",
      name: "Textarea 多行输入框",
      vip: false,
      page: "textarea"
    }]
  }, {
    id: "operate",
    name: "操作反馈",
    data: [{
      icon: "actionsheet",
      name: "ActionSheet 上拉菜单",
      vip: false,
      page: "actionsheet"
    }, {
      icon: "toast",
      name: "Toast 轻提示",
      vip: false,
      page: "toast"
    }, {
      icon: "backdrop",
      name: "Backdrop 遮罩层",
      vip: false,
      page: "backdrop"
    }, {
      icon: "dialog",
      name: "Dialog 对话框",
      vip: false,
      page: "dialog"
    }, {
      icon: "dropdownmenu",
      name: "DropdownMenu 下拉菜单",
      vip: false,
      page: "dropdownMenu"
    }, {
      icon: "dropdownmenu",
      name: "DropdownList 下拉菜单",
      vip: false,
      page: "dropdownList"
    }, {
      icon: "loading",
      name: "Loading 加载",
      vip: false,
      page: "loading"
    }, {
      icon: "swipeaction",
      name: "SwipeAction 滑动菜单",
      vip: false,
      page: "swipeAction"
    }]
  }, {
    id: "nav",
    name: "导航组件",
    data: [{
      icon: "pagination",
      name: "Pagination 分页器",
      vip: false,
      page: "pagination"
    }, {
      icon: "segmentedcontrol",
      name: "SegmentedControl 分段器",
      vip: false,
      page: "segmentedControl"
    }, {
      icon: "tabs",
      name: "Tabs 标签页",
      vip: false,
      page: "tabs"
    }, {
      icon: "drawer",
      name: "Drawer 抽屉",
      vip: false,
      page: "drawer"
    }, {
      icon: "bottompopup",
      name: "BottomPopup 底部弹出层",
      vip: false,
      page: "bottomPopup"
    }, {
      icon: "toppopup",
      name: "TopPopup 顶部弹出层",
      vip: false,
      page: "topPopup"
    }]
  }, {
    id: "data",
    name: "数据组件",
    data: [{
      icon: "badge",
      name: "Badge 徽章",
      vip: false,
      page: "badge"
    }, {
      icon: "alert",
      name: "Alert 警告框",
      vip: false,
      page: "alert"
    }, {
      icon: "avatar",
      name: "Avatar 头像",
      vip: false,
      page: "avatar"
    }, {
      icon: "tag",
      name: "Tag 标签",
      vip: false,
      page: "tag"
    }, {
      icon: "collapse",
      name: "Collapse 折叠面板",
      vip: false,
      page: "collapse"
    }, {
      icon: "divider",
      name: "Divider 分割线",
      vip: false,
      page: "divider"
    }, {
      icon: "loadmore",
      name: "LoadMore 加载更多",
      vip: false,
      page: "loadmore"
    }, {
      icon: "empty",
      name: "Empty 缺省页",
      vip: false,
      page: "empty"
    }]
  }, {
    id: "js",
    name: "JS组件",
    data: [{
      icon: "utils",
      name: "Utils 工具类",
      vip: false,
      page: "utils"
    }]
  }];
  const _sfc_main$6 = {
    data() {
      return {
        tabs,
        scrollInto: "",
        tabIndex: 0,
        height: 0
      };
    },
    onLoad() {
      setTimeout(() => {
        this.height = uni.getSystemInfoSync().windowHeight - uni.upx2px(538);
      }, 50);
    },
    methods: {
      ...mapActions(["getStatus"]),
      tabClick(index) {
        this.switchTab(index);
      },
      tabChange(e) {
        if (e.detail.source == "touch") {
          let index = e.target.current || e.detail.current;
          this.switchTab(index);
        }
      },
      switchTab(index) {
        if (this.tabIndex === index)
          return;
        this.tabIndex = index;
        let scrollIndex = index - 1 < 0 ? 0 : index - 1;
        this.scrollInto = this.tabs[scrollIndex].id;
      },
      href(type, page) {
        if (page) {
          this.fui.href(`/pages/component/${type}/${page}/${page}`);
        } else {
          this.fui.href("/pages/common/coding/coding");
        }
      }
    },
    onShareAppMessage() {
      return {
        title: "First UI组件库"
      };
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_fui_list_cell = resolveEasycom(vue.resolveDynamicComponent("fui-list-cell"), __easycom_0$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "fui-wrap" }, [
      vue.createElementVNode("view", { class: "fui-banner__box" }, [
        vue.createElementVNode("image", {
          class: "fui-banner",
          src: "/static/images/index/light/img_banner_3x.png",
          mode: "widthFix"
        }),
        vue.createElementVNode("view", { class: "fui-banner__content" }, [
          vue.createElementVNode("image", {
            class: "fui-logo",
            src: "/static/images/common/img_logo.png",
            mode: "widthFix"
          }),
          vue.createElementVNode("view", { class: "fui-title" }, "First UI"),
          vue.createElementVNode("view", { class: "fui-desc" }, "First UI是一款轻量、全面可靠的移动端组件库。")
        ]),
        vue.createElementVNode("view", { class: "fui-tabs__box" }, [
          vue.createElementVNode("scroll-view", {
            class: "fui-scroll__box",
            id: "fui_tabs",
            "scroll-with-animation": "",
            "scroll-x": "",
            "show-scrollbar": false,
            "scroll-into-view": $data.scrollInto
          }, [
            vue.createElementVNode("view", { class: "fui-scroll__view fui-align__center" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($data.tabs, (tab, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    key: index,
                    class: vue.normalizeClass(["fui-tab__item fui-flex__center", { "fui-tab__item-active": $data.tabIndex === index }]),
                    id: tab.id,
                    onClick: ($event) => $options.tabClick(index)
                  }, [
                    vue.createElementVNode(
                      "view",
                      {
                        class: vue.normalizeClass({ "fui-tab__item-text": $data.tabIndex === index })
                      },
                      vue.toDisplayString(tab.name),
                      3
                      /* TEXT, CLASS */
                    )
                  ], 10, ["id", "onClick"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ], 8, ["scroll-into-view"]),
          vue.createElementVNode("swiper", {
            current: $data.tabIndex,
            class: "fui-swiper__box",
            duration: 300,
            onChange: _cache[0] || (_cache[0] = (...args) => $options.tabChange && $options.tabChange(...args)),
            style: vue.normalizeStyle({ height: $data.height + "px" })
          }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.tabs, (tab, index) => {
                return vue.openBlock(), vue.createElementBlock("swiper-item", {
                  class: "fui-swiper__item",
                  key: tab.id
                }, [
                  vue.createElementVNode(
                    "scroll-view",
                    {
                      class: "fui-scroll__box",
                      "scroll-y": "",
                      style: vue.normalizeStyle({ height: $data.height + "px" })
                    },
                    [
                      vue.createElementVNode("view", { class: "fui-list__view" }, [
                        (vue.openBlock(true), vue.createElementBlock(
                          vue.Fragment,
                          null,
                          vue.renderList(tab.data, (item, idx) => {
                            return vue.openBlock(), vue.createBlock(_component_fui_list_cell, {
                              arrow: "",
                              padding: [0, "32rpx"],
                              bottomBorder: false,
                              radius: "16rpx",
                              marginTop: "24",
                              key: idx,
                              onClick: ($event) => $options.href(tab.id, item.page)
                            }, {
                              default: vue.withCtx(() => [
                                vue.createElementVNode("view", { class: "fui-list__item fui-align__center" }, [
                                  vue.createElementVNode("image", {
                                    class: "fui-item__icon",
                                    src: `/static/images/index/light/icon_${item.icon}_3x.png`
                                  }, null, 8, ["src"]),
                                  vue.createElementVNode(
                                    "text",
                                    null,
                                    vue.toDisplayString(item.name),
                                    1
                                    /* TEXT */
                                  ),
                                  item.vip ? (vue.openBlock(), vue.createElementBlock("image", {
                                    key: 0,
                                    class: "fui-vip__icon",
                                    src: "/static/images/index/light/icon_member_3x.png"
                                  })) : vue.createCommentVNode("v-if", true)
                                ])
                              ]),
                              _: 2
                              /* DYNAMIC */
                            }, 1032, ["onClick"]);
                          }),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ])
                    ],
                    4
                    /* STYLE */
                  )
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ], 44, ["current"])
        ])
      ])
    ]);
  }
  const PagesTabbarIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/tabbar/index/index.vue"]]);
  const _sfc_main$5 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "fui-wrap" }, [
      vue.createElementVNode("view", { class: "fui-content__box" }, [
        vue.createElementVNode("view", { class: "fui-img__box" }, [
          vue.createElementVNode("image", {
            src: "/static/images/common/img_coding_3x.png",
            class: "fui-img",
            mode: "widthFix"
          })
        ]),
        vue.createElementVNode("view", { class: "fui-title" }, "会员模块"),
        vue.createElementVNode("view", { class: "fui-sub__title" }, "详情请扫码查看线上小程序！"),
        vue.createElementVNode("view", { class: "fui-sub__title" }, "（官网地址：firstui.cn）")
      ])
    ]);
  }
  const PagesTabbarLayoutLayout = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/tabbar/layout/layout.vue"]]);
  const _sfc_main$4 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "fui-wrap" }, [
      vue.createElementVNode("view", { class: "fui-content__box" }, [
        vue.createElementVNode("view", { class: "fui-img__box" }, [
          vue.createElementVNode("image", {
            src: "/static/images/common/img_coding_3x.png",
            class: "fui-img",
            mode: "widthFix"
          })
        ]),
        vue.createElementVNode("view", { class: "fui-title" }, "付费模块"),
        vue.createElementVNode("view", { class: "fui-sub__title" }, "详情请查看官网或文档介绍！"),
        vue.createElementVNode("view", { class: "fui-sub__title" }, "（文档地址：doc.firstui.cn）")
      ])
    ]);
  }
  const PagesTabbarTemplateTemplate = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/tabbar/template/template.vue"]]);
  const _sfc_main$3 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "fui-wrap" }, [
      vue.createElementVNode("view", { class: "fui-content__box" }, [
        vue.createElementVNode("view", { class: "fui-img__box" }, [
          vue.createElementVNode("image", {
            src: "/static/images/common/img_coding_3x.png",
            class: "fui-img",
            mode: "widthFix"
          })
        ]),
        vue.createElementVNode("view", { class: "fui-title" }, "会员模块"),
        vue.createElementVNode("view", { class: "fui-sub__title" }, "详情请扫码查看线上小程序！"),
        vue.createElementVNode("view", { class: "fui-sub__title" }, "（官网地址：firstui.cn）")
      ])
    ]);
  }
  const PagesTabbarMyMy = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/tabbar/my/my.vue"]]);
  const _sfc_main$2 = {
    name: "fui-button",
    emits: ["click", "getuserinfo", "contact", "getphonenumber", "error", "opensetting"],
    props: {
      //样式类型：primary，success， warning，danger，link，purple，gray
      type: {
        type: String,
        default: "primary"
      },
      //按钮背景色，当传入值时type失效
      background: {
        type: String,
        default: ""
      },
      //按钮显示文本
      text: {
        type: String,
        default: ""
      },
      //按钮字体颜色
      color: {
        type: String,
        default: ""
      },
      //按钮禁用背景色
      disabledBackground: {
        type: String,
        default: ""
      },
      //按钮禁用字体颜色
      disabledColor: {
        type: String,
        default: ""
      },
      borderWidth: {
        type: String,
        default: "1px"
      },
      borderColor: {
        type: String,
        default: ""
      },
      //V1.9.8+ 按钮大小，优先级高于width和height，medium、small、mini
      btnSize: {
        type: String,
        default: ""
      },
      //宽度
      width: {
        type: String,
        default: "100%"
      },
      //高度
      height: {
        type: String,
        default: ""
      },
      //字体大小，单位rpx
      size: {
        type: [Number, String],
        default: 0
      },
      bold: {
        type: Boolean,
        default: false
      },
      //['20rpx','30rpx','20rpx','30rpx']->[上，右，下，左]
      margin: {
        type: Array,
        default() {
          return ["0", "0"];
        }
      },
      //圆角
      radius: {
        type: String,
        default: ""
      },
      plain: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      },
      formType: {
        type: String,
        default: ""
      },
      openType: {
        type: String,
        default: ""
      },
      //支付宝小程序 
      //当 open-type 为 getAuthorize 时，可以设置 scope 为：phoneNumber、userInfo
      scope: {
        type: String,
        default: ""
      },
      appParameter: {
        type: String,
        default: ""
      },
      index: {
        type: [Number, String],
        default: 0
      }
    },
    computed: {
      getTypeColor() {
        return "";
      },
      getBackground() {
        let color2 = this.getTypeColor;
        if (this.disabled || this.plain) {
          color2 = "transparent";
        }
        if (!this.disabled && !this.plain && this.background) {
          color2 = this.background;
        }
        return color2;
      },
      getColor() {
        let color2 = "#fff";
        if (this.color) {
          color2 = this.disabled && this.disabledBackground ? this.disabledColor : this.color;
        } else {
          if (this.disabled && this.disabledBackground) {
            color2 = this.disabledColor || "#FFFFFF";
          } else {
            const app2 = uni && uni.$fui && uni.$fui.color;
            const primary = app2 && app2.primary || "#465CFF";
            color2 = this.type === "gray" ? primary : "#FFFFFF";
          }
        }
        return color2;
      },
      getSize() {
        let size = this.size || uni && uni.$fui && uni.$fui.fuiButton && uni.$fui.fuiButton.size || 32;
        if (this.btnSize === "small") {
          size = size > 28 ? 28 : size;
        } else if (this.btnSize === "mini") {
          size = size > 28 ? 24 : size;
        }
        return `${size}rpx`;
      },
      getWidth() {
        let width = this.width;
        if (this.btnSize && this.btnSize !== true) {
          width = {
            "medium": "400rpx",
            "small": "200rpx",
            "mini": "120rpx"
          }[this.btnSize] || width;
        }
        return width;
      },
      getHeight() {
        let height = this.height || uni && uni.$fui && uni.$fui.fuiButton && uni.$fui.fuiButton.height || "96rpx";
        if (this.btnSize && this.btnSize !== true) {
          height = {
            "medium": "84rpx",
            "small": "72rpx",
            "mini": "64rpx"
          }[this.btnSize] || height;
        }
        return height;
      },
      getBorderRadius() {
        let radius = uni && uni.$fui && uni.$fui.fuiButton && uni.$fui.fuiButton.radius || "16rpx";
        radius = this.radius || radius || "0";
        if (~radius.indexOf("rpx")) {
          radius = Number(radius.replace("rpx", "")) * 2 + "rpx";
        } else if (~radius.indexOf("px")) {
          radius = Number(radius.replace("px", "")) * 2 + "px";
        } else if (~radius.indexOf("%")) {
          radius = Number(radius.replace("%", "")) * 2 + "%";
        }
        return radius;
      },
      getRadius() {
        const radius = uni && uni.$fui && uni.$fui.fuiButton && uni.$fui.fuiButton.radius || "16rpx";
        return this.radius || radius;
      }
    },
    data() {
      let isNvue = false;
      return {
        isNvue,
        time: 0,
        trigger: false,
        pc: false
      };
    },
    created() {
    },
    methods: {
      handleStart(e) {
        if (this.disabled)
          return;
        this.trigger = false;
        if ((/* @__PURE__ */ new Date()).getTime() - this.time <= 150)
          return;
        this.trigger = true;
        this.time = (/* @__PURE__ */ new Date()).getTime();
      },
      handleClick() {
        if (this.disabled || !this.trigger)
          return;
        this.time = 0;
      },
      handleTap() {
        if (this.disabled)
          return;
        this.$emit("click", {
          index: Number(this.index)
        });
      },
      handleEnd(e) {
        if (this.disabled)
          return;
        setTimeout(() => {
          this.time = 0;
        }, 150);
      },
      bindgetuserinfo({
        detail = {}
      } = {}) {
        this.$emit("getuserinfo", detail);
      },
      bindcontact({
        detail = {}
      } = {}) {
        this.$emit("contact", detail);
      },
      bindgetphonenumber({
        detail = {}
      } = {}) {
        this.$emit("getphonenumber", detail);
      },
      binderror({
        detail = {}
      } = {}) {
        this.$emit("error", detail);
      },
      bindopensetting({
        detail = {}
      } = {}) {
        this.$emit("opensetting", detail);
      },
      bindchooseavatar({
        detail = {}
      } = {}) {
        this.$emit("chooseavatar", detail);
      },
      bindlaunchapp({
        detail = {}
      } = {}) {
        this.$emit("launchapp", detail);
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["fui-button__wrap", [!$options.getWidth || $options.getWidth === "100%" || $options.getWidth === true ? "fui-button__flex-1" : "", $props.disabled && !$props.disabledBackground ? "fui-button__opacity" : ""]]),
        style: vue.normalizeStyle({ width: $options.getWidth, height: $options.getHeight, marginTop: $props.margin[0] || 0, marginRight: $props.margin[1] || 0, marginBottom: $props.margin[2] || $props.margin[0] || 0, marginLeft: $props.margin[3] || $props.margin[1] || 0, borderRadius: $options.getRadius, background: $options.getBackground }),
        onTouchstart: _cache[8] || (_cache[8] = (...args) => $options.handleStart && $options.handleStart(...args)),
        onTouchend: _cache[9] || (_cache[9] = (...args) => $options.handleClick && $options.handleClick(...args)),
        onTouchcancel: _cache[10] || (_cache[10] = (...args) => $options.handleEnd && $options.handleEnd(...args))
      },
      [
        vue.createElementVNode("button", {
          class: vue.normalizeClass(["fui-button", [
            $props.bold ? "fui-text__bold" : "",
            $data.time && ($props.plain || $props.type === "link") ? "fui-button__opacity" : "",
            !$props.background && !$props.disabledBackground && !$props.plain ? "fui-button__" + $props.type : "",
            !$options.getWidth || $options.getWidth === "100%" || $options.getWidth === true ? "fui-button__flex-1" : "",
            $data.time && !$props.plain && $props.type !== "link" ? "fui-button__active" : "",
            $data.pc && !$props.disabled ? $props.plain || $props.type === "link" ? "fui-button__opacity-pc" : "fui-button__active-pc" : ""
          ]]),
          style: vue.normalizeStyle({
            width: $options.getWidth,
            height: $options.getHeight,
            lineHeight: $options.getHeight,
            background: $props.disabled ? $props.disabledBackground || $options.getTypeColor : $props.plain ? "transparent" : $options.getBackground,
            borderWidth: !$props.borderColor || !$data.isNvue ? "0" : $props.borderWidth,
            borderColor: $props.borderColor ? $props.borderColor : $props.disabled && $props.disabledBackground ? $props.disabledBackground : $props.background || "transparent",
            borderRadius: $options.getRadius,
            fontSize: $options.getSize,
            color: $options.getColor
          }),
          loading: $props.loading,
          "form-type": $props.formType,
          "open-type": $props.openType,
          "app-parameter": $props.appParameter,
          onGetuserinfo: _cache[0] || (_cache[0] = (...args) => $options.bindgetuserinfo && $options.bindgetuserinfo(...args)),
          onGetphonenumber: _cache[1] || (_cache[1] = (...args) => $options.bindgetphonenumber && $options.bindgetphonenumber(...args)),
          onContact: _cache[2] || (_cache[2] = (...args) => $options.bindcontact && $options.bindcontact(...args)),
          onError: _cache[3] || (_cache[3] = (...args) => $options.binderror && $options.binderror(...args)),
          onOpensetting: _cache[4] || (_cache[4] = (...args) => $options.bindopensetting && $options.bindopensetting(...args)),
          onChooseavatar: _cache[5] || (_cache[5] = (...args) => $options.bindchooseavatar && $options.bindchooseavatar(...args)),
          onLaunchapp: _cache[6] || (_cache[6] = (...args) => $options.bindlaunchapp && $options.bindlaunchapp(...args)),
          disabled: $props.disabled,
          scope: $props.scope,
          onClick: _cache[7] || (_cache[7] = vue.withModifiers((...args) => $options.handleTap && $options.handleTap(...args), ["stop"]))
        }, [
          $props.text ? (vue.openBlock(), vue.createElementBlock(
            "text",
            {
              key: 0,
              class: vue.normalizeClass(["fui-button__text", { "fui-btn__gray-color": !$props.background && !$props.disabledBackground && !$props.plain && $props.type === "gray" && $props.color === "#fff", "fui-text__bold": $props.bold }]),
              style: vue.normalizeStyle({ fontSize: $options.getSize, lineHeight: $options.getSize, color: $options.getColor })
            },
            vue.toDisplayString($props.text),
            7
            /* TEXT, CLASS, STYLE */
          )) : vue.createCommentVNode("v-if", true),
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 46, ["loading", "form-type", "open-type", "app-parameter", "disabled", "scope"]),
        $props.borderColor ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 0,
            class: vue.normalizeClass(["fui-button__thin-border", [$data.time && ($props.plain || $props.type === "link") && !$props.disabled ? "fui-button__opacity" : "", $props.disabled && !$props.disabledBackground ? "fui-button__opacity" : ""]]),
            style: vue.normalizeStyle({ borderWidth: $props.borderWidth, borderColor: $props.borderColor ? $props.borderColor : $props.disabled && $props.disabledBackground ? $props.disabledBackground : $props.background || "transparent", borderRadius: $options.getBorderRadius })
          },
          null,
          6
          /* CLASS, STYLE */
        )) : vue.createCommentVNode("v-if", true)
      ],
      38
      /* CLASS, STYLE, HYDRATE_EVENTS */
    );
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-face3f74"], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/components/firstui/fui-button/fui-button.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {};
    },
    methods: {
      goIndex() {
        this.fui.href("/pages/tabbar/index/index", true);
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_fui_button = resolveEasycom(vue.resolveDynamicComponent("fui-button"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "fui-wrap" }, [
      vue.createElementVNode("view", { class: "fui-content__box" }, [
        vue.createElementVNode("view", { class: "fui-img__box" }, [
          vue.createElementVNode("image", {
            src: "/static/images/common/img_coding_3x.png",
            class: "fui-img",
            mode: "widthFix"
          })
        ]),
        vue.createElementVNode("view", { class: "fui-title" }, "开发中"),
        vue.createElementVNode("view", { class: "fui-sub__title" }, "功能开发中，敬请期待！"),
        vue.createElementVNode("view", { class: "fui-btn__box" }, [
          vue.createVNode(_component_fui_button, {
            text: "返回首页",
            size: 28,
            width: "336rpx",
            height: "84rpx",
            radius: "100rpx",
            background: "#fff",
            borderColor: "#465CFF",
            color: "#465CFF",
            onClick: $options.goIndex
          }, null, 8, ["onClick"])
        ])
      ])
    ]);
  }
  const PagesCommonCodingCoding = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "/Users/mac/Documents/github/FirstUI-nvue/pages/common/coding/coding.vue"]]);
  __definePage("pages/tabbar/index/index", PagesTabbarIndexIndex);
  __definePage("pages/tabbar/layout/layout", PagesTabbarLayoutLayout);
  __definePage("pages/tabbar/template/template", PagesTabbarTemplateTemplate);
  __definePage("pages/tabbar/my/my", PagesTabbarMyMy);
  __definePage("pages/common/coding/coding", PagesCommonCodingCoding);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/mac/Documents/github/FirstUI-nvue/App.vue"]]);
  const fui = {
    toast: function(text) {
      text && uni.showToast({
        title: text,
        icon: "none",
        duration: 2e3
      });
    },
    modal: function(title, content, callback, showCancel, confirmColor, confirmText) {
      uni.showModal({
        title,
        content,
        showCancel: showCancel || false,
        cancelColor: "#7F7F7F",
        confirmColor: confirmColor || "#465CFF",
        confirmText: confirmText || "确定",
        success(res) {
          if (res.confirm) {
            callback && callback(true);
          } else {
            callback && callback(false);
          }
        },
        fail(err) {
          formatAppLog("log", "at common/fui-app.js:27", err);
        }
      });
    },
    href(url, isMain) {
      if (isMain) {
        uni.switchTab({
          url
        });
      } else {
        uni.navigateTo({
          url
        });
      }
    },
    jsonp: function(url, callback, callbackname) {
    },
    resUrl: function() {
      return "https://res.firstui.cn/static/images";
    }
  };
  const color = {
    primary: "#465CFF",
    success: "#09BE4F",
    warning: "#FFB703",
    danger: "#FF2B2B",
    purple: "#6831FF",
    link: "#465CFF"
  };
  const app = {
    toast: function(text, icon = "none") {
      text && uni.showToast({
        title: text,
        icon,
        duration: 2e3
      });
    },
    modal: function(title, content, callback, showCancel, confirmColor, confirmText) {
      uni.showModal({
        title,
        content,
        showCancel: showCancel || false,
        cancelColor: "#7F7F7F",
        confirmColor: confirmColor || color.primary,
        confirmText: confirmText || "确定",
        success(res) {
          if (res.confirm) {
            callback && callback(true);
          } else {
            callback && callback(false);
          }
        },
        fail(err) {
          formatAppLog("log", "at components/firstui/fui-config/index.js:43", err);
        }
      });
    },
    href(url, isMain) {
      if (isMain) {
        uni.switchTab({
          url
        });
      } else {
        uni.navigateTo({
          url
        });
      }
    }
  };
  const fuiConfig = {
    //组件名称，小驼峰命名
    //如fui-button写成fuiButton
    fuiButton: {
      //组件属性值
      height: "96rpx",
      size: 32,
      radius: "16rpx"
    },
    fuiIcon: {
      size: 64,
      unit: "rpx",
      //V1.9.8+
      color: ""
    },
    fuiText: {
      size: 32,
      unit: "rpx",
      //仅Nvue有效，black 默认颜色，V1.9.8+
      color: ""
    },
    fuiInput: {
      labelSize: 32,
      size: 32
    },
    fuiFormItem: {
      labelSize: 32,
      labelWidth: 164,
      labelRight: 30,
      labelWeight: 400,
      labelAlign: "left",
      asteriskPosition: "left"
    },
    // V1.9.8+
    fuiListCell: {
      padding: ["32rpx", "32rpx"],
      arrowColor: "",
      //仅Nvue有效
      borderColor: "",
      bottomLeft: 32
    },
    // V1.9.9+
    fuiSection: {
      size: 32,
      color: "#181818",
      fontWeight: 600,
      descrSize: 28,
      descrColor: "#B2B2B2",
      descrTop: 12
    },
    color,
    ...app
  };
  const store = createStore({
    state: {
      //当前版本
      version: "2.0.0",
      //主题 light、dark
      theme: uni.getStorageSync("fui_theme") || "light",
      status: 0
    },
    mutations: {},
    actions: {}
  });
  uni.$fui = fuiConfig;
  uni.fui = fui;
  function createApp() {
    const app2 = vue.createVueApp(App);
    app2.use(store);
    app2.config.globalProperties.fui = fui;
    return {
      app: app2
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
