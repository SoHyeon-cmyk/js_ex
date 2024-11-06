const { kMaxLength } = require("buffer")
const mongoose = require("mongoose")
const { type } = require("os")

const userSchema = mongoose.Schema({

  name:{
    type:String, //띄어쓰기 제거
    maxlength:50

  },

  email:{
    type:String,
    trim:true,
    unique:1 //중복 이메일 불허

  },

password:{
  type:String,
  minlength:5
},

role:{ //예:넘버가 1이면 관리자, 0이면 일반유저
  type:Number,
  default:0
},

  image:String,

  token:{//토큰을 이용해 추후 유효성 관리
    type:String,
  },

  tokenExp:{
    type:Number,
  }
});

//mongoose.model(모델의 이름, 스키마)
const User = mongoose.model('User', userSchema)

//다른 곳에서도 쓸 수 있도록 exports 해줌
console.log(user)
module.exports = {User}