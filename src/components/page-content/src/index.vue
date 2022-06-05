<template>
  <div class="page-content">
    <hy-table :content-config="contentConfig" :table-data="tableData">
      <template #createAt="scope">
        <span>{{ $filter.formartUtcDate(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filter.formartUtcDate(scope.row.updateAt) }}</span>
      </template>
      <template #handler="scope">
        <div class="handle-btns">
          <el-button
            icon="el-icon-edit"
            size="mini"
            type="text"
            @click="handleEditClick(scope.row)"
          >
            编辑
          </el-button>
          <el-button
            icon="el-icon-delete"
            size="mini"
            type="text"
            @click="handleDeleteClick(scope.row)"
            >删除</el-button
          >
        </div>
      </template>
      <template v-for="item in otherPropSlots" #[item.slotName]="scope">
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"> </slot>
        </template>
      </template>
    </hy-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import hyTable from '@/base-ui/table/index'
import { useStore } from 'vuex'
export default defineComponent({
  components: {
    hyTable
  },
  name: 'App',
  props: {
    tableData: {
      type: Array
    },
    contentConfig: {
      type: Object
    },
    pageName: {
      type: String
    }
  },
  setup(props, { emit }) {
    console.log(props)
    const store = useStore()
    // 5.删除/编辑/新建操作
    const handleDeleteClick = (item: any) => {
      console.log(item)
      store.dispatch('system/deletePageDataAction', {
        pageName: props?.pageName,
        id: item.id
      })
    }
    const handleNewClick = () => {
      emit('newBtnClick')
    }
    const handleEditClick = (item: any) => {
      emit('editBtnClick', item)
    }
    const otherPropSlots = props.contentConfig?.propList.filter(
      (d: any) => !['handler', 'createAt', 'updateAt'].includes(d.slotName)
    )
    console.log(otherPropSlots)
    return {
      handleDeleteClick,
      handleNewClick,
      handleEditClick,
      otherPropSlots
    }
  }
})
</script>

<style lang="less">
.page-content {
  // height: 100%;
}
</style>
