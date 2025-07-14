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

// Importar fotos adicionales
import foto21 from '../Fotos/IMG-20250412-WA0025.jpg';
import foto22 from '../Fotos/IMG-20241222-WA0002.jpg';
import foto23 from '../Fotos/IMG-20241102-WA0023.jpg';
import foto24 from '../Fotos/IMG-20220418-WA0097.jpg';
import foto25 from '../Fotos/IMG-20210925-WA0057.jpg';
import foto26 from '../Fotos/IMG-20210905-WA0014.jpg';
import foto27 from '../Fotos/IMG-20210619-WA0016.jpg';
import foto28 from '../Fotos/IMG-20210619-WA0015.jpg';
import foto29 from '../Fotos/IMG-20210530-WA0027.jpg';
import foto30 from '../Fotos/IMG_20221210_202958.jpg';

// Importar screenshots de Facebook más interesantes
import foto31 from '../Fotos/Screenshot_20250712_183510_Gallery.jpg';
import foto32 from '../Fotos/Screenshot_20221022-125933_WhatsApp.jpg';
import foto33 from '../Fotos/Screenshot_2025-07-12-22-45-47-578_com.facebook.katana-edit.jpg';
import foto34 from '../Fotos/Screenshot_2025-07-12-22-44-45-492_com.facebook.katana-edit.jpg';
import foto35 from '../Fotos/Screenshot_2025-07-12-22-44-36-709_com.facebook.katana-edit.jpg';

// Importar videos
import video1 from '../Fotos/VID-20250524-WA0053.mp4';
import video2 from '../Fotos/VID-20250405-WA0040.mp4';
import video3 from '../Fotos/VID-20250302-WA0026.mp4';
import video4 from '../Fotos/VID_20250524_150225704.mp4';
import video5 from '../Fotos/VID_20220917_182833.mp4';
import video6 from '../Fotos/VID_20210904_155217.mp4';
import video7 from '../Fotos/VID_20210904_152733.mp4';
import video8 from '../Fotos/VID_20210725_130409.mp4';

