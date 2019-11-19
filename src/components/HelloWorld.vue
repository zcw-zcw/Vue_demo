<template>
  <div class="hello">
      <div class="block">
    <span class="demonstration">轮播图</span>
    <el-carousel height="400px">
      <el-carousel-item v-for="(item,index) in imgs" :key="index">
       <img :src="item.src"/>
      </el-carousel-item>
    </el-carousel>
  </div></div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data(){
    return{
      imgs:[{src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574160558347&di=3778b758d52f76517041b45e7c02dbdb&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F6221820e464515e119c99921c7abe360e4d0fbc8756d-u9Rp3u_fw658"},
      {src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574162627679&di=eac818f1e51ad2fe8d361c20e01e6d43&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fspace%2Fpic%2Fitem%2Fd52a2834349b033bd730004615ce36d3d439bdf6.jpg"},
      {src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574162656033&di=cc969a8a4d92dd8eb6ff53132437f5e9&imgtype=0&src=http%3A%2F%2Fimg.ifeng.com%2Fres%2F200906%2F0607_646870.jpg"},
      {src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574162681489&di=2662c9efbba18a8ce8f65cd4f6af845c&imgtype=0&src=http%3A%2F%2Fimg.blog.163.com%2Fphoto%2FUKPiNaUvkOPSYggo9rAYAw%3D%3D%2F1704612458961425670.jpg"}],
    };
  },
};
</script>


<style scoped lang="less">
.block{
  width:50%;
  margin:0 auto;
  
}
  img{
    width: 100%;
    height: 100%;
  }
  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
