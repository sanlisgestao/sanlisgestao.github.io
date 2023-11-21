const dqS_clientes = (element) => document.querySelector(element);

dataJsonClientes.map(function (item, index) {
    let dataJsonItem = dqS_clientes('.dataJson-models-clientes .dataJson-item-clientes').cloneNode(true);

    dataJsonItem.setAttribute('data-key', index)
    //dataJsonItem.querySelector('.dataJson-item--img img').src = item.img;
    dataJsonItem.querySelector('.dataJson-item-clientes--title').innerHTML = item.title;
    dataJsonItem.querySelector('.dataJson-item-clientes--resume').innerHTML = item.resume;
    //dataJsonItem.querySelector('.dataJson-item--link a').innerHTML = item.link;

    dqS_clientes('.dataJson-area-clientes').append(dataJsonItem);
});