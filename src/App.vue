<template>
  <div>
    <page-header :menuItems="menuItems"></page-header>
    <main-layout />
    <page-footer
      :menuItems="menuItems"
      :additionalLinks="additionalLinks"
    ></page-footer>
  </div>
</template>
<script>
import PageHeader from "./components/PageHeader.vue";
import PageFooter from "./components/PageFooter.vue";
import MainLayout from "@/components/MainLayout.vue";

export default {
  components: {
    PageHeader,
    PageFooter,
    MainLayout,
  },
  data() {
    return {
      menuItems: [
        {
          id: 1,
          link: "https://element-plus.org/en-US/",
          text: "Home",
        },
        {
          id: 2,
          link: "https://element-plus.org/en-US/guide/design.html",
          text: "Episodes",
        },
        {
          id: 3,
          link: "https://element-plus.org/en-US/guide/nav.html",
          text: "About",
        },
        {
          id: 4,
          link: "https://element-plus.org/en-US/guide/installation.html",
          text: "Contact",
        },
      ],
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
