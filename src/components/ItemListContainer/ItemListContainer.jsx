import { useState, useEffect } from "react"
import { getProducts } from "../../data/data.js"
import ItemList from "./ItemList.jsx"
import { useParams } from "react-router-dom"

import "./itemlistcontainer.css"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { idCategory } = useParams()

    useEffect(() => {
        getProducts()
            .then((data) => {        

                if(idCategory){

                    const productsFilter = data.filter((product) => product.category === idCategory)
                    setProducts(productsFilter)

                }else{
                    setProducts(data)
                }
            })

            .catch((error) => {
            console.error(error)
            })

            .finally(() => {
            console.log("termino la promesa")
            })
    }, [idCategory])

    return (
        <div className="itemlistcontainer">
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}
export default ItemListContainer