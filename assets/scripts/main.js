const darkToggle = document.getElementById('darkToggle')
const html = document.querySelector('html')
const body = document.querySelector('body')


darkToggle.addEventListener('click', () => {
    for (let element of [html,body,darkToggle]) {
        element.classList.toggle('dark')
    }
})
