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
import { BamlRuntime, FunctionResult, BamlCtxManager, BamlStream, Image, ClientRegistry, BamlValidationError, createBamlValidationError } from "@boundaryml/baml"
import { Checked, Check } from "./types"
import {} from "./types"
import TypeBuilder from "./type_builder"
import { DO_NOT_USE_DIRECTLY_UNLESS_YOU_KNOW_WHAT_YOURE_DOING_CTX, DO_NOT_USE_DIRECTLY_UNLESS_YOU_KNOW_WHAT_YOURE_DOING_RUNTIME } from "./globals"

export type RecursivePartialNull<T> = T extends object
  ? {
      [P in keyof T]?: RecursivePartialNull<T[P]>;
    }
  : T | null;

export class BamlAsyncClient {
  private runtime: BamlRuntime
  private ctx_manager: BamlCtxManager
  private stream_client: BamlStreamClient

  constructor(runtime: BamlRuntime, ctx_manager: BamlCtxManager) {
    this.runtime = runtime
    this.ctx_manager = ctx_manager
    this.stream_client = new BamlStreamClient(runtime, ctx_manager)
  }

  get stream() {
    return this.stream_client
  }  

  
  async ExplainTopic(
      userInput: string,
      __baml_options__?: { tb?: TypeBuilder, clientRegistry?: ClientRegistry }
  ): Promise<string> {
    try {
      const raw = await this.runtime.callFunction(
        "ExplainTopic",
        {
          "userInput": userInput
        },
        this.ctx_manager.cloneContext(),
        __baml_options__?.tb?.__tb(),
        __baml_options__?.clientRegistry,
      )
      return raw.parsed() as string
    } catch (error: any) {
      const bamlError = createBamlValidationError(error);
      if (bamlError instanceof BamlValidationError) {
        throw bamlError;
      } else {
        throw error;
      }
    }
  }
  
  async GenerateGoogleQueries(
      userInput: string,
      __baml_options__?: { tb?: TypeBuilder, clientRegistry?: ClientRegistry }
  ): Promise<string[]> {
    try {
      const raw = await this.runtime.callFunction(
        "GenerateGoogleQueries",
        {
          "userInput": userInput
        },
        this.ctx_manager.cloneContext(),
        __baml_options__?.tb?.__tb(),
        __baml_options__?.clientRegistry,
      )
      return raw.parsed() as string[]
    } catch (error: any) {
      const bamlError = createBamlValidationError(error);
      if (bamlError instanceof BamlValidationError) {
        throw bamlError;
      } else {
        throw error;
      }
    }
  }
  
}

class BamlStreamClient {
  constructor(private runtime: BamlRuntime, private ctx_manager: BamlCtxManager) {}

  
  ExplainTopic(
      userInput: string,
      __baml_options__?: { tb?: TypeBuilder, clientRegistry?: ClientRegistry }
  ): BamlStream<RecursivePartialNull<string>, string> {
    try {
      const raw = this.runtime.streamFunction(
        "ExplainTopic",
        {
          "userInput": userInput
        },
        undefined,
        this.ctx_manager.cloneContext(),
        __baml_options__?.tb?.__tb(),
        __baml_options__?.clientRegistry,
      )
      return new BamlStream<RecursivePartialNull<string>, string>(
        raw,
        (a): a is RecursivePartialNull<string> => a,
        (a): a is string => a,
        this.ctx_manager.cloneContext(),
        __baml_options__?.tb?.__tb(),
      )
    } catch (error) {
      if (error instanceof Error) {
        const bamlError = createBamlValidationError(error);
        if (bamlError instanceof BamlValidationError) {
          throw bamlError;
        }
      }
      throw error;
    }
  }
  
  GenerateGoogleQueries(
      userInput: string,
      __baml_options__?: { tb?: TypeBuilder, clientRegistry?: ClientRegistry }
  ): BamlStream<RecursivePartialNull<string[]>, string[]> {
    try {
      const raw = this.runtime.streamFunction(
        "GenerateGoogleQueries",
        {
          "userInput": userInput
        },
        undefined,
        this.ctx_manager.cloneContext(),
        __baml_options__?.tb?.__tb(),
        __baml_options__?.clientRegistry,
      )
      return new BamlStream<RecursivePartialNull<string[]>, string[]>(
        raw,
        (a): a is RecursivePartialNull<string[]> => a,
        (a): a is string[] => a,
        this.ctx_manager.cloneContext(),
        __baml_options__?.tb?.__tb(),
      )
    } catch (error) {
      if (error instanceof Error) {
        const bamlError = createBamlValidationError(error);
        if (bamlError instanceof BamlValidationError) {
          throw bamlError;
        }
      }
      throw error;
    }
  }
  
}

export const b = new BamlAsyncClient(DO_NOT_USE_DIRECTLY_UNLESS_YOU_KNOW_WHAT_YOURE_DOING_RUNTIME, DO_NOT_USE_DIRECTLY_UNLESS_YOU_KNOW_WHAT_YOURE_DOING_CTX)