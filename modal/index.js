/*
serviceRegisterModal = {
	"text": "친절한 거북씨",
	"blocks": [
          {
            type: 'action',
				elements: [
				  {
					type: "button",
					action_type: "submit_action",
					text: "빠른",
					style: "primary",
					value: '3',
					action_name: 'active'
				  },
				  {
					type: "button",
					action_type: "submit_action",
					text: "보통",
					style: "default",
					value: '2',
					action_name: 'active'
				  },
					{
					type: "button",
					action_type: "submit_action",
					text: "느린",
					style: "danger",
					value: '1',
					action_name: 'active'
				  }
				]
          },
          {
			  type: "button",
			  text: "오늘은 괜찮아요",
			  style : "default",
			  action_type : "submit_action",
			  value: "0",
			  action_name: 'reject'
		  },
        ]
}
*/

serviceRegisterModal = {
	"text": "안녕~ 거북이 친구!",
  "blocks": [
	{
	  "type": "image_link",
	  "url": "https://swm-chatbot-p5mv0r-txnuvo.run.goorm.io/static/today_turtle.gif"
	},
    {
      "type": "text",
      "text": "*WELCOME 친절한 거북씨🐢*",
      "markdown": true
    },
    {
      "type": "divider"
    },
    {
      "type": "text",
      "text": "거-하! *친절한 거북씨* 입니다🐢\nPC를 사용하는 여러분들이\n거북목을 유지하지 않도록...!\n친절한 거북씨가 도와 드릴게요🙌🏻",
      "markdown": true
    },
    {
      "type": "text",
      "text": "*오늘의 거북씨*를 선택하세요!\n알림의 빈도 순서는\n빡센 > 평범한 > 느긋한 입니다!",
      "markdown": true
    },
    {
      "type": "text",
      "text": "선택 후, 기다리기만 하세요!\n거북씨가 알림을 줄 거예요😃\n만약 알림을 받고 싶지 않다면,\n휴식하는 거북이를 선택해주세요!",
      "markdown": true
    },
    {
      "type": "text",
      "text": "거북씨와 *스트레칭* 타임,\n다른 유저에게 *일일 거북씨* 되기\n등등의 기능도 사용해보세요!\n친절한 거북씨가 늘 함께 할게요!😃",
      "markdown": true
    },
    {
      "type": "divider"
    },
    {
	  type: "button",
	  text: "오늘의 거북씨 만나기 🐢",
	  style : "primary",
	  action_type : "call_modal",
	  value: "1",
	  action_name: 'start'
	}
  ]
}

serviceRegisterAgainModal = {
	"text": "안녕~ 거북이 친구!",
	"blocks": [
		{
		  "type": "image_link",
		  "url": "https://swm-chatbot-p5mv0r-txnuvo.run.goorm.io/static/reboot_turtle.gif"
		},
		{
		  "type": "text",
		  "text": "다시 찾아와 주었군요!\n나의 거북씨를 다시 만나볼까요?",
		  "markdown": true
		},
		  {
			  type: "button",
			  text: "나의 거북씨 다시 만나기 🐢",
			  style : "primary",
			  action_type : "call_modal",
			  value: "1",
			  action_name: 'restart'
		  }
    ]
}

// 이거 레벨마다 다른 텍스트 나오게 하고 싶다...!
registerCompleteModal_3 = {
  "text": "나는! 빡센 거북씨!",
  "blocks": [
    {
      "type": "image_link",
      "url": "https://swm-chatbot-p5mv0r-txnuvo.run.goorm.io/static/turtle_three.png"
    },
    {
      "type": "text",
      "text": "헤이! 친구! 오늘 빡세게 한 번 가보자구!\n*열정! 열정! 열정!!!*",
      "markdown": true
    }
  ]
}

