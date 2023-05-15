let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('I am a Petroleum Engineer student')
  .pauseFor(200)
  .deleteChars(10)
  .typeString('I am Frond-End-Developer')
  .pauseFor(200)
  .deleteChars(10)
  .start();
