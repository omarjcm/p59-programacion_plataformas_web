const pool = require('../../bd')

async function getBills() {
    let results = null

    results = await pool.query('SELECT * FROM factura;')
    
    return results.rows
}



async function addBill(bill) {
    const client = await pool.connect()
    try {
        await client.query('BEGIN')

        const res_id_factura = await client.query( 'SELECT MAX(id_factura) as id_factura FROM factura;' )

        let id_factura = res_id_factura.rows[0].id_factura
        id_factura = id_factura + 1

        const res_factura = await client.query('INSERT INTO factura(id_factura, fecha_emision, valor_total, ref_empleado, ref_cliente) VALUES($1, $2, $3, $4, $5);', [id_factura, bill.fecha_emision, bill.valor_total, bill.empleado, bill.cliente])

        let res_detalle = null 
        for (let detalle of bill.detalles) {
            const res_id_detalle = await client.query('SELECT MAX(id_factura_detalle) as id_factura_detalle FROM factura_detalle;')

            let id_factura_detalle = res_id_detalle.rows[0].id_factura_detalle

            const res_detalle = await client.query('INSERT INTO factura_detalle(id_factura_detalle, cantidad, cantidad_x_valor, ref_factura, ref_producto) VALUES($1, $2, $3, $4, $5)', [id_factura_detalle, detalle.cantidad, detalle.cantidad_x_valor, id_factura, detalle.producto])
        }

        await client.query('COMMIT')

        return bill
    } catch(error) {
        await client.query('ROLLBACK')
        return error
    }
}

module.exports = {
    get: getBills,
    add: addBill,
}