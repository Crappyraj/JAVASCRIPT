//npm install jsdom
// node FirstProcessingHTML.js --source=download.html

let minimist=require("minimist");
let fs=require("fs");
let jsdom=require("jsdom");
//will load HTML and prepare the DOM for Programmer just like browser

let args=minimist(process.argv);
fs.readFile(args.source,"utf-8",function(err,data) {

    
    let dom=new jsdom.JSDOM(data);
    let document=dom.window.document;
   
    let descs=document.querySelectorAll("div.match-info > div.description");
    for(let i=0;i<descs.length;i++)
    {
        console.log(descs[i].textContent);
    }
    
})