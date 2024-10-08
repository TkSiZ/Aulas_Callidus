import React from 'react';

export default class Cart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            products:[
                {id: 1, product_name:"Product 1", price: 25.0, quantity: 1},
                {id: 2, product_name:"Product 2", price: 10.50, quantity: 3},
                {id: 3, product_name:"Product 3", price: 8.25, quantity: 1},
            ]
        }
    }

    calculateTotal = () => {
        return this.state.products.reduce((total, product) => {
            return total + product.price * product.quantity;
        }, 0);
    };

    render() {
        //calcular total 
        const totalAmount = this.calculateTotal();
        //Formatar o total como moeda
        const formattedTotal = totalAmount.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });

        return (
            <div className="products">
               {this.state.products.map((product) => (
                <div className="product">
                    <div className="product_details">
                        <h3>{product.product_name}</h3>
                        <p> Lorem ipsum dolor sit amet consectetur adupisicing elt.</p>
                        <h3>${product.price}</h3>
                    <div className="product_quantity-container">
                        <button>+</button>
                        <p>{product.quantity}</p>
                        <button>-</button>
                    </div>
                    </div> 
                </div>
                ))}
                <div className="total">
                    <h2>Total: {formattedTotal} </h2>
                </div>
        </div>
        );
    }
}
