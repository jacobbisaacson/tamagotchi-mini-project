console.log("tamagotchi");

class Tamagotchi {
  constructor(name) {
	this.hungry = 1
	
	this.bored = 1

	this.sleepy = 1

	this.age = 0

	this.name = name
    
  }

}

const game = {
  
  tamNames: "",
  intervalID: null, 
  timeElapsed: 0,


  addName: function(str) {
    const tam = new Tamagotchi(str)
    this.tamNames = str
    this.start()
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

  startTimer: function() {
    this.printTime()
    this.intervalID = setInterval(() => {
      this.timeElapsed++
      this.printTime()
    }, 1000) 
  },

  stopTimer: function() {
    clearInterval(this.intervalID)
  },

  printTime: function() {
    const seconds = this.timeElapsed
    let mm = Math.floor(seconds/60)
    let ss = seconds - (mm * 60)

    if(ss < 10) {
      ss = "0" + ss 
    }

    console.log(`${mm}:${ss}`); // working BUT called again when name is inputted and goes farther

  },

  start: function() {
    console.log("show input for name with button? start timer?");
  }

 }


game.start()

const itemTextInput = document.querySelector('#item-adding-form')

$('form').on('submit', (e) => {
  e.preventDefault()
  const nameFromForm = $("#item-adding-input").val()
  const nameT = $("#name-line")
  nameT.text(`Name: ${nameFromForm}`)
  game.start()
  game.startTimer()

})


















