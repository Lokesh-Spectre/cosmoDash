import os from "os";
import path from "path";

export const homeDir =path.join(os.homedir(),".local/share/cosmoDash");
// export const servicesFolder = `${homeDir}/services`;
export const services = [];
export const server = {
    url:"http://cosmohub:9001",
    PORT:9001
}

export default {homeDir, services,server }
