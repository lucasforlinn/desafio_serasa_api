


describe('PUT Tests /bank', () => {
  
    before(function(){
      cy.getToken()
    })
    
    it('Alterar informações de um banco pelo ID', () => {
        const banco = {
            id: 1,
            estadoAtuacao: 'SP',
            juros: '15,00%'
        } //utilizei a massa de testes dentro do it, por ser apenas 3 campos o json, caso fosse maior usaria fixtures.
      
        cy.putBankById(banco).then(function(response){
            expect(response.status).to.eql(200)
            expect(response.body[0].mensagem).to.eql('Registro alterado com sucesso!') 
            expect(response.body[1].banco).to.eql('Banco do Brasil') 
            expect(response.body[1].estadoAtuacao).to.eql(banco.estadoAtuacao) 
            expect(response.body[1].juros).to.eql(banco.juros) 
          })
    })
  })

