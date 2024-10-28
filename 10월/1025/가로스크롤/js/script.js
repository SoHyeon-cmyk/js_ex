window.addEventListener("scroll", () => {
  //section의 left값을 스크롤한 거리만큼 마이너스 값으로 적용
  document.querySelector("section").style.left = -(scrollY) + "px";
})

//article요소의 갯수 저장
const articles = document.querySelectorAll("article");
const numAc = articles.length;

//article요소의 총 넓이 계산
const widSec = 200 * numAc;

//패널이 하나 열렸을때의 총 넒이 계산(article이 펼쳐지면 넓이가 600px늘어남)
const widTotal = widSec + 600;

//section의 넓이 설정
document.querySelector("section").style.width = widTotal+ "px";

//body의 높이 설정
document.body.style.height = widSec + "px";

//문서의 스크롤 거리를 widSec의 넓이만큼 변경해서 처음 문서가 불러와지면 마지막 위치로 스크롤이동
scrollTo({
  top:widSec,
  behavior:"smooth"
})

document.querySelectorAll("article h2").forEach( h2 => h2.addEventListener("click", e =>{
e.preventDefault();

// 변수에 idx에 현재 클릭한 h2의 부모인 article의 순서값을 저장
let idx;
for(let i = 0; i < articles.length; i++){
  if(articles[i] === h2.parentElment){ //articles순번이 i번쨰인 요소와 h2의 부모요소가 같으면 idx에 i를 할당하고 반복문 종료
    idx =1;
    break;
  }
}
  //변수 src에 현재 클릭한 h2의 자식요소인 a의 href값을 저장
  let src = h2.querySelector("a").getAttribute("href");
  //변수 posAc에 현재 클릭한 article의 순서값에 200을 곱한 값을 저장

  //모든 aritcle의 on클래스 지움(비활성화)
  articles.forEach(article => article.classList.remove("on"))

  //사용자가 클릭한 순서의 article에만 on클래스 추가
  h2.parentElement.classList.add("on");

  //모든 article p img 에 src 속성값을 지움
  document.querySelectorAll("article p img").forEach( img => img.setAttribute("src", ""));

  //현재 클릭한 article의 형제 요소 중 p를 찾아서 다시 그 자식인 img에 src를 변경
  h2.parentElement.querySelector("p img").setAttribute("src" ,src);

  window.scrollTo({
    left:0,
  top: posAc,
  behavior:'smooth'

  })
  
}));


document.querySelectorAll("article span").forEach(span => span.addEventListener("click", ()=>{
  articles.forEach(article => article.classList.remove("on"));
}))

//#navi li를 클릭했을 때 해당 article위치로 스크롤 이동
const navItem = document.querySelectorAll("#navi li");

navItem.forEach((li, idx) => li.addEventListener("click" , ()=>{
  //변수 posnavi에 idx와 1000을 곱한 값을 저장(위치값)
  let posNav = 1000 * idx;

  //모든 navItem과 article의 on클래스를 제거
  document.querySelectorAll("#navi li, article").forEach(el => el.classList.remove("on"))

  //현재 클릭한 네비아이템에만 on클래스 추가

  li.classList.add("on")

  //문서의 스크롤거리를 변수 posNav에 저장한 값으로 ㅕㅂㄴ경
  window.scrollTo({
    left:0,
    top: posNav,
    behavior: 'smooth'
  })
}))