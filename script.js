
(function () {

var names = ["Yaakov", "Jack", "Jordan", "Jakson", "Paul", "Alli", "Elena", "Stefan", "Damon", "Jermey"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();



