import { homeDir } from "./constants.js";
import fs from "fs";
export function CheckData(){
    fs.mkdirSync(homeDir,{recursive:true});
}