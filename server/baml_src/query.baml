function GenerateGoogleQueries(userInput: string) -> string[] {
  client "Main"
  prompt #"
    Given this user input, generate a list of 5 queries to Google to find relevant information.

    {{userInput}}

    {{ ctx.output_format }}
  "#
}

function ExplainTopic(userInput: string) -> string {
  client "Main"
  prompt #"
    Explain whatever the user is asking about. Keep the answer to 2-3 sentences with no markdown, lists, or bullet points.

    {{userInput}}

    {{ ctx.output_format }}
  "#
}
