import { useState } from "react";
import Navbar from "../components/Navbar";
import '../assets/css/shop-screen.css'
import Product from "../components/Product";
import vip from '../assets/image/vip1.png'

export default function ShopScreen(){


    return (
        <div className="shopScreen"> 
            <Navbar />
            <section className="sectionContainer">
                <div className="welcomeContainer">
                    <h1>COMPRA TU VIP!</h1>
                </div>
                <div className="productList">
                    <Product image={vip} name="VANILLA SQUAD">
                        <li>ASDASDASD ASDASDASD</li>
                        <li>ASDASDASD ASDASDASD</li>
                        <li>ASDASDASD ASDASDASD</li>
                        <li>ASDASDASD ASDASDASD</li>
                    </Product>
                    <Product image={vip} name="VANILLA SQUAD">
                        <li>ASDASDASD ASDASDASD</li>
                        <li>ASDASDASD ASDASDASD</li>
                        <li>ASDASDASD ASDASDASD</li>
                        <li>ASDASDASD ASDASDASD</li>
                    </Product>
                    <Product image={vip} name="VANILLA SQUAD">
                        <li>ASDASDASD ASDASDASD</li>
                        <li>ASDASDASD ASDASDASD</li>
                        <li>ASDASDASD ASDASDASD</li>
                        <li>ASDASDASD ASDASDASD</li>
                    </Product>
                </div>
            </section>
        </div>
    )
}