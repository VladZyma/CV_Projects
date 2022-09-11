
// cart
//===========================================
if (localStorage.getItem('cart')) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const shopCart = new Cart(cart, 'UAH');
    document.getElementsByClassName('container')[1].innerHTML = '';
    document.getElementsByClassName('container')[1].appendChild(shopCart.render());

    document.getElementsByClassName('container')[1].addEventListener('click', function (event) {
        // event.stopPropagation();
        let target = event.target;
        if (target.classList.contains('minus')) {
            shopCart.fruitsMinus(target.dataset['key']);
            document.getElementsByClassName('container')[1].innerHTML = '';
            document.getElementsByClassName('container')[1].appendChild(shopCart.render());
            localStorage.setItem('cart', JSON.stringify(shopCart.fruits));
        }
        else if (target.classList.contains('plus')) {
            shopCart.fruitsPlus(target.dataset['key']);
            document.getElementsByClassName('container')[1].innerHTML = '';
            document.getElementsByClassName('container')[1].appendChild(shopCart.render());
            localStorage.setItem('cart', JSON.stringify(shopCart.fruits));
        }
        else if (target.classList.contains('delete')) {
            shopCart.fruitsDelete(target.dataset['key']);
            document.getElementsByClassName('container')[1].innerHTML = '';
            document.getElementsByClassName('container')[1].appendChild(shopCart.render());
            localStorage.setItem('cart', JSON.stringify(shopCart.fruits));
        }
    })
}