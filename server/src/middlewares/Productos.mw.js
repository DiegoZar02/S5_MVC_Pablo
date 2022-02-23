export function ListadoProductos(req, res) {
    res.status(200).send(
        [
            {
                id: 1,
                nombre: 'Producto 1',
                caracteristica: 'Caract 1'
            },
            {
                id: 2,
                nombre: 'Producto 2',
                caracteristica: 'Caract 2'
            },
            {
                id: 3,
                nombre: 'Producto 3',
                caracteristica: 'Caract 3'
            },
            {
                id: 4,
                nombre: 'Producto 4',
                caracteristica: 'Caract 4'
            },
            {
                id: 5,
                nombre: 'Producto 5',
                caracteristica: 'Caract 5'
            },
            {
                id: 6,
                nombre: 'Producto 6',
                caracteristica: 'Caract 6'
            },
            {
                id: 7,
                nombre: 'Producto 7',
                caracteristica: 'Caract 7'
            },
            {
                id: 8,
                nombre: 'Producto 8',
                caracteristica: 'Caract 8'
            },
            {
                id: 9,
                nombre: 'Producto 9',
                caracteristica: 'Caract 9'
            },
            {
                id: 10,
                nombre: 'Producto 10',
                caracteristica: 'Caract 10'
            },
        ]
    );
}