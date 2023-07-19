//交互核心部分
import {createStore} from 'vuex'
import api from "../api";

const store = createStore({
    state: {
        searchComment:"北京市(北京市数据为虚构,测试使用)",  //搜索框搜索内容
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


        ],
        doubleBarMagnitude:[1,2,3],//震级大小数据
        doubleBarDepth:[30,20,10],//震源深度数据
        //饼图 图例 + 数据
        magnitudeLegend:['2tt','ss2','dd3','ff3'],
        depthLegend:['d10','d20','gf30','g60'],
        //饼图数据
        magnitudePieData:[20,10,20,30],
        depthPieData:[10,12,30,40],
    },
    mutations: {

        //vuex函数中里面有两个参数 第一个 state 第二个为playload 负载 即一个字典 里面装多重数据
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
        getDoubleBarData(state,name){
            api.get('getDoubleBarData/',{
                params: {
                    areaname: name
                }
            }).then(response => {
                console.log("vuex获得的地区双轴图数据 震级是 is",response.data.magnitudeData)
                console.log("vuex获得的地区双轴图数据是 震源深度 is",response.data.depthData)
                state.doubleBarMagnitude=response.data.magnitudeData
                state.doubleBarDepth=response.data.depthData
                console.log("状态获得的地区双轴图数据 震级是 is",state.doubleBarMagnitude)
                console.log("状态获得的地区双轴图数据是 震源深度 is",state.doubleBarDepth)
            }).catch(error => {
                console.log(error)
            })

        },
        getLegendAndPieData(state,dict){ //传入地区名 以及数据类型
            console.log("获取到的参数 ",dict)
            api.get('getPieData/',{
                params: {
                    areaname: dict.areaname,
                    kind:dict.kind,
                }
            }).then(response => {
                console.log(" 饼图数据 is",response.data)
                if((dict.kind).includes("震级")){ //dict.kind中是否包含"震级"
                    console.log("震级数据")
                    state.magnitudeLegend=response.data.legend
                    state.magnitudePieData=response.data.pieData
                }
                else if((dict.kind).includes("震深")){ ////dict.kind中是否包含"震深"
                    console.log("震深数据")
                    state.depthLegend=response.data.legend
                    state.depthPieData=response.data.pieData
                }
                console.log("state的数据变化",state.magnitudePieData)
            }).catch(error => {
                console.log(error)
            })
        }
    },

})
export default store
