import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Task API',
            version: '1.0.0',
            description: 'API for managing Task',
            contact: {
                name: 'Juan Munoz'
            },
            servers: [
                {
                    url: 'http://localhost:3001',
                    description: 'Local server'
                }
            ]
        }
    },
    apis: ['./swagger/*.yml']
};

const specs = swaggerJsdoc(options);
export default specs;