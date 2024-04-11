let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(600)
  .typeString('Soy estudiante de Ingeniería Petrolera')
  .pauseFor(1000)
  .deleteChars(40)
  .typeString('Soy Desarrolladora Web')
  .pauseFor(1000)
  .deleteChars(40)
  .typeString('Soy una mujer en STEM')
  .pauseFor(1000)
  .deleteChars(10)
  .start();
