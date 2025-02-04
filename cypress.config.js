const { defineConfig } = require('cypress');
const viteConfig = require('./vite.config');

module.exports = defineConfig({
  component: {
    specPattern: 'cypress/component/**/*.cy.{js,jsx,ts,tsx}', // Ensures component tests are detected
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig
    },
    supportFile: 'cypress/support/component.js', // Ensures Cypress finds support files
  },

  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Ensure correct e2e test location
    supportFile: 'cypress/support/e2e.js', // Correct e2e support file
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
  },
  
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
  },
});
