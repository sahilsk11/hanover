import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Initialize environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Endpoints
app.post('/generateGoogleSearches', async (req, res) => {
    try {
        const { query } = req.body;
        
        if (!query) {
            return res.status(400).json({ error: 'Query parameter is required' });
        }

        // TODO: Implement your Google searches generation logic here
        const searches = [`How to ${query}`, `What is ${query}`, `Best ${query} examples`];

        res.json({ searches });
    } catch (error) {
        console.error('Error in generateGoogleSearches:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/explainTopic', async (req, res) => {
    try {
        const { query } = req.body;
        
        if (!query) {
            return res.status(400).json({ error: 'Query parameter is required' });
        }

        // TODO: Implement your topic explanation logic here
        const explanation = `Here is an explanation about ${query}`;

        res.json({ explanation });
    } catch (error) {
        console.error('Error in explainTopic:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});