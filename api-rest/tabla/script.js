const tabla = document.querySelector("#tabla");

function cargarTabla(){
    let info;
    fetch(" https://eshop-deve.herokuapp.com/api/v2/orders")
        .then(resultado => resultado.json())
        .then(data =>{
            info = data.data.rows.map(e => {
                return `<tr><td>${e.sku}</td><td>${e.name}</td><td>${e.quantity}</td><td>${e.price}</td></tr>`;
            }).join('');

            tabla.ineerHTML = info;
        })
        .catch(err => console.error(err));

}
// cargarTabla();
async function cargarTablaAsync(){
    try{
        let info;
        const data = await fetch("https://eshop-deve.herokuapp.com/api/v2/orders");
        const resultado = await data.json();
        info = resultado.data.rows.map(e => {
            return `<tr><td>${e.sku}</td><td>${e.name}</td><td>${e.quantity}</td><td>${e.price}</td></tr>`;
        }).join('');

        tabla.innerHTML = info;
    }catch(err){
        console.error(err);
    }
}

cargarTablaAsync();
