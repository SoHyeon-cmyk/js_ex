addEventListener("load",() => {
  const toggle = document.querySelector(".toggle");
  const gnb = document.querySelector('.gnb');
  
  toggle.addEventListener("click",(e) => {
    e.preventDefault();//a요소의 링크기능을 제거
    gnb.classList.toggle("on");//클릭이벤트가 발생되면 on클래스를 추가 또는 제거
  })

  //브라우저의 크기가 변경됬을때 실행
  addEventListener("resize",() => {
    const wWidth = window.innerWidth;
    if(wWidth > 768){//브라우저의 넓이가 768이상이 되면 gnb에 on클래스를 제거
      gnb.classList.remove("on");
    }
  })
})