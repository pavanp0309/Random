//data 
const Quotes=[
    {
        quote:` Life is what happens when you're busy making other plans`,
        author:'pavan'
    },
    {
        quote:` The way to get started is to quit talking and begin doing.`,
        author:' -Walt Disney'
    },
    {
        quote:` If life were predictable it would cease to be life, and be without flavor. `,
        author:'-Eleanor Roosevelt'
    },
    {
        quote:`  "Always remember that you are absolutely unique. Just like everyone else." `,
        author:'-Margaret Mead'
    },
    {
        quote:` Life is what happens when you're busy making other plans`,
        author:'pavan'
    },
    {
        quote:` Whoever is happy will make others happy too. `,
        author:'-Anne Frank'
    },
    {
        
        quote:` Spread love everywhere you go. Let no one ever come to you without leaving happier. `,
        author:'-Mother Teresa'
    },


]


// access the elements 
const DisplayElem=document.getElementById('display') ;
const AuthorElem=document.getElementById('Author');
const Btn=document.getElementById('generate');

//function to generate different quotes
// normal  function
// function RandomQuote(){

// }
// arrow functions
const RandomQuote=()=>{
    // logic to generate random Quotes
   let index= Math.floor(Math.random()*(Quotes.length))
    // to display the output of the quote
    DisplayElem.innerHTML= Quotes[index].quote
    //  // to display the output of the author
    AuthorElem.innerHTML= '~'+Quotes[index].author


}

//button functionality
// Btn.onclick=RandomQuote
Btn.addEventListener('click',RandomQuote)