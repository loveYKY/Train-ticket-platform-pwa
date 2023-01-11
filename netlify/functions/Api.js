const express = require("express");
var cors = require("cors");
const dayjs = require("dayjs");
const serverless = require("serverless-http");
const bodyParser = require('body-parser');
const lodash = require('lodash')
const app = express();
const router = express.Router();
app.use(cors());
app.use(bodyParser.json());

router.get("/rest/cities", (req, res) => {
  res.send({
    hotCities: [
      {
        name: "北京",
      },
      {
        name: "上海",
      },
      {
        name: "广州",
      },
      {
        name: "深圳",
      },
      {
        name: "南京",
      },
      {
        name: "武汉",
      },
      {
        name: "杭州",
      },
      {
        name: "西安",
      },
      {
        name: "郑州",
      },
      {
        name: "成都",
      },
      {
        name: "长沙",
      },
      {
        name: "天津",
      },
    ],
    cityList: [
      {
        citys: [
          {
            name: "安顺",
          },
          {
            name: "安阳",
          },
          {
            name: "鞍山",
          },
          {
            name: "安图",
          },
          {
            name: "安多",
          },
        ],
        title: "A",
      },
      {
        citys: [
          {
            name: "霸州",
          },
          {
            name: "白银市",
          },
          {
            name: "保定",
          },
          {
            name: "巴中",
          },
          {
            name: "北票",
          },
          {
            name: "包头",
          },
          {
            name: "北碚",
          },
          {
            name: "蚌埠",
          },
          {
            name: "博鳌",
          },
          {
            name: "宝鸡",
          },
          {
            name: "宾阳",
          },
          {
            name: "白河东",
          },
          {
            name: "北京",
          },
        ],
        title: "B",
      },
      {
        citys: [
          {
            name: "滁州",
          },
          {
            name: "昌图",
          },
          {
            name: "承德",
          },
          {
            name: "重庆",
          },
          {
            name: "赤壁",
          },
          {
            name: "长寿",
          },
          {
            name: "沧州",
          },
          {
            name: "郴州",
          },
          {
            name: "巢湖",
          },
          {
            name: "赤峰",
          },
          {
            name: "长兴",
          },
          {
            name: "朝阳",
          },
          {
            name: "长沙",
          },
          {
            name: "长汀",
          },
          {
            name: "长治",
          },
          {
            name: "长春",
          },
          {
            name: "常州",
          },
          {
            name: "澄城",
          },
          {
            name: "茶陵",
          },
          {
            name: "成都",
          },
        ],
        title: "C",
      },
      {
        citys: [
          {
            name: "德兴",
          },
          {
            name: "大安",
          },
          {
            name: "定州",
          },
          {
            name: "东营",
          },
          {
            name: "东方",
          },
          {
            name: "东莞",
          },
          {
            name: "大连",
          },
          {
            name: "丹东",
          },
          {
            name: "东胜",
          },
          {
            name: "丹阳",
          },
          {
            name: "大武口",
          },
          {
            name: "大石头",
          },
          {
            name: "定西",
          },
          {
            name: "东乡",
          },
          {
            name: "德州",
          },
          {
            name: "都匀",
          },
          {
            name: "德清",
          },
          {
            name: "大庆",
          },
        ],
        title: "D",
      },
      {
        citys: [
          {
            name: "鄂州",
          },
          {
            name: "峨眉",
          },
        ],
        title: "E",
      },
      {
        citys: [
          {
            name: "富县",
          },
          {
            name: "丰城",
          },
          {
            name: "扶余",
          },
          {
            name: "抚州",
          },
          {
            name: "富源",
          },
          {
            name: "枫林",
          },
          {
            name: "佛山",
          },
          {
            name: "抚顺",
          },
          {
            name: "涪陵",
          },
          {
            name: "福州",
          },
          {
            name: "福鼎",
          },
          {
            name: "福山镇",
          },
          {
            name: "阜新",
          },
        ],
        title: "F",
      },
      {
        citys: [
          {
            name: "高碑店",
          },
          {
            name: "巩义",
          },
          {
            name: "盖州",
          },
          {
            name: "瓜州",
          },
          {
            name: "古田",
          },
          {
            name: "贵定",
          },
          {
            name: "高台",
          },
          {
            name: "广州",
          },
          {
            name: "广安",
          },
          {
            name: "贵阳",
          },
          {
            name: "广汉",
          },
          {
            name: "广元",
          },
          {
            name: "官厅",
          },
          {
            name: "古浪",
          },
          {
            name: "桂林",
          },
          {
            name: "高密",
          },
          {
            name: "公主岭",
          },
        ],
        title: "G",
      },
      {
        citys: [
          {
            name: "侯马",
          },
          {
            name: "葫芦岛",
          },
          {
            name: "华容",
          },
          {
            name: "华山",
          },
          {
            name: "惠州",
          },
          {
            name: "衡水",
          },
          {
            name: "邯郸",
          },
          {
            name: "淮南",
          },
          {
            name: "合肥",
          },
          {
            name: "淮北",
          },
          {
            name: "杭州",
          },
          {
            name: "哈尔滨",
          },
          {
            name: "洪洞",
          },
          {
            name: "红安",
          },
          {
            name: "黄冈",
          },
          {
            name: "霍州",
          },
          {
            name: "怀仁",
          },
          {
            name: "海口",
          },
          {
            name: "鹤壁",
          },
          {
            name: "黄山",
          },
          {
            name: "合阳",
          },
          {
            name: "淮安",
          },
          {
            name: "呼和浩特",
          },
          {
            name: "海城",
          },
          {
            name: "衡阳",
          },
          {
            name: "怀化",
          },
          {
            name: "湟源",
          },
          {
            name: "黄陵",
          },
          {
            name: "黄石",
          },
          {
            name: "海宁",
          },
          {
            name: "衡山",
          },
        ],
        title: "H",
      },
      {
        title: "I",
      },
      {
        citys: [
          {
            name: "精河",
          },
          {
            name: "嘉兴",
          },
          {
            name: "晋中",
          },
          {
            name: "进贤",
          },
          {
            name: "缙云",
          },
          {
            name: "金华",
          },
          {
            name: "介休",
          },
          {
            name: "景德镇",
          },
          {
            name: "晋城",
          },
          {
            name: "嘉峪关",
          },
          {
            name: "嘉善",
          },
          {
            name: "胶州",
          },
          {
            name: "绩溪北",
          },
          {
            name: "佳木斯",
          },
          {
            name: "济南",
          },
          {
            name: "蛟河",
          },
          {
            name: "建瓯",
          },
          {
            name: "焦作",
          },
          {
            name: "锦州",
          },
          {
            name: "江油",
          },
        ],
        title: "J",
      },
      {
        citys: [
          {
            name: "昆明",
          },
          {
            name: "昆山",
          },
          {
            name: "开封",
          },
          {
            name: "凯里",
          },
          {
            name: "开原",
          },
        ],
        title: "K",
      },
      {
        citys: [
          {
            name: "柳州",
          },
          {
            name: "鹿寨",
          },
          {
            name: "拉萨",
          },
          {
            name: "漯河",
          },
          {
            name: "凌源",
          },
          {
            name: "娄底",
          },
          {
            name: "来宾",
          },
          {
            name: "临泽",
          },
          {
            name: "耒阳",
          },
          {
            name: "乐都",
          },
          {
            name: "临汾",
          },
          {
            name: "临沂",
          },
          {
            name: "柳园",
          },
          {
            name: "灵石",
          },
          {
            name: "廊坊",
          },
          {
            name: "洛阳",
          },
          {
            name: "梁平",
          },
          {
            name: "乐昌",
          },
          {
            name: "兰州",
          },
          {
            name: "兰考",
          },
          {
            name: "灵宝",
          },
          {
            name: "醴陵",
          },
          {
            name: "莱西",
          },
          {
            name: "连云港",
          },
          {
            name: "隆昌",
          },
        ],
        title: "L",
      },
      {
        citys: [
          {
            name: "民权",
          },
          {
            name: "茂名",
          },
          {
            name: "渑池",
          },
          {
            name: "眉山",
          },
          {
            name: "马鞍山",
          },
          {
            name: "蒙自",
          },
          {
            name: "闽清",
          },
          {
            name: "明港",
          },
          {
            name: "汨罗",
          },
          {
            name: "麻城",
          },
        ],
        title: "M",
      },
      {
        citys: [
          {
            name: "南宁",
          },
          {
            name: "南靖",
          },
          {
            name: "宁东",
          },
          {
            name: "南京",
          },
          {
            name: "南芬",
          },
          {
            name: "南平北",
          },
          {
            name: "南充",
          },
          {
            name: "内江",
          },
          {
            name: "南昌",
          },
          {
            name: "宁波",
          },
          {
            name: "宁强南",
          },
        ],
        title: "N",
      },
      {
        title: "O",
      },
      {
        citys: [
          {
            name: "彭山",
          },
          {
            name: "平安驿",
          },
          {
            name: "平泉",
          },
          {
            name: "普宁",
          },
          {
            name: "平原",
          },
          {
            name: "平遥",
          },
          {
            name: "平凉",
          },
          {
            name: "平顶山",
          },
          {
            name: "蒲城",
          },
          {
            name: "萍乡",
          },
        ],
        title: "P",
      },
      {
        citys: [
          {
            name: "青岛",
          },
          {
            name: "曲靖",
          },
          {
            name: "清远",
          },
          {
            name: "曲阜",
          },
          {
            name: "齐齐哈尔",
          },
          {
            name: "泉州",
          },
          {
            name: "青州市",
          },
          {
            name: "祁县",
          },
          {
            name: "钦州",
          },
          {
            name: "祁东",
          },
          {
            name: "清水",
          },
          {
            name: "祁阳",
          },
          {
            name: "岐山",
          },
        ],
        title: "Q",
      },
      {
        citys: [
          {
            name: "如东",
          },
          {
            name: "瑞昌",
          },
          {
            name: "荣昌",
          },
          {
            name: "日照",
          },
        ],
        title: "R",
      },
      {
        citys: [
          {
            name: "三水",
          },
          {
            name: "上杭",
          },
          {
            name: "上虞",
          },
          {
            name: "鄯善",
          },
          {
            name: "深圳",
          },
          {
            name: "苏州",
          },
          {
            name: "神木",
          },
          {
            name: "三明",
          },
          {
            name: "韶关",
          },
          {
            name: "宿州",
          },
          {
            name: "三门峡",
          },
          {
            name: "邵阳",
          },
          {
            name: "绍兴",
          },
          {
            name: "四平",
          },
          {
            name: "石家庄",
          },
          {
            name: "沈阳",
          },
          {
            name: "韶山",
          },
          {
            name: "山阴",
          },
          {
            name: "歙县",
          },
          {
            name: "龙市",
          },
          {
            name: "石桥",
          },
          {
            name: "石林",
          },
          {
            name: "上海",
          },
          {
            name: "商丘",
          },
          {
            name: "三亚",
          },
          {
            name: "绥中",
          },
          {
            name: "狮山",
          },
          {
            name: "顺德",
          },
        ],
        title: "S",
      },
      {
        citys: [
          {
            name: "桐梓",
          },
          {
            name: "铜陵",
          },
          {
            name: "天门",
          },
          {
            name: "通远堡",
          },
          {
            name: "铁岭",
          },
          {
            name: "田东",
          },
          {
            name: "唐山",
          },
          {
            name: "通辽",
          },
          {
            name: "太原",
          },
          {
            name: "太谷",
          },
          {
            name: "天津",
          },
          {
            name: "天水",
          },
          {
            name: "桃村",
          },
          {
            name: "滕州",
          },
          {
            name: "吐鲁番",
          },
          {
            name: "泰安",
          },
          {
            name: "图们",
          },
        ],
        title: "T",
      },
      {
        title: "U",
      },
      {
        title: "V",
      },
      {
        citys: [
          {
            name: "梧州",
          },
          {
            name: "威海",
          },
          {
            name: "武义",
          },
          {
            name: "温州",
          },
          {
            name: "武威",
          },
          {
            name: "乌海",
          },
          {
            name: "武夷山",
          },
          {
            name: "乌鲁木齐",
          },
          {
            name: "潍坊",
          },
          {
            name: "武昌",
          },
          {
            name: "渭南",
          },
          {
            name: "无锡",
          },
          {
            name: "闻喜",
          },
          {
            name: "万州",
          },
        ],
        title: "W",
      },
      {
        citys: [
          {
            name: "孝感",
          },
          {
            name: "新化",
          },
          {
            name: "咸阳",
          },
          {
            name: "咸宁",
          },
          {
            name: "信阳",
          },
          {
            name: "西安",
          },
          {
            name: "新晃",
          },
          {
            name: "襄阳",
          },
          {
            name: "忻州",
          },
          {
            name: "仙游",
          },
          {
            name: "许昌",
          },
          {
            name: "襄汾",
          },
          {
            name: "溆浦",
          },
          {
            name: "徐州",
          },
          {
            name: "邢台",
          },
          {
            name: "厦门",
          },
          {
            name: "旬阳",
          },
          {
            name: "湘潭",
          },
          {
            name: "修武",
          },
          {
            name: "新乡",
          },
          {
            name: "新余",
          },
          {
            name: "西昌",
          },
          {
            name: "兴安",
          },
        ],
        title: "X",
      },
      {
        citys: [
          {
            name: "玉屏",
          },
          {
            name: "营口",
          },
          {
            name: "鹰潭",
          },
          {
            name: "阳泉",
          },
          {
            name: "义县",
          },
          {
            name: "玉山",
          },
          {
            name: "岳阳",
          },
          {
            name: "永康",
          },
          {
            name: "永川",
          },
          {
            name: "攸县",
          },
          {
            name: "杨陵",
          },
          {
            name: "弋江",
          },
          {
            name: "玉门",
          },
          {
            name: "英德",
          },
          {
            name: "余姚",
          },
          {
            name: "延吉",
          },
          {
            name: "烟台",
          },
          {
            name: "禹城",
          },
          {
            name: "银滩",
          },
          {
            name: "永济",
          },
          {
            name: "宜昌",
          },
          {
            name: "盐城",
          },
          {
            name: "运城",
          },
          {
            name: "宜春",
          },
        ],
        title: "Y",
      },
      {
        citys: [
          {
            name: "株洲",
          },
          {
            name: "卓资东",
          },
          {
            name: "张掖",
          },
          {
            name: "遵义",
          },
          {
            name: "漳州",
          },
          {
            name: "涿州",
          },
          {
            name: "资阳",
          },
          {
            name: "织金",
          },
          {
            name: "郑州",
          },
          {
            name: "淄博",
          },
          {
            name: "资中",
          },
          {
            name: "驻马店",
          },
          {
            name: "枣庄",
          },
          {
            name: "中宁",
          },
          {
            name: "镇江",
          },
          {
            name: "中山",
          },
          {
            name: "湛江",
          },
          {
            name: "珠海",
          },
          {
            name: "肇庆",
          },
          {
            name: "樟树",
          },
        ],
        title: "Z",
      },
    ],
    version: 34665,
  });
});
router.post("/rest/query", (req, res) => {
  let response = {
    msg: "操作成功",
    status: 0,
    dataMap: {
      today: "2019-02-10",
      selectStudent: false,
      jointResult: {
        switchTrafficDetail: false,
        transLineList: [
          {
            index: 0,
            allPrice: "135",
            allTimeDesc: "8时54分起",
            transNodeList: [
              {
                isLong: 0,
                ticketInfos: [],
                seats: [],
                arr: "合肥南",
                date: "2019-02-10",
                trainNo: "G269",
                tripType: 0,
                trainType: "高速动车",
                dayAfter: "",
                dptTime: "19:15",
                intervalTimeDesc: "4时24分",
                dpt: "北京南",
                arrTime: "23:39",
              },
              {
                isLong: 0,
                ticketInfos: [],
                seats: [],
                arr: "南京南",
                date: "2019-02-11",
                trainNo: "G9398",
                tripType: 0,
                trainType: "高速动车",
                dayAfter: "",
                dptTime: "03:17",
                intervalTimeDesc: "52分",
                dpt: "合肥南",
                arrTime: "04:09",
              },
            ],
            stayTimeDesc: "3时38分",
            dayAfterTotal: "+1",
            solutionType: 0,
            stayTimeMax: "218",
            transCity: ["合肥"],
            transStationDesc: "合肥南",
            trainLocationInfoList: [],
            transStation: true,
          },
        ],
        waitMills: 0,
        arr: "南京",
        status: 1,
        dpt: "北京",
      },
      showOta: false,
      msg: "成功",
      directTrainInfo: {
        trains: [
          {
            endStationCode: "AOH",
            remainTicketCount: 0,
            dTimeStr: "201902101736",
            sort: 4,
            time: "4时29分",
            isPreOrder: false,
            extra: "{}",
            trainShowDescColor: -14964294,
            dStation: "北京南",
            date: "2019-02-10",
            remainTicket: "0张",
            priceMsg: "¥443.5",
            dptStationCode: "VNP",
            trainType: "高速动车",
            timeInMinute: 269,
            dStationInfo: true,
            trainStatus: 4,
            dTime: "17:36",
            startStationCode: "VNP",
            isSupportCandidate: false,
            dCity: "北京",
            aStationInfo: false,
            tagCode: -1,
            trainShowDesc: "可抢票",
            robSuccRate: "",
            distance: "1345",
            action: {
              menuBackColor: -16728876,
              menuColor: -1,
              clickable: false,
              touchUrl:
                "http://touch.qunar.com/h5/train/flagship/TrainOrderFillRob?startStation=%E5%8C%97%E4%BA%AC%E5%8D%97&endStation=%E5%8D%97%E4%BA%AC%E5%8D%97&trainNum=G157&date=2019-02-10&closeUrl=&source=mtrain_rob&bd_source=&seatType=%E4%BA%8C%E7%AD%89%E5%BA%A7",
              menu: "抢票",
              topDesc: "0张",
              topDescBackColor: 0,
              topDescColor: -52480,
              id: 2,
            },
            trainStatusDes: "已售空",
            appointment: false,
            ticketInfos: [
              {
                type: "二等座",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "4",
                price: "443.5",
                countColor: -1,
                studentPrice: "333",
                tagColor: -1,
                count: 0,
              },
              {
                type: "一等座",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "3",
                price: "748.5",
                countColor: -1,
                studentPrice: "748.5",
                tagColor: -1,
                count: 0,
              },
              {
                type: "商务座",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "13",
                price: "1403.5",
                countColor: -1,
                studentPrice: "1403.5",
                tagColor: -1,
                count: 0,
              },
            ],
            isSupportCard: true,
            remainTicketColor: -39424,
            aStation: "南京南",
            tagStyleType: 0,
            noTicketSceneOptimise: false,
            aCity: "南京",
            aTimeStr: "201902102205",
            remainTicketType: 0,
            aTime: "22:05",
            dayAfter: "",
            tagColor: -1,
            trainNumber: "G157",
            arrStationCode: "NKH",
            sortGroup: 0,
            remainTicketBackgroundColor: 0,
          },
          {
            endStationCode: "AOH",
            remainTicketCount: 0,
            dTimeStr: "201902101746",
            sort: 6,
            time: "4时52分",
            isPreOrder: false,
            extra: "{}",
            trainShowDescColor: -14964294,
            dStation: "北京南",
            date: "2019-02-10",
            remainTicket: "0张",
            priceMsg: "¥443.5",
            dptStationCode: "VNP",
            trainType: "高速动车",
            timeInMinute: 292,
            dStationInfo: true,
            trainStatus: 4,
            dTime: "17:46",
            startStationCode: "VNP",
            isSupportCandidate: false,
            dCity: "北京",
            aStationInfo: false,
            tagCode: -1,
            trainShowDesc: "可抢票",
            robSuccRate: "",
            distance: "1460",
            action: {
              menuBackColor: -16728876,
              menuColor: -1,
              clickable: false,
              touchUrl:
                "http://touch.qunar.com/h5/train/flagship/TrainOrderFillRob?startStation=%E5%8C%97%E4%BA%AC%E5%8D%97&endStation=%E5%8D%97%E4%BA%AC%E5%8D%97&trainNum=G159&date=2019-02-10&closeUrl=&source=mtrain_rob&bd_source=&seatType=%E4%BA%8C%E7%AD%89%E5%BA%A7",
              menu: "抢票",
              topDesc: "0张",
              topDescBackColor: 0,
              topDescColor: -52480,
              id: 2,
            },
            trainStatusDes: "已售空",
            appointment: false,
            ticketInfos: [
              {
                type: "二等座",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "4",
                price: "443.5",
                countColor: -1,
                studentPrice: "333",
                tagColor: -1,
                count: 0,
              },
              {
                type: "一等座",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "3",
                price: "748.5",
                countColor: -1,
                studentPrice: "748.5",
                tagColor: -1,
                count: 0,
              },
              {
                type: "商务座",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "13",
                price: "1403.5",
                countColor: -1,
                studentPrice: "1403.5",
                tagColor: -1,
                count: 0,
              },
            ],
            isSupportCard: true,
            remainTicketColor: -39424,
            aStation: "南京南",
            tagStyleType: 0,
            noTicketSceneOptimise: false,
            aCity: "南京",
            aTimeStr: "201902102238",
            remainTicketType: 0,
            aTime: "22:38",
            dayAfter: "",
            tagColor: -1,
            trainNumber: "G159",
            arrStationCode: "NKH",
            sortGroup: 0,
            remainTicketBackgroundColor: 0,
          },
          {
            endStationCode: "NKH",
            remainTicketCount: 0,
            dTimeStr: "201902101835",
            sort: 5,
            time: "4时35分",
            isPreOrder: false,
            extra: "{}",
            trainShowDescColor: -14964294,
            dStation: "北京南",
            date: "2019-02-10",
            remainTicket: "0张",
            priceMsg: "¥443.5",
            dptStationCode: "VNP",
            trainType: "高速动车",
            timeInMinute: 275,
            dStationInfo: true,
            trainStatus: 4,
            dTime: "18:35",
            startStationCode: "VNP",
            isSupportCandidate: false,
            dCity: "北京",
            aStationInfo: true,
            tagCode: -1,
            trainShowDesc: "可抢票",
            robSuccRate: "",
            distance: "1375",
            action: {
              menuBackColor: -16728876,
              menuColor: -1,
              clickable: false,
              touchUrl:
                "http://touch.qunar.com/h5/train/flagship/TrainOrderFillRob?startStation=%E5%8C%97%E4%BA%AC%E5%8D%97&endStation=%E5%8D%97%E4%BA%AC%E5%8D%97&trainNum=G203&date=2019-02-10&closeUrl=&source=mtrain_rob&bd_source=&seatType=%E4%BA%8C%E7%AD%89%E5%BA%A7",
              menu: "抢票",
              topDesc: "0张",
              topDescBackColor: 0,
              topDescColor: -52480,
              id: 2,
            },
            trainStatusDes: "已售空",
            appointment: false,
            ticketInfos: [
              {
                type: "二等座",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "4",
                price: "443.5",
                countColor: -1,
                studentPrice: "333",
                tagColor: -1,
                count: 0,
              },
              {
                type: "一等座",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "3",
                price: "748.5",
                countColor: -1,
                studentPrice: "748.5",
                tagColor: -1,
                count: 0,
              },
              {
                type: "商务座",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "13",
                price: "1403.5",
                countColor: -1,
                studentPrice: "1403.5",
                tagColor: -1,
                count: 0,
              },
            ],
            isSupportCard: true,
            remainTicketColor: -39424,
            aStation: "南京南",
            tagStyleType: 0,
            noTicketSceneOptimise: false,
            aCity: "南京",
            aTimeStr: "201902102310",
            remainTicketType: 0,
            aTime: "23:10",
            dayAfter: "",
            tagColor: -1,
            trainNumber: "G203",
            arrStationCode: "NKH",
            sortGroup: 0,
            remainTicketBackgroundColor: 0,
          },
          {
            endStationCode: "HZH",
            remainTicketCount: 0,
            dTimeStr: "201902101858",
            sort: 11,
            time: "10时26分",
            isPreOrder: false,
            extra: "{}",
            trainShowDescColor: -14964294,
            dStation: "北京",
            date: "2019-02-10",
            remainTicket: "0张",
            priceMsg: "¥148.5",
            dptStationCode: "BJP",
            trainType: "直达特快",
            timeInMinute: 626,
            dStationInfo: false,
            trainStatus: 4,
            dTime: "18:58",
            startStationCode: "BTC",
            isSupportCandidate: false,
            dCity: "北京",
            aStationInfo: false,
            tagCode: -1,
            trainShowDesc: "可抢票",
            robSuccRate: "",
            distance: "1669",
            action: {
              menuBackColor: -16728876,
              menuColor: -1,
              clickable: false,
              touchUrl:
                "http://touch.qunar.com/h5/train/flagship/TrainOrderFillRob?startStation=%E5%8C%97%E4%BA%AC&endStation=%E5%8D%97%E4%BA%AC&trainNum=Z281&date=2019-02-10&closeUrl=&source=mtrain_rob&bd_source=&seatType=%E7%A1%AC%E5%BA%A7",
              menu: "抢票",
              topDesc: "0张",
              topDescBackColor: 0,
              topDescColor: -52480,
              id: 2,
            },
            trainStatusDes: "已售空",
            appointment: false,
            ticketInfos: [
              {
                type: "硬座",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "1",
                price: "148.5",
                countColor: -1,
                studentPrice: "75",
                tagColor: -1,
                count: 0,
              },
              {
                type: "硬卧",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "5",
                price: "272.5",
                countColor: -1,
                studentPrice: "199",
                tagColor: -1,
                count: 0,
              },
              {
                type: "软卧",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "8",
                price: "415.5",
                countColor: -1,
                studentPrice: "415.5",
                tagColor: -1,
                count: 0,
              },
              {
                type: "无座",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "0",
                price: "148.5",
                countColor: -1,
                studentPrice: "75",
                tagColor: -1,
                count: 0,
              },
            ],
            isSupportCard: false,
            remainTicketColor: -39424,
            aStation: "南京",
            tagStyleType: 0,
            noTicketSceneOptimise: false,
            aCity: "南京",
            aTimeStr: "201902110524",
            remainTicketType: 0,
            aTime: "05:24",
            dayAfter: "+1",
            tagColor: -1,
            trainNumber: "Z281",
            arrStationCode: "NJH",
            sortGroup: 0,
            remainTicketBackgroundColor: 0,
          },
          {
            endStationCode: "AOH",
            remainTicketCount: 0,
            dTimeStr: "201902101900",
            sort: 0,
            time: "3时13分",
            isPreOrder: false,
            extra: "{}",
            trainShowDescColor: -14964294,
            dStation: "北京南",
            date: "2019-02-10",
            remainTicket: "0张",
            priceMsg: "¥443.5",
            dptStationCode: "VNP",
            trainType: "高速动车",
            timeInMinute: 193,
            dStationInfo: true,
            trainStatus: 4,
            dTime: "19:00",
            startStationCode: "VNP",
            isSupportCandidate: false,
            dCity: "北京",
            aStationInfo: false,
            tagCode: -1,
            trainShowDesc: "可抢票",
            robSuccRate: "",
            distance: "965",
            action: {
              menuBackColor: -16728876,
              menuColor: -1,
              clickable: false,
              touchUrl:
                "http://touch.qunar.com/h5/train/flagship/TrainOrderFillRob?startStation=%E5%8C%97%E4%BA%AC%E5%8D%97&endStation=%E5%8D%97%E4%BA%AC%E5%8D%97&trainNum=G17&date=2019-02-10&closeUrl=&source=mtrain_rob&bd_source=&seatType=%E4%BA%8C%E7%AD%89%E5%BA%A7",
              menu: "抢票",
              topDesc: "0张",
              topDescBackColor: 0,
              topDescColor: -52480,
              id: 2,
            },
            trainStatusDes: "已售空",
            appointment: false,
            ticketInfos: [
              {
                type: "二等座",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "4",
                price: "443.5",
                countColor: -1,
                studentPrice: "333",
                tagColor: -1,
                count: 0,
              },
              {
                type: "一等座",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "3",
                price: "748.5",
                countColor: -1,
                studentPrice: "748.5",
                tagColor: -1,
                count: 0,
              },
              {
                type: "商务座",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "13",
                price: "1403.5",
                countColor: -1,
                studentPrice: "1403.5",
                tagColor: -1,
                count: 0,
              },
            ],
            isSupportCard: true,
            remainTicketColor: -39424,
            aStation: "南京南",
            tagStyleType: 0,
            noTicketSceneOptimise: false,
            aCity: "南京",
            aTimeStr: "201902102213",
            remainTicketType: 0,
            aTime: "22:13",
            dayAfter: "",
            tagColor: -1,
            trainNumber: "G17",
            arrStationCode: "NKH",
            sortGroup: 0,
            remainTicketBackgroundColor: 0,
          },
          {
            endStationCode: "HGH",
            remainTicketCount: 0,
            dTimeStr: "201902101904",
            sort: 1,
            time: "3时13分",
            isPreOrder: false,
            extra: "{}",
            trainShowDescColor: -14964294,
            dStation: "北京南",
            date: "2019-02-10",
            remainTicket: "0张",
            priceMsg: "¥443.5",
            dptStationCode: "VNP",
            trainType: "高速动车",
            timeInMinute: 193,
            dStationInfo: true,
            trainStatus: 4,
            dTime: "19:04",
            startStationCode: "VNP",
            isSupportCandidate: false,
            dCity: "北京",
            aStationInfo: false,
            tagCode: -1,
            trainShowDesc: "可抢票",
            robSuccRate: "",
            distance: "965",
            action: {
              menuBackColor: -16728876,
              menuColor: -1,
              clickable: false,
              touchUrl:
                "http://touch.qunar.com/h5/train/flagship/TrainOrderFillRob?startStation=%E5%8C%97%E4%BA%AC%E5%8D%97&endStation=%E5%8D%97%E4%BA%AC%E5%8D%97&trainNum=G39&date=2019-02-10&closeUrl=&source=mtrain_rob&bd_source=&seatType=%E4%BA%8C%E7%AD%89%E5%BA%A7",
              menu: "抢票",
              topDesc: "0张",
              topDescBackColor: 0,
              topDescColor: -52480,
              id: 2,
            },
            trainStatusDes: "已售空",
            appointment: false,
            ticketInfos: [
              {
                type: "二等座",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "4",
                price: "443.5",
                countColor: -1,
                studentPrice: "333",
                tagColor: -1,
                count: 0,
              },
              {
                type: "一等座",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "3",
                price: "748.5",
                countColor: -1,
                studentPrice: "748.5",
                tagColor: -1,
                count: 0,
              },
              {
                type: "商务座",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "13",
                price: "1403.5",
                countColor: -1,
                studentPrice: "1403.5",
                tagColor: -1,
                count: 0,
              },
            ],
            isSupportCard: true,
            remainTicketColor: -39424,
            aStation: "南京南",
            tagStyleType: 0,
            noTicketSceneOptimise: false,
            aCity: "南京",
            aTimeStr: "201902102217",
            remainTicketType: 0,
            aTime: "22:17",
            dayAfter: "",
            tagColor: -1,
            trainNumber: "G39",
            arrStationCode: "NKH",
            sortGroup: 0,
            remainTicketBackgroundColor: 0,
          },
          {
            endStationCode: "SHH",
            remainTicketCount: 0,
            dTimeStr: "201902101908",
            sort: 2,
            time: "3时23分",
            isPreOrder: false,
            extra: "{}",
            trainShowDescColor: -14964294,
            dStation: "北京南",
            date: "2019-02-10",
            remainTicket: "0张",
            priceMsg: "¥443.5",
            dptStationCode: "VNP",
            trainType: "高速动车",
            timeInMinute: 203,
            dStationInfo: true,
            trainStatus: 4,
            dTime: "19:08",
            startStationCode: "VNP",
            isSupportCandidate: false,
            dCity: "北京",
            aStationInfo: false,
            tagCode: -1,
            trainShowDesc: "可抢票",
            robSuccRate: "",
            distance: "1015",
            action: {
              menuBackColor: -16728876,
              menuColor: -1,
              clickable: false,
              touchUrl:
                "http://touch.qunar.com/h5/train/flagship/TrainOrderFillRob?startStation=%E5%8C%97%E4%BA%AC%E5%8D%97&endStation=%E5%8D%97%E4%BA%AC%E5%8D%97&trainNum=G21&date=2019-02-10&closeUrl=&source=mtrain_rob&bd_source=&seatType=%E4%BA%8C%E7%AD%89%E5%BA%A7",
              menu: "抢票",
              topDesc: "0张",
              topDescBackColor: 0,
              topDescColor: -52480,
              id: 2,
            },
            trainStatusDes: "已售空",
            appointment: false,
            ticketInfos: [
              {
                type: "二等座",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "4",
                price: "443.5",
                countColor: -1,
                studentPrice: "333",
                tagColor: -1,
                count: 0,
              },
              {
                type: "一等座",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "3",
                price: "748.5",
                countColor: -1,
                studentPrice: "748.5",
                tagColor: -1,
                count: 0,
              },
              {
                type: "商务座",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "13",
                price: "1403.5",
                countColor: -1,
                studentPrice: "1403.5",
                tagColor: -1,
                count: 0,
              },
            ],
            isSupportCard: true,
            remainTicketColor: -39424,
            aStation: "南京南",
            tagStyleType: 0,
            noTicketSceneOptimise: false,
            aCity: "南京",
            aTimeStr: "201902102231",
            remainTicketType: 0,
            aTime: "22:31",
            dayAfter: "",
            tagColor: -1,
            trainNumber: "G21",
            arrStationCode: "NKH",
            sortGroup: 0,
            remainTicketBackgroundColor: 0,
          },
          {
            endStationCode: "HZH",
            remainTicketCount: 0,
            dTimeStr: "201902101916",
            sort: 9,
            time: "9时29分",
            isPreOrder: false,
            extra: "{}",
            trainShowDescColor: -14964294,
            dStation: "北京",
            date: "2019-02-10",
            remainTicket: "0张",
            priceMsg: "¥233",
            dptStationCode: "BJP",
            trainType: "动车组",
            timeInMinute: 569,
            dStationInfo: true,
            trainStatus: 4,
            dTime: "19:16",
            startStationCode: "BJP",
            isSupportCandidate: false,
            dCity: "北京",
            aStationInfo: false,
            tagCode: -1,
            trainShowDesc: "可抢票",
            robSuccRate: "",
            distance: "2086",
            action: {
              menuBackColor: -16728876,
              menuColor: -1,
              clickable: false,
              touchUrl:
                "http://touch.qunar.com/h5/train/flagship/TrainOrderFillRob?startStation=%E5%8C%97%E4%BA%AC&endStation=%E5%8D%97%E4%BA%AC&trainNum=D717&date=2019-02-10&closeUrl=&source=mtrain_rob&bd_source=&seatType=%E4%BA%8C%E7%AD%89%E5%BA%A7",
              menu: "抢票",
              topDesc: "0张",
              topDescBackColor: 0,
              topDescColor: -52480,
              id: 2,
            },
            trainStatusDes: "已售空",
            appointment: false,
            ticketInfos: [
              {
                type: "二等座",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "4",
                price: "233",
                countColor: -1,
                studentPrice: "175",
                tagColor: -1,
                count: 0,
              },
              {
                type: "二等卧",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "38",
                price: "408",
                countColor: -1,
                studentPrice: "408",
                tagColor: -1,
                count: 0,
              },
              {
                type: "一等卧",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "36",
                price: "540",
                countColor: -1,
                studentPrice: "540",
                tagColor: -1,
                count: 0,
              },
              {
                type: "无座",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "0",
                price: "233",
                countColor: -1,
                studentPrice: "233",
                tagColor: -1,
                count: 0,
              },
            ],
            isSupportCard: false,
            remainTicketColor: -39424,
            aStation: "南京",
            tagStyleType: 0,
            noTicketSceneOptimise: false,
            aCity: "南京",
            aTimeStr: "201902110445",
            remainTicketType: 0,
            aTime: "04:45",
            dayAfter: "+1",
            tagColor: -1,
            trainNumber: "D717",
            arrStationCode: "NJH",
            sortGroup: 0,
            remainTicketBackgroundColor: 0,
          },
          {
            endStationCode: "AOH",
            remainTicketCount: 0,
            dTimeStr: "201902101936",
            sort: 7,
            time: "9时21分",
            isPreOrder: false,
            extra: "{}",
            trainShowDescColor: -14964294,
            dStation: "北京南",
            date: "2019-02-10",
            remainTicket: "0张",
            priceMsg: "¥231",
            dptStationCode: "VNP",
            trainType: "动车组",
            timeInMinute: 561,
            dStationInfo: true,
            trainStatus: 4,
            dTime: "19:36",
            startStationCode: "VNP",
            isSupportCandidate: false,
            dCity: "北京",
            aStationInfo: false,
            tagCode: -1,
            trainShowDesc: "可抢票",
            robSuccRate: "",
            distance: "2057",
            action: {
              menuBackColor: -16728876,
              menuColor: -1,
              clickable: false,
              touchUrl:
                "http://touch.qunar.com/h5/train/flagship/TrainOrderFillRob?startStation=%E5%8C%97%E4%BA%AC%E5%8D%97&endStation=%E5%8D%97%E4%BA%AC&trainNum=D707&date=2019-02-10&closeUrl=&source=mtrain_rob&bd_source=&seatType=%E4%BA%8C%E7%AD%89%E5%BA%A7",
              menu: "抢票",
              topDesc: "0张",
              topDescBackColor: 0,
              topDescColor: -52480,
              id: 2,
            },
            trainStatusDes: "已售空",
            appointment: false,
            ticketInfos: [
              {
                type: "二等座",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "4",
                price: "231",
                countColor: -1,
                studentPrice: "174",
                tagColor: -1,
                count: 0,
              },
              {
                type: "二等卧",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "38",
                price: "405",
                countColor: -1,
                studentPrice: "405",
                tagColor: -1,
                count: 0,
              },
              {
                type: "一等卧",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "36",
                price: "536",
                countColor: -1,
                studentPrice: "536",
                tagColor: -1,
                count: 0,
              },
              {
                type: "无座",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "0",
                price: "231",
                countColor: -1,
                studentPrice: "231",
                tagColor: -1,
                count: 0,
              },
            ],
            isSupportCard: true,
            remainTicketColor: -39424,
            aStation: "南京",
            tagStyleType: 0,
            noTicketSceneOptimise: false,
            aCity: "南京",
            aTimeStr: "201902110457",
            remainTicketType: 0,
            aTime: "04:57",
            dayAfter: "+1",
            tagColor: -1,
            trainNumber: "D707",
            arrStationCode: "NJH",
            sortGroup: 0,
            remainTicketBackgroundColor: 0,
          },
          {
            endStationCode: "SHH",
            remainTicketCount: 0,
            dTimeStr: "201902102005",
            sort: 12,
            time: "11时38分",
            isPreOrder: false,
            extra: "{}",
            trainShowDescColor: -14964294,
            dStation: "北京",
            date: "2019-02-10",
            remainTicket: "0张",
            priceMsg: "¥148.5",
            dptStationCode: "BJP",
            trainType: "空调特快",
            timeInMinute: 698,
            dStationInfo: true,
            trainStatus: 4,
            dTime: "20:05",
            startStationCode: "BJP",
            isSupportCandidate: false,
            dCity: "北京",
            aStationInfo: false,
            tagCode: -1,
            trainShowDesc: "可抢票",
            robSuccRate: "",
            distance: "1629",
            action: {
              menuBackColor: -16728876,
              menuColor: -1,
              clickable: false,
              touchUrl:
                "http://touch.qunar.com/h5/train/flagship/TrainOrderFillRob?startStation=%E5%8C%97%E4%BA%AC&endStation=%E5%8D%97%E4%BA%AC&trainNum=T109&date=2019-02-10&closeUrl=&source=mtrain_rob&bd_source=&seatType=%E7%A1%AC%E5%BA%A7",
              menu: "抢票",
              topDesc: "0张",
              topDescBackColor: 0,
              topDescColor: -52480,
              id: 2,
            },
            trainStatusDes: "已售空",
            appointment: false,
            ticketInfos: [
              {
                type: "硬座",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "1",
                price: "148.5",
                countColor: -1,
                studentPrice: "75",
                tagColor: -1,
                count: 0,
              },
              {
                type: "硬卧",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "5",
                price: "272.5",
                countColor: -1,
                studentPrice: "199",
                tagColor: -1,
                count: 0,
              },
              {
                type: "软卧",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "8",
                price: "415.5",
                countColor: -1,
                studentPrice: "415.5",
                tagColor: -1,
                count: 0,
              },
              {
                type: "高级软卧",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "10",
                price: "765.5",
                countColor: -1,
                studentPrice: "765.5",
                tagColor: -1,
                count: 0,
              },
              {
                type: "无座",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "0",
                price: "148.5",
                countColor: -1,
                studentPrice: "75",
                tagColor: -1,
                count: 0,
              },
            ],
            isSupportCard: false,
            remainTicketColor: -39424,
            aStation: "南京",
            tagStyleType: 0,
            noTicketSceneOptimise: false,
            aCity: "南京",
            aTimeStr: "201902110743",
            remainTicketType: 0,
            aTime: "07:43",
            dayAfter: "+1",
            tagColor: -1,
            trainNumber: "T109",
            arrStationCode: "NJH",
            sortGroup: 0,
            remainTicketBackgroundColor: 0,
          },
          {
            endStationCode: "SHH",
            remainTicketCount: 0,
            dTimeStr: "201902102121",
            sort: 8,
            time: "9时24分",
            isPreOrder: false,
            extra: "{}",
            trainShowDescColor: -14964294,
            dStation: "北京",
            date: "2019-02-10",
            remainTicket: "0张",
            priceMsg: "¥233",
            dptStationCode: "BJP",
            trainType: "动车组",
            timeInMinute: 564,
            dStationInfo: true,
            trainStatus: 4,
            dTime: "21:21",
            startStationCode: "BJP",
            isSupportCandidate: false,
            dCity: "北京",
            aStationInfo: false,
            tagCode: -1,
            trainShowDesc: "可抢票",
            robSuccRate: "",
            distance: "2068",
            action: {
              menuBackColor: -16728876,
              menuColor: -1,
              clickable: false,
              touchUrl:
                "http://touch.qunar.com/h5/train/flagship/TrainOrderFillRob?startStation=%E5%8C%97%E4%BA%AC&endStation=%E5%8D%97%E4%BA%AC&trainNum=D705&date=2019-02-10&closeUrl=&source=mtrain_rob&bd_source=&seatType=%E4%BA%8C%E7%AD%89%E5%BA%A7",
              menu: "抢票",
              topDesc: "0张",
              topDescBackColor: 0,
              topDescColor: -52480,
              id: 2,
            },
            trainStatusDes: "已售空",
            appointment: false,
            ticketInfos: [
              {
                type: "二等座",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "4",
                price: "233",
                countColor: -1,
                studentPrice: "175",
                tagColor: -1,
                count: 0,
              },
              {
                type: "二等卧",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "38",
                price: "408",
                countColor: -1,
                studentPrice: "408",
                tagColor: -1,
                count: 0,
              },
              {
                type: "一等卧",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "36",
                price: "501",
                countColor: -1,
                studentPrice: "501",
                tagColor: -1,
                count: 0,
              },
              {
                type: "无座",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "0",
                price: "233",
                countColor: -1,
                studentPrice: "233",
                tagColor: -1,
                count: 0,
              },
            ],
            isSupportCard: false,
            remainTicketColor: -39424,
            aStation: "南京",
            tagStyleType: 0,
            noTicketSceneOptimise: false,
            aCity: "南京",
            aTimeStr: "201902110645",
            remainTicketType: 0,
            aTime: "06:45",
            dayAfter: "+1",
            tagColor: -1,
            trainNumber: "D705",
            arrStationCode: "NJH",
            sortGroup: 0,
            remainTicketBackgroundColor: 0,
          },
          {
            endStationCode: "NJH",
            remainTicketCount: 0,
            dTimeStr: "201902102244",
            sort: 10,
            time: "9时30分",
            isPreOrder: false,
            extra: "{}",
            trainShowDescColor: -14964294,
            dStation: "北京南",
            date: "2019-02-10",
            remainTicket: "0张",
            priceMsg: "¥231",
            dptStationCode: "VNP",
            trainType: "动车组",
            timeInMinute: 570,
            dStationInfo: true,
            trainStatus: 4,
            dTime: "22:44",
            startStationCode: "VNP",
            isSupportCandidate: false,
            dCity: "北京",
            aStationInfo: true,
            tagCode: -1,
            trainShowDesc: "可抢票",
            robSuccRate: "",
            distance: "2090",
            action: {
              menuBackColor: -16728876,
              menuColor: -1,
              clickable: false,
              touchUrl:
                "http://touch.qunar.com/h5/train/flagship/TrainOrderFillRob?startStation=%E5%8C%97%E4%BA%AC%E5%8D%97&endStation=%E5%8D%97%E4%BA%AC&trainNum=D715&date=2019-02-10&closeUrl=&source=mtrain_rob&bd_source=&seatType=%E4%BA%8C%E7%AD%89%E5%BA%A7",
              menu: "抢票",
              topDesc: "0张",
              topDescBackColor: 0,
              topDescColor: -52480,
              id: 2,
            },
            trainStatusDes: "已售空",
            appointment: false,
            ticketInfos: [
              {
                type: "二等座",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "4",
                price: "231",
                countColor: -1,
                studentPrice: "174",
                tagColor: -1,
                count: 0,
              },
              {
                type: "二等卧",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "38",
                price: "405",
                countColor: -1,
                studentPrice: "405",
                tagColor: -1,
                count: 0,
              },
              {
                type: "一等卧",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "36",
                price: "536",
                countColor: -1,
                studentPrice: "536",
                tagColor: -1,
                count: 0,
              },
              {
                type: "无座",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "0",
                price: "231",
                countColor: -1,
                studentPrice: "231",
                tagColor: -1,
                count: 0,
              },
            ],
            isSupportCard: true,
            remainTicketColor: -39424,
            aStation: "南京",
            tagStyleType: 0,
            noTicketSceneOptimise: false,
            aCity: "南京",
            aTimeStr: "201902110814",
            remainTicketType: 0,
            aTime: "08:14",
            dayAfter: "+1",
            tagColor: -1,
            trainNumber: "D715",
            arrStationCode: "NJH",
            sortGroup: 0,
            remainTicketBackgroundColor: 0,
          },
          {
            endStationCode: "RZH",
            remainTicketCount: 0,
            dTimeStr: "201902102320",
            sort: 13,
            time: "14时27分",
            isPreOrder: false,
            extra: "{}",
            trainShowDescColor: -14964294,
            dStation: "北京",
            date: "2019-02-10",
            remainTicket: "0张",
            priceMsg: "¥148.5",
            dptStationCode: "BJP",
            trainType: "快速",
            timeInMinute: 867,
            dStationInfo: true,
            trainStatus: 4,
            dTime: "23:20",
            startStationCode: "BJP",
            isSupportCandidate: false,
            dCity: "北京",
            aStationInfo: false,
            tagCode: -1,
            trainShowDesc: "可抢票",
            robSuccRate: "",
            distance: "1734",
            action: {
              menuBackColor: -16728876,
              menuColor: -1,
              clickable: false,
              touchUrl:
                "http://touch.qunar.com/h5/train/flagship/TrainOrderFillRob?startStation=%E5%8C%97%E4%BA%AC&endStation=%E5%8D%97%E4%BA%AC&trainNum=K101&date=2019-02-10&closeUrl=&source=mtrain_rob&bd_source=&seatType=%E7%A1%AC%E5%BA%A7",
              menu: "抢票",
              topDesc: "0张",
              topDescBackColor: 0,
              topDescColor: -52480,
              id: 2,
            },
            trainStatusDes: "已售空",
            appointment: false,
            ticketInfos: [
              {
                type: "硬座",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "1",
                price: "148.5",
                countColor: -1,
                studentPrice: "75",
                tagColor: -1,
                count: 0,
              },
              {
                type: "硬卧",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "5",
                price: "272.5",
                countColor: -1,
                studentPrice: "199",
                tagColor: -1,
                count: 0,
              },
              {
                type: "软卧",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "8",
                price: "415.5",
                countColor: -1,
                studentPrice: "415.5",
                tagColor: -1,
                count: 0,
              },
              {
                type: "无座",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "0",
                price: "148.5",
                countColor: -1,
                studentPrice: "75",
                tagColor: -1,
                count: 0,
              },
            ],
            isSupportCard: false,
            remainTicketColor: -39424,
            aStation: "南京",
            tagStyleType: 0,
            noTicketSceneOptimise: false,
            aCity: "南京",
            aTimeStr: "201902111347",
            remainTicketType: 0,
            aTime: "13:47",
            dayAfter: "+1",
            tagColor: -1,
            trainNumber: "K101",
            arrStationCode: "NJH",
            sortGroup: 0,
            remainTicketBackgroundColor: 0,
          },
          {
            endStationCode: "AOH",
            remainTicketCount: 0,
            dTimeStr: "201902101716",
            sort: 3,
            time: "4时27分",
            isPreOrder: false,
            extra: "{}",
            trainShowDescColor: -1,
            dStation: "北京南",
            date: "2019-02-10",
            remainTicket: "",
            priceMsg: "¥443.5",
            dptStationCode: "VNP",
            trainType: "高速动车",
            timeInMinute: 267,
            dStationInfo: true,
            trainStatus: 2,
            dTime: "17:16",
            startStationCode: "VNP",
            isSupportCandidate: false,
            dCity: "北京",
            aStationInfo: false,
            tagCode: -1,
            robSuccRate: "",
            distance: "1335",
            trainStatusDes: "已停售",
            appointment: false,
            ticketInfos: [
              {
                type: "二等座",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "4",
                price: "443.5",
                countColor: -1,
                studentPrice: "333",
                tagColor: -1,
                count: -1,
              },
              {
                type: "一等座",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "3",
                price: "748.5",
                countColor: -1,
                studentPrice: "748.5",
                tagColor: -1,
                count: -1,
              },
              {
                type: "商务座",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "13",
                price: "1403.5",
                countColor: -1,
                studentPrice: "1403.5",
                tagColor: -1,
                count: -1,
              },
              {
                type: "无座",
                paperAccept: 0,
                defaultSeatCheckStatus: 0,
                typeColor: -1,
                wxSaleStatus: 0,
                isUncheckable: 0,
                ticketId: "0",
                price: "443.5",
                countColor: -1,
                studentPrice: "443.5",
                tagColor: -1,
                count: -1,
              },
            ],
            isSupportCard: true,
            remainTicketColor: 0,
            aStation: "南京南",
            tagStyleType: 0,
            noTicketSceneOptimise: false,
            aCity: "南京",
            aTimeStr: "201902102143",
            remainTicketType: 0,
            aTime: "21:43",
            dayAfter: "",
            tagColor: -1,
            trainNumber: "G153",
            arrStationCode: "NKH",
            sortGroup: 0,
            remainTicketBackgroundColor: 0,
          },
        ],
        dptRealCity: "北京",
        arrRealCity: "南京",
        arr: "南京",
        aCity: "南京",
        trainTypeFilter: {
          trainType: [
            {
              value: "0",
              name: "全部",
            },
            {
              value: "5,1",
              name: "高铁/动车 (G/D)",
            },
            {
              value: "3,2,4",
              name: "直达/特快/快速 (Z/T/K)",
            },
          ],
        },
        filter: {
          station: [
            {
              value: "北京",
              name: "北京",
            },
            {
              value: "南京",
              name: "南京",
            },
            {
              value: "南京南",
              name: "南京南",
            },
            {
              value: "北京南",
              name: "北京南",
            },
          ],
          arrStation: [
            {
              value: "南京南",
              name: "南京南",
            },
            {
              value: "南京",
              name: "南京",
            },
          ],
          stationType: [
            {
              value: "1",
              name: "始发",
            },
            {
              value: "2",
              name: "过路",
            },
            {
              value: "3",
              name: "终到",
            },
          ],
          arriTimeRange: [
            {
              value: "1",
              name: "上午：6-12点",
            },
            {
              value: "2",
              name: "中午：12-14点",
            },
            {
              value: "4",
              name: "晚上：18-6点",
            },
          ],
          trainType: [
            {
              value: "5",
              name: "G-高速动车",
            },
            {
              value: "1",
              name: "D-动车组",
            },
            {
              value: "3",
              name: "Z-直达特快",
            },
            {
              value: "2",
              name: "T-空调特快",
            },
            {
              value: "4",
              name: "K-快速",
            },
          ],
          depStation: [
            {
              value: "北京南",
              name: "北京南",
            },
            {
              value: "北京",
              name: "北京",
            },
          ],
          ticketType: [
            {
              value: "7",
              name: "高级软卧",
            },
            {
              value: "10",
              name: "无座",
            },
            {
              value: "1",
              name: "硬座",
            },
            {
              value: "3",
              name: "一等座",
            },
            {
              value: "5",
              name: "硬卧",
            },
            {
              value: "6",
              name: "软卧",
            },
            {
              value: "25",
              name: "一等卧",
            },
            {
              value: "9",
              name: "商务座",
            },
            {
              value: "4",
              name: "二等座",
            },
            {
              value: "26",
              name: "二等卧",
            },
          ],
          deptTimeRange: [
            {
              value: "3",
              name: "下午：14-18点",
            },
            {
              value: "4",
              name: "晚上：18-6点",
            },
          ],
        },
        sortRuleList: [
          {
            value: "7",
            selected: true,
            name: "推荐排序",
          },
          {
            value: "3",
            selected: false,
            name: "出发   早→晚",
          },
          {
            value: "4",
            selected: false,
            name: "出发   晚→早",
          },
          {
            value: "0",
            selected: false,
            name: "运行   短→长",
          },
          {
            value: "1",
            selected: false,
            name: "票价   低→高",
          },
          {
            value: "2",
            selected: false,
            name: "票价   高→低",
          },
        ],
        dep: "北京",
        wwwPreSalePeriod: 30,
        count: 14,
        dCity: "北京",
      },
      flag: true,
      recommendTrainJoint: 1,
      searchInnerCat: "ssxcnxcn",
      needQunarClientCrawl: false,
      status: 0,
      showBanner: true,
      trainSearchType: 1,
      ypSource: 0,
      searchType: 1,
      fit: false,
      showNewTrafficSearchPage: false,
      todayWeekday: "星期日",
      showChangeStationEntrance: false,
      webViews: [],
      cacheUserEnteredNewSearchPage: true,
    },
  };

  response.dataMap.directTrainInfo.trains = lodash.shuffle(response.dataMap.directTrainInfo.trains);
  return res.json(response);
});
router.get("/rest/ticket", (req, res) => {
  const { date } = req.query;
  return res.json({
    detail: {
      departTimeStr: "07:15",
      arriveTimeStr: "11:47",
      arriveDate: dayjs(date).valueOf(),
      durationStr: "4小时32分",
    },
    candidates: [
      {
        type: "二等座",
        priceMsg: "443.5",
        ticketsLeft: "有票",
        channels: [
          {
            name: "快速预订",
            desc: "含40元出行保障 快速出票 迅捷无忧",
          },
          {
            name: "普通预订",
            desc: "出票较慢，高峰期需要排队",
          },
        ],
      },
      {
        type: "一等座",
        priceMsg: "748.5",
        ticketsLeft: "有票",
        channels: [
          {
            name: "快速预订",
            desc: "含40元出行保障 快速出票 迅捷无忧",
          },
          {
            name: "普通预订",
            desc: "出票较慢，高峰期需要排队",
          },
        ],
      },
      {
        type: "商务座",
        priceMsg: "1403.5",
        ticketsLeft: "5张",
        channels: [
          {
            name: "快速预订",
            desc: "含40元出行保障 快速出票 迅捷无忧",
          },
          {
            name: "普通预订",
            desc: "出票较慢，高峰期需要排队",
          },
        ],
      },
    ],
  });
});
router.get("/rest/schedule", (req, res) => {
  return res.json([
    {
      station: "北京南",
      arriveTime: null,
      departTime: "07:20",
      stay: null,
    },
    {
      station: "天津南",
      arriveTime: "07:54",
      departTime: "07:56",
      stay: 2,
    },
    {
      station: "南京南",
      arriveTime: "11:51",
      departTime: "11:53",
      stay: 2,
    },
    {
      station: "上海虹桥",
      arriveTime: "13:08",
      departTime: null,
      stay: null,
    },
  ]);
});
router.get("/rest/order", (req, res) => {
  const { date } = req.query;
  return res.json({
    departTimeStr: "07:15",
    arriveTimeStr: "11:47",
    arriveDate: dayjs(date).valueOf(),
    durationStr: "4小时32分",
    price: 483.5,
  });
});

app.use("/.netlify/functions/Api", router);

module.exports.handler = serverless(app);
