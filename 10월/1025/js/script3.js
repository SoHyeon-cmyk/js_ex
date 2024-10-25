addEventListener("scroll", doScroll);


function doScroll(){
  let scrollMove  = window.scrollY
  let ht = document.querySelector("article").offsetHeight;

  const articles = document.querySelectorAll("section > article");
  //article요소를 순회하면서 함수 실행 매개변수 el로 순회하는 article요소를 전달받음
  articles.forEach(el=>{
    //해당 순번의 article요소의 y축 절대 좌표값을 thisTop변수에 할당
    let thisTop = scrollMove + el.getBoundingClientRect().top;
    //각 변수에 thisTop에서 article 높이 값을 뺀 값과 더한 값을 할당
    //각 요소에 스크롤 이벤트가 발생할 범위

    let start = thisTop - ht;
    let end = thisTop + ht;


    //스크롤 이동값이 start변수 값보다 크고 end값보다 작거나 같을때 실행
    if(scrollMove > start && scrollMove <= end){

      //변수에 스크롤 이동값에서 start변수 값을 뺸 값을 할당
      let value = scrollMove - start;

      //해당 순번의 article의 자손인 이미지 요소를 선택하여 바텀속성값을 value값으로 설정,
      //이때 이미지를 아래로 이돋ㅇ시키기 위해 -부호를 적용하고 value를 3으로 나눠서 스클로 이동값보다
      //작은 값으로 이동하도록 설정
      // el.querySelector(".image").Style.bottom= -(value/3)+"px";
    }
  })
}

doScroll();




const cursorEffect = document.querySelector(".cursor_effect");

document.documentElement.addEventListener("mousemove", (e)=>{
  // 각 변수에 스크롤 이동값을 제외한 마우스 xy축 값 할당
  let posX = e.clientX
  let poxY = e.clientY

  cursorEffect.style.transform = `translate(${posX}px, ${poxY}px)`
})

// a요소에 마우스를 올리면 커서가 커지는 효과

const anchors = document.querySelectorAll("a");

anchors.forEach(anchor => anchor.addEventListener("mouseover", ()=> {
  cursorEffect.classList.add('on')
}))
anchors.forEach(anchor => anchor.addEventListener("mouseout", ()=> {
  cursorEffect.classList.remove('on')
}))

// 마우스를 선택했을때 커서 이펙트에 적용할 효과
const cursorIcon = document.querySelector(".cursor_icon");
document.documentElement.addEventListener("mousedown", ()=> {
  cursorIcon.classList.add("on")
})
document.documentElement.addEventListener("mouseup", ()=> {
  cursorIcon.classList.remove("on")
})