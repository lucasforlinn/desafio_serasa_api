


describe('GET Tests /bank', () => {
  
  before(function(){
    cy.getToken()
  })
  
  it('Busca todos os bancos', () => {

    cy.getBanks().then(function(response){
      expect(response.status).to.eql(200)
      expect(response.body).to.be.a('array')
      expect(response.body.length).be.greaterThan(0)
    })
  })

  it('Buscar bancos por Estado', () => {

    cy.getBanksByState('SC').then(function(response){
      expect(response.status).to.eql(200)
      expect(response.body).to.be.a('array')
      expect(response.body.length).be.greaterThan(0)
      expect(response.body[0].estadoAtuacao).to.eql('SC') 
    })
  })
})


