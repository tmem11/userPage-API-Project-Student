class Renderer {
    construcor(apiManager) {
        this.apiManager = {}
    }
    set setApiManager(apiManager) {
        this.apiManager = apiManager
    }


    renderMainUser() {
        let source = $('#user-template').html()
        let template = Handlebars.compile(source)
        $(".user-container").append(template(this.apiManager.data.mainUser))
    }
    renderFriendsList() {
        let source = $('#friends-template').html()
        let template = Handlebars.compile(source)
        $(".friends-container").append(template(this.apiManager.data.friends))
    }
    renderQuote() {
        let source = $('#quote-template').html()
        let template = Handlebars.compile(source)
        $(".quote-container").append(template(this.apiManager.data.quote))

    }
    renderPokemon() {
        let source = $('#peca-template').html()
        let template = Handlebars.compile(source)
        $(".pokemon-container").append(template(this.apiManager.data.pokemon))
    }
    renderAboutMe() {
        let source = $('#meat-template').html()
        let template = Handlebars.compile(source)
        $(".meat-container").append(template(this.apiManager.data.aboutMe))
    }
    render(apiManager) {
        this.setApiManager = apiManager
        this.renderMainUser()
        this.renderFriendsList()
        this.renderQuote()
        this.renderPokemon()
        this.renderAboutMe()
    }




}



// let apiManager = new APIManager()
// apiManager.fetch()
// setTimeout(function () {
//     const render = new Renderer()
//     render.setApiManager = apiManager
//     render.renderMainUser()
//     render.renderFriendsList()
//     render.renderQuote()
//     render.renderPokemon()
//     render.renderAboutMe()


//     // console.log(render.apiManager.friends)

// }, 3000)


