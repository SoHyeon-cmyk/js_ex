//터미널 -> express모듈 설치
//npm i -D nodemon = 코드를 수정하면 자동으로 서버를 껏다켜주는 라이브러리

//예전 문법 commonjs 모듈
//요즘 문법 es모듈(성능차이), express가 아직 es모듈로 작성했을때는 올바르게 동작하지 않는 경우가 있음

//import express from 'express';
const express = require('express');
const app = express();//app에 express모듈을 연결
//.env파일에 있는 환경변수를 실행중인 프로그램의 env객체 안에 넣는 방법으로 dotenv라이브러리를 활용합니다.
const dotenv = require('dotenv');
//dotenv.config()함수를 사용하면 기본적으로 .env안에 있는 변수들을 process.env안에 만들어 줍니다.
dotenv.config({path: '.env'});

const port = 80; //사용할 포트 번호(같은 컴퓨터안에서 실행되고 있는 서버(프로그램)들을 구분하기 위한 번호)
//mysql라이브러리를 연결
const mysql = require('mysql2');
const { ErrMsg } = require('./auth/auth.styles');

//mysql설정
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

//bodyParser는 express모듈에 내장되어있으니 바로 사용가능
app.use(express.json());

//회원 추가
app.post('/api/users', (req, res) => {
  console.log(req.body);//req에 body안에 요청정보가 들어있음
  //tbl_users테이블에 새 사용자 정보를 삽입하는 SQL문, ?는 나중에 배열로 전달할 값의 자리를 표시
  pool.query(`INSERT INTO tbl_users
    (email, pw, question, answer) 
    VALUES (?, ?, ?, ?)`,
    //pool.query에 전달할 실제 값들을 배열로 지정
    [req.body.email, req.body.password, req.body.question, req.body.answer],
    (err, result, fields) => { //sql쿼리 실행후 호출되는 콜백함수(에러정보, 실행결과, 필드 정보)

      if(err !== null){//에러가 있다면 아래 코드블록을 실행한다
        res.status(400).json({errCode: 1, ErrMsg:"아이디가 너무 깁니다"});//에러가 발생했을때 그냥 res.json(실패야...)라고 하면 안된다, HTTP응답 상태코드를 써줘야 한다(400 = 잘못된 요청)
      }else if(err.errno === 1062){
        res.status(400).json({errCode: 2, ErrMsg:"아이디가 이미 존재합니다"})
      }
      
      else{ //에러가 없으면 아래 코드 블록을 실행
        console.log(result)//데이터베이스에 삽입된 행에 대한 정보
        console.log(fields);//결과와 관련된 필드 정보
        res.json({errCode:3, ErrMsg:"알 수 없는 에러가 발생했습니다."});//클라이언트에 성공 메시지를 json형식으로 반환한다
      }
    }
  );
})

// 코드가 여기까지 실행됐다면 로그인성공
// jwt토큰만들기
// playload에는 email로그인 한 사용자의 이메일
// 비밀키 = secret
// 1시간짜리 유효토큰 만들기

const accessToken = jwt.sign({email: rows[0].email} , 'secret',{expiresIn : '1h'})
res.json({accessToken})




//모든 사원 조회
app.get('/emp',(req, res) => {
  //mysql에서 emp테이블의 모든 데이터(행,컬럼)를 조회
  pool.query('SELECT * FROM emp', (err, rows, fields) => {
    console.log(rows); //우리가 필요한 데이터
    console.log(fields); //메타 정보(거의 쓸일 없음)
    res.json(rows); //응답할래, json형태로 rows(데이터)를 넣어서
  })
})

// /는 경로를 의미
// 앞에 있는 req는 요청객체, res는 응답객체
// 함수안에 res는 응답객체, send는 응답객체의 메소드
app.get('/api', (req, res) => {
  //데이터베이스 가서 조회해줘
  //데이터베이스에서 가져온 데이터를 클라이언트에게 보내줌(이때 사용하는것이 res객체)
  res.send("Hello World!")
})

app.listen(port, () => {
  console.log(`서버가 구동 되었습니다 http://localhost:${port}`)
})
//listen함수 실행
//1.인자(두개) = 앞에는 숫자타입, 뒤에는 함수타입
//2. 동작 = 해당 프로그램이 앞쪽에 전달받은 숫자 포트에서 동작하게 만드는 함수.
//뒤쪽에 인자로 전달한 함수는 프로그램이 실행되었을때 최초 한번 실행되는 함수
//3. 결과값