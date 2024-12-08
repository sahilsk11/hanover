// import { b } from "@/baml_client";


export default async function generateGoogleSearches(userInput: string): Promise<string[]> {
    try {
        const response = await fetch('http://localhost:3000/generateGoogleSearches', {
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
        return data.searches;
    } catch (error) {
        console.error('Error generating Google searches:', error);
        throw error;
    }
}