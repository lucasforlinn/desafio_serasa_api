const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://8dac9f4e-fcb2-4e8f-857a-e4ed3497a0d8.mock.pstmn.io'
  },
});
