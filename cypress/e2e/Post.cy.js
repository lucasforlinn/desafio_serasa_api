
describe('POST Tests /bank', () => {
  
    before(function(){
      cy.getToken()
    })
    
    it('Adicionar um novo banco', () => {
        const banco = {
            banco: 'Banco Teste',
            estadoAtuacao: 'SC',
            juros: '10,00%'
        }
      
        cy.postNewBank(banco).then(function(response){
            expect(response.status).to.eql(201)
            expect(response.body[1].mensagem).to.eql('Banco adicionado com sucesso!') 
            expect(response.body[0].banco).to.eql(banco.banco) 
            expect(response.body[0].estadoAtuacao).to.eql(banco.estadoAtuacao) 
            expect(response.body[0].juros).to.eql(banco.juros) 
          })
    })
  })




