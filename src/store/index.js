//交互核心部分
import {createStore} from 'vuex'
import api from "../api";

const store = createStore({
    state: {
        searchComment:"北京市",  //搜索框搜索内容
        //每一年的地震次数
        predictionData:[["2000-06-04", 300],["2000-06-05", 116], ["2000-06-06", 129], ["2000-06-07", 135], ["2000-06-08", 86], ["2000-06-09", 73], ["2000-06-10", 85], ["2000-06-11", 73], ["2000-06-12", 68], ["2000-06-13", 92], ["2000-06-14", 130], ["2000-06-15", 245], ["2000-06-16", 139], ["2000-06-17", 115], ["2000-06-18", 111], ["2000-06-19", 309], ["2000-06-20", 206], ["2000-06-21", 137], ["2000-06-22", 128], ["2000-06-23", 85], ["2000-06-24", 94], ["2000-06-25", 71], ["2000-06-26", 106], ["2000-06-27", 84], ["2000-06-28", 93], ["2000-06-29", 85], ["2000-06-30", 73], ["2000-07-01", 83], ["2000-07-02", 125], ["2000-07-03", 107], ["2000-07-04", 82], ["2000-07-05", 44], ["2000-07-06", 72], ["2000-07-07", 106], ["2000-07-08", 107], ["2000-07-09", 66], ["2000-07-10", 91], ["2000-07-11", 92], ["2000-07-12", 113], ["2000-07-13", 107], ["2000-07-14", 131], ["2000-07-15", 111], ["2000-07-16", 64], ["2000-07-17", 69], ["2000-07-18", 88], ["2000-07-19", 77], ["2000-07-20", 83], ["2000-07-21", 111], ["2000-07-22", 57], ["2000-07-23", 55], ["2000-07-24", 60]],
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
        searchAreaTableData:[
            {
                "position": "新疆叶城市",
                "time": "2013-10-21",
                "magnitude": 4.5,
                "tag": "中震"
            },
            {
                "position": "新疆叶城市",
                "time": "2013-10-24",
                "magnitude": 2.6,
                "tag": "小震"
            },
            {
                "position": "新疆叶城市",
                "time": "2013-10-28",
                "magnitude": 3.6,
                "tag": "小震"
            },
            {
                "position": "新疆叶城市",
                "time": "2013-06-08",
                "magnitude": 3.5,
                "tag": "小震"
            },
            {
                "position": "新疆叶城市",
                "time": "2013-06-09",
                "magnitude": 4.5,
                "tag": "中震"
            },
            {
                "position": "新疆叶城市",
                "time": "2013-10-21",
                "magnitude": 4.5,
                "tag": "中震"
            },
            {
                "position": "新疆叶城市",
                "time": "2013-10-24",
                "magnitude": 2.6,
                "tag": "小震"
            },
            {
                "position": "新疆叶城市",
                "time": "2013-10-28",
                "magnitude": 3.6,
                "tag": "小震"
            },
            {
                "position": "新疆叶城市",
                "time": "2013-06-08",
                "magnitude": 3.5,
                "tag": "小震"
            },
            {
                "position": "新疆叶城市",
                "time": "2013-06-09",
                "magnitude": 4.5,
                "tag": "中震"
            },{
                "position": "新疆叶城市",
                "time": "2013-10-21",
                "magnitude": 4.5,
                "tag": "中震"
            },
            {
                "position": "新疆叶城市",
                "time": "2013-10-24",
                "magnitude": 2.6,
                "tag": "小震"
            },
            {
                "position": "新疆叶城市",
                "time": "2013-10-28",
                "magnitude": 3.6,
                "tag": "小震"
            },
            {
                "position": "新疆叶城市",
                "time": "2013-06-08",
                "magnitude": 3.5,
                "tag": "小震"
            },
            {
                "position": "新疆叶城市",
                "time": "2013-06-09",
                "magnitude": 4.5,
                "tag": "中震"
            },{
                "position": "新疆叶城市",
                "time": "2013-10-21",
                "magnitude": 4.5,
                "tag": "中震"
            },
            {
                "position": "新疆叶城市",
                "time": "2013-10-24",
                "magnitude": 2.6,
                "tag": "小震"
            },
            {
                "position": "新疆叶城市",
                "time": "2013-10-28",
                "magnitude": 3.6,
                "tag": "小震"
            },
            {
                "position": "新疆叶城市",
                "time": "2013-06-08",
                "magnitude": 3.5,
                "tag": "小震"
            },
            {
                "position": "新疆叶城市",
                "time": "2013-06-09",
                "magnitude": 4.5,
                "tag": "中震"
            }


        ]
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

        getSearchAreaTableData(state, name) {
            api.get('getSearchAreaTableData/',{
                params: {
                    areaname: name
                }
            }).then(response => {
                console.log("获得的地区数据是 is",response.data.areaTableData)
                state.searchAreaTableData=response.data.areaTableData

            }).catch(error => {
                console.log(error)
            })
        },
        getPredictionData(state, name) {
            api.get('getPredictionData/',{
                params: {
                    areaname: name
                }
            }).then(response => {
                console.log("vuex获得的地区预测数据是 is",response.data.predictionData)
                state.predictionData=response.data.predictionData
            }).catch(error => {
                console.log(error)
            })
        },




    },

})
export default store
