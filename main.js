const slideImg = document.getElementsByTagName('img')
let i = 0

const slideText = document.querySelectorAll('.contentBox div')
let j = 0

function slideNext() {    
    slideImg[i].classList.remove('active')   
    i = (i + 1) % slideImg.length    
    slideImg[i].classList.add('active')

    slideText[j].classList.remove('active')   
    j = (j + 1) % slideText.length    
    slideText[j].classList.add('active')
}

function slidePrev() {
    slideImg[i].classList.remove('active')   
    i = (i - 1 + slideImg.length) % slideImg.length   
    slideImg[i].classList.add('active')

    slideText[j].classList.remove('active')    
    j = (j - 1 + slideText.length) % slideText.length    
    slideText[j].classList.add('active')
}

const li = document.querySelectorAll('.controls li')
li[0].onclick = slideNext
li[1].onclick = slidePrev