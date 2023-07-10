import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import '../assets/css/add-image.css'

const AddImage = () => {
  const [imageData, setImageData] = useState({
    link: '',
    player: ''
  });

  const handleChange = (e:any) => {
    setImageData({
      ...imageData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      const galleryRef = collection(db, 'galery');
      const imageDataWithTimestamp = {
        ...imageData,
        date: serverTimestamp()
      };
      await addDoc(galleryRef, imageDataWithTimestamp);
      console.log('Imagen agregada correctamente');
      
      // Limpiar los inputs después de agregar la imagen
      setImageData({
        link: '',
        player: ''
      });
    } catch (error) {
      console.error('Error al agregar la imagen:', error);
    }
  };

  return (
      <form onSubmit={handleSubmit} className="formContainer">
        <div className="inputContainer">
          <label htmlFor="link">Enlace:</label>
          <input type="text" id="link" name="link" value={imageData.link} onChange={handleChange} />
        </div>
        <div className="inputContainer">
          <label htmlFor="player">Jugador:</label>
          <input type="text" id="player" name="player" value={imageData.player} onChange={handleChange} />
        </div>
        <button type="submit">Agregar Imagen</button>
      </form>
  );
};

export default AddImage;
