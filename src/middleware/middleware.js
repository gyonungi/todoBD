const logMethodMiddleware = (request, response, next) => {
    console.log('Request Type:', req.method);
    next();
  };
  
  app.use('/', logMethodMiddleware);
  app.get('/', (request, response) => {
    response.status(200);
    response.send(`Hello, ${request.query.hello}!`);
  });