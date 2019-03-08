// const request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   if(!error && response.statusCode == 200){
//       console.log(body) //Show the HTML for the Google homepage
//   }
// });

//const request = require('request');
var rp = require('request-promise');

rp("https://jsonplaceholder.typicode.com/users/1")
    .then((htmlstring) => {
        const parsedData = JSON.parse(htmlstring);
        console.log(`${parsedData.name} lives in ${parsedData.address.city}`);  //Using ES6 Template
    })
    .catch((err) => {
        console.log('Error!', err);
});
    
    
    //eval(require('locus'))  //locus break debug in function