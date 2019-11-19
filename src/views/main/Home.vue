
<template>
  <Home/>
</template>

<script>
import Home from '@/components/Home';

export default {
  name: 'home',
  components: {
    Home,
  },
  methods:{
    async tryget() {
    const {data}  = await this.$axios.get('https://api.myjson.com/bins/vhpga');
      console.log(data);
    },
  },
  data(){
    return{
      data:{}
    }
  },
};
</script>
