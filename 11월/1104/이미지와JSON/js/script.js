function loadItems(){
  return fetch('js/data.json')
  .then(res => res.json())
  .then(json => json.items)
}

// 주어진 항목으로 목록 업데이트
function displayItems(items){
  const container = document.querySelector('.items');
  //innerHTML속성을 이용하여 container요소안에 내용을 채워넣음
  container.innerHTML = items.map(item => createHTMLString(item)).join('');
  //이때 매개변수로 전달 받은 items는 data.json에 담겨있는 items정보를 참조
  //.map()메서드를 이용하여 items배열에 담겨있는 정보를 순차적으로 전달하여 createHTMLString함수에 인자값으로 전달하고
  //join()메서드를 이용하여 모든 요소를 하나의 문자열로 만듦

  
}
//주어진 데이터 항목에서 HTML목록 항목 만들기
function createHTMLString(item){ 
  return `
    <li class="item">
      <img src="${item.image}" alt="${item.type}" class="item__thumbnail"/>
      <span class="item__description">${item.gender}, ${item.size}</span>
    </li>
  `
}

// 이벤트리스너가 담겨있는 함수
function setEventListeners(items){
  const logo = document.querySelector(".logo")
  const buttons = document.querySelector(".buttons")

  //로고 클릭시 디스플레이아이템 함수를 호출, 인자값으로 items(목록 데이터 전체)전달
  logo.addEventListener("click", ()=> displayItems(items))


  //buttons그룹에 클릭이벤트가 발생하면 온버튼클릭 함수 호출 인자값으로 이벤트객체와 아이템(목록데이터)를 전달.
  buttons.addEventListener("click", (event) => onButtonClick(event, items));
}

//아이콘클릭시 실행될 함수
function onButtonClick(event, items){
  const dataset = event.target.dataset;
  // 변수key에 data-key속성값을 할당
  const key = dataset.key;
  const value = dataset.value;

  //키 변수와 벨류값 변수 둘다 비어있으면 리턴으로 함수를 종료시킴
if(key == null || value == null) return

  // displayItems함수의 인자값으로 이벤트 타겟의 데이터키 값과 itmes의 프로퍼티 이름이 일치하는 값을 찾고 
  // data-value값과 item의 해당 프로퍼티값이 일치하는지 확인하여 일치하면 디스플레이아이템인자로 전달
  displayItems(items.filter(item => item[key] === value))
}


// 로드아이템함수 호출
loadItems()
.then(items => {
  console.log(items)
  displayItems(items)
  setEventListeners(items);//셋이벤트리스너함수 호출 아이템을 인자로
})




.catch(console.log);