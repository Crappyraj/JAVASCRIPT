//npm install excel4node
//node FirstExcelFile.js --source=teams.json --dest=teams.csv

let minimist=require("minimist");
let fs=require("fs");
let excel=require("excel4node");


let args=minimist(process.argv);

let teamsJSON=fs.readFileSync(args.source,"utf-8");
let teams=JSON.parse(teamsJSON);

console.log(teams[2].matches[1].vs);
console.log(teams[2].matches[1].result);

let wb=new excel.Workbook();

let hstyle=wb.createStyle({
font:{
    color:"red"
},
fill:{
    type:"pattern",
    patternType:"solid" ,
    fgcolor:"yellow"

    
}
});


for(let i=0;i<teams.length;i++)
{
    let sheet=wb.addWorksheet(teams[i].team);
    sheet.cell(1,1).string("opponent").style(hstyle);
    sheet.cell(1,2).string("Result").style(hstyle);
    sheet.cell(1,4).string("Rank").style(hstyle);
    sheet.cell(1,5).number(teams[i].rank);

    //JSO you can manipulate it.
    //JSON you can print or save it.
    //If you want to print or save a JSO,convert the JSO to JSON using JSON.stringyfy
    //If you want to manipulate a JSON,convert the JSON to JSO using JSON.parse

    for(let j=0;j<teams[i].matches.length;j++)
    {
        let vs=teams[i].matches[j].vs;
        let result=teams[i].matches[j].result;

        sheet.cell(2+j,1).string(vs);
        sheet.cell(2+j,2).string(result);

    }


}
wb.write(args.dest);

