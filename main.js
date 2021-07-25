const shareButton = document.querySelector('button');
const links = document.querySelector('.links-passive');
const buttonImg = document.querySelector('.arrow');


shareButton.addEventListener('click', () =>{
    links.classList.toggle('links-active');
    shareButton.classList.toggle('button-active');
    buttonImg.classList.toggle('arrow-white');
})
