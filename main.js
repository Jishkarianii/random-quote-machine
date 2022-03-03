// Random colors array
const colors = ['#16a085','#27ae60','#2c3e50','#f39c12','#e74c3c','#9b59b6','#FB6964','#342224','#472E32','#BDBB99','#77B1A9','#73A857'];

// Selected DOM elements
const text = document.getElementById("text");
const author = document.getElementById("author");
const newQuote = document.getElementById("new-quote");

// Quotes from API
let quotes = [];

// Get quotes from API
getQuotesAPI()

// Get next random quote
newQuote.addEventListener("click", setRandomQuote);

function getQuotesAPI() {
    fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
    .then(res => res.json())
    .then(data => {
        quotes = data.quotes;
        setRandomQuote()
    })
    .catch(err => console.log(err))
}

function setRandomQuote() {
    text.classList.add("change-anim")
    author.classList.add("change-anim")
    
    // This timeout is for change animation
    setTimeout(() => {
        text.classList.remove("change-anim")
        author.classList.remove("change-anim")

        const randomQuote = Math.floor(Math.random() * quotes.length)
        text.innerHTML = `<i class="fa fa-quote-left"></i>${quotes[randomQuote].quote}`;
        author.innerText = `- ${quotes[randomQuote].author}`;

        const randomColor = Math.floor(Math.random() * colors.length)
        const root = document.querySelector(':root');
        root.style.setProperty('--main-color', colors[randomColor]);
    }, 400);
}