registerCompleteModal_2 = {
  "text": "나는! 평범한 거북씨!",
  "blocks": [
    {
      "type": "image_link",
      "url": "https://swm-chatbot-p5mv0r-txnuvo.run.goorm.io/static/turtle_two.png"
    },
    {
      "type": "text",
      "text": "오늘 하루 화이팅 하자구, 거북이 친구!\n*아자! 아자! 아자!*",
      "markdown": true
    }
  ]
}

registerCompleteModal_1 = {
  "text": "나는! 느긋한 거북씨!",
  "blocks": [
    {
      "type": "image_link",
      "url": "https://swm-chatbot-p5mv0r-txnuvo.run.goorm.io/static/turtle_one.png"
    },
    {
      "type": "text",
      "text": "일도 중요하지만 휴식도 중요한 거 알지?\n*거북이 친구, 힘내라구~!*",
      "markdown": true
    }
  ]
}


// 위에랑 같게 해도 될 것 같다!
levelChangeModal_3 = {
  "text": "거북씨! 변경!",
  "blocks": [
    {
      "type": "header",
      "text": "나는! 빡센 거북이! 😡",
      "style": "red"
    },
    {
      "type": "section",
      "accessory": {
        "type": "image_link",
        "url": "https://swm-chatbot-p5mv0r-txnuvo.run.goorm.io/static/turtle_3.png"
      },
		"content": {
		"type": "text",
		"text": "너 열정 넘치는구나?\n오늘 빡세고 열정있게 가보자~! 🔥",
		"markdown": true
      },
    }
  ]
}

levelChangeModal_2 = {
  "text": "거북씨! 변경!",
  "blocks": [
    {
      "type": "header",
      "text": "나는! 평범한 거북이! 😐",
      "style": "red"
    },
    {
      "type": "section",
      "accessory": {
        "type": "image_link",
        "url": "https://swm-chatbot-p5mv0r-txnuvo.run.goorm.io/static/turtle_2.png"
      },
		"content": {
		"type": "text",
		"text": "나 선택해줘서 고마워!\n오늘 열심히 살아보자! 아자! 👊🏻",
		"markdown": true
      },
    }
  ]
}

levelChangeModal_1 = {
  "text": "거북씨! 변경!",
  "blocks": [
    {
      "type": "header",
      "text": "나는! 느긋한 거북이! 😃",
      "style": "red"
    },
    {
      "type": "section",
      "accessory": {
        "type": "image_link",
        "url": "https://swm-chatbot-p5mv0r-txnuvo.run.goorm.io/static/turtle_1.png"
      },
		"content": {
		"type": "text",
		"text": "인생 행복하게 살아야지~\n여유있는 하루 보내자, 친구! 🌸",
		"markdown": true
      },
    }
  ]
}


registerRejectModal = {
  "text": "오늘은! 휴식하는 거북씨!",
  "blocks": [
    {
      "type": "image_link",
      "url": "https://swm-chatbot-p5mv0r-txnuvo.run.goorm.io/static/turtle_zero.gif"
		// "url" : "https://media.giphy.com/media/3ornjM1ow4vbrifDAA/giphy.gif"
    },
    {
      "type": "text",
      "text": "오늘은 푹~ 쉬고,\n내일은 *나를 꼭 찾아줘 거북이 친구!*",
      "markdown": true
    },
	{
      "type": "divider"
    },
	{
      "type": "text",
      "text": "거북씨를 다시 만나고 싶으면,\n아래 *다시 만난 거북씨*를 클릭해주세요!",
      "markdown": true
    },
	{
      type: "button",
      text: "다시 만난 거북씨 🐢",
      style: "primary",
	  value : "reboot",
      action_name : "1111",
	  action_type : "submit_action",
    }
  ] 
}

