// import { b } from "../baml_client";

export default async function generateExplanation(userInput: string) {
    try {
        const response = await fetch('http://localhost:3000/explainTopic', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query: userInput }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data.explanation;
    } catch (error) {
        console.error('Error generating explanation:', error);
        throw error;
    }
}