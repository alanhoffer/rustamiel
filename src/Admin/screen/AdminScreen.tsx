import Navbar from "../components/Navbar";
import { useState } from "react";
import '../assets/css/admin-screen.css'
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { db } from '../../firebase';
import { INews } from "../../interfaces/INews";




export default function AdminScreen() {

    const [news, setNews] = useState<INews>({ title: '', description: '' })

    const handleNews = (key: string, value: string) => {


        setNews(prevNews => ({
            ...prevNews,
            [key]: value
        }))
    }

    const changeNews = async () => {
        try {
            const docRef = doc(db, 'news', 'new'); // 'news' es el nombre de la colección y 'new' es el ID del documento
            await updateDoc(docRef, {
                'title': news.title,
                'description': news.description
            });
            console.log('Documento actualizado correctamente');
        } catch (error) {
            console.error('Error al actualizar el documento:', error);
        }
    };



    return (
        <div className='adminScreen'>
            <Navbar />
            <section className="adminScreenContainer">
                <h1 className="ContainerTitle">
                    Titulo y descripcion de la web
                </h1>


                <div className="inputContainer">
                    <input
                        type="text"
                        placeholder="What do you have to do today?"
                        onChange={(e) => handleNews('title', e.target.value)}
                    />
                    <textarea
                        placeholder="What do you have to do today?"
                        onChange={(e) => handleNews('description', e.target.value)}
                    />
                    <button
                        type="submit"
                        className="btn"
                        onClick={changeNews}
                    >
                        GUARDAR
                    </button>


                </div>


            </section>
        </div>
    )
}