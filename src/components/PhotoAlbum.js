import React, { useState } from 'react';
import './PhotoAlbum.css';

// Importar las fotos reales desde la carpeta src/Fotos
import foto1 from '../Fotos/IMG_20250419_105250796_HDR.jpg';
import foto2 from '../Fotos/IMG_20250419_101901630_HDR.jpg';
import foto3 from '../Fotos/IMG_20250418_102417644_HDR.jpg';
import foto4 from '../Fotos/IMG_20250417_131819738_HDR.jpg';
import foto5 from '../Fotos/IMG_20250417_131818425_HDR.jpg';
import foto6 from '../Fotos/IMG_20250417_131808569_HDR.jpg';
import foto7 from '../Fotos/DSC_0208.JPG';
import foto8 from '../Fotos/DSC_0202.JPG';
import foto9 from '../Fotos/DSC_0194.JPG';
import foto10 from '../Fotos/BodaJuanyLuisa-256.jpg';
import foto11 from '../Fotos/BodaJuanyLuisa-233.jpg';
import foto12 from '../Fotos/IMG-20250712-WA0037.jpg';
import foto13 from '../Fotos/IMG-20250712-WA0036.jpg';
import foto14 from '../Fotos/IMG-20250712-WA0032.jpg';
import foto15 from '../Fotos/IMG-20250712-WA0030.jpg';
import foto16 from '../Fotos/IMG-20250412-WA0073.jpg';
import foto17 from '../Fotos/IMG-20250210-WA0126.jpg';
import foto18 from '../Fotos/IMG-20250210-WA0113.jpg';
import foto19 from '../Fotos/AirBrush_20250712182704.jpg';
import foto20 from '../Fotos/20250417_131922_Original.JPG';

