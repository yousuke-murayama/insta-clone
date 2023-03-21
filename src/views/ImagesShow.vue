<template>
  <div>
    <p>ImagesShow</p>
    <p>{{ posts[this.$route.params.id].comment }}</p>
  </div>
</template>

<script>
export default {
  name: 'ImagesShow',
  props: {
    posts: Array
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>

</style>