// enable the fs package
const fs = require('fs');

const writeReadMe = fileContent => {
    fs.writeFile('./dist/readMe.md', fileContent, err => {
        if (err) throw err;

        console.log('README Complete! Check out readMe.md to see the output!');
    });
};

module.exports = writeReadMe;