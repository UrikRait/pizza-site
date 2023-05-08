const orderBtn = document.getElementById('orders__btn');
const productBtn = document.getElementById('product__btn');
const orders = document.querySelector('.orders');
const products = document.querySelector('.products');
const inputBtn = document.querySelector('.input__button');
const addBtn = document.querySelector('.products__addBtn');
const popupBg = document.querySelector('.popup__bg');
const myInput = document.querySelector('.input__download');
const inputInfo = document.querySelector('.input__info');
const sumbitBtn = document.querySelector('.input__submit');
const pizname = document.getElementById('name');
const pizsize = document.getElementById('size');
const pizweight = document.getElementById('weight');

// Карта товара.
let card = {
    img: '',
    name: '',
    weight: '',
    size: ''
};
let file;
// Переключение на раздел товаров.
orderBtn.addEventListener('click', () => {
    orders.classList.remove('hidden')
    products.classList.add('hidden')
});
// Переключение на раздел добавление пицци.
productBtn.addEventListener('click', ()=> {
    products.classList.remove('hidden')
    orders.classList.add('hidden')
});

// Драг анд дроп картинки.
inputBtn.addEventListener('dragover', (e) => {
    e.preventDefault();
    inputBtn.classList.add('active')
});
inputBtn.addEventListener('dragleave', (e) => {
    e.preventDefault();
    inputBtn.classList.remove('active')
});
inputBtn.addEventListener('drop', (e) => {
    e.preventDefault();
    file = e.dataTransfer.files[0]
    showFile()
});


// Загрузка картинки кликом.
myInput.addEventListener('change', function() {
    file = this.files[0]
    showFile()
});

// Включение попап окна.
addBtn.addEventListener('click', () => {
    popupBg.classList.remove('hidden')
});
document.addEventListener('click', (e) => {
    if (e.target === popupBg) {
        popupBg.classList.add('hidden')    
    }
});

// Добавление разметки карточки.
sumbitBtn.addEventListener('click', ()=> {
    getContent()
    addBtn.insertAdjacentHTML('afterend',     
    `
    <form action="" method="post" enctype="multipart/form-data">
        <div class="products__item">
            <img class="products__img" src="${card.img}" alt="">
            <p class="menu__name">${card.name}</p>
            <p class="menu__description">${card.size} cм. / ${card.weight} г. </p>
            <button class="products__button">Загрузить пиццу</button>
        </div>
    </form>
    `)
    inputBtn.classList.remove('hidden')
    inputInfo.classList.add('hidden')
    popupBg.classList.add('hidden')
    pizname.value = ''
    pizsize.value = ''
    pizweight.value = ''
});

// Функция валидации и добавления пути файла.
function showFile(){
    let fileType = file.type;
    let validExtensions = ["image/jpeg", "image/jpg", "image/png"];
    if (validExtensions.includes(fileType)) {
        let fileReader = new FileReader()
        fileReader.onload = ()=>{
            let fileURL = fileReader.result;
            inputBtn.classList.add('hidden')
            inputInfo.classList.remove('hidden')
            card.img = fileURL
        };
        fileReader.readAsDataURL(file)
        inputBtn.classList.remove('active')
        

    } else {
        alert('Это не картинка')
        inputBtn.classList.remove('active')
    };
    
};

// Добавление данных из инпута в карточку.
function getContent(){
    card.name = pizname.value 
    card.size = pizsize.value 
    card.weight = pizweight.value
};