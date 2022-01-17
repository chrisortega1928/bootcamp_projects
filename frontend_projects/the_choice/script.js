const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

left.addEventListeners('mouseenter', () => container.classList.add('hover-left'))
left.addEventListeners('mouseleave', () => container.classList.remove('hover-left'))

right.addEventListeners('mouseenter', () => container.classList.add('hover-right'))
right.addEventListeners('mouseleave', () => container.classList.remove('hover-right'))

