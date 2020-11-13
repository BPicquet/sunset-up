  /* Compteur page home */

var divJours = document.querySelector('.jour');
var divHeures = document.querySelector('.heure');
var divMinutes = document.querySelector('.minute');
var divSecondes = document.querySelector('.seconde');

setInterval(() => {
  let now = moment()
  let goal = moment('25//06/2021 00:00:00', 'DD/MM/YYYY HH:mm:ss')

  let duration = moment.duration(goal.diff(now))

  var days = duration.asDays()
  var hours = duration.hours()
  var minutes = duration.minutes()
  var seconds = duration.seconds()
  
  divJours.innerHTML =  Math.floor(days);
  divHeures.innerHTML =  hours;
  divMinutes.innerHTML =  minutes;
  divSecondes.innerHTML =  seconds;

  /*console.log( Math.floor(days), hours, minutes, seconds)*/
}, 250)

  /* Line-up */

function tous(e) {
    e.preventDefault();
    
  var therapie = document.querySelector('.therapie');
  var lomepal = document.querySelector('.lomepal');
  var tryo = document.querySelector('.tryo');
  var alpha = document.querySelector('.alpha');
  var biscuit = document.querySelector('.biscuit');
  var entendeur = document.querySelector('.entendeur');
  var angele = document.querySelector('.angele');
  var dinos = document.querySelector('.dinos');
  var dore = document.querySelector('.dore');
  var dubinc = document.querySelector('.dubinc');
  var izia = document.querySelector('.izia');
  var blazes = document.querySelector('.blazes');
  var jahneration = document.querySelector('.jahneration');
  var laffut = document.querySelector('.laffut');
  var plum = document.querySelector('.plum');
  var naaman = document.querySelector('.naaman');
  var fraicheur = document.querySelector('.fraicheur');
  var ter = document.querySelector('.ter');
  var le77 = document.querySelector('.le77');
  var luidji = document.querySelector('.luidji');
  var mellow = document.querySelector('.mellow');
  var lonepsi = document.querySelector('.lonepsi');
  var namic = document.querySelector('.namic');
  var pomme = document.querySelector('.pomme');
  var salut = document.querySelector('.salut');
  var vitalic = document.querySelector('.vitalic');
  var pepite = document.querySelector('.pepite');
  var voyou = document.querySelector('.voyou');
  var xad = document.querySelector('.xad');
  var sopico = document.querySelector('.sopico');
  var pirouettes = document.querySelector('.pirouettes');
  var broussai = document.querySelector('.broussai');
  var agar = document.querySelector('.agar');
  
  izia.style.display = "";
  voyou.style.display = "";
  luidji.style.display = "";
  le77.style.display = "";
  tryo.style.display = "";
  therapie.style.display = "";
  lomepal.style.display = "";
  dubinc.style.display = "";
  blazes.style.display = "";
  mellow.style.display = "";
  xad.style.display = "";
  
  pirouettes.style.display = "";
  jahneration.style.display = "";
  lonepsi.style.display = "";
  laffut.style.display = "";
  alpha.style.display = "";
  sopico.style.display = "";
  biscuit.style.display = "";
  pomme.style.display = "";
  entendeur.style.display = "";
  plum.style.display = "";
  namic.style.display = "";
  
  naaman.style.display = "";
  agar.style.display = "";
  pepite.style.display = "";
  broussai.style.display = "";
  ter.style.display = "";
  dore.style.display = "";
  angele.style.display = "";
  dinos.style.display = "";
  salut.style.display = "";
  vitalic.style.display = "";
  fraicheur.style.display = "";
}

