const dqS_planos = (element) => document.querySelector(element);

dataJsonPlanos.map(function (item, index) {
    let dataJsonItem = dqS_planos('.dataJson-models-planos .dataJson-item-planos').cloneNode(true);

    dataJsonItem.setAttribute('data-key', index)
    //dataJsonItem.querySelector('.dataJson-item--img img').src = item.img;
    dataJsonItem.querySelector('.dataJson-item-planos--title').innerHTML = item.title;
    dataJsonItem.querySelector('.dataJson-item-planos--resume').innerHTML = item.resume;
    //dataJsonItem.querySelector('.dataJson-item--link a').innerHTML = item.link;

    dqS_planos('.dataJson-area-planos').append(dataJsonItem);
});