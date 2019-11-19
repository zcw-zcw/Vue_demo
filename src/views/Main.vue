<template>
<div id="main">
<el-tabs  v-model="activeName" type="border-card" @tab-click='handleClick'>
   <el-tab-pane label="home" name="home"></el-tab-pane>
    <el-tab-pane label="todo" name="todo"></el-tab-pane>
    <el-tab-pane label="about" name="about"></el-tab-pane>
</el-tabs>
<router-view/>
</div>
</template>

<script>
export default {
     data() {
      return {
        activeName: 'home'
      };
    },
     methods: {
      handleClick(tab, event) {
       switch (tab.name) {
           case 'home':
               this.$router.push('/main/home');
               break;
                case 'todo':
               this.$router.push('/main/todo');
               break;
                case 'about':
                this.$router.push('/main/about');
               break;
       
           default:
               break;
       }
      }
    }
}
</script>

<style lang="less">
.el-tabs__content{
    height:0px;
    padding:0px!important;
}
.el-tabs--border-card{
  width: 50%;
  margin: 0% auto;
}
.el-tabs__item{
width:10vw;
}
</style>