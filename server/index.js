import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import postRoutes from './routes/posts.js'

// Initialize the app
const app = express();

// General setup
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

// Routing
app.use('/posts', postRoutes);

// Database setup
const CONNECTION_URL = "mongodb+srv://admin:admin123@cluster0.zggc8xz.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
        .catch((error) => console.log(error.message));