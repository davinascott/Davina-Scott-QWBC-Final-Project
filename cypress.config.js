const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    //This secction sets up the base url and the basic spec pattern that will be used
    baseUrl: `https://ui-automation-camp.vercel.app`,
    specPattern: 'cypress/e2e/test/*.cy.{js,jsx,ts,tsx}',
  },
});
