//======== summary ========//
// video modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function openModal() {
    document.getElementById("modal").style.display = "block";
}



window.onload = function() {

    //======== episode ========//
    // tab
    const tabList = document.querySelectorAll('.episode_all .video_btn li');
    const contents = document.querySelectorAll('.episode_all .video_list .box');
    let activeCont = ''; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화); 
    for(var i = 0; i < tabList.length; i++){
        tabList[i].querySelector('.tab_btn').addEventListener('click', function(e){
            
            e.preventDefault();
            for(var j = 0; j < tabList.length; j++){
                console.log(tabList);
                // 나머지 버튼 클래스 제거
                tabList[j].classList.remove('is_on');
                // 나머지 컨텐츠 display:none 처리
                contents[j].style.display = 'none';
            }
    
            // 버튼 관련 이벤트
            this.parentNode.classList.add('is_on');
    
            // 버튼 클릭시 컨텐츠 전환
            activeCont = this.getAttribute('href');
            document.querySelector(activeCont).style.display = 'block';
        });
    }



    //======== character ========//
    
    // tab
    const c_tabList = document.querySelectorAll('.content .list .list-box ul li');
    const c_contents = document.querySelectorAll('.content .introduce .character_box');
    let c_activeCont = '';
    
    console.log(c_contents);
    for(var i = 0; i < c_tabList.length; i++) {
        c_tabList[i].querySelector('.tab_con').addEventListener('click', function(e){
            e.preventDefault();

            for(var j = 0; j < c_tabList.length; j++) {
                c_contents[j].style.display = 'none';
            }
            
            c_activeCont = this.getAttribute('href');
            console.log(c_activeCont);
            document.querySelector(c_activeCont).style.display = 'block';
        });
    }


    //======== gallery ========//

    // gallery modal
    const bigPic = document.querySelector(".gallery .bigImg #big");
    const smallPics = document.querySelectorAll(".photozone .flex-box .small");

    for(let i = 0; i < smallPics.length; i++) {
        smallPics[i].addEventListener("click", function(e){
            var smallPicAttribute = this.getAttribute("src");
            bigPic.setAttribute("src", smallPicAttribute);
        }); // 이벤트 처리
    }
}

