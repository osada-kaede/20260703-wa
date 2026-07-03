Vue.createApp({
  data() {
    return {
      color: "未選択",
      preview: ""
    };
  },
  methods: {
    previewRed() {
      this.preview = "赤を選択できます";
    },
    previewBlue() {
      this.preview = "青を選択できます";
    },
    clearPreview() {
      this.preview = "";
    },
    selectRed() {
      this.color = "red";
    },
    selectBlue() {
      this.color = "blue";
    }
  }
}).mount("#app");