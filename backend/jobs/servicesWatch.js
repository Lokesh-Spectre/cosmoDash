import fs from "fs";
import { services,homeDir,server } from "../constants.js";

function updateServices(){
    const file = `${homeDir}/services.json`;
    try{
        var data = JSON.parse(fs.readFileSync(file));
        data.forEach(serv => {
        serv.image = `${server.url}/${serv.image}`;        
        });
        services.length=0;
        services.push(...data);
    }catch (e){
        console.log("cannot update services from File")
        console.log(e);
    }
}
export function watchServices(){
    updateServices();
    fs.watch(`${homeDir}/services.json`,updateServices);
}
