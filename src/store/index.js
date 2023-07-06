//交互核心部分
import {createStore} from 'vuex'
import api from "../api";

const store = createStore({
    state: {
        searchComment:"北京市",  //搜索框搜索内容
        //每一年的地震次数
        provincename:"null",
        numdata: [0, 1, 1, 2, 2, 3, 3, 4, 4, 9],
        provinceintro:{ //设置默认数据
                "injure": 691995,
                "death": 343,
                "total": 692338,
                "intro": "位于中国西南地区，地处川西高原和四川盆地，地震活动较多，属于川西地震带",
                "piedata": [
                    {
                        "value": 460,
                        "name": "芦山"
                    },
                    {
                        "value": 388,
                        "name": "珙县"
                    },
                    {
                        "value": 314,
                        "name": "长宁"
                    },
                    {
                        "value": 234,
                        "name": "威远"
                    },
                    {
                        "value": 204,
                        "name": "九寨沟"
                    },
                    {
                        "value": 193,
                        "name": "木里"
                    },
                    {
                        "value": 185,
                        "name": "青川"
                    },
                    {
                        "value": 181,
                        "name": "汶川"
                    }
                ],
                "img":"pictures/default.jpg"
            },

    },
    mutations: {
        //将搜索框的内容传给state.searchComment   //全局状态管理
        setLocation(state, address) {
            state.searchComment = address;
            console.log("state.searchComment is ",state.searchComment)
        },
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
        getdatabyarea(state, area) {
            api.get('getprovinceintro/',{
                params: {
                    area: area
                }
            }).then(response => {
                console.log("获得的地区数据是 is",response.data.areadata)
                state.provinceintro=response.data.areadata
                console.log("state数据 ",state.provinceintro)
            }).catch(error => {
                console.log(error)
            })
        },


    },

})
export default store
