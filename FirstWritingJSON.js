//npm init
//npm install minimist
//node FirstWritingJSON.js --dest=teams.json

let minimist=require("minimist");
let fs=require("fs");
let args=minimist(process.argv);


//JSON=Javascript Object Notation
//JSON means saving data in the same format as of Javascript objects.

let s1={
    name:"Raj",
    age:22
}; //s1 is an object while name and age are the properties of the object s1

let s2={
    name:"rajan",
    age:20
};

let student1=[s1,s2];
//an array of objects

let json=JSON.stringify(student1); //JSON

fs.writeFileSync(args.dest,json,"utf-8");


