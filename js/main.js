console.log('here')
var dias = ["Lunes", "Martes", "Miercoles","Jueves","Viernes","Sábado","Domingo"];
var meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]


today =  new Date();
today_y = today.getFullYear();
today_m = today.getMonth() + 1;
today_d = today.getDate();
today_day_week=today.getDay()-1
today_hora= today.getHours()
console.log(today_hora)

const tomorrow= new Date(today)
tomorrow.setDate(tomorrow.getDate()+1)



tomorrow_y = tomorrow.getFullYear();
tomorrow_m = tomorrow.getMonth() + 1;
tomorrow_d = tomorrow.getDate();
tomorrow_day_week=tomorrow.getDay()-1

var numero_almuerzos=1;

if(today_hora >= 10){
    // si es menor que las 10 AM se toma el set del dia de hoy hasta la hora deseada

    var countDownDate = new Date()
    countDownDate.setDate(countDownDate.getDate()+1)
    countDownDate.setHours(10)
    countDownDate.setMinutes(0)
    countDownDate.setSeconds(0)

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
      
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML =  hours + " horas "
    + minutes + " minutos " + seconds + " segundos ";
      

}, 1000);
//acaba

    $("#cuenta-atras").append(`Puedes hacer tu pedido para mañana hasta las 10 AM`)
    document.getElementById("dia").innerHTML = dias[tomorrow_day_week] +" " + tomorrow_d + " de " + meses[tomorrow_m-1] + " de " + tomorrow_y;
}

else{

    var countDownDate = new Date()
    countDownDate.setHours(10)
    countDownDate.setMinutes(0)
    countDownDate.setSeconds(0)

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
      
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML =  hours + " horas "
    + minutes + " minutos " + seconds + " segundos ";
      
}, 1000);

    $("#cuenta-atras").append(`Aun puedes hacer tu pedido para hoy hasta las 10 AM`)
    document.getElementById("dia").innerHTML = dias[today_day_week] +" " + today_d + " de " + meses[today_m-1] + " de " + today_y;
}





$(function() {
    $("#addMore").click(function(e) {
      e.preventDefault();
      numero_almuerzos++;
      $("#almuerzos").append(`<div id="almuerzos">
      <div class="form-group">
        <label for="opcion${numero_almuerzos}">Opción de Almuerzo ${numero_almuerzos}</label>
        <select class="form-control" id="opcion${numero_almuerzos}" name="opcion${numero_almuerzos}">
          <option>1</option>
          <option>2</option>
        </select>
      </div>

      <div class="form-group">
        <label for="tamano${numero_almuerzos}">Tamaño Almuerzo ${numero_almuerzos}</label>
        <select class="form-control" id="tamano${numero_almuerzos}" name="tamano${numero_almuerzos}">
          <option>32 OZ</option>
          <option>24 OZ</option>
        </select>
      </div>`);
      console.log(numero_almuerzos)

    });
  });


