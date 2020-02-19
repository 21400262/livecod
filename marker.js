//확진자수와 완치자수
//질병관리본부와 KBS 뉴스 페이지 참고 바랍니다.
//확인사항 1. 일본 크루즈 업데이트 주의 바랍니다.
//확인사항 2. 한국은 완치자 수가 있습니다.
var marker = [
    {
        "Name": "이집트",
        "Name_en": "Egypt",
        "Name_ch": "埃及",
        "lat": 30.0594838,
        "lng": 31.2234448,
        "확진자수": 1,
        "사망자수": 0,
        "추가날짜": "2/16"
    }, {
        "Name": "벨기에",
        "Name_en": "Belgium",
        "Name_ch": "比利时",
        "lat": 50.8550625,
        "lng": 4.3053503,
        "확진자수": 1,
        "사망자수": 0,
        "완치자수": 1,
        "추가날짜": "2/5"
    }, {
        "Name": "스페인",
        "Name_en": "Spain",
        "Name_ch": "西班牙",
        "lat": 40.4378698,
        "lng": -3.8196189,
        "확진자수": 2,
        "사망자수": 0,
        "완치자수": 2,
        "추가날짜": "2/2"
    }, {
        "Name": "스웨덴",
        "Name_en": "Sweden",
        "Name_ch": "瑞典语",
        "lat": 59.3260668,
        "lng": 17.8419725,
        "확진자수": 1,
        "사망자수": 0,
        "추가날짜": "2/2"
    }, {
        "Name": "이탈리아",
        "Name_en": "Italy",
        "Name_ch": "义大利",
        "lat": 41.902782,
        "lng": 12.496366,
        "확진자수": 3,
        "사망자수": 0,
        "추가날짜": "2/1"
    }, {
        "Name": "러시아",
        "Name_en": "Russia",
        "Name_ch": "俄罗斯",
        "lat": 55.751244,
        "lng": 37.618423,
        "확진자수": 2,
        "사망자수": 0,
        "완치자수": 2,
        "추가날짜": "2/1"
    }, {
        "Name": "캐나다",
        "Name_en": "Canada",
        "Name_ch": "加拿大",
        "lat": 54.7235693,
        "lng": -113.7164202,
        "확진자수": 8,
        "사망자수": 0,
        "완치자수": 1
    }, {
        "Name": "미국",
        "Name_en": "United States",
        "Name_ch": "美国",
        "lat": 37.2757368,
        "lng": -104.6549972,
        "확진자수": 15,
        "사망자수": 0,
        "완치자수": 3
    }, {
        "Name": "핀란드",
        "Name_en": "Finland",
        "Name_ch": "芬兰",
        "lat": 60.1102086,
        "lng": 24.7378224,
        "확진자수": 1,
        "사망자수": 0,
        "완치자수": 1
    }, {
        "Name": "프랑스",
        "Name_en": "France",
        "Name_ch": "法国",
        "lat": 46.1390503,
        "lng": -2.4346589,
        "확진자수": 12,
        "사망자수": 1,
        "완치자수": 4
    }, {
        "Name": "영국",
        "Name_en": "United Kingdom",
        "Name_ch": "英国",
        "lat": 51.509865,
        "lng": -0.118092,
        "확진자수": 9,
        "사망자수": 0,
        "추가날짜": "2/1",
        "완치자수": 8
    }, {
        "Name": "네팔",
        "Name_en": "Nepal",
        "Name_ch": "尼泊尔",
        "lat": 28.3838445,
        "lng": 81.8867804,
        "확진자수": 1,
        "사망자수": 0,
        "완치자수": 1
    }, {
        "Name": "마카오",
        "Name_en": "Macau",
        "Name_ch": "澳门",
        "lat": 22.1619078,
        "lng": 113.5351333,
        "확진자수": 10,
        "사망자수": 0,
        "완치자수": 5
    }, {
        "Name": "홍콩",
        "Name_en": "Hong Kong",
        "Name_ch": "香港",
        "lat": 22.3529808,
        "lng": 113.9876162,
        "확진자수": 60,
        "사망자수": 1,
        "완치자수": 2
    }, {
        "Name": "태국",
        "Name_en": "Thailand",
        "Name_ch": "泰国",
        "lat": 13.0110763,
        "lng": 96.9952628,
        "확진자수": 35,
        "사망자수": 0,
        "완치자수": 15
    }, {
        "Name": "호주",
        "Name_en": "Australia",
        "Name_ch": "澳大利亚",
        "lat": -24.9936027,
        "lng": 115.2351577,
        "확진자수": 15,
        "사망자수": 0,
        "완치자수": 10
    }, {
        "Name": "싱가포르",
        "Name_en": "Singapore",
        "Name_ch": "新加坡",
        "lat": 1.3143394,
        "lng": 103.7041659,
        "확진자수": 81,
        "사망자수": 0,
        "완치자수": 29
    }, {
        "Name": "말레이시아",
        "Name_en": "Malaysia",
        "Name_ch": "马来西亚",
        "lat": 4.1389178,
        "lng": 105.1226078,
        "확진자수": 22,
        "사망자수": 0,
        "완치자수": 13
    }, {
        "Name": "캄보디아",
        "Name_en": "Cambodia",
        "Name_ch": "柬埔寨",
        "lat": 12.1458696,
        "lng": 103.8594161,
        "확진자수": 1,
        "사망자수": 0,
        "완치자수": 1
    }, {
        "Name": "베트남",
        "Name_en": "Vietnam",
        "Name_ch": "越南",
        "lat": 15.7583637,
        "lng": 101.4157502,
        "확진자수": 16,
        "사망자수": 0,
        "완치자수": 7
    }, {
        "Name": "필리핀",
        "Name_en": "Philippines",
        "Name_ch": "菲律宾",
        "lat": 14.5965787,
        "lng": 120.9444545,
        "확진자수": 3,
        "사망자수": 1,
        "완치자수": 1
    }, {
        "Name": "대만",
        "Name_en": "Taiwan",
        "Name_ch": "台湾",
        "lat": 25.0174719,
        "lng": 121.3662943,
        "확진자수": 22,
        "사망자수": 1,
        "완치자수": 2
    }, {
        "Name": "스리랑카",
        "Name_en": "Sri Lanka",
        "Name_ch": "斯里兰卡",
        "lat": 7.8589214,
        "lng": 79.5850432,
        "확진자수": 1,
        "사망자수": 0,
        "완치자수": 1
    }, {
        "Name": "독일",
        "Name_en": "Germany",
        "Name_ch": "德国",
        "lat": 51.0968735,
        "lng": 5.9694438,
        "확진자수": 16,
        "사망자수": 0,
        "완치자수": 12
    }, {
        "Name": "인도",
        "Name_en": "India",
        "Name_ch": "印度",
        "lat": 28.5274228,
        "lng": 77.1387735,
        "확진자수": 3,
        "사망자수": 0,
        "완치자수": 3
    }, {
        "Name": "아랍에미리트",
        "Name_en": "United Arab Emirates",
        "Name_ch": "阿拉伯联合酋长国",
        "lat": 24.3870789,
        "lng": 54.4185368,
        "확진자수": 9,
        "사망자수": 0,
        "완치자수": 4
    }, {
        "Name": "중국",
        "Name_en": "China",
        "Name_ch": "中国",
        "lat": 39.9385466,
        "lng": 116.117281,
        "확진자수": 74185,
        "사망자수": 2004,
        "완치자수": 14264
    }, {
        "Name": "일본",
        "Name_en": "Japan",
        "Name_ch": "日本",
        "lat": 34.6777642,
        "lng": 135.4160247,
        "확진자수": 73,
        "사망자수": 1,
        "완치자수": 13
    }, {
        "Name": "일본크루즈",
        "Name_en": "Japan Cruise ship",
        "Name_ch": "日本 邮轮",
        "lat": 34.6777642,
        "lng": 135.4160247,
        "확진자수": 542,
        "사망자수": 0
    },
    {
        "Name": "한국",
        "Name_en": "Korea, Republic of",
        "Name_ch": "韩国",
        "lat": 37.5456299,
        "lng": 126.9540667,
        "확진자수": 47,
        "사망자수": 0,
        "완치자수": 12,
        "검사진행": 1030,
    }
];