const PhotoAlbum = () => {
  const [currentSpread, setCurrentSpread] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [flippedPhotos, setFlippedPhotos] = useState({});

  // Fotos del álbum - una por página con comentarios
  const photos = [
    { id: 1, src: foto1, alt: 'Hermosa foto HDR de Evita', comment: '✨ Una radiante sonrisa que ilumina el día, capturada con tecnología HDR para resaltar cada detalle de su belleza natural.' },
    { id: 2, src: foto2, alt: 'Momento especial capturado', comment: '💫 Evita en todo su esplendor, donde cada mirada cuenta una historia y cada gesto refleja su personalidad única.' },
    { id: 3, src: foto3, alt: 'Recuerdo inolvidable', comment: '🌟 Un momento congelado en el tiempo que muestra la elegancia y gracia natural que la caracteriza.' },
    { id: 4, src: foto4, alt: 'Sonrisa radiante', comment: '☀️ Su sonrisa contagiosa que puede alegrar cualquier día, un verdadero rayo de sol humano.' },
    { id: 5, src: foto5, alt: 'Momento de felicidad', comment: '🌸 La felicidad pura se refleja en sus ojos, creando una imagen que trasciende el tiempo.' },
    { id: 6, src: foto6, alt: 'Expresión natural', comment: '🍃 Naturalidad en estado puro, donde la espontaneidad crea la fotografía más hermosa.' },
    { id: 7, src: foto7, alt: 'Fotografía profesional', comment: '📸 Una imagen profesional que captura no solo su apariencia, sino también su espíritu y carisma.' },
    { id: 8, src: foto8, alt: 'Retrato elegante', comment: '👑 Elegancia refinada en cada gesto, mostrando una belleza que va más allá de lo superficial.' },
    { id: 9, src: foto9, alt: 'Imagen de alta calidad', comment: '💎 Cada pixel cuenta una historia, cada detalle revela la perfección de este momento único.' },
    { id: 10, src: foto10, alt: 'Momento de boda especial', comment: '💒 Un día mágico donde el amor se hace visible, rodeada de felicidad y buenos deseos.' },
    { id: 11, src: foto11, alt: 'Celebración matrimonial', comment: '💕 El amor en su máxima expresión, celebrando un nuevo capítulo lleno de esperanza y sueños.' },
    { id: 12, src: foto12, alt: 'Recuerdo compartido', comment: '🤝 Momentos compartidos que se convierten en tesoros invaluables de la memoria del corazón.' },
    { id: 13, src: foto13, alt: 'Momento capturado', comment: '⏰ Un instante perfecto capturado para la eternidad, donde cada segundo valió la pena.' },
    { id: 14, src: foto14, alt: 'Sonrisa encantadora', comment: '😊 Su sonrisa encantadora tiene el poder de iluminar incluso los días más grises.' },
    { id: 15, src: foto15, alt: 'Expresión dulce', comment: '🍯 Dulzura personificada en una mirada, ternura que se siente a través de la imagen.' },
    { id: 16, src: foto16, alt: 'Momento de alegría', comment: '🎉 La alegría desbordante que contagia a todos los que tienen la fortuna de conocerla.' },
    { id: 17, src: foto17, alt: 'Recuerdo hermoso', comment: '🌺 Belleza que trasciende lo físico, mostrando un alma noble y un corazón generoso.' },
    { id: 18, src: foto18, alt: 'Imagen memorable', comment: '🎭 Una imagen que quedará grabada en la memoria, llena de significado y emociones profundas.' },
    { id: 19, src: foto19, alt: 'Foto editada con cariño', comment: '🎨 Cada retoque hecho con amor, resaltando la belleza que ya existía naturalmente.' },
    { id: 20, src: foto20, alt: 'Momento original', comment: '📷 La esencia pura capturada sin filtros, mostrando la autenticidad que la hace única.' }
  ];

  // Crear spreads (páginas dobles) - portada + fotos
  const spreads = [];
  
  // Portada (spread 0)
  spreads.push({
    id: 0,
    leftPage: { type: 'cover-left' },
    rightPage: { type: 'cover-right' }
  });

  // Crear spreads con fotos (2 fotos por spread, una por página)
  for (let i = 0; i < photos.length; i += 2) {
    spreads.push({
      id: Math.floor(i / 2) + 1,
      leftPage: { type: 'photo', photo: photos[i] },
      rightPage: { type: 'photo', photo: photos[i + 1] || null }
    });
  }

  const nextSpread = () => {
    if (currentSpread < spreads.length - 1 && !isFading) {
      setIsFading(true);
      setTimeout(() => {
        setCurrentSpread(currentSpread + 1);
        setTimeout(() => {
          setIsFading(false);
        }, 50);
      }, 250);
    }
  };

  const prevSpread = () => {
    if (currentSpread > 0 && !isFading) {
      setIsFading(true);
      setTimeout(() => {
        setCurrentSpread(currentSpread - 1);
        setTimeout(() => {
          setIsFading(false);
        }, 50);
      }, 250);
    }
  };

  const goToSpread = (spreadIndex) => {
    if (spreadIndex !== currentSpread && !isFading) {
      setIsFading(true);
      setTimeout(() => {
        setCurrentSpread(spreadIndex);
        setTimeout(() => {
          setIsFading(false);
        }, 50);
      }, 250);
    }
  };

  // Función para manejar el volteo de fotos
  const togglePhotoFlip = (photoId) => {
    setFlippedPhotos(prev => ({
      ...prev,
      [photoId]: !prev[photoId]
    }));
  };

  const renderCoverLeft = () => (
    <div className="cover-page-left">
      <div className="cover-spine"></div>
      <div className="cover-content">
        <h1 className="cover-title">Álbum de</h1>
        <div className="cover-decoration">
          <div className="heart">♥</div>
        </div>
      </div>
    </div>
  );

  const renderCoverRight = () => (
    <div className="cover-page-right">
      <div className="cover-content">
        <h1 className="cover-title">Evita</h1>
        <p className="cover-subtitle">Recuerdos especiales</p>
        <div className="cover-date">
          <p>{new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );

  const renderPhotoPage = (pageData, isLeft) => {
    if (!pageData || !pageData.photo) {
      return (
        <div className={`photo-page ${isLeft ? 'left-page' : 'right-page'}`}>
          <div className="empty-page">
            <p>Fin del álbum</p>
          </div>
        </div>
      );
    }

    const isFlipped = flippedPhotos[pageData.photo.id];

    return (
      <div className={`photo-page ${isLeft ? 'left-page' : 'right-page'}`}>
        <div 
          className={`photo-card ${isFlipped ? 'flipped' : ''}`}
          onClick={() => togglePhotoFlip(pageData.photo.id)}
        >
          {/* Cara frontal - foto */}
          <div className="photo-front">
            <div className="photo-frame">
              <img 
                src={pageData.photo.src} 
                alt={pageData.photo.alt} 
                className="photo-image"
                loading="lazy"
              />
              <div className="photo-caption">
                <p>{pageData.photo.alt}</p>
              </div>
            </div>
            <div className="flip-hint">Click para ver comentario</div>
          </div>
          
          {/* Cara trasera - comentario */}
          <div className="photo-back">
            <div className="comment-card">
              <div className="comment-content">
                <h4>💭 Comentario</h4>
                <p>{pageData.photo.comment}</p>
              </div>
              <div className="flip-hint">Click para ver foto</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderPage = (pageData, isLeft) => {
    if (!pageData) return null;

    switch (pageData.type) {
      case 'cover-left':
        return renderCoverLeft();
      case 'cover-right':
        return renderCoverRight();
      case 'photo':
        return renderPhotoPage(pageData, isLeft);
      default:
        return null;
    }
  };

  const currentSpreadData = spreads[currentSpread];

  return (
    <div className="album-container">
      <div className={`book-spread ${isFading ? 'fading' : ''}`}>
        {/* Sombra del libro */}
        <div className="book-shadow"></div>
        
        {/* Página izquierda */}
        <div className="book-page left-book-page">
          {renderPage(currentSpreadData.leftPage, true)}
        </div>
        
        {/* Línea central del libro */}
        <div className="book-spine"></div>
        
        {/* Página derecha */}
        <div className="book-page right-book-page">
          {renderPage(currentSpreadData.rightPage, false)}
        </div>
      </div>

      {/* Controles de navegación */}
      <div className="navigation-controls">
        <button 
          className="nav-button prev" 
          onClick={prevSpread}
          disabled={currentSpread === 0 || isFading}
        >
          ←
        </button>
        
        <div className="page-indicators">
          {spreads.map((_, index) => (
            <button
              key={index}
              className={`page-indicator ${index === currentSpread ? 'active' : ''}`}
              onClick={() => goToSpread(index)}
              disabled={isFading}
            />
          ))}
        </div>
        
        <button 
          className="nav-button next" 
          onClick={nextSpread}
          disabled={currentSpread === spreads.length - 1 || isFading}
        >
          →
        </button>
      </div>

      {/* Información de página */}
      <div className="page-info">
        {currentSpread === 0 ? 'Portada' : `Páginas ${currentSpread * 2 - 1}-${currentSpread * 2} de ${spreads.length * 2 - 2}`}
      </div>


    </div>
  );
};

export default PhotoAlbum; 