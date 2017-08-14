function shout(string){
  return string.toUpperCase();
}

function whisper(string){
 return string.toLowerCase();
}

function logShout(string){
  var log = string.toUpperCase();
  console.log(log);
}

shout('hello');
whisper('HELLO');
