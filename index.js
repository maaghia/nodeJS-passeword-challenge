const fs = require('fs');

//writes a new line in pass.txt file

function storePassword(path,key,pwd) {
    //*First we check if the file already exists
    if (fs.existsSync("./pass.txt")) {

        //* we define the format that we want to store as key:password 
         const write = key +' : '+ pwd + '\n'
        //* This function adds a new line to the content of the file ( because it already exists )
        fs.appendFileSync("./pass.txt", write);
        //* Don't forget to document more on the filesystem methods like appendFileSync and existsSync
    }
      else
      {
        
         //* we define the format that we want to store as key:password 
         const write = 'key:pwd => '+ key +' : '+ pwd + '\n'
        //* we store it directly to the FILE
        fs.writeFileSync("./pass.txt",write)
      }
}
storePassword('./pass.txt', 'user', 'myPassword')

//returns whatever password stored for the key 'user'

function retrievePassword(path,key) {
    //*First we check if the file really exists
    
    if (fs.existsSync(path) != true) {    //* check here (add condition)
        throw new Error("File does not exist, cannot retrieve password")
    }

    else
    {
        //* We read the file to get the contents and we split it by \n
        const lines = fs.readFileSync("./pass.txt").toString().split("\n")
         
       /*  console.log(key)
        console.log(lines) */
        
        //*we search for the line that has the required key and we split it to have the password
        for (const line of lines) {
           //* split it to have the password
          const [_key,pwd] = line.split(" : ")
          
           //* if key is correct return password
          if(_key === key && pwd!== undefined && pwd.length !==0) 
          {
            return pwd
          }
        
        }
          //* in all other cases we return undefined
          
            return undefined
        
        
    }
  } 

  console.log(retrievePassword('./pass.txt', 'moe'))