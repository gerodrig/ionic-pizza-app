
export interface Order {
    order: Pizza[];
    quantity:number;
    purchaseDate: Date;  
    total: number;
}

export interface Pizza {
    qty: number,
    price: number,
    topping: string,
    size: string,
}

export interface Topping {
    name: string,
    price: number
}

export interface PizzaSize {
    size: string,
    price: number
}