const http = require('http');


http.createServer((req, res) => {
    console.log(req);

    //res.writeHead(200, {'Content-Type': 'text/plain'});
    // res.setHeader('Content-Disposition','attachment; filename=lista.csv');
    //res.writeHead(200, { 'Content-Type': 'application/csv' });

/*     res.write('id, nombre\n');
    res.write('1, camilo\n');
    res.write('2, alexander\n');
    res.write('3, juan\n');
    res.write('4, pedro\n'); */
    
    res.write('hola mundo');
    res.end();

}).listen(8080);

console.log('Escuchando el puerto', 8080);