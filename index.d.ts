import { Compiler, Processor, Plugin } from "unified";

declare class RehypeCompiler implements Compiler {
  compile(): string;
}

declare namespace rehypeToText {
  interface ToText extends Plugin<never> {
    Compiler: typeof RehypeCompiler;
    (this: Processor): void;
  }

  type Compiler = RehypeCompiler;
}

declare const rehypeToText: rehypeToText.ToText;

export = rehypeToText;
