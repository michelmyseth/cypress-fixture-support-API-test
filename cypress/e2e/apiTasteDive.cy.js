it("post", () => {
    cy.request({
        url: 'https://tastedive.com/api/similar?q=Adele'
    })
})

it("test fixture use key from data source", () => {
    cy.fixture('data').then(response => {
        cy.request({
            url: `https://tastedive.com/api/similar?q=${response.name}`
        })
    })
})

it('test support cmd find guardian in key name ', () => {
    cy.tasteSearchBySimilar("guardian").then(response => {
        cy.log(JSON.stringify(response))
        expect(response.body.Similar.Info[0].Name).eq("Guardian")
    })
})