/*************************************************************************************************

Welcome to Baml! To use this generated code, please run one of the following:

$ npm install @boundaryml/baml
$ yarn add @boundaryml/baml
$ pnpm add @boundaryml/baml

*************************************************************************************************/

// This file was generated by BAML: do not edit it. Instead, edit the BAML
// files and re-generate this code.
//
/* eslint-disable */
// tslint:disable
// @ts-nocheck
// biome-ignore format: autogenerated code
const fileMap = {
  
  "clients.baml": "// Learn more about clients at https://docs.boundaryml.com/docs/snippets/clients/overview\n\nclient<llm> Main {\n  provider openai\n  options {\n    model \"gpt-4o-mini\"\n    api_key \"key\"\n  }\n}\n",
  "generators.baml": "// This helps use auto generate libraries you can use in the language of\n// your choice. You can have multiple generators if you use multiple languages.\n// Just ensure that the output_dir is different for each generator.\ngenerator target {\n    // Valid values: \"python/pydantic\", \"typescript\", \"ruby/sorbet\", \"rest/openapi\"\n    output_type \"typescript\"\n\n    // Where the generated code will be saved (relative to baml_src/)\n    output_dir \"../\"\n\n    // The version of the BAML package you have installed (e.g. same version as your baml-py or @boundaryml/baml).\n    // The BAML VSCode extension version should also match this version.\n    version \"0.68.0\"\n\n    // Valid values: \"sync\", \"async\"\n    // This controls what `b.FunctionName()` will be (sync or async).\n    default_client_mode async\n}\n",
  "query.baml": "function GenerateGoogleQueries(userInput: string, chatHistory: string) -> string[] {\n  client \"Main\"\n  prompt #\"\n    Given this user input, generate a list of 5 queries to Google to find relevant information.\n\n    {{userInput}}\n\n    Here is the full chat history - you may use this as additional context for whatever the user\n    is asking for. Note that it may not be relevant - use your best judgement.\n\n    {{chatHistory}}\n\n    {{ ctx.output_format }}\n  \"#\n}\n\nfunction ExplainTopic(userInput: string, chatHistory: string) -> string {\n  client \"Main\"\n  prompt #\"\n    Explain whatever the user is asking about. Keep the answer to 2-3 sentences with no markdown, lists, or bullet points.\n\n    {{userInput}}\n\n    Here is the full chat history - you may use this as additional context for whatever the user\n    is asking for. Note that it may not be relevant - use your best judgement.\n\n    {{chatHistory}}\n\n    {{ ctx.output_format }}\n  \"#\n}\n",
}
export const getBamlFiles = () => {
    return fileMap;
}