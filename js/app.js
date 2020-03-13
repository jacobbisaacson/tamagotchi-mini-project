console.log("tamagotchi");

class Tamagotchi {
  constructor(name) {
	this.hungry = false
	
	this.bored = false

	this.sleepy = false

	this.age = 0

	this.name = name
    
  }

}

const game = {
  
  tamNames: "",

  addName: function(str) {
    const tam = new Tamagotchi(str)
    this.tamNames = str
    this.printTamName()
  },

  printTamName: function() {

  },

  feed: function() {
  	if(this.hungry === true) {
  		console.log("feed me!");
  		this.hungry = false
  		this.sleepy = true
  	} else {
  		console.log("just ate");
  	}
  },

  sleep: function() {
    if(this.sleepy === true) {
      console.log("im tired! going to sleep");
      this.sleepy = false
      this.bored = true
      this.getOlder()
    } else {
      console.log("just woke up, ready for the day!");
    }
  },

  getOlder: function() {
    this.age ++
    console.log("just got 1 year older");
    this.play()
  },

  play: function() {
    if(this.bored === true) {
      console.log("i wanna play!");
      this.bored = false
      this.hungry = true
    } else {
      console.log("k i'll wait to play later");
      this.feed()
    }
  },

  start: function() {
    console.log("show input for name with button?  start timer?");
    this.sleep()
    this.printTamName()
  }

 }

 
game.start()

const itemTextInput = document.querySelector('#item-adding-form')

$('form').on('submit', (e) => {
  e.preventDefault()
  const nameFromForm = $("#item-adding-input").val()
  const nameT = $("#name-line")
  nameT.text(`Name: ${nameFromForm}`)

})














