(self.AMP=self.AMP||[]).push({n:"amp-timeago",v:"123456789",f:(function(AMP){function d(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var e in b)if(Object.defineProperties){var f=Object.getOwnPropertyDescriptor(b,e);f&&Object.defineProperty(a,e,f)}else a[e]=b[e]};Date.now();self.log=self.log||{user:null,dev:null};var p=self.log;var q={},r=[60,60,24,7,365/7/12,12];function t(a){if(a instanceof Date)return a;if(!isNaN(a)||/^\d+$/.test(a))return new Date(parseInt(a,10));a=(a||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2");return new Date(a)}
q.ar=function(a,b){function c(a,b){return 3>b?e[a][b-1]:3<=b&&10>=b?e[a][2]:e[a][3]}if(0===b)return["\u0645\u0646\u0630 \u0644\u062d\u0638\u0627\u062a","\u0628\u0639\u062f \u0644\u062d\u0638\u0627\u062a"];var e=[["\u062b\u0627\u0646\u064a\u0629","\u062b\u0627\u0646\u064a\u062a\u064a\u0646","%s \u062b\u0648\u0627\u0646","%s \u062b\u0627\u0646\u064a\u0629"],["\u062f\u0642\u064a\u0642\u0629","\u062f\u0642\u064a\u0642\u062a\u064a\u0646","%s \u062f\u0642\u0627\u0626\u0642","%s \u062f\u0642\u064a\u0642\u0629"],
["\u0633\u0627\u0639\u0629","\u0633\u0627\u0639\u062a\u064a\u0646","%s \u0633\u0627\u0639\u0627\u062a","%s \u0633\u0627\u0639\u0629"],["\u064a\u0648\u0645","\u064a\u0648\u0645\u064a\u0646","%s \u0623\u064a\u0627\u0645","%s \u064a\u0648\u0645\u0627\u064b"],["\u0623\u0633\u0628\u0648\u0639","\u0623\u0633\u0628\u0648\u0639\u064a\u0646","%s \u0623\u0633\u0627\u0628\u064a\u0639","%s \u0623\u0633\u0628\u0648\u0639\u0627\u064b"],["\u0634\u0647\u0631","\u0634\u0647\u0631\u064a\u0646","%s \u0623\u0634\u0647\u0631",
"%s \u0634\u0647\u0631\u0627\u064b"],["\u0639\u0627\u0645","\u0639\u0627\u0645\u064a\u0646","%s \u0623\u0639\u0648\u0627\u0645","%s \u0639\u0627\u0645\u0627\u064b"]],f=c(Math.floor(b/2),a);return["\u0645\u0646\u0630  "+f,"\u0628\u0639\u062f  "+f]};
q.be=function(a,b){function c(a,b,c,e,n){var f=n%10,g=e;1===n?g=a:1===f&&20<n?g=b:1<f&&5>f&&(20<n||10>n)&&(g=c);return g}var e=c.bind(null,"\u0441\u0435\u043a\u0443\u043d\u0434\u0443","%s \u0441\u0435\u043a\u0443\u043d\u0434\u0443","%s \u0441\u0435\u043a\u0443\u043d\u0434\u044b","%s \u0441\u0435\u043a\u0443\u043d\u0434"),f=c.bind(null,"\u0445\u0432\u0456\u043b\u0456\u043d\u0443","%s \u0445\u0432\u0456\u043b\u0456\u043d\u0443","%s \u0445\u0432\u0456\u043b\u0456\u043d\u044b","%s \u0445\u0432\u0456\u043b\u0456\u043d"),
g=c.bind(null,"\u0433\u0430\u0434\u0437\u0456\u043d\u0443","%s \u0433\u0430\u0434\u0437\u0456\u043d\u0443","%s \u0433\u0430\u0434\u0437\u0456\u043d\u044b","%s \u0433\u0430\u0434\u0437\u0456\u043d"),h=c.bind(null,"\u0434\u0437\u0435\u043d\u044c","%s \u0434\u0437\u0435\u043d\u044c","%s \u0434\u043d\u0456","%s \u0434\u0437\u0451\u043d"),k=c.bind(null,"\u0442\u044b\u0434\u0437\u0435\u043d\u044c","%s \u0442\u044b\u0434\u0437\u0435\u043d\u044c","%s \u0442\u044b\u0434\u043d\u0456","%s \u0442\u044b\u0434\u043d\u044f\u045e"),
l=c.bind(null,"\u043c\u0435\u0441\u044f\u0446","%s \u043c\u0435\u0441\u044f\u0446","%s \u043c\u0435\u0441\u044f\u0446\u044b","%s \u043c\u0435\u0441\u044f\u0446\u0430\u045e"),m=c.bind(null,"\u0433\u043e\u0434","%s \u0433\u043e\u0434","%s \u0433\u0430\u0434\u044b","%s \u0433\u0430\u0434\u043e\u045e");switch(b){case 0:return["\u0442\u043e\u043b\u044c\u043a\u0456 \u0448\u0442\u043e","\u043f\u0440\u0430\u0437 \u043d\u0435\u043a\u0430\u043b\u044c\u043a\u0456 \u0441\u0435\u043a\u0443\u043d\u0434"];case 1:return[e(a)+
" \u0442\u0430\u043c\u0443","\u043f\u0440\u0430\u0437 "+e(a)];case 2:case 3:return[f(a)+" \u0442\u0430\u043c\u0443","\u043f\u0440\u0430\u0437 "+f(a)];case 4:case 5:return[g(a)+" \u0442\u0430\u043c\u0443","\u043f\u0440\u0430\u0437 "+g(a)];case 6:case 7:return[h(a)+" \u0442\u0430\u043c\u0443","\u043f\u0440\u0430\u0437 "+h(a)];case 8:case 9:return[k(a)+" \u0442\u0430\u043c\u0443","\u043f\u0440\u0430\u0437 "+k(a)];case 10:case 11:return[l(a)+" \u0442\u0430\u043c\u0443","\u043f\u0440\u0430\u0437 "+l(a)];
case 12:case 13:return[m(a)+" \u0442\u0430\u043c\u0443","\u043f\u0440\u0430\u0437 "+m(a)];default:return["",""]}};
q.bg=function(a,b){return[["\u0442\u043e\u043a\u0443 \u0449\u043e","\u0441\u044a\u0432\u0441\u0435\u043c \u0441\u043a\u043e\u0440\u043e"],["\u043f\u0440\u0435\u0434\u0438 %s \u0441\u0435\u043a\u0443\u043d\u0434\u0438","\u0441\u043b\u0435\u0434 %s \u0441\u0435\u043a\u0443\u043d\u0434\u0438"],["\u043f\u0440\u0435\u0434\u0438 1 \u043c\u0438\u043d\u0443\u0442\u0430","\u0441\u043b\u0435\u0434 1 \u043c\u0438\u043d\u0443\u0442\u0430"],["\u043f\u0440\u0435\u0434\u0438 %s \u043c\u0438\u043d\u0443\u0442\u0438",
"\u0441\u043b\u0435\u0434 %s \u043c\u0438\u043d\u0443\u0442\u0438"],["\u043f\u0440\u0435\u0434\u0438 1 \u0447\u0430\u0441","\u0441\u043b\u0435\u0434 1 \u0447\u0430\u0441"],["\u043f\u0440\u0435\u0434\u0438 %s \u0447\u0430\u0441\u0430","\u0441\u043b\u0435\u0434 %s \u0447\u0430\u0441\u0430"],["\u043f\u0440\u0435\u0434\u0438 1 \u0434\u0435\u043d","\u0441\u043b\u0435\u0434 1 \u0434\u0435\u043d"],["\u043f\u0440\u0435\u0434\u0438 %s \u0434\u043d\u0438","\u0441\u043b\u0435\u0434 %s \u0434\u043d\u0438"],["\u043f\u0440\u0435\u0434\u0438 1 \u0441\u0435\u0434\u043c\u0438\u0446\u0430",
"\u0441\u043b\u0435\u0434 1 \u0441\u0435\u0434\u043c\u0438\u0446\u0430"],["\u043f\u0440\u0435\u0434\u0438 %s \u0441\u0435\u0434\u043c\u0438\u0446\u0438","\u0441\u043b\u0435\u0434 %s \u0441\u0435\u0434\u043c\u0438\u0446\u0438"],["\u043f\u0440\u0435\u0434\u0438 1 \u043c\u0435\u0441\u0435\u0446","\u0441\u043b\u0435\u0434 1 \u043c\u0435\u0441\u0435\u0446"],["\u043f\u0440\u0435\u0434\u0438 %s \u043c\u0435\u0441\u0435\u0446\u0430","\u0441\u043b\u0435\u0434 %s \u043c\u0435\u0441\u0435\u0446\u0430"],["\u043f\u0440\u0435\u0434\u0438 1 \u0433\u043e\u0434\u0438\u043d\u0430",
"\u0441\u043b\u0435\u0434 1 \u0433\u043e\u0434\u0438\u043d\u0430"],["\u043f\u0440\u0435\u0434\u0438 %s \u0433\u043e\u0434\u0438\u043d\u0438","\u0441\u043b\u0435\u0434 %s \u0433\u043e\u0434\u0438\u043d\u0438"]][b]};
q.ca=function(a,b){return[["fa un moment","d'aqu\u00ed un moment"],["fa %s segons","d'aqu\u00ed %s segons"],["fa 1 minut","d'aqu\u00ed 1 minut"],["fa %s minuts","d'aqu\u00ed %s minuts"],["fa 1 hora","d'aqu\u00ed 1 hora"],["fa %s hores","d'aqu\u00ed %s hores"],["fa 1 dia","d'aqu\u00ed 1 dia"],["fa %s dies","d'aqu\u00ed %s dies"],["fa 1 setmana","d'aqu\u00ed 1 setmana"],["fa %s setmanes","d'aqu\u00ed %s setmanes"],["fa 1 mes","d'aqu\u00ed 1 mes"],["fa %s mesos","d'aqu\u00ed %s mesos"],["fa 1 any","d'aqu\u00ed 1 any"],
["fa %s anys","d'aqu\u00ed %s anys"]][b]};
q.da=function(a,b){return[["for et \u00f8jeblik siden","om et \u00f8jeblik"],["for %s sekunder siden","om %s sekunder"],["for 1 minut siden","om 1 minut"],["for %s minutter siden","om %s minutter"],["for 1 time siden","om 1 time"],["for %s timer siden","om %s timer"],["for 1 dag siden","om 1 dag"],["for %s dage siden","om %s dage"],["for 1 uge siden","om 1 uge"],["for %s uger siden","om %s uger"],["for 1 m\u00e5ned siden","om 1 m\u00e5ned"],["for %s m\u00e5neder siden","om %s m\u00e5neder"],["for 1 \u00e5r siden",
"om 1 \u00e5r"],["for %s \u00e5r siden","om %s \u00e5r"]][b]};
q.de=function(a,b){return[["gerade eben","vor einer Weile"],["vor %s Sekunden","in %s Sekunden"],["vor 1 Minute","in 1 Minute"],["vor %s Minuten","in %s Minuten"],["vor 1 Stunde","in 1 Stunde"],["vor %s Stunden","in %s Stunden"],["vor 1 Tag","in 1 Tag"],["vor %s Tagen","in %s Tagen"],["vor 1 Woche","in 1 Woche"],["vor %s Wochen","in %s Wochen"],["vor 1 Monat","in 1 Monat"],["vor %s Monaten","in %s Monaten"],["vor 1 Jahr","in 1 Jahr"],["vor %s Jahren","in %s Jahren"]][b]};
q.el=function(a,b){return[["\u03bc\u03cc\u03bb\u03b9\u03c2 \u03c4\u03ce\u03c1\u03b1","\u03c3\u03b5 \u03bb\u03af\u03b3\u03bf"],["%s \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03b1 \u03c0\u03c1\u03b9\u03bd","\u03c3\u03b5 %s \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03b1"],["1 \u03bb\u03b5\u03c0\u03c4\u03cc \u03c0\u03c1\u03b9\u03bd","\u03c3\u03b5 1 \u03bb\u03b5\u03c0\u03c4\u03cc"],["%s \u03bb\u03b5\u03c0\u03c4\u03ac \u03c0\u03c1\u03b9\u03bd","\u03c3\u03b5 %s \u03bb\u03b5\u03c0\u03c4\u03ac"],
["1 \u03ce\u03c1\u03b1 \u03c0\u03c1\u03b9\u03bd","\u03c3\u03b5 1 \u03ce\u03c1\u03b1"],["%s \u03ce\u03c1\u03b5\u03c2 \u03c0\u03c1\u03b9\u03bd","\u03c3\u03b5 %s \u03ce\u03c1\u03b5\u03c2"],["1 \u03bc\u03ad\u03c1\u03b1 \u03c0\u03c1\u03b9\u03bd","\u03c3\u03b5 1 \u03bc\u03ad\u03c1\u03b1"],["%s \u03bc\u03ad\u03c1\u03b5\u03c2 \u03c0\u03c1\u03b9\u03bd","\u03c3\u03b5 %s \u03bc\u03ad\u03c1\u03b5\u03c2"],["1 \u03b5\u03b2\u03b4\u03bf\u03bc\u03ac\u03b4\u03b1 \u03c0\u03c1\u03b9\u03bd","\u03c3\u03b5 1 \u03b5\u03b2\u03b4\u03bf\u03bc\u03ac\u03b4\u03b1"],
["%s \u03b5\u03b2\u03b4\u03bf\u03bc\u03ac\u03b4\u03b5\u03c2 \u03c0\u03c1\u03b9\u03bd","\u03c3\u03b5 %s \u03b5\u03b2\u03b4\u03bf\u03bc\u03ac\u03b4\u03b5\u03c2"],["1 \u03bc\u03ae\u03bd\u03b1 \u03c0\u03c1\u03b9\u03bd","\u03c3\u03b5 1 \u03bc\u03ae\u03bd\u03b1"],["%s \u03bc\u03ae\u03bd\u03b5\u03c2 \u03c0\u03c1\u03b9\u03bd","\u03c3\u03b5 %s \u03bc\u03ae\u03bd\u03b5\u03c2"],["1 \u03c7\u03c1\u03cc\u03bd\u03bf \u03c0\u03c1\u03b9\u03bd","\u03c3\u03b5 1 \u03c7\u03c1\u03cc\u03bd\u03bf"],["%s \u03c7\u03c1\u03cc\u03bd\u03b9\u03b1 \u03c0\u03c1\u03b9\u03bd",
"\u03c3\u03b5 %s \u03c7\u03c1\u03cc\u03bd\u03b9\u03b1"]][b]};q.en=function(a,b){return[["just now","right now"],["%s seconds ago","in %s seconds"],["1 minute ago","in 1 minute"],["%s minutes ago","in %s minutes"],["1 hour ago","in 1 hour"],["%s hours ago","in %s hours"],["1 day ago","in 1 day"],["%s days ago","in %s days"],["1 week ago","in 1 week"],["%s weeks ago","in %s weeks"],["1 month ago","in 1 month"],["%s months ago","in %s months"],["1 year ago","in 1 year"],["%s years ago","in %s years"]][b]};
q.enShort=function(a,b){return[["just now","right now"],["%ss ago","in %ss"],["1m ago","in 1m"],["%sm ago","in %sm"],["1h ago","in 1h"],["%sh ago","in %sh"],["1d ago","in 1d"],["%sd ago","in %sd"],["1w ago","in 1w"],["%sw ago","in %sw"],["1mo ago","in 1mo"],["%smo ago","in %smo"],["1yr ago","in 1yr"],["%syr ago","in %syr"]][b]};
q.es=function(a,b){return[["justo ahora","en un rato"],["hace %s segundos","en %s segundos"],["hace 1 minuto","en 1 minuto"],["hace %s minutos","en %s minutos"],["hace 1 hora","en 1 hora"],["hace %s horas","en %s horas"],["hace 1 d\u00eda","en 1 d\u00eda"],["hace %s d\u00edas","en %s d\u00edas"],["hace 1 semana","en 1 semana"],["hace %s semanas","en %s semanas"],["hace 1 mes","en 1 mes"],["hace %s meses","en %s meses"],["hace 1 a\u00f1o","en 1 a\u00f1o"],["hace %s a\u00f1os","en %s a\u00f1os"]][b]};
q.eu=function(a,b){return[["orain","denbora bat barru"],["duela %s segundu","%s segundu barru"],["duela minutu 1","minutu 1 barru"],["duela %s minutu","%s minutu barru"],["duela ordu 1","ordu 1 barru"],["duela %s ordu","%s ordu barru"],["duela egun 1","egun 1 barru"],["duela %s egun","%s egun barru"],["duela aste 1","aste 1 barru"],["duela %s aste","%s aste barru"],["duela hillabete 1","hillabete 1 barru"],["duela %s hillabete","%s hillabete barru"],["duela urte 1","urte 1 barru"],["duela %s urte",
"%s urte barru"]][b]};
q.fi=function(a,b){return[["juuri \u00e4sken","juuri nyt"],["%s sekuntia sitten","%s sekunnin p\u00e4\u00e4st\u00e4"],["minuutti sitten","minuutin p\u00e4\u00e4st\u00e4"],["%s minuuttia sitten","%s minuutin p\u00e4\u00e4st\u00e4"],["tunti sitten","tunnin p\u00e4\u00e4st\u00e4"],["%s tuntia sitten","%s tunnin p\u00e4\u00e4st\u00e4"],["p\u00e4iv\u00e4 sitten","p\u00e4iv\u00e4n p\u00e4\u00e4st\u00e4"],["%s p\u00e4iv\u00e4\u00e4 sitten","%s p\u00e4iv\u00e4n p\u00e4\u00e4st\u00e4"],["viikko sitten","viikon p\u00e4\u00e4st\u00e4"],
["%s viikkoa sitten","%s viikon p\u00e4\u00e4st\u00e4"],["kuukausi sitten","kuukauden p\u00e4\u00e4st\u00e4"],["%s kuukautta sitten","%s kuukauden p\u00e4\u00e4st\u00e4"],["vuosi sitten","vuoden p\u00e4\u00e4st\u00e4"],["%s vuotta sitten","%s vuoden p\u00e4\u00e4st\u00e4"]][b]};
q.fr=function(a,b){return[["\u00e0 l'instant","dans un instant"],["il y a %s secondes","dans %s secondes"],["il y a 1 minute","dans 1 minute"],["il y a %s minutes","dans %s minutes"],["il y a 1 heure","dans 1 heure"],["il y a %s heures","dans %s heures"],["il y a 1 jour","dans 1 jour"],["il y a %s jours","dans %s jours"],["il y a 1 semaine","dans 1 semaine"],["il y a %s semaines","dans %s semaines"],["il y a 1 mois","dans 1 mois"],["il y a %s mois","dans %s mois"],["il y a 1 an","dans 1 an"],["il y a %s ans",
"dans %s ans"]][b]};
q.he=function(a,b){return[["\u05d6\u05d4 \u05e2\u05ea\u05d4","\u05e2\u05db\u05e9\u05d9\u05d5"],["\u05dc\u05e4\u05e0\u05d9 %s \u05e9\u05e0\u05d9\u05d5\u05ea","\u05d1\u05e2\u05d5\u05d3 %s \u05e9\u05e0\u05d9\u05d5\u05ea"],["\u05dc\u05e4\u05e0\u05d9 \u05d3\u05e7\u05d4","\u05d1\u05e2\u05d5\u05d3 \u05d3\u05e7\u05d4"],["\u05dc\u05e4\u05e0\u05d9 %s \u05d3\u05e7\u05d5\u05ea","\u05d1\u05e2\u05d5\u05d3 %s \u05d3\u05e7\u05d5\u05ea"],["\u05dc\u05e4\u05e0\u05d9 \u05e9\u05e2\u05d4","\u05d1\u05e2\u05d5\u05d3 \u05e9\u05e2\u05d4"],["\u05dc\u05e4\u05e0\u05d9 %s \u05e9\u05e2\u05d5\u05ea",
"\u05d1\u05e2\u05d5\u05d3 %s \u05e9\u05e2\u05d5\u05ea"],["\u05d0\u05ea\u05de\u05d5\u05dc","\u05de\u05d7\u05e8"],["\u05dc\u05e4\u05e0\u05d9 %s \u05d9\u05de\u05d9\u05dd","\u05d1\u05e2\u05d5\u05d3 %s \u05d9\u05de\u05d9\u05dd"],["\u05dc\u05e4\u05e0\u05d9 \u05e9\u05d1\u05d5\u05e2","\u05d1\u05e2\u05d5\u05d3 \u05e9\u05d1\u05d5\u05e2"],["\u05dc\u05e4\u05e0\u05d9 %s \u05e9\u05d1\u05d5\u05e2\u05d5\u05ea","\u05d1\u05e2\u05d5\u05d3 %s \u05e9\u05d1\u05d5\u05e2\u05d5\u05ea"],["\u05dc\u05e4\u05e0\u05d9 \u05d7\u05d5\u05d3\u05e9",
"\u05d1\u05e2\u05d5\u05d3 \u05d7\u05d5\u05d3\u05e9"],["\u05dc\u05e4\u05e0\u05d9 %s \u05d7\u05d5\u05d3\u05e9\u05d9\u05dd","\u05d1\u05e2\u05d5\u05d3 %s \u05d7\u05d5\u05d3\u05e9\u05d9\u05dd"],["\u05dc\u05e4\u05e0\u05d9 \u05e9\u05e0\u05d4","\u05d1\u05e2\u05d5\u05d3 \u05e9\u05e0\u05d4"],["\u05dc\u05e4\u05e0\u05d9 %s \u05e9\u05e0\u05d9\u05dd","\u05d1\u05e2\u05d5\u05d3 %s \u05e9\u05e0\u05d9\u05dd"]][b]};
q.hu=function(a,b){return[["\u00e9ppen most","\u00e9ppen most"],["%s m\u00e1sodperce","%s m\u00e1sodpercen bel\u00fcl"],["1 perce","1 percen bel\u00fcl"],["%s perce","%s percen bel\u00fcl"],["1 \u00f3r\u00e1ja","1 \u00f3r\u00e1n bel\u00fcl"],["%s \u00f3r\u00e1ja","%s \u00f3r\u00e1n bel\u00fcl"],["1 napja","1 napon bel\u00fcl"],["%s napja","%s napon bel\u00fcl"],["1 hete","1 h\u00e9ten bel\u00fcl"],["%s hete","%s h\u00e9ten bel\u00fcl"],["1 h\u00f3napja","1 h\u00f3napon bel\u00fcl"],["%s h\u00f3napja",
"%s h\u00f3napon bel\u00fcl"],["1 \u00e9ve","1 \u00e9ven bel\u00fcl"],["%s \u00e9ve","%s \u00e9ven bel\u00fcl"]][b]};
q.inBG=function(a,b){return[["\u098f\u0987\u09ae\u09be\u09a4\u09cd\u09b0","\u098f\u0995\u099f\u09be \u09b8\u09ae\u09af\u09bc"],["%s \u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1 \u0986\u0997\u09c7","%s \u098f\u09b0 \u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1\u09c7\u09b0 \u09ae\u09a7\u09cd\u09af\u09c7"],["1 \u09ae\u09bf\u09a8\u09bf\u099f \u0986\u0997\u09c7","1 \u09ae\u09bf\u09a8\u09bf\u099f\u09c7"],["%s \u098f\u09b0 \u09ae\u09bf\u09a8\u09bf\u099f \u0986\u0997\u09c7","%s \u098f\u09b0 \u09ae\u09bf\u09a8\u09bf\u099f\u09c7\u09b0 \u09ae\u09a7\u09cd\u09af\u09c7"],
["1 \u0998\u09a8\u09cd\u099f\u09be \u0986\u0997\u09c7","1 \u0998\u09a8\u09cd\u099f\u09be"],["%s \u0998\u09a3\u09cd\u099f\u09be \u0986\u0997\u09c7","%s \u098f\u09b0 \u0998\u09a8\u09cd\u099f\u09be\u09b0 \u09ae\u09a7\u09cd\u09af\u09c7"],["1 \u09a6\u09bf\u09a8 \u0986\u0997\u09c7","1 \u09a6\u09bf\u09a8\u09c7\u09b0 \u09ae\u09a7\u09cd\u09af\u09c7"],["%s \u098f\u09b0 \u09a6\u09bf\u09a8 \u0986\u0997\u09c7","%s \u098f\u09b0 \u09a6\u09bf\u09a8"],["1 \u09b8\u09aa\u09cd\u09a4\u09be\u09b9 \u0986\u0997\u09c7","1 \u09b8\u09aa\u09cd\u09a4\u09be\u09b9\u09c7\u09b0 \u09ae\u09a7\u09cd\u09af\u09c7"],
["%s \u098f\u09b0 \u09b8\u09aa\u09cd\u09a4\u09be\u09b9 \u0986\u0997\u09c7","%s \u09b8\u09aa\u09cd\u09a4\u09be\u09b9\u09c7\u09b0 \u09ae\u09a7\u09cd\u09af\u09c7"],["1 \u09ae\u09be\u09b8 \u0986\u0997\u09c7","1 \u09ae\u09be\u09b8\u09c7"],["%s \u09ae\u09be\u09b8 \u0986\u0997\u09c7","%s \u09ae\u09be\u09b8\u09c7"],["1 \u09ac\u099b\u09b0 \u0986\u0997\u09c7","1 \u09ac\u099b\u09b0\u09c7\u09b0 \u09ae\u09a7\u09cd\u09af\u09c7"],["%s \u09ac\u099b\u09b0 \u0986\u0997\u09c7","%s \u09ac\u099b\u09b0\u09c7"]][b]};
q.inHI=function(a,b){return[["\u0905\u092d\u0940","\u0915\u0941\u091b \u0938\u092e\u092f"],["%s \u0938\u0947\u0915\u0902\u0921 \u092a\u0939\u0932\u0947","%s \u0938\u0947\u0915\u0902\u0921 \u092e\u0947\u0902"],["1 \u092e\u093f\u0928\u091f \u092a\u0939\u0932\u0947","1 \u092e\u093f\u0928\u091f \u092e\u0947\u0902"],["%s \u092e\u093f\u0928\u091f \u092a\u0939\u0932\u0947","%s \u092e\u093f\u0928\u091f \u092e\u0947\u0902"],["1 \u0918\u0902\u091f\u0947 \u092a\u0939\u0932\u0947","1 \u0918\u0902\u091f\u0947 \u092e\u0947\u0902"],
["%s \u0918\u0902\u091f\u0947 \u092a\u0939\u0932\u0947","%s \u0918\u0902\u091f\u0947 \u092e\u0947\u0902"],["1 \u0926\u093f\u0928 \u092a\u0939\u0932\u0947","1 \u0926\u093f\u0928 \u092e\u0947\u0902"],["%s \u0926\u093f\u0928 \u092a\u0939\u0932\u0947","%s \u0926\u093f\u0928\u094b\u0902 \u092e\u0947\u0902"],["1 \u0938\u092a\u094d\u0924\u093e\u0939 \u092a\u0939\u0932\u0947","1 \u0938\u092a\u094d\u0924\u093e\u0939 \u092e\u0947\u0902"],["%s \u0939\u092b\u094d\u0924\u0947 \u092a\u0939\u0932\u0947","%s \u0939\u092b\u094d\u0924\u094b\u0902 \u092e\u0947\u0902"],
["1 \u092e\u0939\u0940\u0928\u0947 \u092a\u0939\u0932\u0947","1 \u092e\u0939\u0940\u0928\u0947 \u092e\u0947\u0902"],["%s \u092e\u0939\u0940\u0928\u0947 \u092a\u0939\u0932\u0947","%s \u092e\u0939\u0940\u0928\u094b\u0902 \u092e\u0947\u0902"],["1 \u0938\u093e\u0932 \u092a\u0939\u0932\u0947","1 \u0938\u093e\u0932 \u092e\u0947\u0902"],["%s \u0938\u093e\u0932 \u092a\u0939\u0932\u0947","%s \u0938\u093e\u0932 \u092e\u0947\u0902"]][b]};
q.inID=function(a,b){return[["baru saja","sebentar"],["%s detik yang lalu","dalam %s detik"],["1 menit yang lalu","dalam 1 menit"],["%s menit yang lalu","dalam %s menit"],["1 jam yang lalu","dalam 1 jam"],["%s jam yang lalu","dalam %s jam"],["1 hari yang lalu","dalam 1 hari"],["%s hari yang lalu","dalam %s hari"],["1 minggu yang lalu","dalam 1 minggu"],["%s minggu yang lalu","dalam %s minggu"],["1 bulan yang lalu","dalam 1 bulan"],["%s bulan yang lalu","dalam %s bulan"],["1 tahun yang lalu","dalam 1 tahun"],
["%s tahun yang lalu","dalam %s tahun"]][b]};
q.it=function(a,b){return[["poco fa","tra poco"],["%s secondi fa","%s secondi da ora"],["un minuto fa","un minuto da ora"],["%s minuti fa","%s minuti da ora"],["un'ora fa","un'ora da ora"],["%s ore fa","%s ore da ora"],["un giorno fa","un giorno da ora"],["%s giorni fa","%s giorni da ora"],["una settimana fa","una settimana da ora"],["%s settimane fa","%s settimane da ora"],["un mese fa","un mese da ora"],["%s mesi fa","%s mesi da ora"],["un anno fa","un anno da ora"],["%s anni fa","%s anni da ora"]][b]};
q.ja=function(a,b){return[["\u3059\u3053\u3057\u524d","\u3059\u3050\u306b"],["%s\u79d2\u524d","%s\u79d2\u4ee5\u5185"],["1\u5206\u524d","1\u5206\u4ee5\u5185"],["%s\u5206\u524d","%s\u5206\u4ee5\u5185"],["1\u6642\u9593\u524d","1\u6642\u9593\u4ee5\u5185"],["%s\u6642\u9593\u524d","%s\u6642\u9593\u4ee5\u5185"],["1\u65e5\u524d","1\u65e5\u4ee5\u5185"],["%s\u65e5\u524d","%s\u65e5\u4ee5\u5185"],["1\u9031\u9593\u524d","1\u9031\u9593\u4ee5\u5185"],["%s\u9031\u9593\u524d","%s\u9031\u9593\u4ee5\u5185"],["1\u30f6\u6708\u524d",
"1\u30f6\u6708\u4ee5\u5185"],["%s\u30f6\u6708\u524d","%s\u30f6\u6708\u4ee5\u5185"],["1\u5e74\u524d","1\u5e74\u4ee5\u5185"],["%s\u5e74\u524d","%s\u5e74\u4ee5\u5185"]][b]};
q.ko=function(a,b){return[["\ubc29\uae08","\uace7"],["%s\ucd08 \uc804","%s\ucd08 \ud6c4"],["1\ubd84 \uc804","1\ubd84 \ud6c4"],["%s\ubd84 \uc804","%s\ubd84 \ud6c4"],["1\uc2dc\uac04 \uc804","1\uc2dc\uac04 \ud6c4"],["%s\uc2dc\uac04 \uc804","%s\uc2dc\uac04 \ud6c4"],["1\uc77c \uc804","1\uc77c \ud6c4"],["%s\uc77c \uc804","%s\uc77c \ud6c4"],["1\uc8fc\uc77c \uc804","1\uc8fc\uc77c \ud6c4"],["%s\uc8fc\uc77c \uc804","%s\uc8fc\uc77c \ud6c4"],["1\uac1c\uc6d4 \uc804","1\uac1c\uc6d4 \ud6c4"],["%s\uac1c\uc6d4 \uc804",
"%s\uac1c\uc6d4 \ud6c4"],["1\ub144 \uc804","1\ub144 \ud6c4"],["%s\ub144 \uc804","%s\ub144 \ud6c4"]][b]};
q.ml=function(a,b){return[["\u0d07\u0d2a\u0d4d\u0d2a\u0d4b\u0d33\u0d4d\u200d","\u0d15\u0d41\u0d31\u0d1a\u0d4d\u0d1a\u0d41 \u0d2e\u0d41\u0d28\u0d4d\u200d\u0d2a\u0d4d"],["%s \u0d38\u0d46\u0d15\u0d4d\u0d15\u0d28\u0d4d\u0d31\u0d4d\u200c\u0d15\u0d33\u0d4d\u200d\u0d15\u0d4d\u0d15\u0d4d \u0d2e\u0d41\u0d28\u0d4d\u200d\u0d2a\u0d4d","%s \u0d38\u0d46\u0d15\u0d4d\u0d15\u0d28\u0d4d\u0d31\u0d3f\u0d32\u0d4d\u200d"],["1 \u0d2e\u0d3f\u0d28\u0d3f\u0d31\u0d4d\u0d31\u0d3f\u0d28\u0d41 \u0d2e\u0d41\u0d28\u0d4d\u200d\u0d2a\u0d4d",
"1 \u0d2e\u0d3f\u0d28\u0d3f\u0d31\u0d4d\u0d31\u0d3f\u0d32\u0d4d\u200d"],["%s \u0d2e\u0d3f\u0d28\u0d3f\u0d31\u0d4d\u0d31\u0d41\u0d15\u0d33\u0d4d\u200d\u0d15\u0d4d\u0d15\u0d4d \u0d2e\u0d41\u0d28\u0d4d\u200d\u0d2a","%s \u0d2e\u0d3f\u0d28\u0d3f\u0d31\u0d4d\u0d31\u0d3f\u0d32\u0d4d\u200d"],["1 \u0d2e\u0d23\u0d3f\u0d15\u0d4d\u0d15\u0d42\u0d31\u0d3f\u0d28\u0d41 \u0d2e\u0d41\u0d28\u0d4d\u200d\u0d2a\u0d4d","1 \u0d2e\u0d23\u0d3f\u0d15\u0d4d\u0d15\u0d42\u0d31\u0d3f\u0d32\u0d4d\u200d"],["%s \u0d2e\u0d23\u0d3f\u0d15\u0d4d\u0d15\u0d42\u0d31\u0d41\u0d15\u0d33\u0d4d\u200d\u0d15\u0d4d\u0d15\u0d41 \u0d2e\u0d41\u0d28\u0d4d\u200d\u0d2a\u0d4d",
"%s \u0d2e\u0d23\u0d3f\u0d15\u0d4d\u0d15\u0d42\u0d31\u0d3f\u0d32\u0d4d\u200d"],["1 \u0d12\u0d30\u0d41 \u0d26\u0d3f\u0d35\u0d38\u0d02 \u0d2e\u0d41\u0d28\u0d4d\u200d\u0d2a\u0d4d","1 \u0d26\u0d3f\u0d35\u0d38\u0d24\u0d4d\u0d24\u0d3f\u0d32\u0d4d\u200d"],["%s \u0d26\u0d3f\u0d35\u0d38\u0d19\u0d4d\u0d19\u0d33\u0d4d\u200d\u0d15\u0d4d \u0d2e\u0d41\u0d28\u0d4d\u200d\u0d2a\u0d4d","%s \u0d26\u0d3f\u0d35\u0d38\u0d19\u0d4d\u0d19\u0d33\u0d4d\u200d\u0d15\u0d4d\u0d15\u0d41\u0d33\u0d4d\u0d33\u0d3f\u0d32\u0d4d\u200d"],
["1 \u0d06\u0d34\u0d4d\u0d1a \u0d2e\u0d41\u0d28\u0d4d\u200d\u0d2a\u0d4d","1 \u0d06\u0d34\u0d4d\u0d1a\u0d2f\u0d3f\u0d32\u0d4d\u200d"],["%s \u0d06\u0d34\u0d4d\u0d1a\u0d15\u0d33\u0d4d\u200d\u0d15\u0d4d\u0d15\u0d4d \u0d2e\u0d41\u0d28\u0d4d\u200d\u0d2a\u0d4d","%s \u0d06\u0d34\u0d4d\u0d1a\u0d15\u0d33\u0d4d\u200d\u0d15\u0d4d\u0d15\u0d41\u0d33\u0d4d\u0d33\u0d3f\u0d32\u0d4d\u200d"],["1 \u0d2e\u0d3e\u0d38\u0d24\u0d4d\u0d24\u0d3f\u0d28\u0d41 \u0d2e\u0d41\u0d28\u0d4d\u200d\u0d2a\u0d4d","1 \u0d2e\u0d3e\u0d38\u0d24\u0d4d\u0d24\u0d3f\u0d28\u0d41\u0d33\u0d4d\u0d33\u0d3f\u0d32\u0d4d\u200d"],
["%s \u0d2e\u0d3e\u0d38\u0d19\u0d4d\u0d19\u0d33\u0d4d\u200d\u0d15\u0d4d\u0d15\u0d4d \u0d2e\u0d41\u0d28\u0d4d\u200d\u0d2a\u0d4d","%s \u0d2e\u0d3e\u0d38\u0d19\u0d4d\u0d19\u0d33\u0d4d\u200d\u0d15\u0d4d\u0d15\u0d41\u0d33\u0d4d\u0d33\u0d3f\u0d32\u0d4d\u200d"],["1 \u0d35\u0d30\u0d4d\u200d\u0d37\u0d24\u0d4d\u0d24\u0d3f\u0d28\u0d41  \u0d2e\u0d41\u0d28\u0d4d\u200d\u0d2a\u0d4d","1 \u0d35\u0d30\u0d4d\u200d\u0d37\u0d24\u0d4d\u0d24\u0d3f\u0d28\u0d41\u0d33\u0d4d\u0d33\u0d3f\u0d32\u0d4d\u200d"],["%s \u0d35\u0d30\u0d4d\u200d\u0d37\u0d19\u0d4d\u0d19\u0d33\u0d4d\u200d\u0d15\u0d4d\u0d15\u0d41 \u0d2e\u0d41\u0d28\u0d4d\u200d\u0d2a\u0d4d",
"%s \u0d35\u0d30\u0d4d\u200d\u0d37\u0d19\u0d4d\u0d19\u0d33\u0d4d\u200d\u0d15\u0d4d\u0d15\u0d41\u0d32\u0d4d\u0d32\u0d4d\u0d33\u0d3f\u0d32\u0d4d\u200d"]][b]};
q.nbNO=function(a,b){return[["akkurat n\u00e5","om litt"],["%s sekunder siden","om %s sekunder"],["1 minutt siden","om 1 minutt"],["%s minutter siden","om %s minutter"],["1 time siden","om 1 time"],["%s timer siden","om %s timer"],["1 dag siden","om 1 dag"],["%s dager siden","om %s dager"],["1 uke siden","om 1 uke"],["%s uker siden","om %s uker"],["1 m\u00e5ned siden","om 1 m\u00e5ned"],["%s m\u00e5neder siden","om %s m\u00e5neder"],["1 \u00e5r siden","om 1 \u00e5r"],["%s \u00e5r siden","om %s \u00e5r"]][b]};
q.nl=function(a,b){return[["recent","binnenkort"],["%s seconden geleden","binnen %s seconden"],["1 minuut geleden","binnen 1 minuut"],["%s minuten geleden","binnen %s minuten"],["1 uur geleden","binnen 1 uur"],["%s uren geleden","binnen %s uren"],["1 dag geleden","binnen 1 dag"],["%s dagen geleden","binnen %s dagen"],["1 week geleden","binnen 1 week"],["%s weken geleden","binnen %s weken"],["1 maand geleden","binnen 1 maand"],["%s maanden geleden","binnen %s maanden"],["1 jaar geleden","binnen 1 jaar"],
["%s jaren geleden","binnen %s jaren"]][b]};
q.nnNO=function(a,b){return[["nett no","om litt"],["%s sekund sidan","om %s sekund"],["1 minutt sidan","om 1 minutt"],["%s minutt sidan","om %s minutt"],["1 time sidan","om 1 time"],["%s timar sidan","om %s timar"],["1 dag sidan","om 1 dag"],["%s dagar sidan","om %s dagar"],["1 veke sidan","om 1 veke"],["%s veker sidan","om %s veker"],["1 m\u00e5nad sidan","om 1 m\u00e5nad"],["%s m\u00e5nadar sidan","om %s m\u00e5nadar"],["1 \u00e5r sidan","om 1 \u00e5r"],["%s \u00e5r sidan","om %s \u00e5r"]][b]};
q.pl=function(a,b){var c=[["w tej chwili","za chwil\u0119"],["%s sekund temu","za %s sekund"],["1 minut\u0119 temu","za 1 minut\u0119"],["%s minut temu","za %s minut"],["1 godzin\u0119 temu","za 1 godzin\u0119"],["%s godzin temu","za %s godzin"],["1 dzie\u0144 temu","za 1 dzie\u0144"],["%s dni temu","za %s dni"],["1 tydzie\u0144 temu","za 1 tydzie\u0144"],["%s tygodni temu","za %s tygodni"],["1 miesi\u0105c temu","za 1 miesi\u0105c"],["%s miesi\u0119cy temu","za %s miesi\u0119cy"],["1 rok temu","za 1 rok"],
["%s lat temu","za %s lat"],["%s sekundy temu","za %s sekundy"],["%s minuty temu","za %s minuty"],["%s godziny temu","za %s godziny"],["%s dni temu","za %s dni"],["%s tygodnie temu","za %s tygodnie"],["%s miesi\u0105ce temu","za %s miesi\u0105ce"],["%s lata temu","za %s lata"]];return c[b&1?4<a%10||2>a%10||1===~~(a/10)%10?b:++b/2+13:b]};
q.ptBR=function(a,b){return[["agora mesmo","daqui um pouco"],["h\u00e1 %s segundos","em %s segundos"],["h\u00e1 um minuto","em um minuto"],["h\u00e1 %s minutos","em %s minutos"],["h\u00e1 uma hora","em uma hora"],["h\u00e1 %s horas","em %s horas"],["h\u00e1 um dia","em um dia"],["h\u00e1 %s dias","em %s dias"],["h\u00e1 uma semana","em uma semana"],["h\u00e1 %s semanas","em %s semanas"],["h\u00e1 um m\u00eas","em um m\u00eas"],["h\u00e1 %s meses","em %s meses"],["h\u00e1 um ano","em um ano"],["h\u00e1 %s anos",
"em %s anos"]][b]};
q.ro=function(a,b){var c=[["chiar acum","chiar acum"],["acum %s secunde","peste %s secunde"],["acum un minut","peste un minut"],["acum %s minute","peste %s minute"],["acum o or\u0103","peste o or\u0103"],["acum %s ore","peste %s ore"],["acum o zi","peste o zi"],["acum %s zile","peste %s zile"],["acum o s\u0103pt\u0103m\u00e2n\u0103","peste o s\u0103pt\u0103m\u00e2n\u0103"],["acum %s s\u0103pt\u0103m\u00e2ni","peste %s s\u0103pt\u0103m\u00e2ni"],["acum o lun\u0103","peste o lun\u0103"],["acum %s luni",
"peste %s luni"],["acum un an","peste un an"],["acum %s ani","peste %s ani"]];return 20>a?c[b]:[c[b][0].replace("%s","%s de"),c[b][1].replace("%s","%s de")]};
q.ru=function(a,b){function c(a,b,c,e,f){var g=f%10;1===f?e=a:1===g&&20<f?e=b:1<g&&5>g&&(20<f||10>f)&&(e=c);return e}var e=c.bind(null,"\u0441\u0435\u043a\u0443\u043d\u0434\u0443","%s \u0441\u0435\u043a\u0443\u043d\u0434\u0443","%s \u0441\u0435\u043a\u0443\u043d\u0434\u044b","%s \u0441\u0435\u043a\u0443\u043d\u0434"),f=c.bind(null,"\u043c\u0438\u043d\u0443\u0442\u0443","%s \u043c\u0438\u043d\u0443\u0442\u0443","%s \u043c\u0438\u043d\u0443\u0442\u044b","%s \u043c\u0438\u043d\u0443\u0442"),g=c.bind(null,
"\u0447\u0430\u0441","%s \u0447\u0430\u0441","%s \u0447\u0430\u0441\u0430","%s \u0447\u0430\u0441\u043e\u0432"),h=c.bind(null,"\u0434\u0435\u043d\u044c","%s \u0434\u0435\u043d\u044c","%s \u0434\u043d\u044f","%s \u0434\u043d\u0435\u0439"),k=c.bind(null,"\u043d\u0435\u0434\u0435\u043b\u044e","%s \u043d\u0435\u0434\u0435\u043b\u044e","%s \u043d\u0435\u0434\u0435\u043b\u0438","%s \u043d\u0435\u0434\u0435\u043b\u044c"),l=c.bind(null,"\u043c\u0435\u0441\u044f\u0446","%s \u043c\u0435\u0441\u044f\u0446",
"%s \u043c\u0435\u0441\u044f\u0446\u0430","%s \u043c\u0435\u0441\u044f\u0446\u0435\u0432"),m=c.bind(null,"\u0433\u043e\u0434","%s \u0433\u043e\u0434","%s \u0433\u043e\u0434\u0430","%s \u043b\u0435\u0442");switch(b){case 0:return["\u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0442\u043e","\u0447\u0435\u0440\u0435\u0437 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434"];case 1:return[e(a)+" \u043d\u0430\u0437\u0430\u0434","\u0447\u0435\u0440\u0435\u0437 "+e(a)];
case 2:case 3:return[f(a)+" \u043d\u0430\u0437\u0430\u0434","\u0447\u0435\u0440\u0435\u0437 "+f(a)];case 4:case 5:return[g(a)+" \u043d\u0430\u0437\u0430\u0434","\u0447\u0435\u0440\u0435\u0437 "+g(a)];case 6:return["\u0432\u0447\u0435\u0440\u0430","\u0437\u0430\u0432\u0442\u0440\u0430"];case 7:return[h(a)+" \u043d\u0430\u0437\u0430\u0434","\u0447\u0435\u0440\u0435\u0437 "+h(a)];case 8:case 9:return[k(a)+" \u043d\u0430\u0437\u0430\u0434","\u0447\u0435\u0440\u0435\u0437 "+k(a)];case 10:case 11:return[l(a)+
" \u043d\u0430\u0437\u0430\u0434","\u0447\u0435\u0440\u0435\u0437 "+l(a)];case 12:case 13:return[m(a)+" \u043d\u0430\u0437\u0430\u0434","\u0447\u0435\u0440\u0435\u0437 "+m(a)];default:return["",""]}};
q.sv=function(a,b){return[["just nu","om en stund"],["%s sekunder sedan","om %s seconder"],["1 minut sedan","om 1 minut"],["%s minuter sedan","om %s minuter"],["1 timme sedan","om 1 timme"],["%s timmar sedan","om %s timmar"],["1 dag sedan","om 1 dag"],["%s dagar sedan","om %s dagar"],["1 vecka sedan","om 1 vecka"],["%s veckor sedan","om %s veckor"],["1 m\u00e5nad sedan","om 1 m\u00e5nad"],["%s m\u00e5nader sedan","om %s m\u00e5nader"],["1 \u00e5r sedan","om 1 \u00e5r"],["%s \u00e5r sedan","om %s \u00e5r"]][b]};
q.ta=function(a,b){return[["\u0b87\u0baa\u0bcd\u0baa\u0bc7\u0bbe\u0ba4\u0bc1","\u0b9a\u0bb1\u0bcd\u0bb1\u0bc1 \u0ba8\u0bc7\u0bb0\u0bae\u0bcd \u0bae\u0bc1\u0ba9\u0bcd\u0baa\u0bc1"],["%s \u0ba8\u0bca\u0b9f\u0bbf\u0b95\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd","%s \u0ba8\u0bca\u0b9f\u0bbf\u0b95\u0bb3\u0bbf\u0bb2\u0bcd"],["1 \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd","1 \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd"],
["%s \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd","%s \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0b99\u0bcd\u0b95\u0bb3\u0bbf\u0bb2\u0bcd"],["1 \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd","1 \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1\u0bb3\u0bcd"],["%s \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd",
"%s \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1\u0bb3\u0bcd"],["1 \u0ba8\u0bbe\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd","1 \u0ba8\u0bbe\u0bb3\u0bbf\u0bb2\u0bcd"],["%s \u0ba8\u0bbe\u0b9f\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd","%s \u0ba8\u0bbe\u0b9f\u0bcd\u0b95\u0bb3\u0bbf\u0bb2\u0bcd"],["1 \u0bb5\u0bbe\u0bb0\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd","1 \u0bb5\u0bbe\u0bb0\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd"],
["%s \u0bb5\u0bbe\u0bb0\u0b99\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd","%s \u0bb5\u0bbe\u0bb0\u0b99\u0bcd\u0b95\u0bb3\u0bbf\u0bb2\u0bcd"],["1 \u0bae\u0bbe\u0ba4\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd","1 \u0bae\u0bbe\u0ba4\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd"],["%s \u0bae\u0bbe\u0ba4\u0b99\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd","%s \u0bae\u0bbe\u0ba4\u0b99\u0bcd\u0b95\u0bb3\u0bbf\u0bb2\u0bcd"],["1 \u0bb5\u0bb0\u0bc1\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb1\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd",
"1 \u0bb5\u0bb0\u0bc1\u0b9f\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd"],["%s \u0bb5\u0bb0\u0bc1\u0b9f\u0b99\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0bae\u0bc1\u0ba9\u0bcd","%s \u0bb5\u0bb0\u0bc1\u0b9f\u0b99\u0bcd\u0b95\u0bb3\u0bbf\u0bb2\u0bcd"]][b]};
q.th=function(a,b){return[["\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e2a\u0e31\u0e01\u0e04\u0e23\u0e39\u0e48\u0e19\u0e35\u0e49","\u0e2d\u0e35\u0e01\u0e2a\u0e31\u0e01\u0e04\u0e23\u0e39\u0e48"],["%s \u0e27\u0e34\u0e19\u0e32\u0e17\u0e35\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27","\u0e43\u0e19 %s \u0e27\u0e34\u0e19\u0e32\u0e17\u0e35"],["1 \u0e19\u0e32\u0e17\u0e35\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27","\u0e43\u0e19 1 \u0e19\u0e32\u0e17\u0e35"],["%s \u0e19\u0e32\u0e17\u0e35\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27",
"\u0e43\u0e19 %s \u0e19\u0e32\u0e17\u0e35"],["1 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27","\u0e43\u0e19 1 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07"],["%s \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27","\u0e43\u0e19 %s \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07"],["1 \u0e27\u0e31\u0e19\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27","\u0e43\u0e19 1 \u0e27\u0e31\u0e19"],["%s \u0e27\u0e31\u0e19\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27",
"\u0e43\u0e19 %s \u0e27\u0e31\u0e19"],["1 \u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27","\u0e43\u0e19 1 \u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c"],["%s \u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27","\u0e43\u0e19 %s \u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c"],["1 \u0e40\u0e14\u0e37\u0e2d\u0e19\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27","\u0e43\u0e19 1 \u0e40\u0e14\u0e37\u0e2d\u0e19"],["%s \u0e40\u0e14\u0e37\u0e2d\u0e19\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27",
"\u0e43\u0e19 %s \u0e40\u0e14\u0e37\u0e2d\u0e19"],["1 \u0e1b\u0e35\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27","\u0e43\u0e19 1 \u0e1b\u0e35"],["%s \u0e1b\u0e35\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27","\u0e43\u0e19 %s \u0e1b\u0e35"]][b]};
q.tr=function(a,b){return[["az \u00f6nce","\u015fimdi"],["%s saniye \u00f6nce","%s saniye i\u00e7inde"],["1 dakika \u00f6nce","1 dakika i\u00e7inde"],["%s dakika \u00f6nce","%s dakika i\u00e7inde"],["1 saat \u00f6nce","1 saat i\u00e7inde"],["%s saat \u00f6nce","%s saat i\u00e7inde"],["1 g\u00fcn \u00f6nce","1 g\u00fcn i\u00e7inde"],["%s g\u00fcn \u00f6nce","%s g\u00fcn i\u00e7inde"],["1 hafta \u00f6nce","1 hafta i\u00e7inde"],["%s hafta \u00f6nce","%s hafta i\u00e7inde"],["1 ay \u00f6nce","1 ay i\u00e7inde"],
["%s ay \u00f6nce","%s ay i\u00e7inde"],["1 y\u0131l \u00f6nce","1 y\u0131l i\u00e7inde"],["%s y\u0131l \u00f6nce","%s y\u0131l i\u00e7inde"]][b]};
q.uk=function(a,b){function c(a,b,c,e,f){var g=f%10;1===f?e=a:1===g&&20<f?e=b:1<g&&5>g&&(20<f||10>f)&&(e=c);return e}var e=c.bind(null,"\u0441\u0435\u043a\u0443\u043d\u0434\u0443","%s \u0441\u0435\u043a\u0443\u043d\u0434\u0443","%s \u0441\u0435\u043a\u0443\u043d\u0434\u0438","%s \u0441\u0435\u043a\u0443\u043d\u0434"),f=c.bind(null,"\u0445\u0432\u0438\u043b\u0438\u043d\u0443","%s \u0445\u0432\u0438\u043b\u0438\u043d\u0443","%s \u0445\u0432\u0438\u043b\u0438\u043d\u0438","%s \u0445\u0432\u0438\u043b\u0438\u043d"),
g=c.bind(null,"\u0433\u043e\u0434\u0438\u043d\u0443","%s \u0433\u043e\u0434\u0438\u043d\u0443","%s \u0433\u043e\u0434\u0438\u043d\u0438","%s \u0433\u043e\u0434\u0438\u043d"),h=c.bind(null,"\u0434\u0435\u043d\u044c","%s \u0434\u0435\u043d\u044c","%s \u0434\u043d\u0456","%s \u0434\u043d\u0456\u0432"),k=c.bind(null,"\u0442\u0438\u0436\u0434\u0435\u043d\u044c","%s \u0442\u0438\u0436\u0434\u0435\u043d\u044c","%s \u0442\u0438\u0436\u0434\u043d\u0456","%s \u0442\u0438\u0436\u0434\u043d\u0456\u0432"),l=c.bind(null,
"\u043c\u0456\u0441\u044f\u0446\u044c","%s \u043c\u0456\u0441\u044f\u0446\u044c","%s \u043c\u0456\u0441\u044f\u0446\u0456","%s \u043c\u0456\u0441\u044f\u0446\u0456\u0432"),m=c.bind(null,"\u0440\u0456\u043a","%s \u0440\u0456\u043a","%s \u0440\u043e\u043a\u0438","%s \u0440\u043e\u043a\u0456\u0432");switch(b){case 0:return["\u0449\u043e\u0439\u043d\u043e","\u0447\u0435\u0440\u0435\u0437 \u0434\u0435\u043a\u0456\u043b\u044c\u043a\u0430 \u0441\u0435\u043a\u0443\u043d\u0434"];case 1:return[e(a)+" \u0442\u043e\u043c\u0443",
"\u0447\u0435\u0440\u0435\u0437 "+e(a)];case 2:case 3:return[f(a)+" \u0442\u043e\u043c\u0443","\u0447\u0435\u0440\u0435\u0437 "+f(a)];case 4:case 5:return[g(a)+" \u0442\u043e\u043c\u0443","\u0447\u0435\u0440\u0435\u0437 "+g(a)];case 6:case 7:return[h(a)+" \u0442\u043e\u043c\u0443","\u0447\u0435\u0440\u0435\u0437 "+h(a)];case 8:case 9:return[k(a)+" \u0442\u043e\u043c\u0443","\u0447\u0435\u0440\u0435\u0437 "+k(a)];case 10:case 11:return[l(a)+" \u0442\u043e\u043c\u0443","\u0447\u0435\u0440\u0435\u0437 "+
l(a)];case 12:case 13:return[m(a)+" \u0442\u043e\u043c\u0443","\u0447\u0435\u0440\u0435\u0437 "+m(a)];default:return["",""]}};
q.vi=function(a,b){return[["v\u1eeba xong","m\u1ed9t l\u00fac"],["%s gi\u00e2y tr\u01b0\u1edbc","trong %s gi\u00e2y"],["1 ph\u00fat tr\u01b0\u1edbc","trong 1 ph\u00fat"],["%s ph\u00fat tr\u01b0\u1edbc","trong %s ph\u00fat"],["1 gi\u1edd tr\u01b0\u1edbc","trong 1 gi\u1edd"],["%s gi\u1edd tr\u01b0\u1edbc","trong %s gi\u1edd"],["1 ng\u00e0y tr\u01b0\u1edbc","trong 1 ng\u00e0y"],["%s ng\u00e0y tr\u01b0\u1edbc","trong %s ng\u00e0y"],["1 tu\u1ea7n tr\u01b0\u1edbc","trong 1 tu\u1ea7n"],["%s tu\u1ea7n tr\u01b0\u1edbc",
"trong %s tu\u1ea7n"],["1 th\u00e1ng tr\u01b0\u1edbc","trong 1 th\u00e1ng"],["%s th\u00e1ng tr\u01b0\u1edbc","trong %s th\u00e1ng"],["1 n\u0103m tr\u01b0\u1edbc","trong 1 n\u0103m"],["%s n\u0103m tr\u01b0\u1edbc","trong %s n\u0103m"]][b]};
q.zhCN=function(a,b){return[["\u521a\u521a","\u7247\u523b\u540e"],["%s\u79d2\u524d","%s\u79d2\u540e"],["1\u5206\u949f\u524d","1\u5206\u949f\u540e"],["%s\u5206\u949f\u524d","%s\u5206\u949f\u540e"],["1\u5c0f\u65f6\u524d","1\u5c0f\u65f6\u540e"],["%s\u5c0f\u65f6\u524d","%s\u5c0f\u65f6\u540e"],["1\u5929\u524d","1\u5929\u540e"],["%s\u5929\u524d","%s\u5929\u540e"],["1\u5468\u524d","1\u5468\u540e"],["%s\u5468\u524d","%s\u5468\u540e"],["1\u6708\u524d","1\u6708\u540e"],["%s\u6708\u524d","%s\u6708\u540e"],["1\u5e74\u524d",
"1\u5e74\u540e"],["%s\u5e74\u524d","%s\u5e74\u540e"]][b]};
q.zhTW=function(a,b){return[["\u525b\u525b","\u7247\u523b\u5f8c"],["%s\u79d2\u524d","%s\u79d2\u5f8c"],["1\u5206\u9418\u524d","1\u5206\u9418\u5f8c"],["%s\u5206\u9418\u524d","%s\u5206\u9418\u5f8c"],["1\u5c0f\u6642\u524d","1\u5c0f\u6642\u5f8c"],["%s\u5c0f\u6642\u524d","%s\u5c0f\u6642\u5f8c"],["1\u5929\u524d","1\u5929\u5f8c"],["%s\u5929\u524d","%s\u5929\u5f8c"],["1\u5468\u524d","1\u5468\u5f8c"],["%s\u5468\u524d","%s\u5468\u5f8c"],["1\u6708\u524d","1\u6708\u5f8c"],["%s\u6708\u524d","%s\u6708\u5f8c"],["1\u5e74\u524d",
"1\u5e74\u5f8c"],["%s\u5e74\u524d","%s\u5e74\u5f8c"]][b]};function u(a){AMP.BaseElement.call(this,a);this.c=this.b=this.a=""}d(u,AMP.BaseElement);
u.prototype.buildCallback=function(){var a;if(p.user)a=p.user;else throw Error("failed to call initLogConstructor");a.assert(0<this.element.textContent.length,"Content cannot be empty. Found in: %s",this.element);this.a=this.element.getAttribute("datetime");this.b=this.element.getAttribute("locale")||this.win.document.documentElement.lang;this.c=this.element.textContent;this.element.title=this.c;this.element.textContent="";var b=document.createElement("time");b.setAttribute("datetime",this.a);var c=
this.b;a=(new Date-t(this.a))/1E3;for(var c=q[c]?c:"en",e=0,f=0>a?1:0,g=a=Math.abs(a);a>=r[e]&&6>e;e++)a/=r[e];a=parseInt(a,10);e*=2;a>(0===e?9:1)&&(e+=1);a=q[c](a,e,g)[f].replace("%s",a);b.textContent=a;this.element.appendChild(b)};u.prototype.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a};AMP.registerElement("amp-timeago",u);
})});
//# sourceMappingURL=amp-timeago-0.1.js.map

