//Importamos el Archivo tipo JSON 
var menu=JSON.parse(menu)
menu_diario=menu.menu
console.log(menu_diario.d14052020)

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

    //Formatear los números para encontrar el menú

    // escogemos el menu de mañana
    var tomorrow_json=formDateToSearch(tomorrow_y,tomorrow_m,tomorrow_d)

    console.log(menu_diario[tomorrow_json])
    // imprimir el ménu diario
    Opcion1titulo=menu_diario[tomorrow_json]['opcion1']['titulo']
    Opcion2titulo=menu_diario[tomorrow_json]['opcion2']['titulo']
    Opcion1ingredientes=menu_diario[tomorrow_json]['opcion1']['ingredientes']
    Opcion2ingredientes=menu_diario[tomorrow_json]['opcion2']['ingredientes']
   
    imprimirMenúDiario(Opcion1titulo,Opcion2titulo,Opcion1ingredientes,Opcion2ingredientes)


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

    $("#cuenta-atras").append(`Aún puedes hacer tu pedido para hoy hasta las 10 AM`)
    document.getElementById("dia").innerHTML = dias[today_day_week] +" " + today_d + " de " + meses[today_m-1] + " de " + today_y;

    // escogemos el menu de hoy


    var today_json=formDateToSearch(today_y,today_m,today_d)

    console.log(menu_diario[today_json])
    // imprimir el ménu diario
    Opcion1titulo=menu_diario[today_json]['opcion1']['titulo']
    Opcion2titulo=menu_diario[today_json]['opcion2']['titulo']
    Opcion1ingredientes=menu_diario[today_json]['opcion1']['ingredientes']
    Opcion2ingredientes=menu_diario[today_json]['opcion2']['ingredientes']
   
    imprimirMenúDiario(Opcion1titulo,Opcion2titulo,Opcion1ingredientes,Opcion2ingredientes)

}





$(function() {
    $("#addMore").click(function(e) {
      e.preventDefault();
      numero_almuerzos++;
      $("#almuerzos").append(`
      <div class="form-group" id="opcionAL${numero_almuerzos}">
        <label for="opcion${numero_almuerzos}">Opción de Almuerzo ${numero_almuerzos}</label>
        <select class="form-control" id="opcion${numero_almuerzos}" name="opcion${numero_almuerzos}">
          <option>1</option>
          <option>2</option>
        </select>
      </div>

      <div class="form-group" id="opcionTM${numero_almuerzos}">
        <label for="tamano${numero_almuerzos}">Tamaño Almuerzo ${numero_almuerzos}</label>
        <select class="form-control" id="tamano${numero_almuerzos}" name="tamano${numero_almuerzos}">
          <option>32 OZ</option>
          <option>24 OZ</option>
        </select>
      </div>`);
      console.log(numero_almuerzos)

      if(numero_almuerzos>1){
        $("#quitar").removeClass("disabled")
    }

    });



  });




  $(function() {
      console.log(numero_almuerzos)
    $("#quitar").click(function(e) {
      e.preventDefault();

      if(numero_almuerzos>1){
        
        console.log(numero_almuerzos)
        $(`#opcionAL${numero_almuerzos}`).remove()
        $(`#opcionTM${numero_almuerzos}`).remove()
        numero_almuerzos--;
        
      if(numero_almuerzos===1){
        $("#quitar").addClass("disabled")
      }
      }






     });
    });


function imprimirMenúDiario(tituloOp1,tituloOp2,ingredientesOp1,ingredientesOp2){

    $('#op1titulo').empty()
    $('#op2titulo').empty()
    $('#ingredientesOp1').empty()
    $('#ingredientesOp2').empty()
    $('#op1titulo').append(tituloOp1)
    $('#op2titulo').append(tituloOp2)


    ingredientesOp1.forEach(function(item){
        $('#ingredientesOp1').append(`<li class="list-group-item">${item}</li>`)
    })
    ingredientesOp2.forEach(function(item){
        $('#ingredientesOp2').append(`<li class="list-group-item">${item}</li>`)
    })

}

function formDateToSearch(date_year,date_month,date_day){
    date_year.toString()
    if (date_month<10){
        //agregar un cero
        date_month.toString()
        date_month= "0"+date_month
    }
    else{
        date_month.toString()
    }

    if (date_day<10){
        //agregar un cero
        date_day.toString()
        date_day= "0"+date_day
    }
    else{
        date_day.toString()
    }
    return(`d${date_day}${date_month}${date_year}`)
}