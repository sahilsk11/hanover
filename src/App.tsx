import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "./components/ui/button";
import generateGoogleSearches from "./api/generateGoogleSearches";
import generateExplanation from "./api/generateExplanation";

interface Chat {
  userQuery: string;
  llmResponse: string;
  suggestedGoogleSearches: string[];
}

export default function Home() {
  const [userInput, setUserInput] = useState<string | null>(null);
  const [chatHistory, setChatHistory] = useState<Chat[]>([]);

  const handleSubmit = async () => {
    if (!userInput) {
      return;
    }
    const suggestedSearches = await generateGoogleSearches(userInput);
    const response = await generateExplanation(userInput);
    setChatHistory((prev) =>
      [
        ...prev,
        { userQuery: userInput, llmResponse: response, suggestedGoogleSearches: suggestedSearches },
      ]);

  };

  return (
    <div className="grid justify-center items-center h-screen">
      <div className="container container-md grid gap-5">
        <Input
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="What would you like to learn about?"
        />
        <Button
          onClick={() => handleSubmit()}
        >Generate Google Searches</Button>
      </div>
      {JSON.stringify(chatHistory)}
    </div >
  )
}
