describe('Endpoint Json -', () => {

    it('Validar requisicao GET /todos no endpoint de json', () => {
        cy.validateAllJsonReturned()
    })
    it('Validar requisicao POST /posts no endpoint de json', () => {
        cy.createPost("Titulo Teste2", "Corpo do post2", 2)
    })
})