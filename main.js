let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #d88dc1;">Soy Desarrolladora de Sitios Web y Bases de Datos.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
