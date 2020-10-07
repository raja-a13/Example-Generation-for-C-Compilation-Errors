fs = require('fs');

function saveToFile(filename,data){
    fs.writeFile(filename, data, function (err) {
        if (err) return console.log(err);
        console.log('Written to file successfully');
    });
}

module.exports =  saveToFile ;

