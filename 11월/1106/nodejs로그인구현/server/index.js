const express = require("express")
const app = express();
const port = 5000;
const { User } = require("./model/User");

app.use(express.json())//body-parser가 express에 내장되어있어 바로 사용 가능

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://text:1111@cluster0.wkvp3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then (() => console.log("MongoDB Connected..."))
.catch(err => console.log(err))

app.get("/", (req, res) => {
  res.send("Hello World")
})

//회원가입시 필요한 정보 client에서 가져와 데이터베이스에 입력
app.post('api/users/register', async (req, res) => {
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

app.listen(port, () =>{
  console.log(`Example app listening on port ${port}`)
})