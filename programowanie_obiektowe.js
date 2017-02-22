function Telefon(marka, cena, kolor) {
	this.marka = marka; 
	this.cena = cena;
	this.kolor = kolor;
}
Telefon.prototype.printInfo = function() {
	console.log("Marka telefonu to " + this.marka + " kolor to " + this.kolor + " a cena to " + this.cena );
}

var iPhone6S = new Telefon("Apple", 2250, "srebrny");
var Galaxys6 = new Telefon("Samsung", 1900, "złoty");
var OnePlus = new Telefon("One", 2000, "czarny");

iPhone6S.printInfo();
Galaxys6.printInfo();
OnePlus.printInfo();