// 이름 바꿔야 함. 00씨
pairingServiceModal = {
  "text": "🎉일일 거북씨 당첨🎉",
  "blocks": [
	{
	  "type": "image_link",
	  "url": "https://swm-chatbot-p5mv0r-txnuvo.run.goorm.io/static/send_turtle.png"
	},
	{
	  "type": "text",
	  "text": "*일일 거북씨 당첨!* 축하합니다!🎉\n당신은 오늘",
	  "markdown": true
	},
	{
	  "type": "text",
	  "text": "김현지 님의 일일 거북씨 입니다.",
	  "markdown": true
	},
	{
	  "type": "text",
	  "text": "자세를 바로 하라는 메세지와 함께\n간단한 응원글을 보내주세요!",
	  "markdown": true
	},
	{
      "type": "button",
      "text": "응원글 보내기 👊🏻",
      "style": "primary",
      "value": "",
	  "action_type": "call_modal",
    }
  ]
}

pairingSendingModal ={
  "title": "일일 거북씨의 응원",
  "accept": "보내기",
  "decline": "좀 더 고민하기",
  "value": "",
  "blocks": [
    {
      "type": "label",
      "text": "*CHEER UP, TURTLE..!* 🐢",
      "markdown": true
    },
    {
      "type": "input",
      "name": "message_text",
      "required": true,
      "placeholder": "일일 거북씨가 되어 응원글을 남겨주세요!"
    }
  ]
}


pairingReceivingModal={
  "text": "배달부 거북씨 도착",
  "blocks": [
	{
      "type": "image_link",
      "url": "https://swm-chatbot-p5mv0r-txnuvo.run.goorm.io/static/delivery_turtle.png"
    },
    {
      "type": "text",
      "text": "메세지 내용",
      "markdown": true
    },
	{
      "type": "divider"
    },
	{
      "type": "text",
      "text": "당신의 일일 거북씨. ",
      "markdown": true
    }
  ]
}

// 이거 배열 안에 여러개 두고 랜덤하게 나오도록!
messageServiceModal_3 = [
	"친구! 거북이로 진화 중이야? 목 펴, 목 펴! 😎",
	"헤이~ 친구! 일도 중요하지만 자세도 중요하다구!!! 😎",
	"인간인데 목은 거북이...? 이상하다구!!! 😎",
	"거북목은 보기 거북하다구! 자! 자세 바로하자~! 😎",
	"마이 프렌드~ 넌 바른 자세일 때가 제일 멋지다구!!! 😎",
	"친구! 무슨 일이야! 너 지금 거북이야 완전~! 😎",
	"내가 자주 와서 힘들지? 힘든 만큼 자세는 바로 될 거야 친구! 😎",
	"나 왔어, 친구! 우리 스트레칭 한 번 하고 일 하자구~! 😎",
	"집중은 목이 아닌 머리로 하는 거야! 목을 바로 하자 친구~! 😎",
	"멋쟁이는 바른 자세 갖는 거, RGRG~? 😎🖖",
];

messageServiceModal_2 = [
	"친구! 목이 굽었어! 바르게 펴자! 🙂",
	"친구, 지금 바른 자세야? 다시 고쳐 앉자! 🙂",
	"작은 습관이 모이면 큰 결과를 만드는 거 잊지마! 🙂",
	"똑똑똑~ 지금 자세 바로 하고 있나요? 🙂",
	"어깨가 결리면 가볍게 풀어주는 게 좋아 🙂",
	"지금 목 한 번 돌려주면 어때? 개운해질 거야 🙂",
	"일에 집중하는 것도 좋지만, 자세에도 조금 더 집중해줘! 🙂",
];

messageServiceModal_1 = [
	"친구~ 스트레칭 한 번 하고 일하자 😊",
	"친구, 몸을 뒤로 조금만 빼는 건 어때? 😊",
	"친구야! 혹시 목을 앞으로 빼고 있진 않니? 😊",
	"친구야~ 몸이 피로하면 잠시 기지개를 펴는 것도 좋아 😊",
	"많이 피곤하지? 커피 한 잔 할겸 잠시 걷고 와! 😊",
];

messageServiceModal = {
  "text": "친구~ 스트레칭 한 번 하고 일하자 😊",
  "blocks": [
    {
      "type": "text",
      "text": "친구~ 스트레칭 한 번 하고 일하자 😊",
      "markdown": true
    }
  ]
};

