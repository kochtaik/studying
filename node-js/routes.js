const fs = require('fs');

const requestsHandler = (req, res) => {
  const { url } = req;
  if (url === '/') {
    res.write('<html>')
    res.write('<body>');
    res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
    res.write('</body>');
    res.write('</html>')
    return res.end();
  }
  if (url === '/message' && req.method === 'POST') {
    const body = [];
    req.on('data', (chunk) => { 
      body.push(chunk);
    });
    return req.on('end', () =>  {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, (err) => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My document</title></head>');
  res.write('<body><h1>Hello world</h1></body>');
  res.write('</html>');
  res.end();
};

module.exports = requestsHandler;
