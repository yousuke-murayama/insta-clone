<template>
  <div>
    <v-row>
      <v-col cols="8" offset="2">
        <v-file-input
          class="fileInput"
          label="写真をアップロード"
          filled
          prepend-icon="mdi-camera"
          accept="image/png, image/jpeg"
          v-model="post.img"
        ></v-file-input>
        <!-- タグ一覧の表示非表示 -->
        <v-btn
          v-if="isShow" 
          class="tagListsBtn" 
          @click="isShow = !isShow">
          タグを非表示
        </v-btn>
        <v-btn
          v-if="!isShow" 
          class="tagListsBtn" 
          @click="isShow = !isShow">
          タグを表示
        </v-btn>
        <!-- タグ一覧 -->
        <ul class="tagLists" v-show="isShow">
          <li 
            v-for="(imgTag, index) in post.imgTags" 
            :key="index"
          >
            {{ `#${imgTag}` }}
          </li>
        </ul>
        <v-row>
          <v-text-field
            v-model="tag"
            label="タグ"
          ></v-text-field>
          <v-btn 
            @click="addTag" 
            :disabled="!tag"
            color="primary">
            タグを追加
          </v-btn>
        </v-row>
      </v-col>
      <!-- 画像のプレビュー -->
      <v-col cols="8" offset="2">
        <v-menu
          v-model="menu"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              label="撮影日"
              v-model="post.date"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="post.date"
            @input="menu = false"
            locale="jp-ja"
            :day-format="date => new Date(date).getDate()"
          ></v-date-picker>
        </v-menu>
        <v-img
          v-if="post.img === null"
          class="defaultImg"
          src="../defaultImg/no-image.png"
          max-height="350"
        >
        </v-img>
        <v-img
          v-if="post.img !== null"
          max-heigth="350"
          :src="post.imgLink = url"
        >
        </v-img>
        <!-- コメントフォーム -->
        <v-textarea
          outlined
          name="input-7-4"
          class="commentSpace"
          label="コメント"
          v-model="post.comment"
        ></v-textarea>
        <v-btn 
          block 
          color="cyan"
          :disabled="!post.img || !post.comment"
          @click="postPicture"
        >
          投稿する
        </v-btn>
      </v-col>  
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'ImagesUpload',
  data() {
    return {
      post: {
        img: null,
        imgLink: '',
        date: '',
        comment: '',
        imgTags: []
      },
      tag: '',
      isShow: true,
      menu: false
    }
  },
  methods: {
    addTag() {
      if(this.post.imgTags.length >= 5) {
        alert('一つの投稿につき、タグは5個までです。');
        this.tag = '';
      } else {
        this.post.imgTags.push(this.tag);
        this.tag = ''; 
      }
    },
    postPicture() {
      this.$emit('post-picture', {
        img: this.post.img,
        imgLink: this.post.imgLink,
        date: this.post.date,
        comment: this.post.comment,
        imgTags: this.post.imgTags
      });
      this.$router.push('/');
    }
  },
  computed: {
    url() {
      if(this.post.img === null) {
        return;
      } else {
        return URL.createObjectURL(this.post.img);
      }
    }
  }
}
</script>

<style scoped lang="scss">
.tagListsBtn {
  margin-bottom: 15px;
}
.tagLists {
  list-style: none;  
}
.fileInput {
  padding: 0;
}
.defaultImg {
  padding: 0;
}
.commentSpace {
  margin-top: 10px;
}

</style>