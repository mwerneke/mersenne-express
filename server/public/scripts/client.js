$(document).ready (onReady);

function onReady(){
    console.log( 'Jquery');
    getQuotes();
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

