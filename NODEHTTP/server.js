const http = require('http');

const server = http.createServer((req, res)=>{
    const {headers, url, method } = req;
    console.log(headers, url, method);
    res.setHeader('Content-Type','text/html');
    res.write('<h1>hello</h1>');
    res.end();
})

const PORT = 5000;

server.listen(PORT, () => console.log(`server running on port ${PORT}`));

/* 
1xx: Informational
2xx: Success
3xx: Redirection
4xx: Client Error
5xx: Server Error
for more info https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
*/