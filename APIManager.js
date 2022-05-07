//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }
    getRandomPokemonIndex(){
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min)
          }
          return getRandomInt(1,50)
          
    }
    fetchMainUser(mainUserData){
        let name=mainUserData.name
        this.data.mainUser=new User(name.first,name.last,mainUserData.location.city,
        mainUserData.location.state,mainUserData.picture.medium)
    }
    
    fetchFriends(users){
        this.data.friends= new Friends()
        for(let user of users){
            this.data.friends.newFriend(user)
        }
    } 
     fetchUsers(){
        $.ajax({
            method: "GET",
            context:this,
            url: 'https://randomuser.me/api/?results=7',
            success: function(data) {
                this.fetchMainUser(data.results[0])
                console.log(this.data.mainUser)
                data.results.shift()
                this.fetchFriends(data.results)
                console.log(this.data.friends)
            }
          })
    }
    fetchQuote(){
        $.ajax({
            method: "GET",
            context:this,
            url: 'https://api.kanye.rest',
            success: function(data) {
                this.data.quote=data.quote
                console.log(this.data.quote)
            }
          })

    }
    fetchAboutMeText(){
        $.ajax({
            method: "GET",
            context:this,
            url: 'https://baconipsum.com/api/?type=all-meat',
            success: function(data) {
                this.data.aboutMe=data[0]
                console.log(this.data.aboutMe)
            }
          })
    }
    createPokemon(data){
        let img=data.sprites.versions["generation-v"]["black-white"].animated.
        back_default
        this.data.pokemon= new Pokemon(data.name,img)   

    }
    fetchPokemon(){
        let index=this.getRandomPokemonIndex()
        $.ajax({
            method: "GET",
            context:this,
            url: `https://pokeapi.co/api/v2/pokemon/${index}`,
            success: function(data) {
                this.createPokemon(data)
                console.log(this.data.pokemon)
            }
          })
    }
    fetch(){
        this.fetchUsers()
        this.fetchQuote()
        this.fetchAboutMeText()
        this.fetchPokemon()
    }
}
   


class User{
    constructor(firstName="",lastName="",city="",state="",picture=""){
        this.firstName=firstName
        this.lastName=lastName
        this.city=city
        this.state=state
        this.picture=picture
    } 
}
class Friends{
    constructor(){
        this.friends=[]
    }
    newFriend(friend){
        this.friends.push(new User(friend.name.first
            ,friend.name.last))
      }
      get allFriends(){
        return this.friends
      }
}
class Pokemon{
    constructor(name,img){
        this.name=name
        this.img=img
    }
}




