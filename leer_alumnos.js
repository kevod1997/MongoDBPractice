db = db.getSiblingDB('educacionit')

var cursor = db.alumnos.find({})

cursor.forEach(
    function(data){
        print(data.identificador)
    }
);