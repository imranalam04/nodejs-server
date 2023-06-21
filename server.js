// const http = require('http');
// const imran = http.createServer((req,res) => {
//     console.log(req)
// })
// imran.listen(5000)

// /* Sending Responses */

// // const http = require('http');
// // const server = http.createServer((req,res) => {
// // console.log(req.url,req.method,req.headers)
// // res.setHeader('Content-Type','text/html')
// // res.write('<html>')
// // res.write('<head><title>My Node Page</title></head>')
// // res.write('<body>Hello From Node JS :)</body>')
// // res.write('</html>')

// // })
// // server.listen(7000)

// /* Routing Requests */

// const http = require('http');
// const fs = require('fs')
// const server = http.createServer((req,res) => {
// const url = req.url;
// const method = req.method
// if(url === '/') {
//     res.write('<html>')
//     res.write('<head><title>Enter a message</title></head>')
//     res.write('<body><form method="POST" action="/message"><input type="text" name="message"><button type="submit">Send</button></form></body>')
//     res.write('</html>')
//    return res.end()
// // }
// /*  Redirecting Requests */
// if(url === '/message' && method === 'POST') {
// fs.writeFileSync('message.txt','DUMMY')
// res.statusCode = 302;
// res.setHeader('Location','/')
// return res.end()
// }
// res.setHeader("Content-Type","text/html")
// res.write('<html>')
// res.write('<head><title>Node js Tutorial</title></head>')
// res.write('<body>Hello world :)</body>')
// res.write('</html>')
// res.end()

// })
// server.listen(4000)

const routes = require('./routes.js') 

const http = require("http");
const serv = http.createServer(routes)
serv.listen(5000)

