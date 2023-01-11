import {
    createSlice
} from "@reduxjs/toolkit";

const initialState = {
    burgers: [{
            id: 1,
            title: "Классическая",
            body: "30см",
            price: "340₽",
            img: "/images/pizza-classic.jpg"
        },
        {
            id: 2,
            title: "Гавайская",
            body: "30см",
            price: "360₽",
            img: "/images/pizza-gavayski.jpg"
        },
        {
            id: 3,
            title: "Куриная",
            body: "30см",
            price: "499₽",
            img: "/images/pizza-kuriniy.jpg"
        },
        {
            id: 4,
            title: "Маргарита",
            body: "30см",
            price: "450₽",
            img: "/images/pizza-margarita.jpg"
        },
        {
            id: 5,
            title: "Мясная",
            body: "30см",
            price: "549₽",
            img: "/images/pizza-myasnoy.jpg"
        },
        {
            id: 6,
            title: "Пепперони",
            body: "512г",
            price: "689₽",
            img: "/images/pizza-peperoni.jpg"
        }
    ]
}


export const pizzassSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {}
})

export default burgersSlice.reducer