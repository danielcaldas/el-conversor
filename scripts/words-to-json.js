/**
* This script fetches a remote list of the 10000 most common english words
* as a text file and after processing it dumps out the result to a 'words_dictionary.json' file.
*/
const fs = require('fs');
const wget = require('node-wget');
const jsonfile = require('jsonfile');

const url = 'https://raw.githubusercontent.com/first20hours/google-10000-english/master/google-10000-english.txt';

function writeObjToFile(filename, obj) {
    jsonfile.writeFile(filename, obj, function (err) {
        if (err) {
            console.error(err)
        } else {
            console.log(`${filename} generated successfully!`);
        }
    });
}

function fromTextToJSONObj(filepath) {
    return fs.readFileSync(filepath)
        .toString()
        .split('\n')
        .reduce((acc, word) => {
            if (word) {
                acc[word] = 1;
            }

            return acc;
        }, {});
}

wget({
    url,
    dest: './',
    }, function(err, data) {
        if (err) {
            console.error(err);
            return;
        }

        const { filepath } = data;

        writeObjToFile('words_dictionary.json', fromTextToJSONObj(filepath));
    }
);
