$(document).ready (onReady);




function onReady(){
    console.log( 'Jquery');
    getQuotes();
    console.log($(`#submitBtn`));
    $(`#submitBtn`).on(`click`, addQuote)
};

function addQuote(){
    console.log('inside add Quote');


//Grab Data from DOM Inputs
let newQuote ={
    text:$(`#quoteInput`).val(),
    author:$(`#authorInput`).val()
};
    console.log('New Quote is a Quote', newQuote);
    
//POST our quote
}



function getQuotes(){
    
    
    $.ajax({
        url:'/quotes',
        method: 'GET',
    })
        .then(function(response){
            console.log('GET /quotes response',response);
        
       //render
       let quotesList =$(`#quotes`); 
       for(let quote of response){
           quotesList.append(`
           <li>
            Quote: ${quote.text}
                <em> By: ${quote.author} </em>
           </li>
           `)
       };
    }
)};          

