Cypress.Commands.add('getToken', ()=> {
    cy.api({
        method: 'GET',
        url: '/auth',
    }).then(response=> {
        expect(response.status).to.eql(200)
        Cypress.env('token', response.body.token)
    })
  })

Cypress.Commands.add('getBanks', ()=> {
    cy.api({
        method: 'GET',
        url: '/bank',
        headers: {
          Authorization: `Bearer ` + Cypress.env('token')
         }
    }).then(function(response){
        return response
    })
  })

  
Cypress.Commands.add('getBanksByState', (estado)=> {
    cy.api({
        method: 'GET',
        url: '/bank',
        headers: {
          Authorization: `Bearer ` + Cypress.env('token')
        },
        qs: { 
          estadoAtuacao: estado
        }
    }).then(function(response){
        return response
    })
  })

//Utilizado para alterar os dados de um banco pelo ID dele.
Cypress.Commands.add('putBankById', (banco)=> {
    cy.api({
        method: 'PUT',
        url: '/bank',
        headers: {
          Authorization: `Bearer ` + Cypress.env('token')
        },
        body: banco
    }).then(function(response){
        return response
    })
  })

//Utilizado para criação de um novo banco.
Cypress.Commands.add('postNewBank', (banco)=> {
    cy.api({
        method: 'POST',
        url: '/bank',
        headers: {
          Authorization: `Bearer ` + Cypress.env('token')
        },
        body: banco
    }).then(function(response){
        return response
    })
  })
  