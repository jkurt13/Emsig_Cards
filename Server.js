const fs = require('fs');
const path = require('path');

const directoryTreeToObj = function(dir, done) {
    var results = [];

    fs.readdir(dir, function(err, list) {
        if (err)
            return done(err);

        var pending = list.length;
        if (!pending)
            return done(null, {name: path.basename(dir), type: 'folder', children: results});

        list.forEach(function(file) {
            file = path.resolve(dir, file);
            fs.stat(file, function(err, stat) {
                if (stat && stat.isDirectory()) {
                    diretoryTreeToObj(file, function(err, res) {
                        results.push({
                            name: path.basename(file),
                            type: 'folder',
                            children: res
                        });
                        if (!--pending)
                            done(null, results);
                    });
                }
                else {
                    results.push({
                        // type: 'file',
                        name: path.basename(file).slice(0, 8),
                        description: path.basename(file).substring(9),
                        url: path.basename(file).replace(/ /g, '%20')
                    });
                    if (!--pending)
                        done(null, results);
                }
            });
        });
    });
};

const dirTree = ('./src/pictures')

const allFiles = directoryTreeToObj(dirTree, function(err, res){
    if(err){
        console.error(err)
    }
    console.log((res))
})

const PDF2Pic = require("pdf2pic");
 
const pdf2pic = new PDF2Pic({
  density: 100,           // output pixels per inch
  savename: "untitled",   // output file name
  savedir: "./src/pictures",    // output file location
  format: "jpg",          // output file format
  size: 600               // output size in pixels
});
 
pdf2pic.convert("/path/to/pdf/sample.pdf").then((resolve) => {
  console.log("image converter successfully!");
 
  return resolve;
});