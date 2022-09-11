class Cart  {
    constructor(products, currency){

        this.fruits = products;
        this.currency = currency;
        this.plusClass = 'plus';
        this.minusClass = 'minus';
        this.deleteClass = 'delete';
    }

    fruitsPlus(key) {
        this.fruits[key]['count']++;
    }
    fruitsMinus(key) {
        if (this.fruits[key]['count'] - 1 === 0) {
            this.fruitsDelete(key);
        }
        else {
            this.fruits[key]['count']--;
        }
    }
    fruitsDelete(key) {
        delete this.fruits[key];
    }
    totalPrice() {
        let sum = 0;
        for (const key in this.fruits) {
            sum += this.fruits[key]['count'] * this.fruits[key]['price'];
        }
        return sum;
    }

    render() {
        const domOutEl = document.createElement('div');
        domOutEl.classList.add('cart');

        for (const key in this.fruits) {
            const fruit = this.fruits[key];

            const cartRowDiv = document.createElement('div');
            cartRowDiv.classList.add('cart-row');
        //    image
            const cartImgDiv = document.createElement('div');
            cartImgDiv.classList.add('cart_img');
            const img = document.createElement('img');
            img.src = `${fruit['url']}`;
            cartImgDiv.appendChild(img);
            cartRowDiv.appendChild(cartImgDiv);
        //    title
            const titleDiv = document.createElement('div');
            titleDiv.classList.add('cart_title');
            const h3 = document.createElement('h3');
            h3.textContent = `${fruit['title']}`;
            titleDiv.appendChild(h3);
            cartRowDiv.appendChild(titleDiv);
        //    minus button
            let btnDiv = document.createElement('div');
            btnDiv.classList.add('cart_minus');
            let button = document.createElement('button');
            button.classList.add(this.minusClass);
            button.classList.add('cart_btn-minus');
            button.textContent = '-';
            button.setAttribute('data-key', key);
            btnDiv.appendChild(button);
            cartRowDiv.appendChild(btnDiv);
        //    amount
            const amountDiv = document.createElement('div');
            amountDiv.classList.add('cart_amount');
            let p = document.createElement('p');
            p.textContent = `${fruit['count']}`;
            amountDiv.appendChild(p);
            cartRowDiv.appendChild(amountDiv);
        //    plus button
            btnDiv = document.createElement('div');
            btnDiv.classList.add('cart_plus');
            button = document.createElement('button');
            button.classList.add(this.plusClass);
            button.classList.add('cart_btn-plus');
            button.textContent = '+';
            button.setAttribute('data-key', key);
            btnDiv.appendChild(button);
            cartRowDiv.appendChild(btnDiv);
        //    price
            const priceDiv = document.createElement('div');
            priceDiv.classList.add('cart_price');
            p = document.createElement('p');
            p.textContent = `${fruit['count'] * fruit['price']} ${this.currency}`;
            priceDiv.appendChild(p);
            cartRowDiv.appendChild(priceDiv);
        //    delete button
            btnDiv = document.createElement('div');
            btnDiv.classList.add('cart_delete');
            button = document.createElement('button');
            button.classList.add(this.deleteClass);
            button.classList.add('cart_btn-delete');
            button.textContent = 'x';
            button.setAttribute('data-key', key);
            btnDiv.appendChild(button);
            cartRowDiv.appendChild(btnDiv);

            domOutEl.appendChild(cartRowDiv);
        }
        //total price
        const totalPriceDiv = document.createElement('div');
        totalPriceDiv.classList.add('cart_total-price');
        const p = document.createElement('p');
        p.textContent = `Total: ${this.totalPrice()} ${this.currency}`;
        totalPriceDiv.appendChild(p);
        domOutEl.appendChild(totalPriceDiv);

        return domOutEl;
    }
}


























