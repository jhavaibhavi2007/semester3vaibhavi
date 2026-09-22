
const fs = require('fs');

fs.writeFileSync('example.txt', 'Hello, World!', 'utf8');

console.log('File written successfully.');

const data = fs.readFileSync('example.txt', 'utf8');

console.log('File content is given as:', data);

fs.appendFileSync('example.txt', '\nThis is a new added line in the file.', 'utf8');

console.log('Data appended successfully.');

fs.unlinkSync('example.txt');

console.log('File deleted successfully.');

fs.mkdirSync('newFolder');

console.log('Folder created successfully.');

fs.rmdirSync('newFolder');

console.log('Folder deleted successfully.');

if (fs.existsSync('example.txt')) {
    console.log('File exists.');
} else {
    console.log('File not found, need to create it.');
}
