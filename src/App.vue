<template>
  <v-app>
    <HeaderView @delete-all-posts="deleteAllPosts"/>
    <v-main>
      <v-container>
        <router-view
        :posts="posts"
        @post-picture="postPicture"
        @toggle-favorite="toggleFavorite"
        />
      </v-container>
    </v-main>
    <FooterView/>
  </v-app>
</template>

<script>
import HeaderView from '@/global/HeaderView.vue'
import FooterView from '@/global/FooterView.vue'

const STORAGE_KEY = "Posts";

export default {
  name: 'App',
  components: {
    HeaderView,
    FooterView
  },
  data() {
    return {
      posts: []
    }
  },
  methods: {
    postPicture(e) {
      this.posts.push({
        id: this.posts.length,
        img: e.img,
        imgLink: e.imgLink,
        comment: e.comment,
        imgTags: e.imgTags,
        favorite: false
      });
      this.savePosts();
    },
    toggleFavorite(e) {
      if(this.posts[e].favorite === true) {
        this.posts[e].favorite = false
      } else {
        this.posts[e].favorite = true
      }
      this.savePosts();
    },
    savePosts() {
      const parsed = JSON.stringify(this.posts);
      localStorage.setItem(STORAGE_KEY, parsed);
    },
    goToUploadPage() {
      this.$router.push('/upload');
    },
    deleteAllPosts() {
      const isDeleted = '全ての投稿を削除します。よろしいですか？';
      if(window.confirm(isDeleted)) {
        localStorage.setItem(STORAGE_KEY, '');
        localStorage.removeItem(STORAGE_KEY);
        this.posts = [];
        window.location.reload();
      }
    }
  },
  mounted() {
    if (localStorage.getItem(STORAGE_KEY)) {
      try {
        this.posts = JSON.parse(localStorage.getItem(STORAGE_KEY));
      } catch(e) {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }
};
</script>
