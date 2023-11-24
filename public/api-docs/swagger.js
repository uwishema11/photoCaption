
const swaggerJSDoc = require ('swagger-jsdoc') ;
const swaggerUI = require('swagger-ui-express');



const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'PERSONAL BUDGET API',
      version: '1.0.0',
      description: 'Platform for users to participate in a photo caption contest',
    },
    servers: [
      {
        url: 'http://localhost:3000', 
      },
    ],

    paths: {},
    security: [
      {
        bearerAuth: [],
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          name: 'bearerAuth',
          in: 'header',
        },
      },
    },
  },
  apis: ['./**/*.yaml'],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app) => {
  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

  app.get('/api-docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
};

module.exports= swaggerDocs;
