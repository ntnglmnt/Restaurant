import "./styles.css";
import homeImgSrc from './assets/xx-10.png';
import menuImgSrc from './assets/8bit-burger-menu.png'
import infoImgSrc from './assets/8bit-contact-card.png'


const restaurant = {

    mainPage: function () {

        const content = document.querySelector('.content')
        content.classList.add('content')

        const homebtn = document.querySelector('#homeBtn')
        homebtn.addEventListener('click', () => {
            content.innerHTML = ''
            const homeImg = document.createElement('img')
            homeImg.src = homeImgSrc;
            homeImg.classList.add('mainPageLogo')
            document.querySelector('.content').appendChild(homeImg);
        })
    },

    menuPage: function () {

        const content = document.querySelector('.content')
        content.classList.add('content')

        const menuBtn = document.querySelector('#menuBtn')
        menuBtn.addEventListener('click', () => {
            content.innerHTML = ''
            const menuImg = document.createElement('img')
            menuImg.src = menuImgSrc;
            menuImg.classList.add('menuPageLogo')
            document.querySelector('.content').appendChild(menuImg);
        })
    },

    infoPage: function () {

        const content = document.querySelector('.content')
        content.classList.add('content')

        const infoBtn = document.querySelector('#infoBtn')
        infoBtn.addEventListener('click', () => {
            content.innerHTML = ''
            const infoImg = document.createElement('img')
            infoImg.src = infoImgSrc;
            infoImg.classList.add('infoPageLogo')
            document.querySelector('.content').appendChild(infoImg)
        })

    },

    loop: function () {

        const bgm = document.getElementById('bgm');
        bgm.volume = 0.25;

        document.addEventListener('click', () => {
            if (bgm.paused) bgm.play();
        }, { once: true });


        document.getElementById('muteBtn').addEventListener('click', () => {
            bgm.muted = !bgm.muted;
        });
    },

    pac: function () {

        const pacman = document.createElement('div');
        pacman.classList.add('pacman-runner');
        document.body.appendChild(pacman);
    }

};

restaurant.mainPage()
restaurant.menuPage()
restaurant.infoPage()
restaurant.loop()
restaurant.pac()