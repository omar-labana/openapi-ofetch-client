"use strict";
const consola_1 = require("consola");
consola_1.consola.info("Using consola 3.0.0");
consola_1.consola.start("Building project...");
consola_1.consola.warn("A new version of consola is available: 3.0.1");
consola_1.consola.success("Project built!");
consola_1.consola.error(
  new Error("This is an example error. Everything is fine!")
);
consola_1.consola.box("I am a simple box");