messageURLServiceModal = {
  "text": "스트레칭 거북씨",
  "blocks": [
    {
      "type": "header",
      "text": "🔥 거북씨! 스트레칭 하자! 🔥",
      "style": "yellow"
    },
    {
      "type": "text",
      "text": "url here",
      "markdown": true
	},
    {
      "type": "image_link",
      "url": "https://swm-chatbot-p5mv0r-txnuvo.run.goorm.io/static/turtle.png"
	}
  ]
}


dynamicServiceRegisterModal = {
    "title": "나의 거북씨 🐢",
    "accept": "입니다.",
    "decline": "아닙니다.",
    "value": "",
    "blocks": [
        {
            "type": "label",
            "text": "*🐢 나의 거북씨는요,*",
            "markdown": true
        },
        {
            "type": "select",
            "name": "select_turtle",
            "options": [
                {
                    "text": "빡센 거북씨 😎",
                    "value": "3"
                },
                {
                    "text": "평범한 거북씨 😊",
                    "value": "2"
                },
                {
                    "text": "느긋한 거북씨 🙂",
                    "value": "1"
                },
                {
                    "text": "휴식하는 거북씨 😴",
                    "value": "0"
                }
            ],
            "required": true,
            "placeholder": "어떤 거북씨일까요?"
        },
		{
            "type": "label",
            "text": "*🕗 나의 거북씨 출근 시간은요,*",
            "markdown": true
        },
        {
            "type": "select",
            "name": "start_time",
            "options": [
				{
                    "text": "휴식이라구용!",
                    "value": "-1"
                },
                {
                    "text": "0시",
                    "value": "0"
                },
                {
                    "text": "1시",
                    "value": "1"
                },
                {
                    "text": "2시",
                    "value": "2"
                },
                {
                    "text": "3시",
                    "value": "3"
                },
                {
                    "text": "4시",
                    "value": "4"
                },
                {
                    "text": "5시",
                    "value": "5"
                },
                {
                    "text": "6시",
                    "value": "6"
                },
                {
                    "text": "7시",
                    "value": "7"
                },
                {
                    "text": "8시",
                    "value": "8"
                },
                {
                    "text": "9시",
                    "value": "9"
                },
                {
                    "text": "10시",
                    "value": "10"
                },
                {
                    "text": "11시",
                    "value": "11"
                },
                {
                    "text": "12시",
                    "value": "12"
                },
                {
                    "text": "13시",
                    "value": "13"
                },
                {
                    "text": "14시",
                    "value": "14"
                },
                {
                    "text": "15시",
                    "value": "15"
                },
                {
                    "text": "16시",
                    "value": "16"
                },
                {
                    "text": "17시",
                    "value": "17"
                },
                {
                    "text": "18시",
                    "value": "18"
                },
                {
                    "text": "19시",
                    "value": "19"
                },
                {
                    "text": "20시",
                    "value": "20"
                },
                {
                    "text": "21시",
                    "value": "21"
                },
                {
                    "text": "22시",
                    "value": "22"
                },
                {
                    "text": "23시",
                    "value": "23"
                }
            ],
            "required": true,
            "placeholder": "알림을 언제부터 받을까요?"
        },
		{
            "type": "label",
            "text": "*🕕 나의 거북씨 퇴근 시간은요,*",
            "markdown": true
        },
        {
            "type": "select",
            "name": "end_time",
            "options": [
				{
                    "text": "휴식이라니까용!",
                    "value": "-1"
                },
                {
                    "text": "0시",
                    "value": "0"
                },
                {
                    "text": "1시",
                    "value": "1"
                },
                {
                    "text": "2시",
                    "value": "2"
                },
                {
                    "text": "3시",
                    "value": "3"
                },
                {
                    "text": "4시",
                    "value": "4"
                },
                {
                    "text": "5시",
                    "value": "5"
                },
                {
                    "text": "6시",
                    "value": "6"
                },
                {
                    "text": "7시",
                    "value": "7"
                },
                {
                    "text": "8시",
                    "value": "8"
                },
                {
                    "text": "9시",
                    "value": "9"
                },
                {
                    "text": "10시",
                    "value": "10"
                },
                {
                    "text": "11시",
                    "value": "11"
                },
                {
                    "text": "12시",
                    "value": "12"
                },
                {
                    "text": "13시",
                    "value": "13"
                },
                {
                    "text": "14시",
                    "value": "14"
                },
                {
                    "text": "15시",
                    "value": "15"
                },
                {
                    "text": "16시",
                    "value": "16"
                },
                {
                    "text": "17시",
                    "value": "17"
                },
                {
                    "text": "18시",
                    "value": "18"
                },
                {
                    "text": "19시",
                    "value": "19"
                },
                {
                    "text": "20시",
                    "value": "20"
                },
                {
                    "text": "21시",
                    "value": "21"
                },
                {
                    "text": "22시",
                    "value": "22"
                },
                {
                    "text": "23시",
                    "value": "23"
                }
            ],
            "required": true,
            "placeholder": "알림을 언제까지 받을까요?"
        },
		{
            "type": "label",
            "text": "휴식하는 거북씨일 때도 출근 및 퇴근 시간을 선택해주세요!",
            "markdown": true
        }
    ]
}

