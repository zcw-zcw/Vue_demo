<template>
    <ToDo :ListData="listData"/>
</template>
<script>
import ToDo from '@/components/ToDo';
export default {
    name:'To',
    components:{
        ToDo,
    },
    data(){
        return {
            listData: [],
              url:'https://api.myjson.com/bins/8ioay',
        }
        
    },    
    async created(){
     await this.$store.dispatch('TODOLIST',{
         url:this.url
     });
    //  console.log(this.$store.state.todo.lists);
     this.listData=this.$store.state.todo.lists;
  
},
}
</script>