// 선차트용 데이터 세계 확진자수, 세계 사망자수, 세계 완치자수
// 세계 확진자수, 세계 사망자수는 질병관리본부 데이터 근거
// 세계 완치자수는 존스 홉킨스 코로나 맵 데이터에 근거
// 존스홉킨스 : https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6
// data : 확진환자
// data2 : 사망
// data3 : 완치자
data2 :
var marker2 = {
    labels: ["1/24", "1/25", "1/26", "1/27", "1/28", "1/29", "1/30", "1/31", "2/1", "2/2", "2/3", "2/4", "2/5", "2/6","2/7","2/8","2/9", "2/10", "2/11", "2/12", "2/13", "2/14", "2/15", "2/16", "2/17", "2/18", "2/19"],
    data: [845, 1315, 2010, 2794, 4576, 6056, 7812, 9812, 11925, 14550, 17378, 20619, 24524, 28253, 31422, 34929, 37607, 40597, 45228, 45260, 45171, 64420, 67097, 69195, 71673, 73326, 75196],
    data2: [25, 41, 56, 80, 106, 132, 170, 213, 259, 304, 362, 426, 492, 565, 638, 724, 813, 910, 1016, 1115, 1115, 1382, 1526, 1669, 1775, 1873, 2009],
    data3: [36, 49, 54, 63, 110, 133, 141, 220, 284, 487, 621, 899, 1100, 1500, 2000, 2600, 3200, 3300, 3957, 4849, 5924, 6982, 8158, 9600, 10892, 12604, 14417]
}

