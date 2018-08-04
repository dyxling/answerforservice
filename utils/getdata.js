var questions = [{
    "title": "由百位明星共同演唱的奥运歌曲《北京欢迎你》的曲作者是谁？",
    "options": [
      "李宇春",
      "那英",
      "孙燕姿",
      "小柯"
    ],
    "answer": [
      false,
      false,
      false,
      true
    ]
  },
  {
    "title": "电视剧《情深深雨蒙蒙》中饰演“杜飞”的是哪位台湾男星？",
    "options": [
      "苏有朋",
      "古巨基",
      "高鑫",
      "吴奇隆"
    ],
    "answer": [
      true,
      false,
      false,
      false
    ]
  },

  {
    "title": "韩剧《大长今》中饰演闵政浩，主演了《如果爱》的男星是谁？",
    "options": [
      "池珍熙",
      "金贤重",
      "李准基",
      "李敏镐"
    ],
    "answer": [
      true,
      false,
      false,
      false
    ]
  },
  {
    "title": "陈景润是被哪个数学家发掘并培养的？",
    "options": [
      "丘成桐",
      "陈省身",
      "苏步青",
      "华罗庚"
    ],
    "answer": [
      false,
      false,
      false,
      true
    ]
  },
  {
    "title": "白宫时美国总统的官邸，那么爱丽舍宫是哪个欧洲国家的总统的官邸？",
    "options": [
      "爱尔兰",
      "英国",
      "法国",
      "比利时"
    ],
    "answer": [
      false,
      false,
      true,
      false
    ]
  },
  {
    "title": "现场人员首次和客户接触时，第一个动作是？",
    "options": [
      "礼貌问候，自我介绍",
      "直接拍照",
      "向客户介绍流程",
      "让客户先开口"
    ],
    "answer": [
      true,
      false,
      false,
      false
    ]
  }
]

function read_local() {
  var maxLen = questions.length;
  var result = Math.floor(Math.random() * maxLen);
  return questions[result];
}

module.exports = {
  read_local:read_local
};