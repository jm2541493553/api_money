<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-more-outline"></i> 财务管理</el-breadcrumb-item>
            </el-breadcrumb>
            
        </div>
        
        
         <div class="container">
            <h2>奖金提现</h2>
            
            
            <br>

            <div class="search-box">
                <el-input class="search" size="large" v-model="keyword1" clearable placeholder="提现金额"></el-input>
                
            </div>
                <div class="search-box">
                <el-input class="search" size="large" v-model="keyword2" clearable placeholder="安全密码"></el-input>
                
            </div>
            
             <el-button
                    type="primary"
                    icon="el-icon-check"
                    class="handle-del mr10"
                    @click="delAllSelection"
                > 提现</el-button>
                 <h2>历史记录</h2>
            <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="tixianjine"
        label="提现金额"
        width="180">
      </el-table-column>
      <el-table-column
        prop="fuwufei"
        label="服务费"
        width="180">
      </el-table-column>
      <el-table-column
        prop="shangchengjifen"
        label="商城积分"
        width="90">
      </el-table-column>
        <el-table-column
        prop="shifajine"
        label="实发金额"
        width="180">
      </el-table-column>
        <el-table-column
        prop="shenqingtixianshijian"
        label="申请提现时间"
        width="240">
      </el-table-column>
          <el-table-column
        prop="fafangshijian"
        label="发放时间"
        width="240">
      </el-table-column>
         <el-table-column
        prop="zhuangtai"
        label="状态"
        width="100">
      </el-table-column>
    </el-table>
    <div class="block">
  <el-pagination
    layout="prev, pager, next"
    :total="1000">
  </el-pagination>
</div>
                
            <ul>
                
                
                <li class="icon-li" v-for="(item,index) in list" :key="index">
                    <div class="icon-li-content">
                        <i :class="`el-icon-lx-${item}`"></i>
                        <span>{{item}}</span>
                    </div>
                </li>
            </ul>
        </div> 

    </div>
</template>
 <script>
    export default {
      data() {
        return {
            keyword1: '',
            keyword2: '',
          tableData: [{
            tixianjine: 30000,
            fuwufei: 100,
            shangchengjifen: 48,
            shifajine:29900,
            shenqingtixianshijian:'2019-03-08',
            fafangshijian:'2019-03-10',
            zhuangtai:'已到账'
          }, {
            tixianjine: 50000,
            fuwufei: 300,
            shangchengjifen: 74,
            shifajine:49700,
            shenqingtixianshijian:'2019-03-11',
            fafangshijian:'2019-03-13',
            zhuangtai:'提现中'
          }]
          }
      }
    }
        
  </script>

<style scoped>
.example-p{
    height: 45px;
    display: flex;
    align-items: center;
}
.search-box{
    text-align: center;
    margin-top: 10px;
}
.search{
    width: 300px;
}
ul,li{
    list-style: none;
}
.icon-li{
    display: inline-block;
    padding: 10px;
    width: 120px;
    height: 120px;
}
.icon-li-content{
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.icon-li-content i{
    font-size: 36px;
    color: #606266;
}
.icon-li-content span{
    margin-top: 10px;
    color: #787878;
}
.handle-del {
    margin: 0 auto;
}
</style>