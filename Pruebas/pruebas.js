const getPromedioEdad = (amigos) => {
  // El método 'getPromedioEdad' debe retornar el promedio de edad de los amigos de una persona
  // Ej:
  // Si la persona tuviera estos amigos:
  // persona.getPromedioEdad() debería devolver 29 ya que (33 + 25) / 2 = 29
  // Tu código aca:

  let total = 0

  for(i = 0; i < amigos.length; i++){
    total = total + amigos[i].edad
  }

  console.log(total /+ amigos.length)

}

let amigos = [
  {
    nombre: "felon",
    edad: 28,
  },
  {
    nombre: "fede",
    edad: 28,
  },
  {
    nombre: "agus",
    edad: 23,
  }
];

getPromedioEdad(amigos)
