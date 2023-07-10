import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Server from "../components/Server";
import '../assets/css/galery-screen.css'
import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default function GaleryScreen(){

    const [galery, setGalery] = useState<any>([]);


    
    const fetchGalleryImages = async () => {
        try {
            const galleryRef = collection(db, 'galery');
            const q = query(galleryRef, orderBy('date', 'asc'));
            const querySnapshot = await getDocs(q);

            const images = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            setGalery(images);

        } catch (error) {
            console.error('Error al obtener las imágenes:', error);
        }
    };

    useEffect(() => {
        fetchGalleryImages();        
    }, [])
    
    return (
        <div className="galeryScreen"> 
            <Navbar />
            <section className="sectionContainer">
                <div className="welcomeContainer">
                    <h1>GALERIA</h1>
                </div>
                <div className="imageList">
                    {
                        galery.map((image:any) => {
                            return <img src={image.link} />
                        })
                    }
                </div>
            </section>
        </div>
    )
}