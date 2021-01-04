export interface Product {

    category_title: String;
    products: [
        {
            id: Number;
            title: String;
            description: String;
            price: Number;
            picture: String;
            thumbnail: String;
        }
    ]
}