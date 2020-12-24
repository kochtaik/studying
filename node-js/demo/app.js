const http = require('http');

const router = (req, res) => {
  const { url } = req;
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<body>');
    res.write('<h1>Hello to lorem ipsum</h1>');
    res.write('<form action="/create-user" method="POST"><input name="username"><button type="submit">Submit</button></form>');
    res.write('<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>')
    res.write('</body>');
    return res.end();
  }

  if (url === '/users') {
    res.write('<body>');
    res.write('<ul>');
    res.write('<li>Hello</li>');
    res.write('<li>to</li>')
    res.write('<li>lorem</li>')
    res.write('<li>ipsum</li>')
    res.write('</ul>');
    res.write('</<body>');
    return res.end();
  }

  if (url === '/create-user' && req.method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk)
    });
    return req.on('end', () => {
      const unhandled = Buffer.concat(body).toString();
      console.log(unhandled.split('=')[1]);
      res.setHeader('Location', '/create-user');
      res.statusCode = 302;
      return res.end();
    });
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<body>')
  res.write('<h1>You have been redirected!</h1>');
  res.write('/<body>')
  res.end();
};

const server = http.createServer(router);

server.listen(8080);