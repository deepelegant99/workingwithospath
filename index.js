const path = require('path')
const fs   = require('fs')
const os   = require('os')

fs.mkdir(path.join(__dirname, 'Info'), err => {
    if (err){
        throw err
    }
    console.log('...dir successfully created')
    fs.writeFile(
      path.join(__dirname, "Info", "path.txt"),
      JSON.stringify(path.parse(__filename)),
      (err) => {
        if (err) {
          throw err;
        }
        console.log("...path Info completed...");
      }
    );
    const system_data = {
      "platform": os.platform(),
      "architect": os.arch(),
      "free Memory": os.freemem(),
      "total Memory": os.totalmem(),
      "home Dir": os.homedir(),
      "system uptime": os.uptime(),
      "Free memory percentage": (os.freemem() / os.totalmem()) * 100,
    };

    fs.writeFile(path.join(__dirname, "Info", "system_info.txt"),JSON.stringify(system_data), err=>{
        if(err){
            throw err
        }else{
            console.log("....system info completed...")

        }
    })

    fs.writeFile(path.join(__dirname, "Info", "cpus.txt"), JSON.stringify(os.cpus()), err=>{
        if(err){
            throw err
        }else{
            console.log('...cpus information completed')
        }
    })
})
//
console.log(os.platform())
console.log(os.arch())
//console.log(os.cpus())
console.log(os.freemem())
console.log(os.totalmem())
console.log(os.freemem() / os.totalmem() *100); //Percentage of Free memory out of total memory
console.log(os.homedir())
console.log(os.uptime())

// fs.readFile(path.join(__dirname, 'Path Info', 'info.txt'), 'utf8', (err, content)=>{
//     if(err){
//         throw err
//     }
//     console.log(content)
// })

// fs.rename(
//   path.join(__dirname, "Path Info", "path.txt"),
//   path.join(__dirname, "System Info", "path.txt"), err=>{
//       if(err){
//           throw err
//       }else{
//           console.log('...rename completed')
//       }
//   }
// );



// fs.mkdir(path.join(__dirname, 'test'), err => {
//     if (err){
//         throw err
//     }
//     console.log('...dir successfully created')
//     fs.mkdir(path.join(__dirname, 'test', 'A'), err=>{
//         if(err){
//             throw err
//         }
//         console.log('...A dir is created...')
//     })
// })


// console.log(path.basename(__filename))
// console.log(path.dirname(__filename))
// console.log(path.extname(__filename))
// console.log(path.parse(__filename))
// console.log(path.parse(__filename).base)
// console.log(path.parse(__filename).dir);
// console.log(path.parse(__filename).name);
// console.log(path.parse(__filename).root);
// console.log(path.parse(__filename).ext);
// console.log(path.join(__dirname, "test", "hello.html" ))