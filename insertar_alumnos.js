var contador = 1

while (contador < 20) {
    db.alumnos.insertOne({
        nombre: 'Nombre'+ contador,
        apellido: 'Apellido'+contador,
        identificador: contador
    })
    contador++
}