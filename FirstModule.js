let parser = require('minimist');
let args = parser(process.argv);
console.log(args);
let name=args.name;
let age=args.age;
if(age>30)
{
    console.log("hello" + name+ "go home");

}
else{
    console.log("hello" + name+ "lets party");
}

