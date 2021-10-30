
let minimist=require("minimist");
let fs=require("fs");
let args=minimist(process.argv);
console.log(args.source);
console.log(args.dest);
console.log(args.n);
//task 1 begins
let t1=Date.now();
console.log("Starting task1 =" +t1 %100000);
fs.readFile(args.source,function(data){
    let t2=Date.now();
console.log("Finishing task1 =" +t2 %100000);
console.log(t2-t1);
})
//let stext=fs.readFileSync(args.source);


//task 1 ends

//task 2 begins
let t3=Date.now();
console.log("Starting task2 =" +t3 %100000);
let arr=[]
for(let i=2;i<=args.n;i++)
{
    let isPrime=IsPrime(i);
    if(isPrime==true)
    {
        console.log(i);
    }
}
function IsPrime(x)
{
    let isPrime=true;
    for(let div=2;div*div<=x;div++)
    {
        if(x%div==0)
        {
            isPrime=false;
            break;
        }
    }
    return isPrime;
}



let t4=Date.now();
console.log("Finishing task2 =" +t4 %100000);
console.log(t4-t3);
console.log(t4-t1);