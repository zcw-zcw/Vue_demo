<template>
<div>
    <el-button  type="text" @click="event=$event;">点击获得事件类型</el-button>
    <h1>事件：{{event.type}}</h1>
    <p>时和秒的换算</p>
    小时 : <input type = "text" v-model = "hour">
    秒 : <input type = "text" v-model = "second">
</div>

</template>



<script>
export default {
    name:"Home",
  data(){
      return{
          event:'',
          hour:'',
          second:'',
      }
  },
  watch : {
        hour:function(val) {
            this.hour = val;
            this.second = this.hour * 3600
        },
        second : function (val) {
            this.hour = val/ 3600.0;
            this.second = val;
        }
    }
    };
</script>