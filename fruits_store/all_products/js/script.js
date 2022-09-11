
function showFunction() {
    const showAllProducts = new AllProducts(goods);
    document.getElementsByClassName('container')[1].appendChild(showAllProducts.render());

    //show apples
    document.getElementsByClassName('header')[0].addEventListener('click', function (event) {
        let target = event.target;
        if (target.classList.contains('apple')) {
            let applesObj = {};
            for (let key in goods) {
                if (key.substring(0, key.indexOf('0')) === 'apple') {
                    applesObj[key] = goods[key];
                }
            }
            console.log(applesObj);
            const showApples = new AllProducts(applesObj);
            document.getElementsByClassName('container')[1].innerHTML = '';
            document.getElementsByClassName('container')[1].appendChild(showApples.render());
        }
        else if (target.classList.contains('pear')) {
            let pearsObj = {};
            for (const key in goods) {
                if (key.substring(0, key.indexOf('0')) === 'pear') {
                    pearsObj[key] = goods[key];
                }
            }
            const showPears = new AllProducts(pearsObj);
            document.getElementsByClassName('container')[1].innerHTML = '';
            document.getElementsByClassName('container')[1].appendChild(showPears.render());
        }
        else if (target.classList.contains('orange')) {
            let orangesObj = {};
            for (const key in goods) {
                if (key.substring(0, key.indexOf('0')) === 'orange') {
                    orangesObj[key] = goods[key];
                }
            }
            const showOranges = new AllProducts(orangesObj);
            document.getElementsByClassName('container')[1].innerHTML = '';
            document.getElementsByClassName('container')[1].appendChild(showOranges.render());
        }
        else if (target.classList.contains('banana')) {
            let bananasObj = {};
            for (const key in goods) {
                if (key.substring(0, key.indexOf('0')) === 'banana') {
                    bananasObj[key] = goods[key];
                }
            }
            const showBananas = new AllProducts(bananasObj);
            document.getElementsByClassName('container')[1].innerHTML = '';
            document.getElementsByClassName('container')[1].appendChild(showBananas.render());
        }
        else if (target.classList.contains('all-fruits')) {
            const showAllProducts = new AllProducts(goods);
            document.getElementsByClassName('container')[1].appendChild(showAllProducts.render());
        }

    });





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