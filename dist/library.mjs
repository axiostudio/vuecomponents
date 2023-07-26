import { openBlock, createElementBlock, withDirectives, createElementVNode, vModelDynamic, withModifiers, vShow } from 'vue';

var script$1 = {
    name: 'AxioInputPassword',

    props: {
        modelValue: String,
        required: Boolean
    },

    emits: [
        'update:modelValue'
    ],

    data(){
        return {
            showPassword: false
        }
    },

    computed: {
        password: {
            get() { return this.modelValue },
            set(value) { this.$emit('update:modelValue', value); },
        }
    },

    methods: {
        togglePassword(){
            this.showPassword = !this.showPassword;
        }
    }
};

const _hoisted_1 = { class: "input-group" };
const _hoisted_2 = ["type", "required"];
const _hoisted_3 = /*#__PURE__*/createElementVNode("i", { class: "fas fa-fw fa-eye" }, null, -1 /* HOISTED */);
const _hoisted_4 = [
  _hoisted_3
];
const _hoisted_5 = /*#__PURE__*/createElementVNode("i", { class: "fas fa-fw fa-eye-slash" }, null, -1 /* HOISTED */);
const _hoisted_6 = [
  _hoisted_5
];

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    withDirectives(createElementVNode("input", {
      class: "form-control",
      type:  $data.showPassword ? 'text' : 'password',
      required: $props.required,
      autocomplete: "current-password",
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($options.password) = $event))
    }, null, 8 /* PROPS */, _hoisted_2), [
      [vModelDynamic, $options.password]
    ]),
    createElementVNode("button", {
      class: "btn btn-secondary",
      type: "button",
      onClick: _cache[1] || (_cache[1] = withModifiers((...args) => ($options.togglePassword && $options.togglePassword(...args)), ["stop"]))
    }, [
      withDirectives(createElementVNode("span", null, _hoisted_4, 512 /* NEED_PATCH */), [
        [vShow, !$data.showPassword]
      ]),
      withDirectives(createElementVNode("span", null, _hoisted_6, 512 /* NEED_PATCH */), [
        [vShow, $data.showPassword]
      ])
    ])
  ]))
}

script$1.render = render$1;
script$1.__file = "src/InputPassword.vue";

var script = {
    name: 'AxioLorem',
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("span", null, " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore mollitia unde perferendis esse quisquam deleniti earum illo qui ab impedit, ipsum eveniet necessitatibus excepturi ea nam enim similique ipsa voluptatem. "))
}

script.render = render;
script.__file = "src/Lorem.vue";

var components = { 
    InputPassword: script$1,
    Lorem: script
};

const plugin = {
  install (Vue) {
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop];
        Vue.component(component.name, component);
      }
    }
  }
};

export { plugin as default };
