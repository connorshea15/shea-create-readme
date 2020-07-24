// write-read-me.js file 

// enable the fs package
const fs = require('fs');

const writeReadMe = fileContent => {
    fs.writeFile('../README.md', fileContent, err => {
        if (err) throw err;

        console.log('Portfolio Complete! Check out index.html to see the output!');
    });
    console.log(fileContent);
};





module.exports = writeReadMe;