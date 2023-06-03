//交互核心部分
import {createStore} from 'vuex'
import api from "../api";

const store = createStore({
    state: {
        //每一年的地震次数
        provincename:"null",
        numdata: [0, 1, 1, 2, 2, 3, 3, 4, 4, 9]
    },
    mutations: {
        getdatabyprovince(state, province) {
            state.provincename=province
            console.log("点击的省份是", province)
            api.get('getprovincedata/',{
                params: {
                 province:  province
                }
            }).then(response => {
                console.log("接受到的y轴数据 is",response.data.ydata)
                state.numdata=response.data.ydata
            }).catch(error => {
                console.log(error)
            })
        },
    },
})
export default store
