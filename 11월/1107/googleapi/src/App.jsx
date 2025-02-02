import './App.css';

function App() {
  (g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
    key: "AIzaSyCtZhc6itwU_HKTJ2f6hp9jIW5lL73wBSQ",
    v: "weekly"
    // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
    // Add other bootstrap parameters as needed, using camel case.
  });
  
  
  return (
    
    <div className="App">
      {
        window.initMap = function () {
  
          //#map요소를 google.maps.Map() 생성자의 인자로 넘겨서 호출하면 구글 지도 객체를 얻을 수 있습니다
          const map = new google.maps.Map(document.getElementById("map"), {
            //두 번째 인자로 구글 지도를 어떻게 보여줄건지 옵션을 넘길 수 있다
            //center 옵션에 지도의 중앙 위치의 위도 경도를 설정해주고, zoom 옵션에 지도를 얼마나 가깝게 볼 건지를 설정해줄 수 있습니다
            center: { lat: 37.317289, lng: 126.838971 },
            zoom: 16,
          });
  
          //마커로 위치 표시
          const malls = [
            {label: 'A', name: "중앙역", lat: 37.316022, lng: 126.838594},
            {label: 'B', name: "롯데 백화점", lat: 37.317984, lng: 126.834517},
            {label: 'C', name: "한국 호텔 전문학교", lat: 37.317105, lng: 126.840901}
          ];
  
          //이 객체는 여러 위치(위도 경도)를 포함할 수 있는 경계 상자를 정의하는데 사용
          const bounds = new google.map.LatLngBounds
  
          const infoWindow = new google.maps.InfoWindow();
  
  
          //객체에서 label, name, lat, lng값을 구조 분해 할당을 통해 추출합니다
          malls.forEach(({label, name, lat, lng}) => {
            //google.maps.Marker라는 생성자 함수를 이용해서 마커를 표시
            const marker = new google.maps.Marker({
              //lat과 lng 값은 각 쇼핑몰의 위도와 경도이며, 이를 통해 마커가 지도의 정확한 위치에 표시됩니다.
              position:{lat, lng},
              //마커에 표시할 레이블을 설정
              label,
              //마커를 추가할 지도를 지정
              map
            })
            
            //생성된 마커의 취이를 boudns 객체에 추가
            bounds.extend(marker.position);
            
            marker.addlistener("click", () => {
              //사용자가 클릭한 마커의 위치로 지도를 부드럽게 이동
              map.panTo(marker.position)
              //인포윈도우 객체의 내용 설정
              infoWindow.setContent(name);
              infoWindow.open({
                anchor : marker,
                map
              })
            })
          })
  
          map.fitBounds(bounds)
        }
      }
    </div>
  );
}

export default App;
