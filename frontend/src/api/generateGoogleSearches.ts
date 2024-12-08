// import { b } from "@/baml_client";

import { Chat } from "@/App";


export default async function generateGoogleSearches(userInput: string, chatHistory: Chat[]): Promise<string[]> {
    try {
        const response = await fetch('http://localhost:3000/generateGoogleSearches', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query: userInput, chatHistory }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data.searches;
    } catch (error) {
        console.error('Error generating Google searches:', error);
        throw error;
    }
}