const PhotoAlbum = () => {
  const [currentSpread, setCurrentSpread] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [flippedPhotos, setFlippedPhotos] = useState({});

  // Fotos y videos del álbum - mezclados para mayor variedad
  const media = [
    { id: 1, src: foto1, type: 'photo', alt: 'Hermosa foto HDR de Evita', comment: '✨ Una radiante sonrisa que ilumina el día, capturada con tecnología HDR para resaltar cada detalle de su belleza natural.' },
    { id: 2, src: foto2, type: 'photo', alt: 'Momento especial capturado', comment: '💫 Evita en todo su esplendor, donde cada mirada cuenta una historia y cada gesto refleja su personalidad única.' },
    { id: 3, src: video1, type: 'video', alt: 'Video especial de Evita', comment: '🎬 Un momento en movimiento que captura la esencia de su personalidad vibrante y llena de vida.' },
    { id: 4, src: foto3, type: 'photo', alt: 'Recuerdo inolvidable', comment: '🌟 Un momento congelado en el tiempo que muestra la elegancia y gracia natural que la caracteriza.' },
    { id: 5, src: foto4, type: 'photo', alt: 'Sonrisa radiante', comment: '☀️ Su sonrisa contagiosa que puede alegrar cualquier día, un verdadero rayo de sol humano.' },
    { id: 6, src: video2, type: 'video', alt: 'Momentos en movimiento', comment: '🎥 La vida cobra sentido cuando la vemos en movimiento, cada gesto cuenta una historia única.' },
    { id: 7, src: foto5, type: 'photo', alt: 'Momento de felicidad', comment: '🌸 La felicidad pura se refleja en sus ojos, creando una imagen que trasciende el tiempo.' },
    { id: 8, src: foto6, type: 'photo', alt: 'Expresión natural', comment: '🍃 Naturalidad en estado puro, donde la espontaneidad crea la fotografía más hermosa.' },
    { id: 9, src: video3, type: 'video', alt: 'Video memorable', comment: '📹 Cada segundo de video vale más que mil palabras, mostrando su autenticidad natural.' },
    { id: 10, src: foto7, type: 'photo', alt: 'Fotografía profesional', comment: '📸 Una imagen profesional que captura no solo su apariencia, sino también su espíritu y carisma.' },
    { id: 11, src: foto8, type: 'photo', alt: 'Retrato elegante', comment: '👑 Elegancia refinada en cada gesto, mostrando una belleza que va más allá de lo superficial.' },
    { id: 12, src: video4, type: 'video', alt: 'Video de alta calidad', comment: '🎞️ Un video que muestra la calidad profesional de cada momento capturado con dedicación.' },
    { id: 13, src: foto9, type: 'photo', alt: 'Imagen de alta calidad', comment: '💎 Cada pixel cuenta una historia, cada detalle revela la perfección de este momento único.' },
    { id: 14, src: foto10, type: 'photo', alt: 'Momento de boda especial', comment: '💒 Un día mágico donde el amor se hace visible, rodeada de felicidad y buenos deseos.' },
    { id: 15, src: video5, type: 'video', alt: 'Video especial', comment: '🌟 Un video que captura momentos irrepetibles, llenos de emoción y significado profundo.' },
    { id: 16, src: foto11, type: 'photo', alt: 'Celebración matrimonial', comment: '💕 El amor en su máxima expresión, celebrando un nuevo capítulo lleno de esperanza y sueños.' },
    { id: 17, src: foto12, type: 'photo', alt: 'Recuerdo compartido', comment: '🤝 Momentos compartidos que se convierten en tesoros invaluables de la memoria del corazón.' },
    { id: 18, src: video6, type: 'video', alt: 'Video entrañable', comment: '💝 Un video lleno de cariño que muestra la dulzura y ternura en cada movimiento.' },
    { id: 19, src: foto13, type: 'photo', alt: 'Momento capturado', comment: '⏰ Un instante perfecto capturado para la eternidad, donde cada segundo valió la pena.' },
    { id: 20, src: foto14, type: 'photo', alt: 'Sonrisa encantadora', comment: '😊 Su sonrisa encantadora tiene el poder de iluminar incluso los días más grises.' },
    { id: 21, src: video7, type: 'video', alt: 'Video emotivo', comment: '💕 Un video que transmite emociones puras, mostrando la belleza de los momentos sinceros.' },
    { id: 22, src: foto15, type: 'photo', alt: 'Expresión dulce', comment: '🍯 Dulzura personificada en una mirada, ternura que se siente a través de la imagen.' },
    { id: 23, src: foto16, type: 'photo', alt: 'Momento de alegría', comment: '🎉 La alegría desbordante que contagia a todos los que tienen la fortuna de conocerla.' },
    { id: 24, src: video8, type: 'video', alt: 'Video final', comment: '✨ El broche de oro en video, capturando la esencia completa de su personalidad única.' },
    { id: 25, src: foto17, type: 'photo', alt: 'Recuerdo hermoso', comment: '🌺 Belleza que trasciende lo físico, mostrando un alma noble y un corazón generoso.' },
    { id: 26, src: foto18, type: 'photo', alt: 'Imagen memorable', comment: '🎭 Una imagen que quedará grabada en la memoria, llena de significado y emociones profundas.' },
    { id: 27, src: foto19, type: 'photo', alt: 'Foto editada con cariño', comment: '🎨 Cada retoque hecho con amor, resaltando la belleza que ya existía naturalmente.' },
    { id: 28, src: foto20, type: 'photo', alt: 'Momento original', comment: '📷 La esencia pura capturada sin filtros, mostrando la autenticidad que la hace única.' },
    { id: 29, src: foto21, type: 'photo', alt: 'Recuerdo especial', comment: '🌈 Un recuerdo que brilla con luz propia, lleno de momentos únicos e irrepetibles.' },
    { id: 30, src: foto22, type: 'photo', alt: 'Momento navideño', comment: '🎄 La magia de las fiestas se refleja en su sonrisa, creando recuerdos navideños especiales.' },
    { id: 31, src: foto23, type: 'photo', alt: 'Imagen noviembre', comment: '🍂 Un momento de otoño que muestra la calidez de su personalidad en cada gesto.' },
    { id: 32, src: foto24, type: 'photo', alt: 'Recuerdo WhatsApp', comment: '💬 Un momento compartido digitalmente que se convierte en un tesoro físico del corazón.' },
    { id: 33, src: foto25, type: 'photo', alt: 'Momento septiembre', comment: '🌸 La primavera de su sonrisa que florece en cada fotografía capturada.' },
    { id: 34, src: foto26, type: 'photo', alt: 'Imagen septiembre', comment: '🌺 Un septiembre lleno de color y vida, reflejado en la belleza de su mirada.' },
    { id: 35, src: foto27, type: 'photo', alt: 'Recuerdo junio', comment: '☀️ El verano de su alegría que irradia calor y felicidad en cada imagen.' },
    { id: 36, src: foto28, type: 'photo', alt: 'Momento junio', comment: '🌻 Como un girasol que sigue al sol, su sonrisa ilumina cada día del año.' },
    { id: 37, src: foto29, type: 'photo', alt: 'Imagen mayo', comment: '🌹 Mayo florece en su sonrisa, mostrando la belleza natural de cada momento.' },
    { id: 38, src: foto30, type: 'photo', alt: 'Recuerdo diciembre', comment: '❄️ Un diciembre cálido gracias a la calidez de su personalidad única.' },
    { id: 39, src: foto31, type: 'photo', alt: 'Screenshot galería', comment: '📱 Hasta los screenshots se vuelven arte cuando ella es la protagonista.' },
    { id: 40, src: foto32, type: 'photo', alt: 'Captura WhatsApp', comment: '💚 Un momento de WhatsApp que se convierte en memoria permanente del corazón.' },
    { id: 41, src: foto33, type: 'photo', alt: 'Momento Facebook', comment: '📘 Las redes sociales se llenan de luz cuando ella comparte su sonrisa.' },
    { id: 42, src: foto34, type: 'photo', alt: 'Recuerdo redes', comment: '🌐 Un mundo digital que se vuelve más hermoso con su presencia constante.' },
    { id: 43, src: foto35, type: 'photo', alt: 'Imagen social', comment: '👥 La vida social cobra sentido cuando se comparte con personas especiales como ella.' }
  ];

  // Crear spreads (páginas dobles) - portada + fotos/videos
  const spreads = [];
  
  // Portada (spread 0)
  spreads.push({
    id: 0,
    leftPage: { type: 'cover-left' },
    rightPage: { type: 'cover-right' }
  });

  // Crear spreads con fotos/videos (2 items por spread, uno por página)
  for (let i = 0; i < media.length; i += 2) {
    spreads.push({
      id: Math.floor(i / 2) + 1,
      leftPage: { type: 'media', media: media[i] },
      rightPage: { type: 'media', media: media[i + 1] || null }
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

  // Función para manejar el volteo de fotos/videos
  const toggleMediaFlip = (mediaId) => {
    setFlippedPhotos(prev => ({
      ...prev,
      [mediaId]: !prev[mediaId]
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

  const renderMediaPage = (pageData, isLeft) => {
    if (!pageData || !pageData.media) {
      return (
        <div className={`photo-page ${isLeft ? 'left-page' : 'right-page'}`}>
          <div className="empty-page">
            <p>Fin del álbum</p>
          </div>
        </div>
      );
    }

    const isFlipped = flippedPhotos[pageData.media.id];
    const isVideo = pageData.media.type === 'video';

    return (
      <div className={`photo-page ${isLeft ? 'left-page' : 'right-page'}`}>
        <div 
          className={`photo-card ${isFlipped ? 'flipped' : ''}`}
          onClick={() => toggleMediaFlip(pageData.media.id)}
        >
          {/* Cara frontal - foto o video */}
          <div className="photo-front">
            <div className="photo-frame">
              {isVideo ? (
                <video 
                  src={pageData.media.src} 
                  className="photo-image"
                  controls
                  muted
                  loop
                  onClick={(e) => e.stopPropagation()}
                />
              ) : (
                <img 
                  src={pageData.media.src} 
                  alt={pageData.media.alt} 
                  className="photo-image"
                  loading="lazy"
                />
              )}
              <div className="photo-caption">
                <p>{pageData.media.alt}</p>
              </div>
            </div>
            <div className="flip-hint">
              {isVideo ? 'Click para ver comentario (fuera del video)' : 'Click para ver comentario'}
            </div>
          </div>
          
          {/* Cara trasera - comentario */}
          <div className="photo-back">
            <div className="comment-card">
              <div className="comment-content">
                <h4>{isVideo ? '🎬 Comentario del Video' : '💭 Comentario'}</h4>
                <p>{pageData.media.comment}</p>
              </div>
              <div className="flip-hint">
                {isVideo ? 'Click para ver video' : 'Click para ver foto'}
              </div>
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
      case 'media':
        return renderMediaPage(pageData, isLeft);
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

      {/* Contador de medios */}
      <div className="media-counter">
        Total: {media.filter(m => m.type === 'photo').length} fotos + {media.filter(m => m.type === 'video').length} videos
      </div>
    </div>
  );
};

export default PhotoAlbum; 