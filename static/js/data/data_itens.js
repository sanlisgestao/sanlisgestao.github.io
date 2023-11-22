const dqS_itens = (element) => document.querySelector(element);

dataJsonItens.map(function (item, index) {
    let dataJsonItem = dqS_itens('.dataJson-models .dataJson-item').cloneNode(true);

    dataJsonItem.setAttribute('data-key', index)
    //dataJsonItem.querySelector('.dataJson-item--img img').src = item.img;
    dataJsonItem.querySelector('.dataJson-item--title').innerHTML = item.title;
    dataJsonItem.querySelector('.dataJson-item--resume').innerHTML = item.resume;
    //dataJsonItem.querySelector('.dataJson-item--link a').innerHTML = item.link;

    dqS_itens('.dataJson-area').append(dataJsonItem);
});
