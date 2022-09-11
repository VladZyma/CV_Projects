class AllProducts {
    constructor() {
        this.goods = goods;
    }

    render() {
        const domOutEl = document.createElement('div');
        domOutEl.classList.add('main_row');
        for (const fruit in this.goods) {
            //product card
            const productCardDiv = document.createElement('div');
            productCardDiv.classList.add('main_product-card');

            //    img wrapper and img
            const imgWrapDiv = document.createElement('div');
            imgWrapDiv.classList.add('main_product-img-wrapper');
            const img = document.createElement('img');
            img.classList.add('main_product-img');
            img.src = `${this.goods[fruit]['url']}`;
            imgWrapDiv.appendChild(img);
            productCardDiv.appendChild(imgWrapDiv);
            //    product description
            const productDescDiv = document.createElement('div');
            productDescDiv.classList.add('main_product-description');

            const productTitle = document.createElement('h2');
            productTitle.classList.add('main_product-title');
            productTitle.textContent = `${this.goods[fruit]['title']}`;
            productDescDiv.appendChild(productTitle);
            productCardDiv.appendChild(productDescDiv);

            const productList = document.createElement('ul');
            productList.classList.add('main_product-list');
            let listItem = document.createElement('li');
            listItem.textContent = `Sort: ${this.goods[fruit]['sort']}`;
            productList.appendChild(listItem);
            listItem = document.createElement('li');
            listItem.textContent = `Size: ${this.goods[fruit]['size']}`;
            productList.appendChild(listItem);
            listItem = document.createElement('li');
            listItem.textContent = `Grower: ${this.goods[fruit]['grower']}`;
            productList.appendChild(listItem);
            listItem = document.createElement('li');
            listItem.textContent = `Price: ${this.goods[fruit]['price']}$`;
            productList.appendChild(listItem);
            productDescDiv.appendChild(productList);
            productCardDiv.appendChild(productDescDiv);

            //    product button
            const btnWrapDiv = document.createElement('div');
            btnWrapDiv.classList.add('main_product-btn-wrapper');
            const button = document.createElement('button');
            button.classList.add('main_product-btn');
            button.classList.add('add-to-cart');
            button.setAttribute('data-key', fruit);
            button.textContent = 'Add to cart';
            btnWrapDiv.appendChild(button);
            productDescDiv.appendChild(btnWrapDiv);
            productCardDiv.appendChild(productDescDiv);

            domOutEl.appendChild(productCardDiv);
        }
        const cartBtn = document.createElement('button');
        cartBtn.classList.add('cart-btn');
        cartBtn.src = './img/icons/cart-icon.svg';
        const a = document.createElement('a');
        a.href = './cart/cart.html';
        a.target = '_self';
        a.appendChild(cartBtn)
        domOutEl.appendChild(a);

        return domOutEl;
    }

}