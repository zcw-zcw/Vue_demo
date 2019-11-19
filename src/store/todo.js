import {TODOLIST} from './type';
import {queryToDoListData} from '@/service/queryToDoListData';

export default{
    state:{
        lists: []
    },
    mutations:{
        [TODOLIST](state,data){
            state.lists=data;
        }
    },
    actions:{
      async  [TODOLIST]( { commit } ,info){
        const { data }=await  queryToDoListData(info.url);
        commit(TODOLIST,data);
        }
    }
};