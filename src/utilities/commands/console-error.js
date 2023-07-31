const { red, redBright, grey } = require("chalk");

class SimplyErrorMinor {
  constructor(err) {
    if (!err) return new Error("Did'nt provide an error to log. How ironic");
    console.error(redBright(">"), grey(new Date()), red(err));
  }
}

class SimplyErrorMajor {
  constructor(err) {
    if (!err) return new Error("Did'nt provide an error to log. How ironic");
    console.error(redBright(">"), grey(new Date()), red(err));
    process.exit();
  }
}

module.exports = { SimplyErrorMajor, SimplyErrorMinor };
