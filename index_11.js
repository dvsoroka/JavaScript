// Understand the Difference Between impport and require
import { capitalizeString } from "./string_function";
const cap = capitalizeString("hello!");

console.log(cap);  

// Use export to Reuse a Code Block

const capitalizeString1 = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
const foo = "bar";
const bar = "foo";