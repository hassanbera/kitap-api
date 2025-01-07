const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Kitap Yönetim API',
        version: '1.0.0',
        description: 'Basit bir kitap yönetim sistemi için RESTful API'
      },
      servers: [
        { url: 'http://localhost:3000' }
      ]
    },
    apis: ['./docs/*.js'] // Swagger açıklamaları için yol
  };
  
  module.exports = swaggerOptions;
  