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
console.log(tomorrow)


tomorrow_y = tomorrow.getFullYear();
tomorrow_m = tomorrow.getMonth() + 1;
tomorrow_d = tomorrow.getDate();
tomorrow_day_week=tomorrow.getDay()-1
tomorrow_hora= tomorrow.getHours()
console.log(tomorrow_hora)

if(today_hora > 10){
    $("#cuenta-atras").append(`Puedes hacer tu pedido para mañana hasta las 10 AM`)
    document.getElementById("dia").innerHTML = dias[tomorrow_day_week] +" " + tomorrow_d + " de " + meses[tomorrow_m-1] + " de " + tomorrow_y;
}

else{
    $("#cuenta-atras").append(`Aun puedes hacer tu pedido para hoy hasta las 10 AM`)
    document.getElementById("dia").innerHTML = dias[today_day_week] +" " + today_d + " de " + meses[today_m-1] + " de " + today_y;
}





$(function() {
    $("#addMore").click(function(e) {
      e.preventDefault();
      $("#almuerzos").append(`<div id="almuerzos">
      <div class="form-group">
        <label for="exampleFormControlSelect1">Opción de Almuerzo</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>1</option>
          <option>2</option>
        </select>
      </div>

      <div class="form-group">
        <label for="exampleFormControlSelect1">Tamaño</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>32 OZ</option>
          <option>24 OZ</option>
        </select>
      </div>`);

    });
  });