<template>
    <div class="">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-copy"></i> 团队管理</el-breadcrumb-item>
            </el-breadcrumb>
<el-tree
  :data="data"
  :props="defaultProps"
  accordion
  @node-click="handleNodeClick">
</el-tree>
        </div>
        </div>
        
        

</template>
<script>
  export default {
    data() {
      return {
        data: [{
          label: '推荐关系',
          children: [{
            label: '123',
            children: [{
              label: '456'
            }]
          }]
        }, {
          label: '业绩统计',
          children: [{
            label: '市场一',
            children: [{
              label: '444'
            }]
          }, {
            label: '市场二',
            children: [{
              label: '666'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    }
  };
</script>


<style>
.message-title{
    cursor: pointer;
}
.handle-row{
    margin-top: 30px;
}
</style>

