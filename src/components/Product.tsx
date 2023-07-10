import { ReactNode } from 'react';
import '../assets/css/product.css'
import ProgressBar from "@ramonak/react-progress-bar";

interface IProduct {
    image: string,
    name: string,
    children: ReactNode; 
}

export default function Product(props: IProduct) {



    return (
        <div className='productContainer'>
            <img src={props.image} />
            <div className='productDetail'>
                <ul className='infoContainer'>
                    <h3>{props.name}</h3>
                    {props.children}
                </ul>
                <button><a href="">COMPRAR</a></button>
            </div>
        </div>
    )
}