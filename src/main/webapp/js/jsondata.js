/**
 * jsondata.js
 */
const employees = `[{"id":1,"first_name":"Rusty","last_name":"Beecham","email":"rbeecham0@simplemachines.org","gender":"Male","salary":4655},
{"id":2,"first_name":"Poul","last_name":"Von Brook","email":"pvonbrook1@google.es","gender":"Male","salary":3192},
{"id":3,"first_name":"Malachi","last_name":"Denford","email":"mdenford2@soup.io","gender":"Male","salary":4839},
{"id":4,"first_name":"Dino","last_name":"Wainer","email":"dwainer3@discuz.net","gender":"Bigender","salary":3399},
{"id":5,"first_name":"Mel","last_name":"Barker","email":"mbarker4@geocities.com","gender":"Female","salary":4367},
{"id":6,"first_name":"Drusilla","last_name":"Bales","email":"dbales5@pinterest.com","gender":"Female","salary":4398},
{"id":7,"first_name":"Gasparo","last_name":"Wathell","email":"gwathell6@posterous.com","gender":"Male","salary":4132},
{"id":8,"first_name":"Bonita","last_name":"Baumer","email":"bbaumer7@about.me","gender":"Female","salary":3580},
{"id":9,"first_name":"Cly","last_name":"Prinnett","email":"cprinnett8@de.vu","gender":"Male","salary":4260},
{"id":10,"first_name":"Drake","last_name":"Witson","email":"dwitson9@ask.com","gender":"Male","salary":3615},
{"id":11,"first_name":"Matias","last_name":"Godmar","email":"mgodmara@pen.io","gender":"Male","salary":4727},
{"id":12,"first_name":"Halsy","last_name":"Elgee","email":"helgeeb@nsw.gov.au","gender":"Bigender","salary":3699},
{"id":13,"first_name":"Delcine","last_name":"Zavattari","email":"dzavattaric@deviantart.com","gender":"Female","salary":4046},
{"id":14,"first_name":"Farra","last_name":"Sandyford","email":"fsandyfordd@merriam-webster.com","gender":"Female","salary":4593},
{"id":15,"first_name":"Bentley","last_name":"Capper","email":"bcappere@technorati.com","gender":"Male","salary":4137},
{"id":16,"first_name":"Noble","last_name":"Bickers","email":"nbickersf@boston.com","gender":"Male","salary":3326},
{"id":17,"first_name":"Allianora","last_name":"Rubenov","email":"arubenovg@unblog.fr","gender":"Agender","salary":4513},
{"id":18,"first_name":"Woody","last_name":"Cammoile","email":"wcammoileh@issuu.com","gender":"Male","salary":4266},
{"id":19,"first_name":"Melli","last_name":"Jewson","email":"mjewsoni@symantec.com","gender":"Female","salary":3481},
{"id":20,"first_name":"Sarine","last_name":"Lumox","email":"slumoxj@jimdo.com","gender":"Female","salary":4440}]`;

console.log(employees);

const empList = JSON.parse(employees); //문자열 -> 객체
console.log(empList);