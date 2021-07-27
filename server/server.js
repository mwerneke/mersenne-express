console.log( 'Express App');
//load express library
const express = require(`express`);
//call the function - creates app
const app = express();

//tell express where to find all public files
//client side files
app.use(express.static(`./server/public`));



//listern for requests first argument is 5000, then function
const port = 5000;
app.listen(port,function(){
    console.log('App is up and Runnin on Local Host 5000');
});
