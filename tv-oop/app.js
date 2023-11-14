class TV {
   kanalas = 1;
   garsas = 50;

   constructor(gamintojas) {
      this.gamintojas = gamintojas;
   }

   setVolume(lygis) {
      lygis < 1 || lygis === undefined
         ? (this.garsas = 1)
         : (this.garsas = lygis);
      lygis > 100 ? (this.garsas = 100) : null;
   }

   setChannel(ch) {
      ch > 50 ? (this.kanalas = 50) : (this.kanalas = ch);
      ch < 1 ? (this.kanalas = 1) : null;
   }

   factoryReset() {
      this.kanalas = 1;
      this.garsas = 50;
   }

   setMessage() {
      return `Televizorius ${this.gamintojas} šiuo metu rodo ${this.kanalas} kanalą. Garso lygis ${this.garsas}.`;
   }
}

const samsung = new TV("samsung");
samsung.setVolume(76);
samsung.setChannel(8);
console.log(samsung.setMessage());
// samsung.factoryReset();
console.log(samsung);