function vendredi(e) {
    e.preventDefault();
    
  var therapie = document.querySelector('.therapie');
  var lomepal = document.querySelector('.lomepal');
  var tryo = document.querySelector('.tryo');
  var alpha = document.querySelector('.alpha');
  var biscuit = document.querySelector('.biscuit');
  var entendeur = document.querySelector('.entendeur');
  var angele = document.querySelector('.angele');
  var dinos = document.querySelector('.dinos');
  var dore = document.querySelector('.dore');
  var dubinc = document.querySelector('.dubinc');
  var izia = document.querySelector('.izia');
  var blazes = document.querySelector('.blazes');
  var jahneration = document.querySelector('.jahneration');
  var laffut = document.querySelector('.laffut');
  var plum = document.querySelector('.plum');
  var naaman = document.querySelector('.naaman');
  var fraicheur = document.querySelector('.fraicheur');
  var ter = document.querySelector('.ter');
  var le77 = document.querySelector('.le77');
  var luidji = document.querySelector('.luidji');
  var mellow = document.querySelector('.mellow');
  var lonepsi = document.querySelector('.lonepsi');
  var namic = document.querySelector('.namic');
  var pomme = document.querySelector('.pomme');
  var salut = document.querySelector('.salut');
  var vitalic = document.querySelector('.vitalic');
  var pepite = document.querySelector('.pepite');
  var voyou = document.querySelector('.voyou');
  var xad = document.querySelector('.xad');
  var sopico = document.querySelector('.sopico');
  var pirouettes = document.querySelector('.pirouettes');
  var broussai = document.querySelector('.broussai');
  var agar = document.querySelector('.agar');
  
  izia.style.display = "";
  voyou.style.display = "";
  luidji.style.display = "";
  le77.style.display = "";
  tryo.style.display = "";
  therapie.style.display = "";
  lomepal.style.display = "";
  dubinc.style.display = "";
  blazes.style.display = "";
  mellow.style.display = "";
  xad.style.display = "";
  
  pirouettes.style.display = "none";
  jahneration.style.display = "none";
  lonepsi.style.display = "none";
  laffut.style.display = "none";
  alpha.style.display = "none";
  sopico.style.display = "none";
  biscuit.style.display = "none";
  pomme.style.display = "none";
  entendeur.style.display = "none";
  plum.style.display = "none";
  namic.style.display = "none";
  
  naaman.style.display = "none";
  agar.style.display = "none";
  pepite.style.display = "none";
  broussai.style.display = "none";
  ter.style.display = "none";
  dore.style.display = "none";
  angele.style.display = "none";
  dinos.style.display = "none";
  salut.style.display = "none";
  vitalic.style.display = "none";
  fraicheur.style.display = "none";
}

function samedi(e) {
    e.preventDefault();
    
  var therapie = document.querySelector('.therapie');
  var lomepal = document.querySelector('.lomepal');
  var tryo = document.querySelector('.tryo');
  var alpha = document.querySelector('.alpha');
  var biscuit = document.querySelector('.biscuit');
  var entendeur = document.querySelector('.entendeur');
  var angele = document.querySelector('.angele');
  var dinos = document.querySelector('.dinos');
  var dore = document.querySelector('.dore');
  var dubinc = document.querySelector('.dubinc');
  var izia = document.querySelector('.izia');
  var blazes = document.querySelector('.blazes');
  var jahneration = document.querySelector('.jahneration');
  var laffut = document.querySelector('.laffut');
  var plum = document.querySelector('.plum');
  var naaman = document.querySelector('.naaman');
  var fraicheur = document.querySelector('.fraicheur');
  var ter = document.querySelector('.ter');
  var le77 = document.querySelector('.le77');
  var luidji = document.querySelector('.luidji');
  var mellow = document.querySelector('.mellow');
  var lonepsi = document.querySelector('.lonepsi');
  var namic = document.querySelector('.namic');
  var pomme = document.querySelector('.pomme');
  var salut = document.querySelector('.salut');
  var vitalic = document.querySelector('.vitalic');
  var pepite = document.querySelector('.pepite');
  var voyou = document.querySelector('.voyou');
  var xad = document.querySelector('.xad');
  var sopico = document.querySelector('.sopico');
  var pirouettes = document.querySelector('.pirouettes');
  var broussai = document.querySelector('.broussai');
  var agar = document.querySelector('.agar');
  
  pirouettes.style.display = "";
  jahneration.style.display = "";
  lonepsi.style.display = "";
  laffut.style.display = "";
  alpha.style.display = "";
  sopico.style.display = "";
  biscuit.style.display = "";
  pomme.style.display = "";
  entendeur.style.display = "";
  plum.style.display = "";
  namic.style.display = "";
  
  izia.style.display = "none";
  voyou.style.display = "none";
  luidji.style.display = "none";
  le77.style.display = "none";
  tryo.style.display = "none";
  therapie.style.display = "none";
  lomepal.style.display = "none";
  dubinc.style.display = "none";
  blazes.style.display = "none";
  mellow.style.display = "none";
  xad.style.display = "none";
  
  naaman.style.display = "none";
  agar.style.display = "none";
  pepite.style.display = "none";
  broussai.style.display = "none";
  ter.style.display = "none";
  dore.style.display = "none";
  angele.style.display = "none";
  dinos.style.display = "none";
  salut.style.display = "none";
  vitalic.style.display = "none";
  fraicheur.style.display = "none";
}

