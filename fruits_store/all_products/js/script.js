function showFunction() {
    console.log(goods);
    const showAllProducts = new AllProducts(goods);
    document.getElementsByClassName('container')[1].appendChild(showAllProducts.render());
}
//add product to local storage
// ========================================================
let productCart ={};
document.getElementsByClassName('container')[1].addEventListener('click', function (event) {
    const target = event.target;
    if (target.classList.contains('add-to-cart')) {
        let key = target.dataset['key'];
        if (productCart[key] === undefined) {
            productCart[key] = goods[key];
            productCart[key]['count'] = 1;
        }
        else {
            productCart[key]['count']++;
        }
        localStorage.setItem('cart', JSON.stringify(productCart));
    }
});


document.addEventListener('DOMContentLoaded', showFunction);