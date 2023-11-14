// class TV {
//    kanalas = 1;
//    garsas = 50;

//    constructor(gamintojas) {
//       this.gamintojas = gamintojas;
//    }

//    setVolume(lygis) {
//       lygis < 1 || lygis === undefined
//          ? (this.garsas = 1)
//          : (this.garsas = lygis);
//       lygis > 100 ? (this.garsas = 100) : null;
//    }

//    setChannel(ch) {
//       ch > 50 ? (this.kanalas = 50) : (this.kanalas = ch);
//       ch < 1 ? (this.kanalas = 1) : null;
//    }

//    factoryReset() {
//       this.kanalas = 1;
//       this.garsas = 50;
//    }

//    setMessage() {
//       return `Televizorius ${this.gamintojas} šiuo metu rodo ${this.kanalas} kanalą. Garso lygis ${this.garsas}.`;
//    }
// }

// const samsung = new TV("samsung");
// samsung.setVolume(76);
// samsung.setChannel(8);
// console.log(samsung.setMessage());
// // samsung.factoryReset();
// console.log(samsung);

function rand(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1) + min);
}

class Vaisius {
   dydis = rand(5, 25);
   id = rand(1000000, 9999999);
   prakastas = false;

   prakasti() {
      this.prakastas = true;
   }
}

class Krepsys {
   vaisiai = [];

   pripildyti(item) {
      this.vaisiai.length < 20 ? this.vaisiai.push(item) : null;
      this.vaisiai.sort((b, a) => a.dydis - b.dydis);
   }

   issimti() {
      return this.vaisiai.splice(0, 1);
   }
}

const kriause = new Vaisius();
console.log(kriause);

const bucket = new Krepsys();

for (let i = 0; i < 20; i++) {
   bucket.pripildyti(new Vaisius());
}
console.log(bucket.vaisiai.slice());

bucket.issimti();
console.log(bucket.vaisiai.slice());

for (let i = 0; i < 20; i++) {
   bucket.pripildyti(new Vaisius());
}
console.log(bucket.vaisiai.slice());
