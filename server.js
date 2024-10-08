const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Define routes here (we will add them later)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

// Other existing code...

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);


// Error handling middleware for validation errors from express-validator
app.use((err, req, res, next) => {
    if(err instanceof ValidationError){
        return res.status(err.statusCode || 400).send(err.array());
    }
  
    console.error(err.stack); 
    return res.status(500).send({
        statusCode : 500,
        status : "Internal Server Error",
        msg : "Something went wrong!"
    });
  });

  const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'E-Commerce API',
            version: '1.0.0',
            description: 'API documentation for the E-Commerce application',
        },
    },
    apis: ['./routes/*.js'], // Path to the API docs
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
