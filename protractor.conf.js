module.exports.config = {
  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      args: ["--headless"]
    }
  },
  specs: ["./spec.js"]
};
