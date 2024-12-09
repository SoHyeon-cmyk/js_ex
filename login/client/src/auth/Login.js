import React, {useState} from 'react'
import { BgImg, AuthBody, AuthForm, Button, CancelIcon, ErrMsg, AuthFooter, InputBoxWrap, Wrap, LogoImg,Line } from './auth.styles';
import CloseIcon from '@mui/icons-material/Close';
//비동기 통신을 위한 라이브러리
import axios, { Cancel } from 'axios';
import { Link } from '@mui/material';
 

const Login = () => {
  return (
    <BgImg>
      <Wrap>
        <LogoImg src="/logo192.png" alt="logo"/> 
        <CancelIcon><CloseIcon/></CancelIcon>
        <AuthBody>
          <AuthForm>
            <InputBoxWrap>
            <div className='input-box'>
              <input type='text' placeholder='아이디'/>
              <ErrMsg>아이디는 필수</ErrMsg>
            </div>
            <div className='input-box'>
              <input type='password' placeholder='비밀번호'/>
              <ErrMsg>비번도 필수</ErrMsg>
            </div>
            </InputBoxWrap>
            <Button>로그인하기</Button>
          </AuthForm>
          <Line className='line'></Line>
          <AuthFooter>
            <Link to ="">이메일찾기</Link>
            <Line className='line'></Line>
            <Link to ="">비밀번호찾기</Link>
            <Line className='line'></Line>
            <Link to ="/">회원가입</Link>
          </AuthFooter>
        </AuthBody>
      </Wrap>
    </BgImg>
  )
}

export default Login