const penOption = document.querySelectorAll('.pen-opt')
const colorOption = document.querySelectorAll('.color-opt')

const slider = document.querySelector('.range-slider')
slider.addEventListener('mousedown', () => {
    document.getElementById('slider').style.cursor = 'grabbing'
})
slider.addEventListener('mouseup', () => {
    document.getElementById('slider').style.cursor = 'grab'
})

for(let i = 0; i < penOption.length; i++) {
    penOption[i].onclick = function() {
        document.querySelector('.pen-opt.pen-active').classList.remove('pen-active')
        penOption[i].classList.add('pen-active')
    }
}

for(let i = 0; i < colorOption.length; i++) {
    colorOption[i].onclick = function() {
        document.querySelector('.color-opt.color-active').classList.remove('color-active')
        colorOption[i].classList.add('color-active')
    }
}