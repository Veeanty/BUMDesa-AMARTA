import { useState, useEffect,  useMemo } from 'react';
import "./Catalog.css";
import batik1 from "../../assets/img/batik/batik1.jpg";
import batik2 from "../../assets/img/batik/batik2.jpg";
import batik3 from "../../assets/img/batik/batik3.jpg";
import batik4 from "../../assets/img/batik/batik4.jpg";
import batik5 from "../../assets/img/batik/batik5.jpg";
import batik6 from "../../assets/img/batik/batik6.jpg";
import batik7 from "../../assets/img/batik/batik7.jpg";
import batik8 from "../../assets/img/batik/batik8.jpg";
import batik9 from "../../assets/img/batik/batik9.jpg";

const Catalog = () => {
    const [enlargedImage, setEnlargedImage] = useState(null);

    const images = useMemo(() => [
        { src: batik1, alt: 'Batik 1' },
        { src: batik2, alt: 'Batik 2' },
        { src: batik3, alt: 'Batik 3' },
        { src: batik4, alt: 'Batik 4' },
        { src: batik5, alt: 'Batik 5' },
        { src: batik6, alt: 'Batik 6' },
        { src: batik7, alt: 'Batik 7' },
        { src: batik8, alt: 'Batik 8' },
        { src: batik9, alt: 'Batik 9' },
    ], []);


    useEffect(() => {
        const handleKeyDown = (event) => {
             if (event.key === 'Escape') {
                setEnlargedImage(null);
            }
        };
    
        document.addEventListener('keydown', handleKeyDown);
    
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        
        <div className="catalog-container">
            <h2 className='judul-catalog'>
            Galeri Batik Sekar Idaman
            </h2>
        <p className='deskripsi-catalog' >Batik Sekar Idaman menyediakan berbagai macam batik dengan motif yang sangat cantik dan elegan yang sangat cocok digunakan untuk sehari-hari ataupun acara resmi karena sangat fashionable tetapi tidak mengurangi nilai batik itu sendiri.</p>
    
            <div className="image-gallery">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="gallery-item"
                        onClick={() => setEnlargedImage(index)}
                    >
                        <img src={image.src} alt={image.alt} className="img-responsive" />
                    </div>
                ))}
            </div>

            {enlargedImage !== null && (
                <div className="modal" onClick={() => setEnlargedImage(null)}>
                    <img src={images[enlargedImage].src} alt={images[enlargedImage].alt} className="modal-image" />
                </div>
            )}
        </div>
    );
};

export default Catalog;
