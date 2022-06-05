<template>
  <page-content
    :content-config="contentConfig"
    :tableData="tableData"
    pageName="role"
  >
    <template #money="scope">
      {{ '$' + scope.row.money }}
    </template>
  </page-content>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pageContent from '@/components/page-content/index'
import contentConfig from './config/content-config'
export default defineComponent({
  components: {
    pageContent
  },
  name: 'App',
  props: {
    name: {
      type: String
    }
  },
  setup() {
    const tableData: any[] = [
      {
        name: '123',
        intro: '主管',
        money: 200,
        createAt: '2019-05-23T12:28:39.132Z',
        updateAt: '2019-05-23T12:28:39.132Z'
      }
    ]
    return { tableData, contentConfig }
  }
})
</script>

<style lang="less"></style>
