const appBtn = $('.header-appBar-wrap');
const mobileMenuBar=$('#header');
const mobileMenu=$('.mobile-menu');
const closeBt = $('.appbarCloseBt');

appBtn.on({click:function(){
  mobileMenu.css('display','block').stop().animate({left:0},500)
  mobileMenuBar.stop().animate({left:'100'},500)
}})

closeBt.on({click:function(){
  mobileMenu.stop().animate({left:'-100%'},500,function(){
    mobileMenu.css('display' ,'none')
  });
  mobileMenuBar.stop().animate({left:'0'},500,)
}})