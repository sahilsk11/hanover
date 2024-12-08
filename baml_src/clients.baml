// Learn more about clients at https://docs.boundaryml.com/docs/snippets/clients/overview

client<llm> Main {
  provider openai
  options {
    model "gpt-4o-mini"
    api_key env.OPENAI_API_KEY
  }
}
