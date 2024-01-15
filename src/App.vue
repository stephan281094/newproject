<template>
  <div>
    <page-header />
    <router-view />
    <page-footer
      :menuItems="menuItems"
      :additionalLinks="additionalLinks"
    ></page-footer>
  </div>
</template>
<script>
import PageHeader from "./components/common/PageHeader.vue";
import PageFooter from "./components/common/PageFooter.vue";

export default {
  components: {
    PageHeader,
    PageFooter,
  },
  data() {
    return {
      additionalLinks: [
        {
          id: 1,
          link: "https://element-plus.org/en-US/component/button.html",
          text: "Style Guide",
        },
        {
          id: 2,
          link: "https://element-plus.org/en-US/component/button.html",
          text: "Instructions",
        },
        {
          id: 3,
          link: "https://element-plus.org/en-US/component/button.html",
          text: "Changelog",
        },
        {
          id: 4,
          link: "https://element-plus.org/en-US/component/button.html",
          text: "Credit",
        },
        {
          id: 5,
          link: "https://element-plus.org/en-US/component/button.html",
          text: "Powered by Webflow",
        },
        {
          id: 6,
          link: "https://element-plus.org/en-US/component/button.html",
          text: "Licences",
        },
      ],
    };
  },
};
</script>
