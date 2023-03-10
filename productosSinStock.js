db = db.getSiblingDB('educacionit')

var cursorSinStock = db.products.find({stock: {$lt: 20}})

cursorSinStock.forEach(
    function(producto)
    {
        db.proximasCompras.insertOne({
            id_producto: producto.id,
            nombre: producto.title,
            ultimo_precio: producto.price
        })
    }
)