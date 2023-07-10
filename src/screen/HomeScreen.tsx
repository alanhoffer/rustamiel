import Navbar from "../components/Navbar";
import '../assets/css/home-screen.css'
import { useEffect, useState } from "react";
import { collection, doc, getDoc, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { INews } from "../interfaces/INews";

export default function HomeScreen() {

    const [newsData, setNewsData] = useState<any>();
    const [galleryImages, setGalleryImages] = useState<any>([]);



    const fetchGalleryImages = async () => {
        try {
            const galleryRef = collection(db, 'galery');
            const q = query(galleryRef, orderBy('date', 'desc'), limit(4));
            const querySnapshot = await getDocs(q);

            const images = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            setGalleryImages(images);

        } catch (error) {
            console.error('Error al obtener las imágenes:', error);
        }
    };

    const fetchNews = async () => {
        try {
            const docRef = doc(db, 'news', 'new'); // 'news' es el nombre de la colección y 'new' es el ID del documento
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const data = docSnap.data();
                setNewsData(data);
            } else {
                console.log('El documento no existe');
            }
        } catch (error) {
            console.error('Error al obtener el documento:', error);
        }
    };


    useEffect(() => {



        fetchGalleryImages();
        fetchNews();
    }, []); // Ejecuta la consulta solo una vez al montar el componente


    return (
        <div className="homeContainer">
            <Navbar />
            <section className="sectionContainer">
                <div className="welcomeContainer">
                    <h1>{newsData?.title}</h1>
                    <p>
                        {newsData?.description}
                    </p>

                </div>
                <div className="monthlyGaleryContainer">
                    <h3>FOTOS DEL MES</h3>
                    <div className="monthlyImageContainer">
                        {galleryImages.map((image: any) => {
                            return <img src={image.link} />
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}