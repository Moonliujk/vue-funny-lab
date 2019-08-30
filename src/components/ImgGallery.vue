<!--  -->
<template>
   <ul class="album_container infinite-list" v-infinite-scroll="loadMore">
       <li v-for="album in albums" :key="album.title" class="infinite-list-item album-card">
        <el-card :body-style="cardContainer">
            <!-- <img :src="album.url"> -->
            <el-image
                :style="imgCover"
                :src="album.url"
                fit="cover"
                ></el-image>
            <div class="desContainer">
                <span>{{album.title}}</span>
                <div class="bottom clearfix">
                <time class="time"></time>
                <el-button type="text" class="button">操作按钮</el-button>
                </div>
            </div>
        </el-card>
       </li>
    </ul>
</template>

<script>
export default {
  props: {
      albums: Array
  },
  data () {
    return {
        num: 0,
        cardContainer: {
            padding: '0',
            height: '140px',
            width: '140px',
            position: 'relative',
        },
        imgCover: {
            height: '100%',
            padding: '0 0 10px 0'
        }
    }
  },
  methods: {
      loadMore() {
        console.log(this.num++)
      }
  }
}
</script>

<style lang='scss' scoped>
    ul, li {
        padding: 0;
        margin: 0;
        list-style: none;
    }
    .album_container {
        display: flex;
        flex-wrap: wrap;
        height: 100%;
        overflow: auto;
        padding: 10px 0 0 10px;
        
    }
    .album-card {
        margin: 15px;
        margin-left: 0;
        margin-top: 0;
        flex: '0 1 auto';
        transform: scale(1);
        transition: transform 0.2s ease-in-out;
    }
    .album-card:hover {
        transform: scale(1.1);
        transition: transform 0.2s ease-in-out;
    }
    .desContainer {
        position: absolute;
        bottom: 0;
        height: 20px;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.32);
        padding: 14px;
        color: white;
    }
</style>
