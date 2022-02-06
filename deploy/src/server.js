const http = require('http')

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('<h3>Container running on: <script>document.write(window.location.origin)</script></h3>')
    res.end()
}).listen(process.env.PORT || 8000)