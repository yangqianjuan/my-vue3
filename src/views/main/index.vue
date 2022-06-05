<template>
  <div class="main-layout">
    <el-container class="main-content">
      <el-aside width="200px" class="aside">
        <nav-menu></nav-menu>
      </el-aside>
      <el-container class="content">
        <el-header class="content-header"> </el-header>
        <el-main class="content-page">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import navMenu from '@/components/nav-menu/index'

export default defineComponent({
  components: {
    navMenu
  },
  name: 'App',
  props: {
    name: {
      type: String
    }
  }
})
</script>

<style lang="less">
.main-layout {
  height: 100%;
  .main-content {
    .content {
      .content-header {
        height: 100px;
        background: blue;
      }
    }
  }
}
</style>
