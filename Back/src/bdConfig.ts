import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import  path, { basename }  from 'path'


// Caminho relativo do arquivo
const absolutePath = path.resolve('./data').replace(/\\/g,"/");

console.log(absolutePath);
// this is a top-level await 
(async () => {
    // open the database
    const db = await open({
      filename: `./srcrdatabase.db`,
      driver: sqlite3.Database
    })
})()