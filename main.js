let arrayPractice = [1, 2, 3, 4]
function Speaker(givenName, surname, email, biography, isActive = true) {
    this.givenName = givenName;
    this.surname = surname;
    this.email = email;
    this.biography = biography;
    this.isActive = isActive;
}


Speaker.prototype = {
    getBiography: function () {
        console.log(this.biography + " written by Mr. " + this.givenName + " " + this.surname +  " is a revolutionary work of art that single handedly created World Peace");
    },

    markInactive: function (date) {
        this.isActive = false;
        console.log(this.isActive);
        this.inActiveDate = date;
        console.log(this.inActiveDate)
    },

    motivationalFood: function(eat)  {
    if(eat === "tobacco" || eat === "lean"){
        this.isActive = false
        console.log("This " + eat + " makes " + this.givenName + " feel funny")
        console.log(this.givenName + " is feeling well? "+ this.isActive)
    } else {
        this.isActive = true
        console.log(this.givenName + " Is active? " + this.isActive)
        console.log("Yummy yummy yummy, " + this.givenName + " likes " +  eat + " in their tummy")
    }
    },
}


function KeynoteSpeaker(givenName, surname, email, biography, isActive = true, websiteArray, keynoteTopicsArray, breakoutArray) {
    Speaker.call(this, givenName, surname, email, biography, isActive = true);
    this.websiteArray = websiteArray;
    this.keynoteTopicsArray = keynoteTopicsArray;
    this.breakoutArray = breakoutArray;


}

function WorkshopSpeaker(givenName, surname, email, biography, isActive = true, workshopTopicsArray) {
    Speaker.call(this, givenName, surname, email, biography, isActive = true);
    this.workshopTopicsArray = workshopTopicsArray;

}

//creates a protype of subclass using Speaker.prototypes
KeynoteSpeaker.prototype = Object.create(Speaker.prototype);
KeynoteSpeaker.prototype.constructor = KeynoteSpeaker;

WorkshopSpeaker.prototype = Object.create(Speaker.prototype);
WorkshopSpeaker.prototype.constructor = WorkshopSpeaker;

let greatSpeaker = new KeynoteSpeaker("DMG", "Gregg", "imissthe80s@aol.com", "From Spuds to Potatos", isActive = true);
let badSpeaker = new KeynoteSpeaker("Lil Pump", "Garcia", "essskketttiit_lean@yandex.com", "From Esketit to Essskkeettiiiit: A story of Hope", isActive = true);
let decentSpeaker = new WorkshopSpeaker("SpongeBob", "SquarePants", "krustycrabfan@yahoo.com", "Jelly Fish Catching 101", isActive = true, arrayPractice);


// console.log("greatSpeaker:", greatSpeaker)
// console.log("badSpeakerName:", badSpeaker.givenName)
// console.log(decentSpeaker.workshopTopicsArray)

badSpeaker.markInactive("5/30/2018")
greatSpeaker.motivationalFood("ketofuel")
badSpeaker.motivationalFood("lean")
badSpeaker.getBiography()
greatSpeaker.getBiography()

