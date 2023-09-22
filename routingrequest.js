const http = require('http')
const server = http.createServer((req,res)=>{
    const url = req.url
    if(url === '/'){
        res.write('<html>')
        res.write('<head><title>Enter message</title></head>')
        res.write('<body><form action = "/message" method="POST"><input type="text" name="msg"><button type="submit">send</button></form></body>')
        res.write('</html>')
        //have to return to make sure below stmts are not executed
       return res.end()
    }
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>My first Page</title></head>')
    res.write('Welcome to my Node Js project</body>')
    res.write('</html>')
    res.end()
})
server.listen(3000)