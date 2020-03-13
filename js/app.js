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
      this.bored = true
      this.getOlder()
      console.log("im tired! going to sleep");
    } else {
      console.log("just woke up, ready for the day!");
    }
  },

  getOlder: function() {
    this.age ++
    console.log("just got 1 year older");
  }


// need to set the name -- make a form









 }