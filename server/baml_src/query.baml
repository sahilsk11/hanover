function GenerateGoogleQueries(userInput: string, chatHistory: string) -> string[] {
  client "Main"
  prompt #"
    Given this user input, generate a list of 5 queries to Google to find relevant information.

    {{userInput}}

    Here is the full chat history - you may use this as additional context for whatever the user
    is asking for. Note that it may not be relevant - use your best judgement.

    {{chatHistory}}

    {{ ctx.output_format }}
  "#
}

function ExplainTopic(userInput: string, chatHistory: string) -> string {
  client "Main"
  prompt #"
    Explain whatever the user is asking about. Keep the answer to 2-3 sentences with no markdown, lists, or bullet points.

    {{userInput}}

    Here is the full chat history - you may use this as additional context for whatever the user
    is asking for. Note that it may not be relevant - use your best judgement.

    {{chatHistory}}

    {{ ctx.output_format }}
  "#
}
