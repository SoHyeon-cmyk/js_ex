//User.js를 불러옴
const {User} = require("../model/User")

let auth = (req , res, next) =>{
  //인증 처리 하는 곳

  //클라이언트 쿠키에서 토큰을 가져옴
  let token = req.cookie.x_auth;
  // console.log(token)

  //토큰을 복호화 한 후 유저 찾기
  User.findByToken(token);// user를 통해 findByToken이라는 메서드를 호추랗여 복호화, 이때 인자로 클라이언트의 토큰을 전달
  //유저가 없으면 인증 okey 없으면 No
  console.log(err,user)

  if (err ) throw err;
  //user가 없으면 inAuth:false로 error:true로 반환
  if(!user) return res.json({isAuthLfalse, error:true})

  req.token = token;
  req.user = user;

  next();
  //주어진 토큰을 검증하고 해당 토큰이 유효한 사용자인지 확인하는 기능을 수행
  userSchema.statics.findByToken = function(token,cb){//token = 클라이언트로부터 받은 JWT토큰, cb는 콜백함수
    const user = this;

    //토큰 복호화 (디코딩:암호화된 데이터를 원래의 형태로 되돌리는 과정)
    jwt.verify(token, 'secretToken', function(err, decoded){
      // console.log(decoded.foo)
      user.findOne({"_id":decoded, "token":token}) // 클라이언트에서 가져온 token 과 DB에 보관된 token이 이리하는지 확인

      .then((user)=> {
        cb(null,user);
      })
      .catch((err) =>{
        //토큰이 일치하지 않으면 콜백함수로 에러를 전달
        return cb(err);
      })
    });

  }
}

module.exports = {auth};