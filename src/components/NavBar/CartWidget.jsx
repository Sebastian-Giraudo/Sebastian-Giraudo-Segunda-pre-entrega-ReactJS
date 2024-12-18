import { FaCartArrowDown } from "react-icons/fa6";


const CartWidget = () => {
    return (
        <div className="cartwidget">
            <FaCartArrowDown className="icon-cartwidget" />
            <p className="number-cartwidget">0</p>
        </div>
    )
}

export default CartWidget