const config = {
  title: '角色列表',
  propList: [
    {
      props: 'name',
      label: '姓名'
    },
    {
      props: 'intro',
      label: '介绍'
    },
    {
      props: 'money',
      label: '金额',
      slotName: 'money'
    },
    {
      props: 'createAt',
      label: '创建时间',
      slotName: 'createAt'
    },
    {
      props: 'updateAt',
      label: '更新时间',
      slotName: 'updateAt'
    },

    { props: 'handler', label: '操作', minWidth: '120', slotName: 'handler' }
  ]
}
export default config
