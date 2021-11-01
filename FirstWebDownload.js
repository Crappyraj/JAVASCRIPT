// npm install axios
//node FirstWebDownload.js --dest="download.html" --url="https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415/match-results"

let minimist=require("minimist");
let fs=require("fs");
let axios=require("axios");

let args=minimist(process.argv);
console.log(args.dest);
console.log(args.url);
let downloadPromise=axios.get(args.url);
downloadPromise.then(function(response)
{
    let html=response.data;
    fs.writeFileSync(args.dest,html,"utf-8");
}).catch(function(err) {
    console.log(err);
    
})