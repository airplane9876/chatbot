const Config = require('config');
const axios = require('axios');

const kakaoInstance = axios.create({
  baseURL: 'https://api.kakaowork.com',
  headers: {
    Authorization: `Bearer ${Config.keys.kakaoWork.bot}`,
  },
});

// 유저 목록 검색 (1)
exports.getUserList = async () => {
  const res = await kakaoInstance.get('/v1/users.list');
  return res.data.users;
};


// 유저 목록 추가 검색
exports.getAllUserList = async () => {
  let u = await kakaoInstance.get('/v1/users.list?limit=100');
  let allusers = []
  allusers = allusers.concat(u.data.users);
  while(true){
	const data = {
    	cursor: u.data.cursor,
    };
	  
	u = await kakaoInstance.get('/v1/users.list', {
		params: {
			cursor: u.data.cursor
		}
	});	
		
	allusers = allusers.concat(u.data.users);
	console.log(u.data.cursor);
	if(u.data.cursor == null) break;
  }
  return allusers;
};


// 채팅방 생성 (2)
exports.openConversations = async ({ userId }) => {
  const data = {
    user_id: userId,
  };
  const res = await kakaoInstance.post('/v1/conversations.open', data);
  return res.data.conversation;
};

// 메시지 전송 (3)
exports.sendMessage = async ({ conversationId, text, blocks }) => {
  const data = {
    conversation_id: conversationId,
    text,
    ...blocks && { blocks },
  };
  const res = await kakaoInstance.post('/v1/messages.send', data);
  return res.data.message;
};
	

  // id로 user info 불러오기 (3)
exports.getUserInfo = async (userId) => {
	const data = {
    	user_id: userId,
  	};
	const res = await kakaoInstance.get('/v1/users.info', {	
		params: {
			user_id: userId
		}
	});
    return res.data.user;
};

	