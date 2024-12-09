import React from 'react'

const BgImg = () => {
  return (
    <BgImg>
      <Wrap>
        <CancelIcon><CloseIcon /></CancelIcon>
        <AuthBox>
          <h1>회원가입</h1>
          <AuthBody>
            <AuthForm>
              <InputBoxWrap>
                <div className='input-box'>
                  <Input type='text' placeholder="아이디"/>
                  <ErrMsg></ErrMsg>
                </div>
                <div className='input-box'>
                  <Input type='password' placeholder="비밀번호"/>
                  <ErrMsg></ErrMsg>
                </div>
                <div className='input-box'>
                  <Input type='password' placeholder="비밀번호 확인"/>
                  <ErrMsg></ErrMsg>
                </div>
                <div className='input-box'>
                  <Select>
                    <Option value={1}>내가 태어난 곳은?</Option>
                    <Option value={2}>어린시절 나의 별명은?</Option>
                    <Option value={3}>나의 강아지 이름은?</Option>
                  </Select>
                  <Input type='text' placeholder="이메일을 찾을 때의 질문에 답하세요" />
                  <ErrMsg></ErrMsg>
                </div>
              </InputBoxWrap>
              <Button>회원가입하기</Button>
            </AuthForm>
          </AuthBody>
        </AuthBox>
      </Wrap>
  )
}

export default BgImg