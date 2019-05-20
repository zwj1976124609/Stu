// https://docs.cypress.io/api/introduction/api.html

// describe('My First Test', () => {
//   it('Visits the app root url', () => {
//     cy.visit('/')
//     cy.contains('h1', 'Welcome to Your Vue.js App')
//   })
// })
describe('My First Test', function () {
  it('Does not do much!', function () {
      cy.visit("https://www.baidu.com")

      cy.get("#kw", {timeout: 2000}).type("cypress test")
     
      cy.wait(100)
     
      cy.get("#su", { timeout: 2000 }).click()

  })
})