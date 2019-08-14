<template>
  <div class="mySelect">
    <h1>下拉框组件:</h1>
    <input
      type="text"
      v-model="value"
      readonly
      :placeholder="placeholder"
      @click="showSelect"
      @blur="blurSelect"
    >
    <transition name="fade">
      <ul class="selectOptions" v-show="ifShow">
        <li
          :class="{selected : selectedIndex == index}"
          v-for="(option,index) in options"
          :key="index"
          @click="EmitchangeOption(option,index)"
        >{{option.label}}</li>
      </ul>
    </transition>
  </div>
</template>
<script>
export default {
  name: "mySelect",
  props: {
    placeholder: String,
    options: Array
  },
  data() {
    return {
      value: "",
      ifShow: false,
      selectedIndex: -1
    };
  },
  methods: {
    EmitchangeOption: function(option, index) {
      this.$emit("changeOption", option.label);
      this.value = option.label;
      this.selectedIndex = index;
    },
    showSelect: function() {
      console.log(this)
      this.ifShow = !this.ifShow;
    },
    blurSelect: function() {
      setTimeout(() => {
        this.ifShow = !this.ifShow;
      }, 200);
    }
  }
};
</script>
<style>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
.mySelect {
  margin: 0;
}
input {
  cursor: pointer;
  display: block;
  margin: 10px 0;
  width: 200px;
  height: 30px;
  padding-left: 10px;
}
.selectOptions li {
  cursor: pointer;
  display: block;
  width: 204px;
  height: 30px;
  line-height: 30px;
  background: rgba(240, 239, 239, 0.5);
  border-bottom: 1px solid rgb(232, 232, 232);
  padding-left: 10px;
}
.selectOptions li:last-child {
  border-bottom: none;
}
.selectOptions li:link,
.selectOptions li:visited,
.selectOptions li:hover {
  background: #dfdfdf !important;
}
.selectOptions {
  width: 214px;
  background: #fff;
  position: relative;
}
.selected {
  background: #dfdfdf !important;
}
.selectOptions:before {
  display: block;
  content: "";
  border-width: 8px 8px 8px 8px;
  border-style: solid;
  border-color: transparent transparent rgba(240, 239, 239, 0.5) transparent;

  position: absolute;
  left: 10px;
  top: -16px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

