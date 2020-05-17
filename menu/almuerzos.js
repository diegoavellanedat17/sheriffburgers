// http://www.objgen.com/json?demo=true
// // Empezamos a definir el json de almuerzos
// menu
//    d13052020
//      opcion1
//        titulo= Pollo en salsa de champiñon
//        ingredientes []= pechuga,arroz,maiz,queso
//      opcion2
//        titulo= Carne a la plancha
//        ingredientes []= Pollo en salsa de champiñon,Maíz,Aguacate,Papas Cabello de Ángel,Arroz Blanco

//    d14052020
//      opcion1
//        titulo= Pollo en salsa de champiñon
//        ingredientes []= Pollo en salsa de champiñon,Maíz,Aguacate,Papas Cabello de Ángel,Arroz Blanco
//      opcion2
//        titulo= Carne de res a la parrilla
//        ingredientes []= Carne de Res,Maíz,Aguacate,Papas Cabello de Ángel,Arroz Blanco

//   d15052020
//      opcion1
//        titulo= Pollo en salsa Miel Mostaza
//        ingredientes []= Pollo en salsa Miel Mostaza,Monedas de plátano,Arvejas,Zanahoria,Arroz con Coca Cola
//      opcion2
//        titulo= Pierna de Cerdo
//        ingredientes []= Pierna de Cerdo BBQ,Monedas de plátano,Arvejas,Zanahoria,Arroz con Coca Cola
//   d16052020
//      opcion1
//        titulo= Albondigas en salsa Campesina
//        ingredientes []= Albondigas en salsa Campesina, Pepino,Zucchini,Tomates Cherry,Arroz con cebolla caramelizada,Papas francesa
//      opcion2
//        titulo= Pollo apanado
//        ingredientes []= Pollo apanado,Mayonesa de Aguacate, Pepino,Zucchini,Tomates Cherry,Arroz con cebolla caramelizada,Papas francesa

var menu= `{
  "menu": {
    "d13052020": {
      "opcion1": {
        "titulo": "Pollo en salsa de champiñon",
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
          "Pollo en salsa de champiñon",
          "Maíz",
          "Aguacate",
          "Papas Cabello de Ángel",
          "Arroz Blanco"
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
          "Papas Cabello de Ángel",
          "Arroz Blanco"
        ]
      },
      "opcion2": {
        "titulo": "Carne de res a la parrilla",
        "ingredientes": [
          "Carne de Res",
          "Maíz",
          "Aguacate",
          "Papas Cabello de Ángel",
          "Arroz Blanco"
        ]
      }
    },
    "d15052020": {
      "opcion1": {
        "titulo": "Pollo en salsa Miel Mostaza",
        "ingredientes": [
          "Pollo en salsa Miel Mostaza",
          "Monedas de plátano",
          "Arvejas",
          "Zanahoria",
          "Arroz con Coca Cola"
        ]
      },
      "opcion2": {
        "titulo": "Pierna de Cerdo",
        "ingredientes": [
          "Pierna de Cerdo BBQ",
          "Monedas de plátano",
          "Arvejas",
          "Zanahoria",
          "Arroz con Coca Cola"
        ]
      }
    },
    "d16052020": {
      "opcion1": {
        "titulo": "Albondigas en salsa Campesina",
        "ingredientes": [
          "Albondigas en salsa Campesina",
          "Pepino",
          "Zucchini",
          "Tomates Cherry",
          "Arroz con cebolla caramelizada",
          "Papas francesa"
        ]
      },
      "opcion2": {
        "titulo": "Pollo apanado",
        "ingredientes": [
          "Pollo apanado",
          "Mayonesa de Aguacate",
          "Pepino",
          "Zucchini",
          "Tomates Cherry",
          "Arroz con cebolla caramelizada",
          "Papas francesa"
        ]
      }
    },
    "d18052020": {
      "opcion1": {
        "titulo": "Pollo a la plancha",
        "ingredientes": [
          "Pollo a la plancha",
          "Arroz amarillo",
          "Zanahoria",
          "Arveja",
          "Patacones"
        ]
      },
      "opcion2": {
        "titulo": "Cerdo a la plancha",
        "ingredientes": [
          "Cerdo a la plancha",
          "Arroz amarillo",
          "Zanahoria",
          "Arveja",
          "Patacones"
        ]
      }
    },
    "d19052020": {
      "opcion1": {
        "titulo": "Carne a la jardinera",
        "ingredientes": [
          "Carne a la jardinera",
          "Arroz de coco blanco",
          "Zanahoria",
          "Habichuela",
          "Arvejas",
          "Cortes de papa"
        ]
      },
      "opcion2": {
        "titulo": "Pollo guisado",
        "ingredientes": [
          "Pollo guisado",
          "Arroz de coco blanco",
          "Zanahoria",
          "Habichuela",
          "Arvejas",
          "Cortes de papa"
        ]
      }
    },
    "d20052020": {
      "opcion1": {
        "titulo": "Carne molida",
        "ingredientes": [
          "Carne molida",
          "Arroz de cebollín",
          "Aguacate",
          "Tomates Cherry",
          "Papas fosforito"
        ]
      },
      "opcion2": {
        "titulo": "Pollo Broaster",
        "ingredientes": [
          "Pollo Broaster",
          "Arroz de cebollín",
          "Aguacate",
          "Tomates Cherry",
          "Papas fosforito"
        ]
      }
    },
    "d21052020": {
      "opcion1": {
        "titulo": "Pechuga apanada",
        "ingredientes": [
          "Pechuga apanada",
          "Arroz de fideo",
          "Ensalada de mango",
          "Puré de papa"
        ]
      },
      "opcion2": {
        "titulo": "Filete de pescado apanado",
        "ingredientes": [
          "Filete de pescado apanado",
          "Arroz de fideo",
          "Ensalada de mango",
          "Puré de papa"
        ]
      }
    },
    "d22052020": {
      "opcion1": {
        "titulo": "Pollo azucarado",
        "ingredientes": [
          "Pollo azucarado",
          "Arroz blanco",
          "Frijoles",
          "Patacones",
          "Verduras en salsa de soya"
        ]
      },
      "opcion2": {
        "titulo": "Pierna de cerdo a la plancha",
        "ingredientes": [
          "Pierna de cerdo a la plancha",
          "Arroz blanco",
          "Frijoles",
          "Patacones",
          "Verduras en salsa de soya"
        ]
      }
    }
  }
}`;