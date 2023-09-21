function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:

  array1.sort();
  array2.sort();
  let arrNew = []

  for (let num of array1) {
    if (array2.includes(num)) {
      arrNew.push(num)
    }
  }

  console.log(arrNew)

}

let arr1 = [4, 2, 3, 7, 1];

let arr2 = [1, 6, 4];

buscoInterseccion(arr1, arr2);

/* let pruebas = (amigos) => {

    let total = 0
    for(let amigo of amigos){
        total += amigo.edad
    }

    console.log(total / amigos.length)


};

let amigos = [
  {
    nombre: "toni",
    edad: 33,
  },
  {
    nombre: "Emi",
    edad: 25,
  },
  {
    nombre: "fede",
    edad: 25,
  },
  {
    nombre: "felon",
    edad: 25,
  },
  {
    nombre: "agus",
    edad: 25,
  },
];

pruebas(amigos); */
