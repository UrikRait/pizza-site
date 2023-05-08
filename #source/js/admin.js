const myButton = document.querySelectorAll('panel__link')

myButton.forEach(myButton => {
    myButton.addEventListener('click', (e) => {
        console.log(e.target)
    })
});