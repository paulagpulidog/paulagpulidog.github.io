let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2000)
  .typeString('I am a Petroleum Engineer student')
  .pauseFor(2000)
  .deleteChars(10)
  .typeString('I am a Front-End Web Developer')
  .pauseFor(200)
  .deleteChars(10)
  .start();
