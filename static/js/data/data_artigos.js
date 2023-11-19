const dqS = (element) => document.querySelector(element);

dataJson.map(function (item, index) {
    let dataJsonItem = dqS('.dataJson-models .dataJson-item').cloneNode(true);

    dataJsonItem.setAttribute('data-key', index)
    // dataJsonItem.querySelector('.dataJson-item--img img').src = item.img;
    dataJsonItem.querySelector('.dataJson-item--title').innerHTML = item.title;
    dataJsonItem.querySelector('.dataJson-item--date').innerHTML = item.date;
    dataJsonItem.querySelector('.dataJson-item--resume').innerHTML = item.resume;
    // dataJsonItem.querySelector('.dataJson-item--link a').innerHTML = item.link;

    dqS('.dataJson-area').append(dataJsonItem);
});
