import React, { Component } from 'react'
import apples from './Images/Apples.jfif'
import mangoes from './Images/Mangoes.jfif'
import oranges from './Images/Oranges.jfif'
import gauvas from './Images/Gauvas.jfif'
import Product from './Product'
import AppHeader from './AppHeader'

export default class ShoppingApp extends Component {
    constructor(props){
        super(props)
        this.state = { }//Object to store data for this Class instance. 
    }
    render() {
        const products =[
            {
                "name":"Apples",
                "price": "Rs. 200",
                "quantity" : "1 Kg",
                "picture" : apples
            },
            {
                "name": "Mangoes",
                "price": "Rs. 250",
                "quantity": "4 Kg",
                "picture": mangoes
            },
            {
                "name": "Oranges",
                "price": "Rs. 50",
                "quantity": "1 Kg",
                "picture": oranges
            },
            {
                "name": "Gauva",
                "price": "Rs. 100",
                "quantity": "3 Kg",
                "picture": gauvas
            },
        ]
        const productCards = products.map((p) => <Product product ={p}/>)
        return (
            productCards 
        )
    }
}
