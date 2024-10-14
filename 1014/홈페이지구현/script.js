const btn = document.querySelector('.top')
addEventListener('scroll', () =>{
  let scrollTop = window.scrollY;
  if(scrollTop > 20){
    btn.style.display = "block"
  }else{
    btn.style.display = "none";
  }
})
btn.addEventListener('click', (e)=>{
  e.preventDefault();
  window.scrollTo({
    left:0,
    top:0,
    behavior:'smooth'
  })
})

addEventListener('scroll', ()=>{
  let scrollTop = window.scrollY;
  const works = document.querySelector("#works")
  const member = document.querySelector(".member")

  let worksTop = works.getBoundingClientRect().top + scrollTop + 100;
  if(scrollTop > worksTop){
    member.classList.add("on")
  }else{
    member.classList.remove("on")
  }
})