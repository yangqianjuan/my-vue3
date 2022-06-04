<template>
  <div class="login-pane">
    <el-tabs
      v-model="activeName"
      type="border-card"
      class="demo-tabs"
      stretch
      @tab-click="handleClick"
    >
      <el-tab-pane label="帐号登录" name="account">
        <login-account ref="accountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane label="手机登录" name="phone">
        <login-phone></login-phone>
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="checked1" label="记住密码" size="large" />
      <el-button type="text">忘记密码</el-button>
    </div>
    <el-button type="primary" class="loginButton" @click="login"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './login-accuont.vue'
import LoginPhone from './login-phone.vue'
import { useStore } from 'vuex'
export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    const activeName = ref('account')
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const store = useStore()
    const login = () => {
      accountRef?.value?.loginAccount()
    }
    return { activeName, login, accountRef }
  }
})
</script>

<style lang="less">
.login-pane {
  width: 320px;
  .account-control {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .loginButton {
    width: 100%;
  }
}
</style>
