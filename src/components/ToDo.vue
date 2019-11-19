<template>
<div id="todo">
    <p>点击后改变状态</p>
    <ol >
        <li v-for="(name,index) in ListData" :key="index">
        <span v-if="name.done==true" @click="clickmethod(index)">{{name.name}}</span>
        <del v-else @click="clickmethod(index)">{{name.name}}</del>
        </li>
    </ol>
</div>
</template>



<script>
export default {
    name:"TODO",
    props:{
        ListData: Array
    },

methods:{
    clickmethod(index){
        this.ListData[index].done=!this.ListData[index].done;
    }
}
}
</script>

<style scoped>
#todo{
    width: 20%;
    margin: 0% auto;
}
li{
    margin-top: 5px;
    cursor: pointer;
}
</style>