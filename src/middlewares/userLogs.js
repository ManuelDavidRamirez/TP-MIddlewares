const path = require("path");
const fs = require("fs");

//El usuario ingresó a la ruta: ______
const userLogs = (req,res,next) => {
    //console.log(req.url)
    fs.appendFileSync(path.resolve(__dirname,"..","logs","userLogs.txt"),"El usuario ingresó a la ruta" + "\n")
    next()
}

module.exports = userLogs