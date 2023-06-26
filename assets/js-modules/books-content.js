
function createBook(author, cover, name, rating, reviewNum, description, price) {
    const bookCard = document.createElement("div");
    bookCard.classList.add("main-content__book-card");
    const bookCover = document.createElement("img");
    bookCover.classList.add("main-content__book-cover");
    if (cover == false) {
        bookCover.setAttribute("src", '/img/example-cover.png');
    } else {
        bookCover.setAttribute("src", cover);
    }
    bookCover.setAttribute("alt", "book cover");
    const bookInfo = document.createElement("div");
    bookInfo.classList.add("main-content__book-info");
    const bookAuthor = document.createElement("p");
    bookAuthor.classList.add("main-content__book-author");
    bookAuthor.textContent = author;
    const bookName = document.createElement("p");
    bookName.classList.add("main-content__book-name");
    bookName.textContent = name;
    const bookRating = document.createElement("div");

    if (rating != undefined) {

        bookRating.classList.add("main-content__book-rating");
        for (let i = 0; i < 5; i++) {
            let starRating = Math.floor(rating);
            let star = document.createElement("span");
            star.classList.add("main-content__book-rating-star");
            star.textContent = "★";
            if (starRating - 1 >= i) {
                star.classList.add("main-content__book-rating-star_active");
            }
            bookRating.append(star);
        }
        const bookReviews = document.createElement("span");
        bookReviews.classList.add("main-content__book-reviews");
        bookReviews.textContent = `${reviewNum} review`;
        bookRating.append(bookReviews);
    }

    const bookDescription = document.createElement("p");
    bookDescription.classList.add("main-content__book-description");
    bookDescription.textContent = description;
    const bookPrice = document.createElement("p");
    bookPrice.classList.add("main-content__book-price");
    bookPrice.textContent = price;
    const buyButton = document.createElement("button");
    buyButton.classList.add("button", "button_buy-button", "button_buy-button-active");
    buyButton.textContent = "buy now";

    bookInfo.append(bookAuthor, bookName, bookRating, bookDescription, bookPrice, buyButton);
    bookCard.append(bookCover, bookInfo);
    const mainContent = document.querySelector(".main-content__book-catalog");
    mainContent.append(bookCard);
}
const BOOK_CATEGORIES = [
    'subject:Architecture',
    'subject:Art',
    'subject:Biography&Autobiography',
    'subject:Business',
    'subject:Crafts&Hobbies',
    'subject:Drama',
    'subject:Fiction',
    'subject:Cooking',
    'subject:Health&Fitness',
    'subject:History',
    'subject:Humor',
    'subject:Poetry',
    'subject:Psychology',
    'subject:Science',
    'subject:Technology',
    'subject:Travel'
];
const API_KEY = 'AIzaSyDQNaxmJEUQ2_ySf9hL41JpK439DoaBxwY';
const BOOK_CATALOG = document.querySelector(".main-content__book-catalog");
const CATEGORY_LI_ITEMS = document.querySelectorAll(".main-content__navigation-list-item");
const BTN_MORE_BOOKS = document.querySelector('.button_load-more-button');
const BOOK_COUNTER_EL = document.querySelector('.header__shoping-cart-quantity');
const BOOK_COUNTER_TXT = document.querySelector('.header__shoping-cart-quantity-text');

let booksInCart = [];
if (JSON.parse(localStorage.getItem('cashedCart')) != null) {
    booksInCart = JSON.parse(localStorage.getItem('cashedCart'));
    BOOK_COUNTER_TXT.innerText = booksInCart.length;
    BOOK_COUNTER_EL.classList.toggle('header__shoping-cart-quantity_disabled');
}
let buyButtons = [];
let currectCat;
let bookStartIndex;
let booksOnPage = [];

function addBookToCart(buttonIndex) {
    if (buyButtons[buttonIndex].classList.contains('button_buy-button-active')) {
        buyButtons[buttonIndex].classList.toggle('button_buy-button-active');
        buyButtons[buttonIndex].innerText = 'in the cart';
        booksInCart.push(booksOnPage[buttonIndex]);
        localStorage.setItem('cashedCart', JSON.stringify(booksInCart));
        console.log(booksInCart);
        if (booksInCart.length == 1) {
            BOOK_COUNTER_EL.classList.toggle('header__shoping-cart-quantity_disabled');
        }
        BOOK_COUNTER_TXT.innerText = booksInCart.length;
    } else {
        buyButtons[buttonIndex].classList.toggle('button_buy-button-active');
        buyButtons[buttonIndex].innerText = 'buy now';
        booksInCart = booksInCart.filter((book) => JSON.stringify(book) !== JSON.stringify(booksOnPage[buttonIndex]));
        localStorage.setItem('cashedCart', JSON.stringify(booksInCart));
        console.log(booksInCart);
        if (booksInCart.length == 0) {
            BOOK_COUNTER_EL.classList.toggle('header__shoping-cart-quantity_disabled');
        }
        BOOK_COUNTER_TXT.innerText = booksInCart.length;
    }
}

