// User has shown list of products, user enters product id, that will be added to cart

interface Product {
    id: number,
    name: string,
    price: number,
    quantity: number | null
}

const eCommerceList: Product[] = [
    {
        id: 10,
        name: 'Colgate',
        price: 10,
        quantity: null
    },
    {
        id: 11,
        name: 'Brush',
        price: 10,
        quantity: null
    },
    {
        id: 12,
        name: 'Luxs',
        price: 35,
        quantity: null
    }
];
