<template>
  <div>
    <el-form label-width="60px" :model="account">
      <el-form-item label="用户名">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    const account = reactive({})
    const store = useStore()
    const loginAccount = () => {
      store.dispatch('login/loginActions', account)
    }
    return {
      account,
      loginAccount
    }
  }
})
</script>

<style lang="less"></style>
