const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

// riferimenti html
const itemsCont = document.querySelector('.items');
const thumbsCont = document.querySelector('.thumbs');


let item = "";
let thumb = "";
// creamo un ciclo che aggiunge nell'html tanti item e thumb quanti ce ne sono nel mockup (items.lenght)
for (let i=0; i < items.length; i++) {
    //console.log(items.length);
    item += `
    <div class="item ">
    <img src="${items[i]}" alt="${title[i]}">
        <div class="text">
            <h3>${title[i]}</h3>
            <p>${text[i]}</p>
        </div>
    </div>
    `;

    thumb += `
    <div class="thumb ">
        <img src="${items[i]}" alt="${title[i]}">
    </div>
    `;
}

// inseriamo nell html gli item e thumb creati attiviamo solo i primi elementi di ognuno con classe active
itemsCont.innerHTML = item;
document.getElementsByClassName('item')[0].classList.add('active')

thumbsCont.innerHTML += thumb;
document.getElementsByClassName('thumb')[0].classList.add('active')

// al click sul tasto next spostiamo la classe active sul item successivo
const nextArrow = document.querySelector('.next');
let statusPosition = 0;

nextArrow.addEventListener('click',
    function(){
        document.querySelector('.item.active').classList.remove('active');
        document.querySelector('.thumb.active').classList.remove('active');
        statusPosition++;
        document.getElementsByClassName('item')[statusPosition].classList.add('active');
        document.getElementsByClassName('thumb')[statusPosition].classList.add('active');
    }
);


// al click sul tasto prev spostiamo la classe active sul item precedente
const prevArrow = document.querySelector('.prev');

prevArrow.addEventListener('click',
    function(){
        document.querySelector('.item.active').classList.remove('active');
        document.querySelector('.thumb.active').classList.remove('active');
        statusPosition--;
        document.getElementsByClassName('item')[statusPosition].classList.add('active');
        document.getElementsByClassName('thumb')[statusPosition].classList.add('active');
    }
);

