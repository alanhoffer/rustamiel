import Navbar from "../components/Navbar";
import '../assets/css/galery-screen.css'
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import Image from "../components/Image";
import AddImage from "../components/AddImage";

export default function GaleryScreen() {
    const [galleryImages, setGalleryImages] = useState<any>([]);

    const fetchGalleryImages = async () => {
        try {
            const galleryRef = collection(db, 'galery');
            const querySnapshot = await getDocs(galleryRef);

            const images = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            setGalleryImages(images);
        } catch (error) {
            console.error('Error al obtener las imágenes:', error);
        }
    };

    fetchGalleryImages();

    return (
        <div className='galeryAdminScreen'>
            <Navbar />
            <section className="galeryScreenContainer">
                <div className="imageList">
                    {galleryImages.map((image: any) => (
                        <Image key={image.id} image={image} />
                    ))}


                </div>
                <AddImage />
            </section>
        </div>
    )
}