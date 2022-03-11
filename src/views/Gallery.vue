<template>
  <div class="container pt-5 pb-5">
    <search class="mb-5" />
    <collection />
  </div>
</template>
<script>
import Search from "../components/gallery/Search";
import Collection from "../components/gallery/Collection";
export default {
  name: "gallery-page",
  components: {
    Search,
    Collection,
  },
};
</script>
<style></style>
