var questions = [{
    "title": "“XX先生您好，我是平安查勘员小张，人没事就好，给您造成的损失实在抱歉，后续事故交给我处理，请放心”，这段话没有的动作是？",
    "options": [
      "礼貌问候",
      "自我介绍",
      "安抚客户",
      "提醒客户注意安全"
    ],
    "answer": [
      false,
      false,
      false,
      true
    ]
  },
  {
    "title": "以下哪个场景不属于结案支付？",
    "options": [
      "支付到账慢",
      "垫付自己费用",
      "支付退回",
      "让客户提供材料"
    ],
    "answer": [
      false,
      false,
      false,
      true
    ]
  },

  {
    "title": "“先生您好，我是理赔员小张”，这句话对应的动作是？",
    "options": [
      "礼貌问候，自我介绍",
      "表达歉意",
      "说明情况",
      "解释原因"
    ],
    "answer": [
      true,
      false,
      false,
      false
    ]
  },
  {
    "title": "客户报案后，查勘员不能到达现场，不能做的是？",
    "options": [
      "向客户致歉",
      "说明不能到的原因",
      "为客户提供替代处理方式",
      "做完手里事再联系"
    ],
    "answer": [
      false,
      false,
      false,
      true
    ]
  },
  {
    "title": "客户报案后，理赔员没有及时联系客户，不应该？",
    "options": [
      "向客户致歉",
      "向客户承诺到达时间",
      "说明长时间未联系原因",
      "向客户抱怨"
    ],
    "answer": [
      false,
      false,
      false,
      true
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