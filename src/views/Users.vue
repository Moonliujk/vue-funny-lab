<!--  -->
<template>
  <el-container >
      <el-header>
        <el-select v-model="value" placeholder="value" @change="sortMetod">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
      </el-header>

      <el-main>
            <el-table
            :data="users"
            :cell-style="cellStyle"
            style="width: 100%">
                <el-table-column
                    prop="avatar"
                    label="Avatar"
                    align="center"
                    width="120">

                        <!-- 用户信息展示弹窗 -->
                        <template slot-scope="scope" :style="pollyfill" class="pollyFill">
                                <el-popover
                                    ref="popover"
                                    placement="right"
                                    trigger="hover"
                                    transition="fade-in">
                                    <div class="pop-container">
                                        <div class="pop-header">
                                            <el-avatar :src="scope.row.avatar"></el-avatar>
                                            <span class="user-name">{{scope.row.userName}}</span>
                                        </div>
                                        <div class="pop-main">
                                            <div class="pop-content"><p>{{scope.row.userInfo}}</p></div>
                                        </div>
                                        <div class="pop-footer">
                                            <el-button size="mini" plain round @click="showUserInfo(scope.$index)">用户信息</el-button>
                                            <el-button size="mini" type="primary" round icon="el-icon-plus">关注用户</el-button>
                                        </div>
                                    </div>
                                    <!-- 头像展示 -->
                                    <el-avatar :src="scope.row.avatar" prop="avatar" slot="reference" class="pollyFill"></el-avatar>
                                </el-popover>
                        </template>
                        <!-- 用户信息展示弹窗 -->
                                           
                </el-table-column>
                <el-table-column
                    prop="userName"
                    label="Name"
                    align="center"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="post"
                    label="Message"
                    align="center"
                    show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    label="Operator"
                    align="center"
                    width="220"
                    class-name="bold-font">
                    <template slot-scope="scope">
                        <el-button size="mini" type="primary" @click="showUserInfo(scope.$index)" round plain>用户信息</el-button>
                        <el-button size="mini" type="danger"  @click="deleteUser(scope.$index)"   round plain>删除用户</el-button>
                    </template>
                </el-table-column>
            </el-table>
      </el-main>

      <el-footer class="user-footer">
          <el-pagination
            :total="5"
            layout="prev, pager, next">
          </el-pagination>
      </el-footer>
      
      <div class="page-component__scroll"></div>
      <!-- 直达顶部icon -->
      <!-- <el-backtop 
        target=".page-component__scroll .el-scrollbar__wrap"
        visibility-height=0>
      </el-backtop> -->

      <el-drawer
        title="用户信息"
        custom-class="drawerContainer"
        :visible.sync="f_drawer_visibility">
        <div class="draw_container">
            <div class="draw_header">
                <el-avatar :size="50" :src="chosedUser.avatar"></el-avatar>
                <p class="user-name">{{chosedUser.userName}}</p>
            </div>

            <div class="draw_main">
                <h4 class="title">花间集 · Album</h4>
                <img-gallery :albums="chosedUser.albums" @load-more="loadMore"></img-gallery>
            </div>

            <div class="draw_footer">
                <el-button type="primary" round icon="el-icon-plus">关注用户</el-button>
            </div>
        </div>
      </el-drawer>

  </el-container>
</template>

<script>
import ImgGallery from 'components/ImgGallery.vue'