function arrangeBuyButtons(buyButtonStartIndex) {
    buyButtons = [];
    buyButtons = document.querySelectorAll('.button_buy-button');
    for (let i = buyButtonStartIndex; i < buyButtons.length; i++) {
        buyButtons[i].addEventListener('click', () => addBookToCart(i));
    }
}

async function getBookList(category, startIndex) {
    let books = [];
    await fetch(`https://www.googleapis.com/books/v1/volumes?q="${category}"&key=${API_KEY}&printType=books&startIndex=${startIndex}&maxResults=6&langRestrict=en`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let book = {};
            for (let i = 0; i < 6; i++) {
                book = {};
                if (data.items[i].volumeInfo.authors == undefined) {
                    book.author = 'no author';
                } else if (data.items[i].volumeInfo.authors.length > 1) {
                    let authors = data.items[i].volumeInfo.authors.join(', ');
                    book.author = authors;
                } else {
                    book.author = data.items[i].volumeInfo.authors[0];
                }
                if (data.items[i].volumeInfo.imageLinks == undefined) {
                    book.cover = false;
                } else {
                    book.cover = data.items[i].volumeInfo.imageLinks.thumbnail;
                }
                book.title = data.items[i].volumeInfo.title;
                book.rating = data.items[i].volumeInfo.averageRating;
                if (data.items[i].volumeInfo.ratingsCount == undefined) {
                    book.reviews = 'No';
                } else {
                    book.reviews = data.items[i].volumeInfo.ratingsCount;
                }
                book.description = data.items[i].volumeInfo.description;
                if (data.items[i].saleInfo.saleability == "NOT_FOR_SALE") {
                    book.price = '';
                } else if (data.items[i].saleInfo.saleability == "FREE") {
                    book.price = 'free';
                } else {
                    book.price = `${data.items[i].saleInfo.retailPrice.amount} ₽`;
                }
                books.push(book);
            }
        })
        .catch(error => console.log("error",error));
    return books;
}

async function createBooksOnPage(category, catNum) {
    bookStartIndex = 0;
    currectCat = catNum;
    BOOK_CATALOG.replaceChildren();
    booksOnPage = [];
    let bookList = await getBookList(category, bookStartIndex);
    let navActiveItem = document.querySelector(".main-content__navigation-list-item-active");
    navActiveItem.classList.toggle('main-content__navigation-list-item-active');
    CATEGORY_LI_ITEMS[catNum].classList.toggle('main-content__navigation-list-item-active');
    for (let i = 0; i < 6; i++) {
        booksOnPage.push(bookList[i]);
        createBook(bookList[i].author, bookList[i].cover, bookList[i].title, bookList[i].rating, bookList[i].reviews, bookList[i].description, bookList[i].price);
    }
    arrangeBuyButtons(bookStartIndex);
    checkBooksOnPage();
}

function checkBooksOnPage() {
    for (let i = 0; i < booksOnPage.length; i++) {
        for (let n = 0; n < booksInCart.length; n++) {
            if (JSON.stringify(booksOnPage[i]) === JSON.stringify(booksInCart[n])) {
                buyButtons[i].classList.toggle('button_buy-button-active');
                buyButtons[i].innerText = 'in the cart';
            }
        }
    }
}

for (let n = 0; n < CATEGORY_LI_ITEMS.length; n++) {
    CATEGORY_LI_ITEMS[n].addEventListener('click', () => {
        createBooksOnPage(BOOK_CATEGORIES[n], n);
        // BTN_MORE_BOOKS.style.marginTop = '96px';
    });
}

async function addMoreBooksOnPage() {
    bookStartIndex = bookStartIndex + 6;
    let bookList = await getBookList(BOOK_CATEGORIES[currectCat], bookStartIndex);
    for (let i = 0; i < 6; i++) {
        booksOnPage.push(bookList[i]);
        createBook(bookList[i].author, bookList[i].cover, bookList[i].title, bookList[i].rating, bookList[i].reviews, bookList[i].description, bookList[i].price);
    }
    arrangeBuyButtons(bookStartIndex);
    checkBooksOnPage();
}

BTN_MORE_BOOKS.addEventListener('click', () => {
    addMoreBooksOnPage();
    BTN_MORE_BOOKS.style.marginTop += '1210px';
});

createBooksOnPage(BOOK_CATEGORIES[0], 0);
checkBooksOnPage();