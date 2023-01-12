// const fs = require('fs'); const parse = require('StudentData'); 
// function readCsv(filePath) {  return new Promise((resolve, reject) => {    
//     fs.readFile(filePath, (err, data) => {      
//         if (err) {        reject(err);      }      
//         parse(data, { columns: true }, (err, rows) => {       
//              if (err) {          reject(err);        }       
//               resolve(rows);      
//             });    
//         });  
//     }); 
// }

const csvParser = require('csv-parser');
const fs = require('fs');
const filepath = './StudentData.csv';
fs.createReadStream(filepath)
    .on('error', () => {
        
    })

    .pipe(csvParser())
    .on('data', (row) => {
        console.log(row);
        
    })

    .on('end', () => {
        
    })


    const sortedData = obj.studentData.sort((a, b) => {  
        return a - b
      })
      console.log(sortedData);