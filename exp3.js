const fs= require("fs");
//write
fs.writeFile("sample.txt","welcome to full stack development",(err)=>{
    if(err){
        console.log("error creating file:",err);
        return;
    }
    console.log("file created successfully !");
})
//read
fs.readFile("sample.txt","utf8",(err,data)=>{
    if(err){
        console.log("error reading file:",err);
        return;
    }
    console.log("file content:");
    console.log(data);
})
//append
fs.appendFile("sample.txt","\nsemester:3",(err)=>{
    if(err){
        console.log("error reading file:",err);
    }
    else{
        console.log("\n 3.File updated successfully");
    }
})
//updated read
fs.readFile("sample.txt","utf8",(err,data)=>{
    if(err){
        console.log("error reading file:",err);
        return;
    }
    
})