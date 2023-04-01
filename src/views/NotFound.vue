<template>
  <div class="notFound">
    <v-icon large>mdi-alert-rhombus-outline</v-icon>
    <div class="notFound__text">404ページが存在しません</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.notFound {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  &__text {
    font-size: 30px;
  }
}
</style>