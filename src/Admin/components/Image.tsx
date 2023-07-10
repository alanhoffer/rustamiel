import { useState } from 'react';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase';
import '../assets/css/image.css'

const Image = ({ image }: any) => {
  const [isHovered, setIsHovered] = useState(false);


  const handleDelete = async () => {
    try {
      const imageRef = doc(db, 'galery', image.id);
      await deleteDoc(imageRef);
      console.log('Imagen borrada correctamente');
    } catch (error) {
      console.error('Error al borrar la imagen:', error);
    }
  };

  return (
    <div
      style={{
        filter: isHovered ? 'grayscale(100%)' : 'none'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className='galeryImageComponent'>
      <img src={image.link} alt="Imagen"  />
      <button onClick={handleDelete}>Borrar</button>
    </div>
  );
};

export default Image;
