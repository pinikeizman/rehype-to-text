import unified from 'unified'
import parser from 'rehype-parse'
import ToText from './index.js'

const expectedInnerText = "Hello World!"
const res = unified().use(parser).use(ToText).processSync("<div>Hello <a>World!</a></div>").contents;
if(expectedInnerText !== res) throw new Error("Inner html doesn't equel to expected text")