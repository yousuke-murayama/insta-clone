<template>
  <div>
    <v-row>
      <v-col>
        <v-card
          class="mx-auto"
          max-width="550"
        >
          <v-avatar tile size="550">
            <v-img
              :src="posts[this.$route.params.id].imgLink"
            >
            </v-img>
          </v-avatar>

          <div class="tagLists">
            <v-card-subtitle 
              v-for="(tag, index) in posts[this.$route.params.id].imgTags" 
              :key="index"
              class="tagLists__child"
            >
              {{ `#${tag}` }}
            </v-card-subtitle>
          </div>
          
          <v-card-actions>

            <v-spacer></v-spacer>

            <FavoriteBtn 
              :posts="posts"
              @toggle-favorite="toggleFavorite"
            />

            <v-btn icon @click="goToEditPage">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>

            <v-btn icon @click="deletePost">
              <v-icon>mdi-delete-alert</v-icon>
            </v-btn>

            <v-btn
              icon
              @click="isShow = !isShow"
            >
              <v-icon>{{ isShow ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="isShow">
              <v-divider></v-divider>

              <v-card-text>
                {{ posts[this.$route.params.id].comment }}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import FavoriteBtn from '@/components/FavoriteBtn.vue';

export default {
  name: 'ImagesShow',
  components: {
    FavoriteBtn
  },
  props: {
    posts: Array
  },
  data() {
    return {
      isShow: true
    }
  },
  methods: {
    toggleFavorite() {
      this.$emit('toggle-favorite', this.$route.params.id);
    },
    deletePost() {
      this.$emit('delete-post', this.$route.params.id);
    },
    goToEditPage() {
      this.$router.push(`/edit/${this.$route.params.id}`);
    }
  }
}
</script>

<style scoped lang="scss">
.tagLists {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  &__child {
    padding-bottom: 0;
  }
}
</style>