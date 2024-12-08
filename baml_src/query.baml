function GenerateGoogleQueries(userInput: string) -> string[] {
  client "Main"
  prompt #"
    Given this user input, generate a list of queries to Google to find relevant information.

    {{ ctx.output_format }}
  "#
}

function ExplainTopic(userInput: string) -> string {
  client "Main"
  prompt #"
    Given this user input, explain the top topics that are relevant to the user.

    {{ ctx.output_format }}
  "#
}
