let lista = ['carne' , 'pescado' , 'leche' , 'fruta' , 'galletas'];
lista.unshift('aceite de girasol');
lista.shift('aceite de girasol');
let peliculas =[
    {
        titulo: `Eme`,
        director: `ese`,
        recomendada : true,
        fecha: new Date(2010 , 3, 12)
    },
    {
        titulo: `Etes`,
        director: `x`,
        recomendada : false,
        fecha: new Date(2008 , 3, 12)
    },
    {
        titulo: `lolo`,
        director: `otro`,
        recomendada : true,
        fecha: new Date(2017, 3, 12)
    }
];
let nuevaLista = peliculas.filter(pelicula => pelicula.fecha > new Date( 2010, 0, 1));
let listaDirectores = peliculas.map(directores => {
    return directores.director});
let titulos = peliculas.map(titulos =>{
    return titulos.titulo
});
let newlist = listaDirectores.concat(titulos);
let newListPropagacion = [...listaDirectores, ...titulos];
