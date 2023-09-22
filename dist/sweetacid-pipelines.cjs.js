'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./sweetacid-pipelines.cjs.prod.js");
} else {
  module.exports = require("./sweetacid-pipelines.cjs.dev.js");
}