export default {
  components: {
      'img-gallery': ImgGallery
  },
  data () {
    return {
        pollyfill: {
            display: 'flex',
            justifyContents: 'center',
            alignItems: 'center'
        },
        options: [
            {
                label: '默认排序',
                value: 1
            },
            {
                label: '人工热度排序',
                value: 2
            },
            {
                label: '帖子热度排序',
                value: 3
            },
        ],
        value: '',
        users: [],
        //
        f_drawer_visibility: false,
        chosedUser: {},
    }
  },
  created() {
      this.initData();
      this.users = [
          {
              index: 1,
              userName: 'leslie',
              avatar: require('assets/img/1.jpg'),
              post: 'The elaborate handover, completed 20 years ago today, marked for many the unofficial end of the British Empire.',
              userInfo: '你好',
              hot: 564,
              albums: [
                  {
                      url: require('assets/img/c4d_1.jpg'),
                      title: '雪糕',
                      des: '美味的雪糕啊，赐予我神圣的力量吧！'
                  },
                  {
                      url: require('assets/img/c4d_2.jpg'),
                      title: 'Mask',
                      des: '不要出碰我，垃圾一般的人类'
                  },
                  {
                      url: require('assets/img/c4d_3.jpg'),
                      title: '圣殿神',
                      des: '啊！美丽的大自然'
                  },
                  {
                      url: require('assets/img/c4d_1.jpg'),
                      title: '糕',
                      des: '美味的雪糕啊，赐予我神圣的力量吧！'
                  },
                  {
                      url: require('assets/img/c4d_2.jpg'),
                      title: 'ask',
                      des: '不要出碰我，垃圾一般的人类'
                  },
                  {
                      url: require('assets/img/c4d_3.jpg'),
                      title: '圣殿域',
                      des: '啊！美丽的大自然'
                  },
              ]
          },
          {
              index: 2,
              userName: 'frand',
              avatar: require('assets/img/2.jpg'),
              post: 'ddd',
              userInfo: '我好',
              hot: 902
          },
          {
              index: 3,
              userName: 'luv',
              avatar: require('assets/img/3.jpg'),
              post: 'ddd',
              userInfo: '大家好',
              hot: 100
          },
          {
              index: 4,
              userName: 'leslie',
              avatar: require('assets/img/1.jpg'),
              post: 'Flipper',
              userInfo: '你好',
              hot: 56
          },
          {
              index: 5,
              userName: 'frand',
              avatar: require('assets/img/2.jpg'),
              post: 'ddd',
              userInfo: '我好',
              hot: 92
          },
          {
              index: 6,
              userName: 'luv',
              avatar: require('assets/img/3.jpg'),
              post: 'ddd',
              userInfo: '大家好',
              hot: 144
          },
      ]
  },
  methods: {
    initData() {
        this.value = 1
        this.sortMetod()
    },
    open1() {
        this.$notify({
            title: '成功',
            message: '这是一条成功的提示消息',
            type: 'success'
        });
    },
    showUserInfo(index) {
        this.f_drawer_visibility = true
        this.chosedUser = this.users[index]
    },
    sortMetod() {
        let value = this.value
        let users = this.users

        switch(value) {
            case 1: 
                users.sort(this.sortByDefault)
                break
            case 2:
                users.sort(this.sortByHot)
                break
            case 3:
                users.sort(this.sortByName)
                break
        }

        this.users = users
    },
    sortByDefault(a, b) {
        return a.index - b.index
    },
    sortByHot(a, b) {
        return a.hot - b.hot
    },
    sortByName(a, b) {
        return a.userName - b.userName
    },
    // 列设置样式
    cellStyle(row, column, rowIndex, columnIndex) {
        if(row.column.label === "Name"){
            return 'font-weight:bold'
        }else{
            return ''
        }
    },
    deleteUser(index) {
      this.users.splice(index, 1)
    },
    // 加载更多图片资源
    loadMore() {

    }
  }
}
</script>

<style lang='scss' scoped>
    .bold-font {
        font-weight: bold;
        font-size: 2rem;
    }
    .pop-container {
        display: flex;
        flex-direction: column;
        padding: 2px 8px;
    }
    .pop-container > div {
        margin: 0;
        padding: 0;
        display: flex;
    }
    .pop-header {
        display: inline-flex;
        align-items: center;
        font-weight: bold;
        color: black;
    }
    .pop-header .user-name {
        padding-left: 10px;
        font-size: 1.15rem;
    }
    .pop-content {
        margin: 10px 0 15px;
    }

    .pop-main p {
        margin: 0;
        padding-left: 4px;
    }

    .pop-footer {
        justify-content: space-between;
    }

    .drawerContainer {
        position: relative;
        height: 100%;
    }

    .draw_container {
        // overflow: hidden;
        height: 60%;
        padding: 0 15px;
    }
    .draw_header {
        height: 70px;
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }
    .draw_header .user-name {
        font-size: 1.25rem;
        font-weight: 500;
        margin-left: 10px;
        color: black;
    }

    .draw_main {
        height: 100%;
        margin-top: 15px;
        position: relative;
    }

    .draw_main .title {
        margin: 5px;
        color: #909399;
    }

    .draw_footer {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .user-contaienr {
        position: relative;
    }

    .user-footer {
        position: absolute;
        bottom: 0;
        width: 100%;
    }




    // .pollyfill {
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    // }
</style>


