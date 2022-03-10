<template>
  <div>
    <img :src="url" alt="image" class="mb-3">
    <h2 v-if="desc">{{desc}}</h2>
    <p><span>Author:</span> {{author}}</p>
  </div>
</template>
<script>
export default {
  props: ['url', 'desc', 'author'],
  name: 'card-component'
}
</script>
<style>
  img {
    width: 100%;
  }
  span {
    font-family: quicksand;
    font-weight: bold;
  }
</style>