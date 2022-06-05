<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column
        v-for="config in contentConfig.propList"
        :key="config.props"
        v-bind="config"
      >
        <template #default="scope">
          <slot :name="config.slotName" :row="scope.row">
            {{ scope.row[config.props] }}
          </slot>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  props: {
    tableData: {
      type: Array
    },
    contentConfig: {
      type: Object
    }
  },
  setup(props) {
    console.log(props)
    return {}
  }
})
</script>

<style lang="less"></style>
