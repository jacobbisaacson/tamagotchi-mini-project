console.log("tamagotchi");

class Tamagotchi {
  constructor() {
	this.hungry = false
	
	this.bored = false

	this.sleepy = false

	this.age = 0

	this.name = name
    
  }

}

const play = {
  
  feed: function() {
  	if(this.hungry === true) {
  		this.hungry = false
  		this.sleepy = true
  		console.log("feed me!");
  	} else {
  		console.log("just ate");
  	}
  },

  sleep: function() {
    if(this.sleepy === true) {
      this.sleepy = false
      console.log("im tired! going to sleep");
    } else {
      console.log("just woke up, ready for the day!");
    }
  }












 }