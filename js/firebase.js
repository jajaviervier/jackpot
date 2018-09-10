  //aqui van las credenciales
  var rutas = {};
  var maquinas = [];
  var llaveMaquinas = [];
  var estadoMaquinas = [];
  var config = {
    apiKey: "AIzaSyCE3cr_7zL61A7qkqvMv1UFv21q84viVF4",
    authDomain: "maquinaria-f81a4.firebaseapp.com",
    databaseURL: "https://maquinaria-f81a4.firebaseio.com",
    projectId: "maquinaria-f81a4",
    storageBucket: "maquinaria-f81a4.appspot.com",
    messagingSenderId: "331739499915"
  };
  firebase.initializeApp(config);
  var db = firebase.database();
  //aqui van las credenciales
  console.log("FireBase!");
  let listadoMaquinas=[];
  console.log("Listado de maquinas creado!");
  var rutaMaquinas = "sistema/maquinas/";
  db.ref(rutaMaquinas).orderByValue().once('value', function(datosMaquinas) {
    console.log(rutaMaquinas+"ruta inicializada")
    datosMaquinas.forEach(function(itemMaquinas) {
      console.log(itemMaquinas.val().numero+" Num  Maquina")
      listadoMaquinas.push(itemMaquinas.val().numero);
    })

})





 