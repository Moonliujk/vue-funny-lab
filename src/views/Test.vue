<!-- 测试功能页 -->
<template>
  <div>
    <svg width="150" height="100" viewBox="0 0 3 2">
      <rect width="1" height="2" x="0" fill="#008d46" />
      <rect width="1" height="2" x="1" fill="#ffffff" />
      <rect width="1" height="2" x="2" fill="#d2232c" />
    </svg>
    <div class="flex-center">
      需要显示的关键词：
      <el-input 
        width="90px"
        class="middle"
        v-model="keyWord" 
        placeholder="请输入关键词"
        prefix-icon="el-icon-search"></el-input>
    </div>
    <div>
      <p v-html="testTxt" class="text-container"></p>
    </div>
  </div>
</template>

<script>
import currentUser from 'components/CurrentUser'
export default {
  components: {
      'current-user': currentUser
  },
  data () {
    return {
      keyWord: '',
      testTxt: "这样点击按钮，会有相应的视图变化，但是你审查以下元素，每次改动之后，table标签都得重新创建，也就是说table下面的每一个栏目，不管是数据是否和原来一样，都得重新渲染，这并不是理想中的情况，当其中的一栏数据和原来一样，我们希望这一栏不要重新渲染，因为DOM重绘相当消耗浏览器性能",
      sourceTxt: '',
    }
  },
  created() {
    this.sourceTxt = this.testTxt
  },
  watch: {
    keyWord: function(val) {
      // 保证每次更新内容前，内容为初始版本 
      this.testTxt = this.sourceTxt
      // 不会匹配空格
      if (val.trim().length <= 0) return;
      let showWord = new RegExp(val.trim(), 'g')
      this.testTxt = this.testTxt.replace(showWord, `<span style=" color: red;
                                                                   font-weight: bold;
                                                                   outline: 2px solid red;
                                                                   display: inline-block;
                                                                   padding: 0 3px;
                                                                   margin: 0 3px;">${val.trim()}</span>`)
    }
  },
  methods: {

  }
}
</script>

<style lang='scss' scoped>
  .flex-start {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .middle {
    width: 50%;
  }
  .bold {
    color: red;
    font-size: bold;
  }
  p {
    margin: 20px 40px;
    text-align: left;
  }
</style>
