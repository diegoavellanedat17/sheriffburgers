// http://www.objgen.com/json?demo=true
// // Empezamos a definir el json de almuerzos
// menu
//   13-05-2020
//     opcion1
//       titulo= Pechuga a la plancha
//       ingredientes []= pechuga,arroz,maiz,queso
//     opcion2
//       titulo= Carne a la plancha
//       ingredientes []= pechuga,arroz,maiz,queso

//   14-05-2020
//     opcion1
//       titulo= Pechuga a la pizaiola
//       ingredientes []= pechuga,arroz,maiz,queso
//     opcion2
//       titulo= Carne a la pizaiola
//       ingredientes []= pechuga,arroz,maiz,queso

var menu= `{
    "menu": {
      "d13052020": {
        "opcion1": {
          "titulo": "Pechuga a la plancha",
          "ingredientes": [
            "pechuga",
            "arroz",
            "maiz",
            "queso"
          ]
        },
        "opcion2": {
          "titulo": "Carne a la plancha",
          "ingredientes": [
            "pechuga",
            "arroz",
            "maiz",
            "queso"
          ]
        }
      },
      "d14052020": {
        "opcion1": {
          "titulo": "Pollo en salsa de champiñon",
          "ingredientes": [
            "Pollo en salsa de champiñon",
            "Maíz",
            "Aguacate",
            "Papas Cabello de ángel",
            "Arroz blanco"
          ]
        },
        "opcion2": {
          "titulo": "Carne de Res a la parrilla",
          "ingredientes": [
            "Carne de Res",
            "Maíz",
            "Aguacate",
            "Papas Cabello de ángel",
            "Arroz blanco"
          ]
        }
      }
    }
  }`;