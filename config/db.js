const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    try {
        await {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        console.log('MongoDB connected');
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
