function getAddr_for_url(lat, lng) {

  return new Promise((resolve, reject) => {
    let geocoder = new kakao.maps.services.Geocoder();
    let coord = new kakao.maps.LatLng(lat, lng);

    let callback = function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        let addr = result[0].address.address_name;
        resolve(addr);
      } else {
        reject(new Error('Failed to get address'));
      }
    };

    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
  });
}

function ajax_for_url(key){
  return new Promise((resolve,reject) => {
    $.ajax({
      async: true,
      type: "get",
      url: "http://127.0.0.1:9000/sharelog/"+key,

      success: function (data) {
          resolve(data);
      },
  });
  })
}


if (window.location.href != "http://127.0.0.1:5500/index.html"){
    let info = window.location.href
    key = info.replace("http://127.0.0.1:5500/index.html?uuid=","")


    const temp_fun = async (for_marker) => {
      console.log("forMarker")
      console.log(for_marker)
      for (infos of for_marker){
        let temp_info = infos.split("&");

        let key = temp_info[0] + "," + temp_info[1] 

        getAddr_for_url(temp_info[0],temp_info[1]).then(addr =>{
          var marker = new kakao.maps.Marker({});

          var latlng = new kakao.maps.LatLng(temp_info[0], temp_info[1]);
          marker.setPosition(latlng);


          let for_html = "";
        setTimeout(function () {
          if (addr != ""){
            marker_dict[key] = {
              marker: marker,
              count: temp_info[2],
            };
            let newDiv = document.createElement("div");
            newDiv.setAttribute("class", "start_pos");
            for_html += `
                <span class="pos_img"></span>   
                <span>${addr}</span>
      
                <span class="pnum_btn_group">
                <button type="button" class="plus_button" value ="${key}">+</button>
                <span class = "count">${marker_dict[key]["count"]}</span>
                <button type="button" class="minus_button" value ="${key}">-</button>
                </span>
                
                <button type="button" class="delete_button" value ="${key}"></button>
                `;
      
            newDiv.innerHTML += for_html;
            newDiv.querySelector(".plus_button").addEventListener("click", addFun);
            newDiv.querySelector(".minus_button").addEventListener("click", minFun);
            newDiv.querySelector(".delete_button").addEventListener("click", delFun);
            start_pos_list.appendChild(newDiv);
            // 지도에 마커 등록
            marker.setMap(map);
            set_pos_guide()
            const menu_div = document.getElementById("menu");
            menu_div.scrollTop = menu_div.scrollHeight;
          }else{
            toast_alert("올바른 위치를 클릭해주세요.", 1000);
          }
          window.location2 =""
        }, 300);
        })


        
      }
    }
    const url_wait = async () =>{
     
      ajax_for_url(key).then(data =>{
        console.log(data)
        data = data.replace("http://127.0.0.1:5500/index.html?","")
        let for_marker = data.split('|');
        const start_pos_list = document.getElementById("start_pos_list");
        temp_fun(for_marker)
      })
    }
    url_wait()
    setTimeout(function(){
      const find = document.getElementById("find_btn")
      find.click();
    },700)
    


    history.pushState(null, null, 'http://127.0.0.1:5500/index.html')
    
    
    
    

    
}
// alert(window.location.href)


