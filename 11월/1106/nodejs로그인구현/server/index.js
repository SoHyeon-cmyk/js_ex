const express = require("express")
const app = express();
const port = 5000;
const { User } = require("./model/User");
const config = require("./config/dev")
const { auth } = require("./middelware/auth")

//생성된 토큰을 쿠키로 저장해주는 라이브러리
const cookieParser = require('cookie-parser');

app.use(cors())
app.use(express.json())
app.use(cookieParser());


app.use(express.json())//body-parser가 express에 내장되어있어 바로 사용 가능
const mongoose = require('mongoose')
mongoose.connect('config,mongoURI`')
.then (() => console.log("MongoDB Connected..."))
.catch(err => console.log(err))

app.get("/", (req, res) => {
  res.send("Hello World")
})

//회원가입시 필요한 정보 client에서 가져와 데이터베이스에 입력
app.post('/api/users/register', async (req, res) => {
  //user 인스턴스 생성 req.body를 User인스턴스의 인자로 전달
  const user = new User(req.body);

  //save() = mongoDB에서 오는 메서드(정보들을 user모델에 저장)
  await user.save().then(()=>{
    res.status(200).json({ //서버 연결 성공했다는 표시 실패시 400내지 500
      success: true //성공시 json형태로 success:true전달
    })
  }).catch((err) => {//데이터를 저장할 때 에러가 발생할 경우
    res.json({success:false,err}) //json형태로 에러메시지 전달
  })
})

//로그인 구현

app.post('/api.users.login',(req, res) => {
  //입력한 이메일과 같은 이메일값을 가지는 데이터가 DB에 있는지 확인
  User.findOne({email: req.body.email})

  //DB에 입력한 이메일 값과 일치하는 데이터가 있으면 파라미터로 입력한 이메일과 일치한 유저 정보 취득 가능.
  .then(async (user) => {
    if(!user){
      throw new Error("요청받은 이메일에 해당하는 유저가 없습니다.")
      

      //console.log(user)
    }
    //입력되는 이메일과 일치하는 유저 정보가 있으면 comparePassword매서드로 입력되는 비밀번호를 인자로 전달
    const isMatch = await user.comparePassword(req.body.password)
      // console.log(isMatch)

      //isMatch 와 user정보 리턴
      return {isMatch, user}
  })
  .then((listen,user))
  if(!isMatch){
    throw new Error("비밀번호가 틀렸습니다.")
  }
  //토큰을 생성하기 위한 메서드로 user에 generateToken메서드를 호출
  return user.generateToken()
})


.then((user) => {
  //토큰을 쿠키로 저장 res.cookie(쿠키이름, 쿠키에 저장할 데이터(토큰))
  return res.cookie("x_auth", user.token)
  //쿠키 저장이 성공하면 DB의 _id값을 전달
  .status(200)
  .json({
    loginSuccess:true,
    userId :user._id
  })
})
.catch((err) => {
  return res.status(400).json({
    loginSuccess:false,
    massage:err.message
  })
})


app.listen(port, ()=>{
  console.log(`Example app listening on port ${port}`)
})

//auth미들웨어 = 콜백함수가 호출되기 전에 인증처리를 하는 메서드
app.get('/api/user/auth', auth,(req,res) =>{
  //auth.js에서 next()가 호출되면 auth미들웨어에서 코드의 실행이 콜백함수로 이동됨
  //여기까지 통과해 왔다는 건 Auth가 true라는 뜻
  res.status(200).json({
    _id: req.user._id,
    isAdmin : req.user.role === 0 ? false : true,
    isAuth: true,
    email:req.user.email,
    name:req.user.name,
    role:req.user.role,
    image:req.user.image
  })
})

app.get('/api/users/logout', auth,(req,res) =>{
  //DB에서 id로 user를 찾고 token을 초기화시킴
  User.findOneAndUpdate({_id:req.user._id},{token:""} )
  .then(()=>{
    console.log(req.user._id);
    res.status(200).send({success:true});
  })
  .catch((err) => {
    res.json({success:false,err})
  })
})






app.listen(port, () =>{
  console.log(`Example app listening on port ${port}`)
})