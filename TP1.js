"use strict";
function Politician(Name,Orientation, Sex, Nationality){
    this.Name=Name;
    this.Nationality=Nationality;
    this.Orientation=Orientation;
    this.Sex=Sex;

}
function State(Grid,Difficulty){
    this.Grid=Grid;
    this.Difficulty=Difficulty;
    this.Size=this.Difficulty*12;
    this.Limit=4*this.Difficulty;
    this.History=[];
}

function Collection(){
    this.item=[];
}
Collection.prototype.add=function(object){
    this.item.push(object);
};
Collection.prototype.GetProperty=function(object,value){
    return this.item.filter(item => item[object]===value);
};
Collection.prototype.remove=function(object,value){
    this.item=this.item.filter(item=> item[object]!==value)
};
Collection.prototype.Start=function(Size,object){
    for (let i of Size){
        Collection.push(object);
    } 
}
function Game(){
    this.Score = 0;
    console.log("Let's the game begin ! Your score is",this.Score);
    if (cpt>State.Limit) {
        console.log("You lost the Game.");
        let answer = prompt("Would try again ?");
        if (answer==="Yes"){
            let Difficulty = prompt("Which difficulty ?")
            Start
        }
    }
    }
    
}

let Trump= new Politician("Donald Trump","D","M","US")
console.log(Trump)
let game= new Game()
