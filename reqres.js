const http = require('http')
const server = http.createServer((req,res)=>{
    //console.log(req.url, req.method, req.headers)
    const url = req.url
    
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>My first Page</title></head>')
    if(url==='/')
        res.write('Welcome </body>')
    else if(url==='/home')
        res.write('Welcome home</body>')
    else if(url==='/about')
        res.write('About Us Page</body>')
    else if(url==='/node')
        res.write('Welcome to my Node Js project</body>')
    res.write('</html>')
    res.end()
    
})
server.listen(3000)