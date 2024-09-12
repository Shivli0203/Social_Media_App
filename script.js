var arr = [
    {dp:"./images/profile-8.jpg", story:"./images/story1.jpg",name:"Uvi"},
    {dp:"./images/profile-9.jpg", story:"./images/story2.jpg",name:"Rhihana"},
    {dp:"./images/profile-10.jpg", story:"./images/story3.jpg",name:"Jane"},
    {dp:"./images/profile-12.jpg", story:"./images/story4.jpg",name:"Ranie"},
    {dp:"./images/profile-15.jpg", story:"./images/story5.jpg",name:"Tinaia"},
    {dp:"./images/profile-16.jpg", story:"./images/story6.jpg",name:"Jamy"}
];

var stories = document.querySelector(".stories");
var clutter = "";

arr.forEach(function(elem, idx) {
    clutter += `<div class="story">
        <div class="profile-photo">
            <img id="${idx}" src="${elem.dp}">
        </div>
        <p class="name">${elem.name}</p>
    </div>`;
});

stories.innerHTML = clutter;

stories.addEventListener("click", function(dets) {
   
        document.querySelector(".full-screen").style.display = "block";
        document.querySelector(".full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`;
        document.querySelector(".full-screen").style.zIndex="2";
        document.querySelector(".full-screen").style.height="90vh";

        setTimeout(function() {
            document.querySelector(".full-screen").style.display = "none";
        }, 2500);
    
});


document.addEventListener("DOMContentLoaded", function() {

    var photos = document.querySelectorAll(".photo");
    photos.forEach(function(photo) {
        var love = photo.querySelector("i");
        photo.addEventListener("dblclick", function() {
            
            love.style.transform = 'translate(-50%,-50%) scale(2)';
            love.style.opacity = 0.8;
            console.log("H")

            setTimeout(function() {
                love.style.transform = 'translate(-50%,-50%) scale(0)';
                love.style.opacity = 0;
            }, 2000);
        });
    });
});

const menuItems=document.querySelectorAll('.menu-item');

const changeAct=()=>{
    menuItems.forEach(item=>{
        item.classList.remove('active');
    })
}

menuItems.forEach(item=>{
    item.addEventListener('click',()=>{
        changeAct();
        item.classList.add('active');
        if(item.id !='notifications'){
            document.querySelector('.notification-popup').style.display='none';
        }else{
            document.querySelector('.notification-popup').style.display='block';
            document.querySelector('#notifications .notification-count').style.display='none';
        }
    })
})

const msgNotification=document.querySelector('#notification-messages');
const msgs=document.querySelector('.messages');

msgNotification.addEventListener('click',()=>{
    msgs.style.boxShadow='0 0 1rem rgb(108, 5, 108)';
    msgNotification.querySelector('.notification-count').style.display='none';
    setTimeout(()=>{
        msgs.style.boxShadow='none';
    },1500);
})

const msg = msgs.querySelectorAll('.message');
const msgSearch=document.querySelector('#message-search');

const searchMsg=()=>{
    const val =msgSearch.value.toLowerCase();
    msg.forEach(chat => {
        let name=chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val)!==-1){
            chat.style.display='flex';
        }else{
            chat.style.display='none';
        }
    })
}

msgSearch.addEventListener('keyup',searchMsg);


const theme=document.querySelector('#theme');
const themeModal=document.querySelector('.customize-theme');

const openThemeModal = () =>{
    themeModal.style.display='grid';
}

const closeThemeModal=(e)=>{
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display='none';
    }
}
themeModal.addEventListener('click',closeThemeModal);
theme.addEventListener('click',openThemeModal);

const colorPalette = document.querySelectorAll('.choose-color span');

colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primaryHue;

        if (color.classList.contains('color-1')) {
            primaryHue = 294;
        } else if (color.classList.contains('color-2')) {
            primaryHue = 39;
        } else if (color.classList.contains('color-3')) {
            primaryHue = 352;
        } else if (color.classList.contains('color-4')) {
            primaryHue = 152;
        } else if (color.classList.contains('color-5')) {
            primaryHue = 202;
        }

        document.documentElement.style.setProperty('--primary-color-hue', primaryHue);
    });
});


const Bg1=document.querySelector('.bg-1');
const Bg2=document.querySelector('.bg-2');
const Bg3=document.querySelector('.bg-3');

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG=()=>{
    document.documentElement.style.setProperty('--light-color-lightness',lightColorLightness);
    document.documentElement.style.setProperty('--white-color-lightness',whiteColorLightness);
    document.documentElement.style.setProperty('--dark-color-lightness',darkColorLightness);
}

Bg1.addEventListener('click',()=>{
    darkColorLightness = '50%'; 
    whiteColorLightness = '50%';
    lightColorLightness = '50%';

    Bg1.classList.add('active');

    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();

    window.location.reload();
})


Bg2.addEventListener('click',()=>{
    darkColorLightness='95%';
    whiteColorLightness='20%';
    lightColorLightness='15%';

    Bg2.classList.add('active');

    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})

Bg3.addEventListener('click',()=>{
    darkColorLightness='95%';
    whiteColorLightness='10%';
    lightColorLightness='0%';

    Bg3.classList.add('active');

    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
})