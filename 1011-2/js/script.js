window.addEventListener('scroll', function(){
  let sct = window.scrollY;
  const articles = document.querySelectorAll('section > article')
  articles.forEach((article, i) => {
    article.style.transform = `translateZ(${-5000*i + sct}px)`;
    
    if(sct >= i*5000 && sct < (i+1) * 5000){
      articles.forEach(a =>{
        a.classList.remove('on');
      })
      article.classList.add("on");

      const navItems = document.querySelectorAll('.scrollNav li');
      navItems.forEach(item => {
        item.classList.remove('on');
      })
      navItems[i].classList.add('on');
    }
  })
});

const navItems = document.querySelectorAll('.scrollNav li')
//모든 네비게이션 아이템에 클릭 이벤트 리스너를 추가
navItems.forEach((item, idx) => item.addEventListener('click', () =>{
  window.scrollTo({
    top: 5001 * idx,
    behavior:'smooth'
  })
}))

document.body.addEventListener('mousemove', e => {
  let posX = e.pageX / 100;
  let posY = e.pageY / 150;

  //1page
  const obj11 = document.querySelector('.obj11')
  obj11.style.left = (-270 - posX) + 'px';
  obj11.style.bottom = (-100 - posY) + 'px';

  
  const obj12 = document.querySelector('.obj12')
  obj12.style.right = (-590 - posX) + 'px';
  obj12.style.top = (-90 + posY) + 'px';

  const obj13 = document.querySelector('.obj13')
  obj13.style.left = (-100 + posX) + 'px';
  obj13.style.bottom = (20 + posY) + 'px';

//2page
const obj21 = document.querySelector('.obj21')
obj21.style.left = (-700 - posX) + 'px';
obj21.style.top = (-420 - posY) + 'px';

const obj22 = document.querySelector('.obj22')
obj22.style.right = (-50 + posX) + 'px';
obj22.style.bottom = (-100 + posY) + 'px';


//3page
const obj31 = document.querySelector('.obj31')
obj31.style.left = (110 - posX) + 'px';
obj31.style.bottom = (70 - posY) + 'px';

const obj32 = document.querySelector('.obj32')
obj32.style.left = (-160 - posX) + 'px';
obj32.style.bottom = (100 - posY) + 'px';

  //4page
  const obj41 = document.querySelector('.obj41')
  obj41.style.left = (350 + posX) + 'px';
  obj41.style.bottom = (-150 - posY) + 'px';

  
  const obj42 = document.querySelector('.obj42')
  obj42.style.right = (200 + posX) + 'px';
  obj42.style.top = (-250 - posY) + 'px';

  const obj43 = document.querySelector('.obj43')
  obj43.style.right = (-100 + posX) + 'px';
  obj43.style.bottom = (-120 + posY) + 'px';

   //5page
   const obj51 = document.querySelector('.obj51')
   obj51.style.left = (-100 - posX) + 'px';
   obj51.style.bottom = (-200 - posY) + 'px';
 
   
   const obj52 = document.querySelector('.obj52')
   obj52.style.right = (330 + posX) + 'px';
   obj52.style.top = (-50 - posY) + 'px';
 
   const obj53 = document.querySelector('.obj53')
   obj53.style.left = (-30 + posX) + 'px';
   obj53.style.bottom = (0 - posY) + 'px';
})