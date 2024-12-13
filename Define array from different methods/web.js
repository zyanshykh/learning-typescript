"use strict";
// Define array from different method;
// 1. by Normal Method.
// 2. by Constructor method.
// 3. by Array Method.
let arr1 = ["TypeScript", "Guiller", "Public", "Service"];
console.log("Array-1 by Normal Method", arr1);
let arr2 = new Array("Hello", "World!", "org.apache", "hadoop");
console.log("Array-2 by Constructor Method", arr2);
let arr3 = Array.of("TypeScript", "Node.js", "Document", "keyword");
console.log("Array-3 by Array Method", arr3);