function dimanche(e) {
    e.preventDefault();
    
  var therapie = document.querySelector('.therapie');
  var lomepal = document.querySelector('.lomepal');
  var tryo = document.querySelector('.tryo');
  var alpha = document.querySelector('.alpha');
  var biscuit = document.querySelector('.biscuit');
  var entendeur = document.querySelector('.entendeur');
  var angele = document.querySelector('.angele');
  var dinos = document.querySelector('.dinos');
  var dore = document.querySelector('.dore');
  var dubinc = document.querySelector('.dubinc');
  var izia = document.querySelector('.izia');
  var blazes = document.querySelector('.blazes');
  var jahneration = document.querySelector('.jahneration');
  var laffut = document.querySelector('.laffut');
  var plum = document.querySelector('.plum');
  var naaman = document.querySelector('.naaman');
  var fraicheur = document.querySelector('.fraicheur');
  var ter = document.querySelector('.ter');
  var le77 = document.querySelector('.le77');
  var luidji = document.querySelector('.luidji');
  var mellow = document.querySelector('.mellow');
  var lonepsi = document.querySelector('.lonepsi');
  var namic = document.querySelector('.namic');
  var pomme = document.querySelector('.pomme');
  var salut = document.querySelector('.salut');
  var vitalic = document.querySelector('.vitalic');
  var pepite = document.querySelector('.pepite');
  var voyou = document.querySelector('.voyou');
  var xad = document.querySelector('.xad');
  var sopico = document.querySelector('.sopico');
  var pirouettes = document.querySelector('.pirouettes');
  var broussai = document.querySelector('.broussai');
  var agar = document.querySelector('.agar');
  
  naaman.style.display = "";
  agar.style.display = "";
  pepite.style.display = "";
  broussai.style.display = "";
  ter.style.display = "";
  dore.style.display = "";
  angele.style.display = "";
  dinos.style.display = "";
  salut.style.display = "";
  vitalic.style.display = "";
  fraicheur.style.display = "";
  
  izia.style.display = "none";
  voyou.style.display = "none";
  luidji.style.display = "none";
  le77.style.display = "none";
  tryo.style.display = "none";
  therapie.style.display = "none";
  lomepal.style.display = "none";
  dubinc.style.display = "none";
  blazes.style.display = "none";
  mellow.style.display = "none";
  xad.style.display = "none";
  
  pirouettes.style.display = "none";
  jahneration.style.display = "none";
  lonepsi.style.display = "none";
  laffut.style.display = "none";
  alpha.style.display = "none";
  sopico.style.display = "none";
  biscuit.style.display = "none";
  pomme.style.display = "none";
  entendeur.style.display = "none";
  plum.style.display = "none";
  namic.style.display = "none";
}

const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burgerMenu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    burgerMenu.classList.toggle('active');
});


window.onload = tous;