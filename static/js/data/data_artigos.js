const dqS_artigos = (element) => document.querySelector(element);

dataJsonArtigos.map(function (item, index) {
    let dataJsonItem = dqS_artigos('.dataJson-models-artigos .dataJson-item-artigos').cloneNode(true);

    dataJsonItem.setAttribute('data-key', index)
    //dataJsonItem.querySelector('.dataJson-item--img img').src = item.img;
    dataJsonItem.querySelector('.dataJson-item-artigos--title').innerHTML = item.title;
    dataJsonItem.querySelector('.dataJson-item-artigos--resume').innerHTML = item.resume;
    //dataJsonItem.querySelector('.dataJson-item--link a').innerHTML = item.link;
    //dataJsonItem.querySelector('.dataJson-item--date').innerHTML = item.date;

    dqS_artigos('.dataJson-area-artigos').append(dataJsonItem);
});