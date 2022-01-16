const pen = document.getElementById('pen-pen')
const eraser = document.getElementById('pen-eraser')

const black = document.getElementById('black')
const red = document.getElementById('red')
const blue = document.getElementById('blue')
const yellow = document.getElementById('yellow')

const sliderRange = document.getElementById('slider')

const clearCanvas = document.querySelector('.clear')

window.addEventListener('load', () => {
    const canvas = document.getElementById('canvas')
    const context = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Initialize Value
    let paint = false
    let eraserMode = false
    context.strokeStyle = 'black'
    context.lineWidth = 10
    context.lineCap = 'round'

    // Color & Pen
    function changeColor(color) {
        if (eraserMode) {
            context.strokeStyle = '#F5F5F5'
        } else {
            context.strokeStyle = color
        }
    }

    function setCurrentColor() {
        if (black.checked) {
            changeColor('black')
        } else if (red.checked) {
            changeColor('#FF5959')
        } else if (blue.checked) {
            changeColor('#548CFF')
        } else if (yellow.checked) {
            changeColor('#FFC900')
        } else {
            changeColor('black')
        }
    }

    // Painting function
    function startPaint(mouse) {
        paint = true
        painting(mouse)
    }

    function finishPaint(mouse) {
        paint = false
        context.beginPath()
    }

    function painting(mouse) {
        if(!paint) return
        context.lineTo(mouse.clientX, mouse.clientY)
        context.stroke()
        context.beginPath()
        context.moveTo(mouse.clientX, mouse.clientY)
    }

    // Mouse Event
    canvas.addEventListener('mousedown', startPaint)
    canvas.addEventListener('mouseup', finishPaint)
    canvas.addEventListener('mousemove', painting)
    clearCanvas.addEventListener('click', () => {
        context.clearRect(0, 0, canvas.width, canvas.height)
    })

    // Pen Mode
    pen.addEventListener('click', () => {
        eraserMode = false
        setCurrentColor()
    })
    eraser.addEventListener('click', () => {
        eraserMode = true
        context.strokeStyle = '#F5F5F5'
    })
    sliderRange.oninput = function() {
        context.lineWidth = this.value
    }

    // Change Colors
    black.addEventListener('click', () => {
        changeColor('black')
    })
    red.addEventListener('click', () => {
        changeColor('#FF5959') 
    })
    blue.addEventListener('click', () => {
        changeColor('#548CFF')
    })
    yellow.addEventListener('click', () => {
        changeColor('#FFC900')
    })
})

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})