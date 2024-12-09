import styled from "@emotion/styled"

export const BgImg = styled.div`
width:100%
background-image:url('auth-bg.jpg');
background-repeat:no-repeat;
background-size:cover;
background-position:center;
height:500px
`

export const Wrap = styled.div`

`;

export const AuthBox = styled.div`

`;

export const AuthForm = styled.form`

`;

export const Input = styled.input`

`;

export const Button = styled.button`

`;

export const ErrMsg = styled.p`

`;

export const InputBoxWrap = styled.div`

`;

export const LogoImg = styled.img`
width:100px
align-self:center;
`;

export const AuthBody = styled.div`
display:flex;
flex-direction:colum;
row-gap:20px
`;

export const Line = styled.div`
border-top:1px solid black;
border-bottom:1px solid black;
`;

export const AuthFooter = styled.div`
display:flex;
justify-content:center;
column-gap:15px
align-items:center;
& > .line{
height:10px}
`;

export const CancelIcon = styled.div`
position:absolute;
right:30px;
top:30px;
cursor:pointer;
`;

export const Select = styled.select`
width:100%;
padding:10px 15px;
background:none;
& + input{
margin-top:5px;
border-radius:1px;
}
`;

export const Option = styled.option`
background:rgba(255,255,255,0.8);
padding:10px
`;