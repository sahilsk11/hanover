import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "./components/ui/button";
import generateGoogleSearches from "./api/generateGoogleSearches";
import generateExplanation from "./api/generateExplanation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationEllipsis, PaginationNext } from "./components/ui/pagination";

export interface Chat {
  userQuery: string;
  llmResponse: string;
  suggestedGoogleSearches: string[];
}

export default function Home() {
  const [userInput, setUserInput] = useState<string | null>(null);
  const [chatHistory, setChatHistory] = useState<Chat[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!userInput) {
      return;
    }
    setIsLoading(true);
    try {
      const suggestedSearches = await generateGoogleSearches(userInput, chatHistory);
      const response = await generateExplanation(userInput, chatHistory);
      setChatHistory((prev) => [
        { userQuery: userInput, llmResponse: response, suggestedGoogleSearches: suggestedSearches },
        ...prev,
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="p-4">
      <div className="grid justify-center">
        <div className="w-[300px] grid gap-2 mb-8">
          <Input
            className="mb-4"
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="What would you like to learn about?"
          />
          <Button
            className="w-full"
            onClick={() => handleSubmit()}
          >Search</Button>

          {isLoading && (
            <div className="flex justify-center mt-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
          )}
        </div>
      </div>

      <Chat chatHistory={chatHistory} />
    </div>
  )
}

function Chat({ chatHistory }: { chatHistory: Chat[] }) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center">
        <div className="w-[800px]">
          {chatHistory.map((c, i) => <ResultCard query={c.userQuery} key={i} explanation={c.llmResponse} googleSearches={c.suggestedGoogleSearches} />)}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <ChatPagination />
      </div>
    </div>
  )
}

function ChatPagination() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

function ResultCard({ query, explanation, googleSearches }: { query: string, explanation: string, googleSearches: string[] }) {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>{query}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-6">{explanation}</p>
        <CardDescription className="mb-3">Suggested Searches</CardDescription>
        <ul className="space-y-2">
          {googleSearches.map((search, index) => (
            <SuggestedSearch suggestedSearch={search} key={index} />
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

function SuggestedSearch({ suggestedSearch }: { suggestedSearch: string }) {
  return (
    <li className="mb-2 last:mb-0">
      <Button
        variant="outline"
        className="w-full justify-start text-left h-auto py-2 px-4 hover:bg-slate-100"
        onClick={() => window.open(`https://www.google.com/search?q=${encodeURIComponent(suggestedSearch)}`, '_blank')}
      >
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-slate-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <span>{suggestedSearch}</span>
        </div>
      </Button>
    </li>
  )
}