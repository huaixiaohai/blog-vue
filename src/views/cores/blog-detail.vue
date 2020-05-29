<template>
  <div class="view-body-detail">
    <div class="row">
      <div class="col-md-12 col-sm-12">
        <div id="content-detail" ref="content-detail" class="content-detail content">
          <div class="detail-head">
            <div class="detail-title">
              <h1> {{articleDetail.title}} </h1>
            </div>
            <hr />
          </div>
          <div class="markdown-body">
            <p v-html=this.articleDetail.content></p>
          </div>
          <detail-nav-bar ref='detailNavBar'></detail-nav-bar>
        </div>
        <!-- <div class="thumb-for"> -->
          <!-- thumbs-count传递的是点赞的数量，thumbs-up-flag传递的是当前用户是否点赞的标识 -->
          <!-- <thumb-up :thumbs-count="1" :thumbs-up-flag="true"></thumb-up> -->
        <!-- </div> -->
        <!-- <article-share :signature-author="signatureAuthor"></article-share> -->
        <!-- 下一篇，上一篇 -->
        <!-- <hr style="margin-top:8px;" /> -->
        <!-- <article-next-pre :pre-next="articleNextPreData"></article-next-pre> -->
        <!-- tag区域 -->
        <!-- <article-tags :tag-list="tagList"></article-tags>
        <hr /><br/> -->
        <!-- 评论 -->
        <!-- <div class="content-detail-end comment shadow">
          <blog-comment :user-data="userData" v-on:submit-comment="subLeaveMessage">
          </blog-comment><hr />
          <div class="comment-list">
            <div id="comment" class="comment-list-head">
              评论列表 <font style="font-size: 14px;color:#c7254e;">(共5条评论)</font>
              <hr>
            </div>
            <div class="comment-list-body">
              <div class="pulldown" v-if="!isGetComment"><a @click="getComment" href="javascript:;">看看别人怎么说</a></div>
              <comment-list v-if="isGetComment" :comment-list="commentList"></comment-list>
            </div>
          </div>
        </div> -->
        <!-- 精选文章 -->
        <!-- <article-most-view :most-view="articleMostView"></article-most-view> -->
      </div>
    </div>
  </div>
</template>

<script>
import detailNavBar from '@/views/components/detail-nav-bar.vue';
import config from '@/config/blog-config.json';
import { fetchArticle } from '@/api/article'

export default {
  name: 'blog-detail',
  components: {
    detailNavBar: detailNavBar
  },
  data () {
    return {
      articleDetail: {
        id: undefined, // 文章id
        title: '', // 文章题目
        content: '', // 文章内容
        summary: '', // 文章摘要
        author: undefined, // 作者name
        create_time: 0, // 创建时间
        readCount: -1, // 阅读数量
        commentCount: -1, // 评论数量
        photoUrl: '' // 图片的url
      }
    }
  },
  props: ['detailData'],
  watch: {
    detailData: function (val) {
      this.articleDetail = val;
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.view-body-detail{
  opacity: 0;
  position: absolute;
  top: 40%;
  background: 0 0;
  transition: all .4s ease;
  -webkit-transition: all .4s ease;
  -moz-transition: all .4s ease;
  width: 100%;
}
.slide .view-body-detail{
  opacity: 1;
}
.content-detail,
.content-detail-end{
  background-color: #fafafa;
  padding: 5% 4%;
}
.detail-head{
  font-weight: 400;
  text-align: center;
  font-family: Vollkorn,Palatino,Times;
  color: #333;
  line-height: 1.4;
  margin-top: 50px;
  margin-bottom: 30px;
}
.comment-list-head{
  font-weight: 500;
  font-size: 18px;
}
.comment-list-head hr{
  margin-top: 10px;
  margin-bottom: 10px;
}
@media (min-width: 768px){
  .view-body-detail {
    padding: 10px 14% 0 14%;
  }
  .view-body-detail>.row {
    padding: 0 10%;
  }
}
@media (max-width: 767px){
  .row {
    margin: 0;
  }
}
@media (max-width: 540px) {
  .content-detail{
    padding: 5% 0%;
  }
}
</style>
