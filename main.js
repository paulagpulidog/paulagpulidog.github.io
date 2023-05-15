let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(600)
  .typeString('I am a Petroleum Engineer student')
  .pauseFor(1000)
  .deleteChars(40)
  .typeString('I am a Front-End Web Developer')
  .pauseFor(1000)
  .deleteChars(40)
  .typeString('I am a woman in STEM')
  .pauseFor(1000)
  .deleteChars(10)
  .start();
