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
function Game(){
    this.Score = 0;

    console.log("Let's the game begin ! Your score is",this.Score);
    
}
let Trump= new Politician("Donald Trump","D","M","US")
console.log(Trump)
let game= new Game()
