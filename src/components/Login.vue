<!-- Login module -->
<template>
  <div>
    <span @click='loginDialog'>登录</span>

    <el-dialog
      title="登录操作"
      :visible.sync="showDialog"
      width="35%"
      center>
      <span>输入昵称及密码</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showDialog = false">取 消</el-button>
        <el-button type="primary" @click="showDialog = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showDialog: false,
    }
  },
  methods: {
    loginDialog: function() {
      this.showDialog = !this.showDialog
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
