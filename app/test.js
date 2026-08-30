const assert = require("assert");
const { getMessage } = require("./index");

assert.strictEqual(
  getMessage(),
  "Release train service is running"
);

console.log("All tests passed");