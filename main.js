//Javascript project Context: You’re part of a research team that has found a new 
//mysterious organism at the bottom of the ocean near hydrothermal vents. 
//Your team names the organism, Pila aequor (P. aequor), and finds that it is only
// comprised of 15 DNA bases. The small DNA samples and frequency at which it 
//mutates due to the hydrothermal vents make P. aequor an interesting specimen to 
//study. However, P. aequor cannot survive above sea level and locating P. aequor 
//in the deep sea is difficult and expensive. Your job is to create objects that
// simulate the DNA of P. aequor for your research team to study.
//


// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

//Factory function that returns pAqueor object
const pAequorFactory = (number, array) => {
  const pAequor = {
    specimenNum: number,
    dna: array,
    //function to mutate the dna
    mutate() {
      let randomBase = returnRandBase();
      let randomBaseIndex = this.dna[Math.floor(Math.random() * 15)];
      //check to see ensure the base has changed
      while (randomBase === randomBaseIndex) {
        randomBase = returnRandBase();
      }
      this.dna[randomBaseIndex] = randomBase;
    },
    //method to compare different sequences 
    compareDNA (pAequor) {
      let totalMatches = 0;
      for (let i = 0; i <= 15; i++) {
        if (this.dna[i] === pAequor.dna[i]) {
          totalMatches++
        }
      }
      //calculate match percentage
      let matchPercentage = totalMatches / 15;
      console.log(`Specimen #${this.specimenNum} and ${pAequor.specimenNum} have ${matchPercentage}% in common`);
    }, 
    //method to determing if dna is made up of at least 60% C or G bases
    willLikelySurvive() {
      let total = 0;
    //determine how many 'C' and 'G' bases exist
      this.dna.forEach(element => {
        if (element === 'C' || element === 'G') {
          total++;
        }
      });
    //if total >= 60% return true
      if (total >= 9) {
         return true; 
      }
      else {
        return false;
      }
    }
  }
  return pAequor;
}

//create 30 instances of pAequor that can survive in its natural environment
let dnaTotal = 0;
let dnaSurvivors = [];
while (dnaTotal < 30) {
  let newDNA = mockUpStrand;
  let pAequor = pAequorFactory(dnaTotal, newDNA);
  if (pAequor.willLikelySurvive === true) {
    dnaSurvivors.push(pAequor);
    dnaTotal++;
  }
}














