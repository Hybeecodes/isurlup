#!/usr/bin/env node
// console.log("Hello, World!");
const program  = require('commander');
const [,, ...args] = process.argv;
const axios = require('axios');

program
    .version("0.0.1","-v","--version");
isitup(args)
// console.log(`Hello World ${args}`);

function isitup (url) {
    axios.get(`http://isitup.org/${url}.json`).then((res) => {
        let data = res['data'];
        let status = data['status_code'];
        let res_code = data['response_code'];
        let time = data['response_time'];
        let response = ``;
        switch (status) {
            case 1:
                response = `Wow!, ${url} is Alive and active and  Response Time was ${time} secs`;
                break;
            case 2:
                response = `Huh!, ${url} appears to be down and  Response Time was ${time} secs`;

            case 3:
                response = `Sorry, ${url} is not a valid domain and  Response Time was ${time} secs`;
        
            default:
                response = `Hey!, please pass a valid url`;
        }
        console.log(response);
    }).catch((err) => {
        console.error(err);
    })
}