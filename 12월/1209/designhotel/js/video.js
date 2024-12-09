function videoResizeFn(){
  let winW = window.innerWidth;
  let winH = window.innerHeight;
  let vidH = document.getElementById('mainVideo').clientHeight;
  let vidW = document.getElementById('mainVideo').clientWidth;

  
  document.querySelector('.m-video').styled.width="100%";
  document.querySelector('.m-video').styled.height= winH + 'px';

  if(winH > vidH){
    document.getElementById('mainVideo').styled.width="auto";
    document.getElementById('mainVideo').styled.height= winH + 'px';
  }
  if(winW > vidW){
    document.getElementById('mainVideo').styled.width=winW + 'px';
    document.getElementById('mainVideo').styled.height= 'auto';
}
}
window.addEventListener('resize',videoResizeFn);
videoResizeFn();



let videoPlay = 'on'
let soundMuted="off";


let mainVideo=document.getElementById('mainVideo')
mainVideo.autoplay = true;
mainVideo.loop = 0;
mainVideo.muted=true

// 재생제어
document.querySelector('.pauseIcon').addEventListener('click' , function(){
  if(videoPlay === 'on'){
    mainVideo.pause()
    document.querySelector('.pauseIcon i').className = "fas fa-play"
    videoPlay = 'off'
  }else{
    mainVideo.play()
    document.querySelector('.pauseIcon i').className = "fas fa-pause"
    videoPlay = 'on'
  }
})

// 재생 키보드제어

document.addEventListener('keypress' ,function(e){
  if(e.keyCode === 32){
    e.preventDefault();
    if(videoPlay === 'on'){
      mainVideo.pause()
      document.querySelector('.pauseIcon i').className = "fas fa-play"
      videoPlay = 'off'
    }else{
      mainVideo.play()
      document.querySelector('.pauseIcon i').className = "fas fa-pause"
      videoPlay = 'on'
    }
  }
})

// 소리제어

document.querySelector('.mutedIcon').addEventListener('click', function(){
  if(soundMuted === "off"){
    mainVideo.muted=false
    document.querySelector('.mutedIcon i').className = "fas fa-volume-up"
    soundMuted = 'on'
  }else{
    mainVideo.muted=true
    document.querySelector('.mutedIcon i').className = "fas fa-volume-mute"
    soundMuted = 'off'
  }
  
})

// 소리 키보드제어

document.addEventListener('keypress' ,function(e){
  if(e.keyCode === 13){
    e.preventDefault();
    if(soundMuted === 'off'){
      mainVideo.muted=false
      document.querySelector('.mutedIcon i').className = "fas fa-volume-up"
      soundMuted = 'on'
    }else{
      mainVideo.muted=true
      document.querySelector('.mutedIcon i').className = "fas fa-volume-mute"
      soundMuted = 'off'
    }
  }
})
