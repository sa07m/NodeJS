const fs = require('fs')
const requestHandler = ((req,res)=>{
    const url = req.url
    const method = req.method
    if(url ==='/'){
        fs.readFile('message.txt', {encoding:"utf-8"}, (err,data)=>{
            if(err) console.log(err)
            console.log('data from file'+data)
            res.write('<html>')
            res.write('<head></head>')
            res.write(`<body>${data}</body>`)
            res.write(`<body><form action="/message" method="post"><input type="text" name="message"><button type="submit">send</button></form></body>`)
            res.write('</html>')
            return res.end()
        })
    }
    if(url==='/message' && method==='POST'){
        const body=[]
        req.on('data',(chunk)=>{
            console.log(chunk)
            body.push(chunk)
        })
        req.on('end',()=>{
            const parsedData = Buffer.concat(body).toString()
            const message = parsedData.split('=')[1]
            fs.writeFile('message.txt',message,(err)=>{
                

            })
            res.statusCode = 302
                res.setHeader('Location','/')
                return res.end()
           
        })
    }
    
    //     res.setHeader('Content-Type','text/html')
    // res.write('<html>')
    // res.write('<head><title>My first Page</title></head>')
    // res.write('<body>Welcome to my Node Js project</body>')
    // res.write('</html>')
    // res.end()
    
    
})
module.exports = requestHandler