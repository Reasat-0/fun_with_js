import Person from "./proto";
function SuperHero() {
  this.isSuperHero = true;
}

SuperHero.prototype.fightingCrime = function () {
  console.log("Fighting....");
};
