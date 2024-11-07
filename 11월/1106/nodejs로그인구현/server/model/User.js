const { kMaxLength } = require("buffer");
const { request } = require("http");
const mongoose = require("mongoose")
const { type } = require("os")
const jwt = require('jsonwebtoken')

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

  userSchema.pre('save', function(next){
    const  user = this;

    if(user.isModifided('password')){

    }
  })



userSchema.methods.comparePassword = function(plainPassword){
  //사용자가 입력한 비밀번호와 DB에 암호화된 비밀번호가 같은지 체크
  //비밀번호 일치시 true 비일치시 false
  return bcript.compare(plainPassword, this.password); //compare(사용자가 입력한 비밀번호,DB에서 검색한 데이터의 비밀번호)
}

//토큰생성을 위해 generateToken 메서드 생성 
userSchema.methods.generateToken = function(){
  //this = userSchema
  const user = this;
  //jwt생성
  const token = jwt.sign(user._id.toJSON(),'secretToken')

  //생성된 토큰을 userSchema에 token 필드에 넣어줌
  this.token = token;
  //save()메서드로 DB에 저장하고 리턴
  return this.save();

}


//mongoose.model(모델의 이름, 스키마)
const User = mongoose.model('User', userSchema)
const bcript = request('bsript');


//다른 곳에서도 쓸 수 있도록 exports 해줌
console.log(user)
module.exports = {User}