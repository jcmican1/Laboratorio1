var usuarios=[
    {nombre: "Gino", puntaje:213},
    {nombre: "Nora", puntaje:337},
    {nombre: "Emily", puntaje:425},
    {nombre: "Jack", puntaje:0},
    {nombre: "Alejandro", puntaje:103},
    {nombre: "Enrique", puntaje:32}
];

for (let index = 0; index < usuarios.length; index++) {
    let nombres = usuarios[index]
    nombres.nombre
    console.log(nombres.nombre,nombres.puntaje);
    console.log("_______________");
}