workStartAlarmModal = {
  "text": "거북씨 출근도장 쾅!",
  "blocks": [
	{
      "type": "header",
      "text": "거북씨 출근도장 쾅! 🕗",
      "style": "blue"
    },
    {
      "type": "section",
      "content": {
        "type": "text",
        "text": "*출근하는 발걸음이\n제일 무거워...*",
        "markdown": true
      },
      "accessory": {
        "type": "image_link",
        "url": "https://swm-chatbot-p5mv0r-txnuvo.run.goorm.io/static/in.gif"
      }
    }
  ]
}
workEndAlarmModal = {
  "text": "거북씨 퇴근도장 쾅!",
  "blocks": [
	{
      "type": "header",
      "text": "거북씨 퇴근도장 쾅! 🕕",
      "style": "blue"
    },
    {
      "type": "section",
      "content": {
        "type": "text",
        "text": "*퇴근하는 발걸음이\n제일 가벼워!*",
        "markdown": true
      },
      "accessory": {
        "type": "image_link",
        "url": "https://swm-chatbot-p5mv0r-txnuvo.run.goorm.io/static/out.gif"
      }
    }
  ]
}


module.exports.registerCompleteModal_1 = registerCompleteModal_1;
module.exports.registerCompleteModal_2 = registerCompleteModal_2;
module.exports.registerCompleteModal_3 = registerCompleteModal_3;
module.exports.registerRejectModal = registerRejectModal;
module.exports.levelChangeModal_1 = levelChangeModal_1;
module.exports.levelChangeModal_2 = levelChangeModal_2;
module.exports.levelChangeModal_3 = levelChangeModal_3;
module.exports.serviceRegisterModal = serviceRegisterModal;
module.exports.serviceRegisterAgainModal = serviceRegisterAgainModal;
module.exports.pairingServiceModal = pairingServiceModal;
module.exports.pairingSendingModal = pairingSendingModal;
module.exports.pairingReceivingModal = pairingReceivingModal;
module.exports.messageServiceModal_1 = messageServiceModal_1;
module.exports.messageServiceModal_2 = messageServiceModal_2;
module.exports.messageServiceModal_3 = messageServiceModal_3;
module.exports.messageServiceModal = messageServiceModal;
module.exports.dynamicServiceRegisterModal = dynamicServiceRegisterModal;
module.exports.messageURLServiceModal = messageURLServiceModal;
module.exports.workStartAlarmModal = workStartAlarmModal;
module.exports.workEndAlarmModal = workEndAlarmModal;
