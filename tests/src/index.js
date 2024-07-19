const assert = require("assert");
const request = require("request");
const fs = require('fs')

const BASE_URI = 'http://www.google.com';


// We can make simple requests:

// request(BASE_URI, function (error, response, body) {
//     // console.error(error)
//     console.log({
//         response,
//         statusCode: response.statusCode
//     })
//     // console.log(body)
// })



// We can access an image, download it and write it to a file

// request('https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png').pipe(fs.createWriteStream('google.png'))
