console.log( 'Express App');
//load express library
const express = require(`express`);
//call the function - creates app
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const quotes = [
    {
        text: 'Debuggin is like being the detective in a crime movie',
        author: 'Filipe Fortes',

    },
    {
        text: 'If you want to increase...',
        author: 'Thomas Watson',
    },
    {
        text: 'Code is there to explain',
        author: 'Andy Harris'
    }
]; // Object Array data

//tell express where to find all public files
//client side files
//setup
app.use(express.static(`./server/public`));

//listen for requests coming to
//a specific URL: http://localhost:5000/quotes

app.get('/quotes', function(req, res){
    console.log('ready to send back quotes');
    console.log('request is', req);
    //send back to client
    res.send(quotes);
}); 

app.post('/quotes', function(req, res){
    console.log('ready');   
    console.log('req.body', req.body);
    let newQuote= req.body;
    quotes.push(newQuote);
    //send back to client
    res.sendStatus(201);
});
    


//Setup
const port = 5000;

app.listen(port,function(){
    console.log('ready to send back quotes');
   

    //listern for requests first argument is 5000, then functio
 
    console.log('App is up and Runnin on Local Host 5000');
});
