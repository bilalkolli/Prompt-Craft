describe('Add Prompt fonctionnality integration test', () => {

it('succeeds with all fields filled', () => {
  cy.intercept('POST', '/api/RegisterPrompt', (req) => {
    req.reply((res) => {
      expect(res.statusCode).to.eq(200)
    })
  }).as('postPrompt')

  cy.visit('http://localhost:3000/')

  cy.visit('http://localhost:3000/CreatePrompt')

  cy.get('input[name="Name"]').type('John Doe')
  cy.get('input[name="Title"]').type('Johns prompt')
  cy.get('input[name="description"]').type('This is a description for my first prompt.')
  cy.get('input[name="category"]').type('Productivity')
    
  cy.get('button[type="submit"]').click()

  cy.wait('@postPrompt')

  cy.url().should('eq', 'http://localhost:3000/')
})

it('displays an alert if a field is empty', () => {

    cy.on('window:alert', (str) => {
      expect(str).to.equal('All fields must have been fields.')
    })

    cy.visit('http://localhost:3000/')

    cy.visit('http://localhost:3000/CreatePrompt')

    cy.get('input[name="Name"]').type('John Doe')
    cy.get('input[name="Title"]').type('My First Prompt')
    cy.get('input[name="category"]').type('Productivity')

    cy.get('button[type="submit"]').click()

    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('All fields must have been fields.')
    })
})

it('API 500 status when the same prompt is submitted from a different user', () => {

    cy.intercept('POST', '/api/RegisterPrompt', {
      statusCode: 500,
      body: { error: 'Internal Server Error' },
    }).as('postPrompt')

    cy.visit('http://localhost:3000/')

    cy.visit('http://localhost:3000/CreatePrompt')

    cy.get('input[name="Name"]').type('james')
    cy.get('input[name="Title"]').type('james prompt')
    cy.get('input[name="description"]').type('This is a description for my first prompt.')
    cy.get('input[name="category"]').type('Productivity')

    cy.get('button[type="submit"]').click()

    cy.wait('@postPrompt').its('response.statusCode').should('eq', 500)
})
})
