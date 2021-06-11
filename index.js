import { toText as hastToText } from "hast-util-to-text";

function toText(config) {
  this.Compiler = (tree) =>
    hastToText(tree, { ...config, ...this.data("settings") });
}

export default toText;