// 선차트용 데이터
// 바울랩 메일 참고

var 입도객현황 = {
    날짜: ["19년평균", "2/4", "2/5", "2/6", "2/7", "2/8","2/9", "2/10", "2/11", "2/12" , "2/13", "2/16", "2/17"],
    내국인: [37150, 19209, 17633, 15873, 17184, 20488, 18959, 19074, 18922, 18720, 24409, 26120, 25105],
    외국인: [4729, 1866, 1285, 1247, 1280, 1127, 976, 906, 1003, 755, 793 , 769, 639],
    중국인: [2957, 755, 156, 116, 157, 86, 209, 66, 76, 103, 52, 186, 6]
}

// 제주지역선별진료소
var 제주지역선별진료소 = [{
        "이름": "제주대학교병원",
        "lat": "33.4670605",
        "lng": "126.5370226",
        "주소": "제주 제주시 아란13길 15",
        "전화번호": "064-717-1075"
    },
    {
        "이름": "한마음병원",
        "lat": "33.4962918",
        "lng": "126.5374979",
        "주소": "제주 제주시 연신로 52",
        "전화번호": "064-750-9000"
    },
    {
        "이름": "서귀포의료원",
        "lat": "33.254995",
        "lng": "126.5625628",
        "주소": "제주 서귀포시 장수로 47",
        "전화번호": "064-730-3000"
    },
    {
        "이름": "한국병원",
        "lat": "33.5002078",
        "lng": "126.5148722",
        "주소": "제주 제주시 서광로 193",
        "전화번호": "064-750-0000"
    },
    {
        "이름": "제주한라병원",
        "lat": "33.4899863",
        "lng": "126.4829032",
        "주소": "제주 제주시 도령로 65",
        "전화번호": "064-740-5975"
    },
    {
        "이름": "중앙병원",
        "lat": "33.4922645",
        "lng": "126.4685369",
        "주소": "제주 제주시 월랑로 91",
        "전화번호": "064-786-7000"
    },
    {
        "이름": "서귀포열린병원",
        "lat": "33.2544248",
        "lng": "126.5632242",
        "주소": "제주 서귀포시 일주동로 8638",
        "전화번호": "064-762-8001"
    }
];

// This is a bad way to copy, but for now it will suffice.
// 네이버 지도 API가 로드된 후 marker를 수정하기 때문에 일단 copy를 진행하지만 수정이 필요한 코드입니다.
var _marker = JSON.parse(JSON.stringify(marker));

// 업데이트 일시 데이터
var updateLog = {
  date: "2/19",
  time: "10:00"
};
