import React, { useState } from 'react';
import './PhotoAlbum.css';

// Importar todas las fotos disponibles desde la carpeta src/Fotos
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
import foto17 from '../Fotos/IMG-20250412-WA0025.jpg';
import foto18 from '../Fotos/IMG-20250210-WA0126.jpg';
import foto19 from '../Fotos/IMG-20250210-WA0113.jpg';
import foto20 from '../Fotos/IMG-20241222-WA0002.jpg';
import foto21 from '../Fotos/IMG-20241102-WA0023.jpg';
import foto22 from '../Fotos/IMG-20220418-WA0097.jpg';
import foto23 from '../Fotos/IMG-20210925-WA0057.jpg';
import foto24 from '../Fotos/IMG-20210905-WA0014.jpg';
import foto25 from '../Fotos/IMG-20210619-WA0016.jpg';
import foto26 from '../Fotos/IMG-20210619-WA0015.jpg';
import foto27 from '../Fotos/IMG-20210530-WA0027.jpg';
import foto28 from '../Fotos/IMG_20221210_202958.jpg';
import foto29 from '../Fotos/IMG_5977.HEIC';
import foto30 from '../Fotos/IMG_4626.HEIC';
import foto31 from '../Fotos/IMG_1911.HEIC';
import foto32 from '../Fotos/IMG_1908.HEIC';
import foto33 from '../Fotos/IMG_1906.HEIC';
import foto34 from '../Fotos/IMG_1906(1).HEIC';
import foto35 from '../Fotos/IMG_1405.HEIC';
import foto36 from '../Fotos/IMG_1402.HEIC';
import foto37 from '../Fotos/IMG_1379.HEIC';
import foto38 from '../Fotos/IMG_0404.HEIC';
import foto39 from '../Fotos/AirBrush_20250712182704.jpg';
import foto40 from '../Fotos/20250417_131922_Original.JPG';
import foto41 from '../Fotos/Screenshot_20250712_183510_Gallery.jpg';
import foto42 from '../Fotos/Screenshot_20221022-125933_WhatsApp.jpg';
import foto43 from '../Fotos/Screenshot_2025-07-12-22-45-47-578_com.facebook.katana-edit.jpg';
import foto44 from '../Fotos/Screenshot_2025-07-12-22-44-45-492_com.facebook.katana-edit.jpg';
import foto45 from '../Fotos/Screenshot_2025-07-12-22-44-36-709_com.facebook.katana-edit.jpg';
import foto46 from '../Fotos/Screenshot_2025-07-12-22-44-28-737_com.facebook.katana-edit.jpg';
import foto47 from '../Fotos/Screenshot_2025-07-12-22-44-20-168_com.facebook.katana-edit.jpg';
import foto48 from '../Fotos/Screenshot_2025-07-12-22-44-12-208_com.facebook.katana-edit.jpg';
import foto49 from '../Fotos/Screenshot_2025-07-12-22-43-58-062_com.facebook.katana-edit.jpg';
import foto50 from '../Fotos/Screenshot_2025-07-12-22-43-25-779_com.facebook.katana-edit.jpg';
import foto51 from '../Fotos/Screenshot_2025-07-12-22-43-48-224_com.facebook.katana-edit.jpg';
import foto52 from '../Fotos/Screenshot_2025-07-12-22-43-15-288_com.facebook.katana-edit.jpg';
import foto53 from '../Fotos/Screenshot_2025-07-12-22-43-05-641_com.facebook.katana-edit.jpg';
import foto54 from '../Fotos/Screenshot_2025-07-12-22-42-54-991_com.facebook.katana-edit.jpg';
import foto55 from '../Fotos/Screenshot_2025-07-12-22-42-44-106_com.facebook.katana-edit.jpg';
import foto56 from '../Fotos/Screenshot_2025-07-12-22-42-17-855_com.facebook.katana-edit.jpg';
import foto57 from '../Fotos/Screenshot_2025-07-12-22-41-36-514_com.facebook.katana.jpg';
import foto58 from '../Fotos/Screenshot_2025-07-12-22-41-26-239_com.facebook.katana-edit.jpg';
import foto59 from '../Fotos/Screenshot_2025-07-12-22-41-13-137_com.facebook.katana-edit.jpg';
import foto60 from '../Fotos/Screenshot_2025-07-12-22-41-04-080_com.facebook.katana-edit.jpg';

const PhotoAlbum = () => {
  const [currentSpread, setCurrentSpread] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [flippedPhotos, setFlippedPhotos] = useState({});

  // Fotos del álbum con comentarios mejorados y sin comentarios en la parte frontal
  const photos = [
    { id: 1, src: foto1, comment: '🌟 Este momento capturado con tecnología HDR refleja la luz dorada que siempre llevas dentro. Tu sonrisa aquí no es solo una expresión, es un rayo de esperanza que ilumina todo a tu alrededor. Cada detalle de esta imagen cuenta la historia de una persona especial que sabe encontrar la belleza en los momentos simples.' },
    { id: 2, src: foto2, comment: '💫 Aquí vemos la esencia pura de tu ser, esa naturalidad que te hace única. Tu mirada transmite una profundidad que va más allá de las palabras, como si guardaras secretos hermosos del universo. Esta foto es un testimonio de tu capacidad para crear magia en cualquier lugar donde estés.' },
    { id: 3, src: foto3, comment: '🌸 La delicadeza de tu expresión en esta imagen es como contemplar una obra de arte viviente. Hay una serenidad en tu rostro que invita a la paz, una tranquilidad que solo las almas nobles pueden irradiar. Esta fotografía captura no solo tu belleza exterior, sino también la hermosura de tu corazón.' },
    { id: 4, src: foto4, comment: '☀️ Como el amanecer de un día prometedor, tu presencia en esta imagen irradia calidez y esperanza. La luz que te rodea parece bailar contigo, creando una sinfonía visual que habla de alegría y vitalidad. Eres el tipo de persona que hace que los días grises se vuelvan coloridos.' },
    { id: 5, src: foto5, comment: '🌺 Esta imagen captura un momento de felicidad genuina, esa que nace desde el alma y se refleja en cada gesto. Tu sonrisa aquí es contagiosa, tiene el poder de cambiar el ánimo de quien la contempla. Es una fotografía que preserva la esencia de lo que significa vivir con plenitud.' },
    { id: 6, src: foto6, comment: '🍃 La naturalidad de este momento es extraordinaria. Sin poses forzadas, sin artificios, solo tú siendo auténticamente tú. Esta espontaneidad es lo que te hace tan especial, esa capacidad de ser genuina en un mundo que a veces exige máscaras. Tu autenticidad es tu mayor belleza.' },
    { id: 7, src: foto7, comment: '📸 Una fotografía profesional que logra capturar no solo tu imagen, sino también tu espíritu. El fotógrafo supo ver más allá del objetivo y plasmar esa chispa especial que tienes. Esta imagen es un recordatorio de que algunas personas están destinadas a brillar naturalmente frente a las cámaras.' },
    { id: 8, src: foto8, comment: '👑 Elegancia en estado puro. Esta imagen transmite una sofisticación natural que no se puede fingir ni aprender, simplemente se tiene. Tu postura, tu mirada, cada detalle habla de una persona que conoce su valor y lo lleva con gracia. Eres realeza en el sentido más auténtico de la palabra.' },
    { id: 9, src: foto9, comment: '💎 Como una joya preciosa, esta imagen destaca por su calidad excepcional. Cada pixel parece haber sido cuidadosamente colocado para crear una obra maestra. Pero más allá de la técnica, lo que realmente hace brillar esta foto es la persona que aparece en ella: tú, con toda tu luminosidad natural.' },
    { id: 10, src: foto10, comment: '💒 En este día mágico de bodas, fuiste como un rayo de sol que iluminó la celebración. Tu presencia añadió ese toque especial que hace que los momentos importantes sean inolvidables. Esta imagen captura no solo un evento, sino también tu capacidad para llevar alegría a las ocasiones más significativas.' },
    { id: 11, src: foto11, comment: '💕 El amor se respira en esta imagen, y tú eres parte fundamental de esa atmósfera de felicidad. Tu sonrisa genuina y tu energía positiva contribuyeron a hacer de este día algo verdaderamente especial. Esta foto es un testimonio de cómo tu presencia puede transformar cualquier celebración en algo mágico.' },
    { id: 12, src: foto12, comment: '🤝 Los recuerdos compartidos son tesoros invaluables, y esta imagen es una prueba de ello. Aquí vemos momentos que trascienden el tiempo, conexiones humanas que perduran más allá de las circunstancias. Tu capacidad para crear vínculos especiales con las personas es uno de tus dones más hermosos.' },
    { id: 13, src: foto13, comment: '⏰ Un instante perfecto congelado en el tiempo. Esta fotografía captura uno de esos momentos únicos que solo suceden una vez y que merecen ser preservados para siempre. Tu expresión aquí habla de satisfacción, de estar exactamente donde necesitas estar, viviendo exactamente el momento que necesitas vivir.' },
    { id: 14, src: foto14, comment: '😊 Tu sonrisa en esta imagen es como un medicamento para el alma. Tiene esa cualidad especial de poder alegrar el día más difícil, de convertir la tristeza en esperanza. Esta fotografía es un recordatorio de que algunas personas tienen el don de curar corazones solo con su presencia.' },
    { id: 15, src: foto15, comment: '🍯 La dulzura personificada en una imagen. Tu expresión transmite una ternura que llega directamente al corazón, como la caricia de una brisa suave en un día de primavera. Esta fotografía captura esa parte tuya que siempre busca lo mejor en los demás y en las situaciones.' },
    { id: 16, src: foto16, comment: '🎉 La alegría desbordante que se ve en esta imagen es contagiosa. Tu capacidad para encontrar razones para celebrar la vida es inspiradora. Esta fotografía es un testimonio de tu espíritu festivo, de tu habilidad para convertir momentos ordinarios en celebraciones extraordinarias.' },
    { id: 17, src: foto17, comment: '🌺 Esta imagen refleja una belleza que va mucho más allá de lo físico. Hay una profundidad en tu mirada que habla de experiencias vividas, de lecciones aprendidas, de una sabiduría ganada con gracia. Tu belleza interior se hace visible en cada gesto, en cada sonrisa sincera.' },
    { id: 18, src: foto18, comment: '🎭 Una imagen que quedará grabada en la memoria por mucho tiempo. No solo por la calidad técnica, sino por la historia que cuenta, por las emociones que transmite. Esta fotografía es un capítulo importante en el libro de tu vida, un momento que define quien eres y hacia dónde vas.' },
    { id: 19, src: foto19, comment: '💌 Esta imagen de febrero de 2025 captura un momento especial en el tiempo. Tu sonrisa aquí parece anticipar todas las cosas buenas que están por venir. Es una fotografía llena de esperanza y posibilidades, como si el universo estuviera conspirando para crear algo hermoso.' },
    { id: 20, src: foto20, comment: '🎄 Una imagen navideña que irradia calidez y espíritu festivo. Tu presencia aquí añade ese toque especial que hace que las celebraciones sean realmente memorables. Esta fotografía captura no solo un momento en el tiempo, sino también la magia que llevas a donde quiera que vayas.' },
    { id: 21, src: foto21, comment: '🍂 Una imagen de noviembre que transmite la belleza de los cambios de estación. Como las hojas que cambian de color, tú tienes esa capacidad hermosa de adaptarte y florecer en cada etapa de tu vida. Esta fotografía es un recordatorio de que el cambio puede ser hermoso cuando se abraza con gracia.' },
    { id: 22, src: foto22, comment: '🌷 Una imagen de abril que captura la esencia de la primavera. Tu sonrisa aquí es como el florecimiento de una flor después del invierno, llena de vida nueva y posibilidades frescas. Esta fotografía simboliza el renacimiento y la esperanza que siempre llevas contigo.' },
    { id: 23, src: foto23, comment: '🍀 Una imagen de septiembre que refleja la transición hacia nuevos comienzos. Tu expresión aquí transmite una mezcla de nostalgia por lo vivido y emoción por lo que está por venir. Esta fotografía captura esa sabiduría especial que tienes para navegar los cambios de la vida con elegancia.' },
    { id: 24, src: foto24, comment: '🌟 Una imagen de septiembre que brilla con luz propia. Tu presencia aquí es como una estrella que guía en la oscuridad, ofreciendo esperanza y dirección. Esta fotografía es un testimonio de tu capacidad para ser un faro de luz en la vida de las personas que te rodean.' },
    { id: 25, src: foto25, comment: '🌊 Una imagen de junio que fluye con naturalidad como el agua de un río. Tu expresión aquí transmite una serenidad que solo se encuentra en las personas que han aprendido a fluir con la vida. Esta fotografía captura esa sabiduría especial que tienes para encontrar paz en medio de cualquier tormenta.' },
    { id: 26, src: foto26, comment: '💝 Una imagen de junio que es como un regalo para los ojos. Tu sonrisa aquí es tan pura y genuina que parece iluminar toda la fotografía. Esta imagen es un recordatorio de que los mejores regalos de la vida no vienen envueltos en papel, sino que se encuentran en momentos como estos.' },
    { id: 27, src: foto27, comment: '🌺 Una imagen de mayo que florece con belleza natural. Tu presencia aquí es como la primavera personificada, llena de vida, color y promesas de cosas hermosas por venir. Esta fotografía captura esa energía renovadora que siempre llevas contigo.' },
    { id: 28, src: foto28, comment: '❄️ Una imagen de diciembre que conserva la calidez humana a pesar del frío de la temporada. Tu sonrisa aquí es como una chimenea encendida en una noche de invierno, ofreciendo confort y alegría. Esta fotografía demuestra que tu luz interior puede brillar en cualquier estación.' },
    { id: 29, src: foto29, comment: '📱 Una imagen capturada con tecnología moderna que refleja tu adaptabilidad a los nuevos tiempos. Tu expresión aquí muestra cómo puedes encontrar belleza y significado incluso en los momentos más espontáneos. Esta fotografía es un testimonio de tu capacidad para crear magia en cualquier situación.' },
    { id: 30, src: foto30, comment: '🎨 Una imagen que parece haber sido pintada por un artista experto. Los colores, la luz, la composición, todo se combina para crear una obra maestra. Pero el elemento más importante de esta obra de arte eres tú, con toda tu belleza natural y tu espíritu luminoso.' },
    { id: 31, src: foto31, comment: '🌅 Una imagen que captura la promesa de un nuevo día. Tu expresión aquí transmite esperanza y optimismo, como si estuvieras lista para abrazar todas las oportunidades que la vida tiene para ofrecer. Esta fotografía es un recordatorio de que cada día es una nueva oportunidad para brillar.' },
    { id: 32, src: foto32, comment: '🎪 Una imagen llena de vida y movimiento. Tu energía aquí es contagiosa, como si estuvieras invitando a todos a unirse a la celebración de la vida. Esta fotografía captura esa parte tuya que siempre está lista para crear momentos memorables y experiencias únicas.' },
    { id: 33, src: foto33, comment: '🏆 Una imagen que merece todos los premios por su belleza y significado. Tu presencia aquí es victoriosa, como si estuvieras celebrando no solo un momento, sino toda una vida bien vivida. Esta fotografía es un testimonio de tus logros y de tu capacidad para triunfar con gracia.' },
    { id: 34, src: foto34, comment: '🌈 Una imagen que es como ver un arcoíris después de la tormenta. Tu sonrisa aquí promete que después de cada dificultad viene algo hermoso. Esta fotografía captura esa esperanza inquebrantable que siempre llevas contigo, esa fe en que todo va a estar bien.' },
    { id: 35, src: foto35, comment: '💐 Una imagen que florece con elegancia y sofisticación. Tu postura aquí transmite una confianza natural que no se puede fingir. Esta fotografía es un recordatorio de que la verdadera elegancia viene de adentro, de conocer tu propio valor y llevarlo con dignidad.' },
    { id: 36, src: foto36, comment: '🎯 Una imagen que da en el blanco de la perfección. Cada elemento de esta fotografía está en su lugar correcto, creando una armonía visual que es simplemente impresionante. Pero el elemento más importante eres tú, centrando toda la composición con tu presencia magnética.' },
    { id: 37, src: foto37, comment: '⭐ Una imagen que brilla como una estrella en el cielo nocturno. Tu luz aquí es tan intensa que parece iluminar no solo la fotografía, sino también el corazón de quien la contempla. Esta imagen es un recordatorio de que algunas personas nacen para brillar.' },
    { id: 38, src: foto38, comment: '🌻 Una imagen que irradia calidez como un girasol siguiendo al sol. Tu expresión aquí transmite una alegría tan pura que es imposible no sonreír al verla. Esta fotografía captura esa parte tuya que siempre busca la luz, incluso en los momentos más oscuros.' },
    { id: 39, src: foto39, comment: '🎨 Una imagen editada con cariño y atención al detalle. Cada retoque realizado con amor para resaltar la belleza que ya existía naturalmente. Esta fotografía es un testimonio de que a veces los pequeños toques artísticos pueden hacer que algo hermoso se vuelva extraordinario.' },
    { id: 40, src: foto40, comment: '📷 Una imagen original que captura la esencia pura sin filtros ni artificios. Tu autenticidad aquí es refrescante en un mundo lleno de pretensiones. Esta fotografía es un recordatorio de que la verdadera belleza no necesita disfraces, solo necesita ser genuina.' },
    { id: 41, src: foto41, comment: '📱 Una captura de pantalla que se convirtió en un recuerdo especial. A veces los momentos más preciados llegan de las formas más inesperadas. Esta imagen demuestra que no importa cómo se capture un momento, lo importante es la persona que aparece en él y la historia que cuenta.' },
    { id: 42, src: foto42, comment: '💬 Una imagen de WhatsApp que trasciende las plataformas digitales para convertirse en un recuerdo atemporal. Tu sonrisa aquí atraviesa la pantalla y llega directamente al corazón. Esta fotografía prueba que las conexiones humanas reales pueden florecer incluso en el mundo digital.' },
    { id: 43, src: foto43, comment: '📘 Una captura de Facebook que preserva un momento de alegría compartida. Las redes sociales pueden ser efímeras, pero hay imágenes como esta que merecen ser conservadas para siempre. Tu expresión aquí habla de momentos de felicidad que trascienden las plataformas digitales.' },
    { id: 44, src: foto44, comment: '🌐 Una imagen digital que captura la esencia de la era moderna. Tu adaptabilidad a los nuevos tiempos se refleja en cómo puedes crear momentos hermosos incluso en el mundo virtual. Esta fotografía es un puente entre lo tradicional y lo contemporáneo.' },
    { id: 45, src: foto45, comment: '💫 Una captura que brilla con luz propia en el universo digital. Tu presencia aquí trasciende las limitaciones de la tecnología para tocar el alma de quien la contempla. Esta imagen es prueba de que la belleza auténtica puede brillar en cualquier formato.' },
    { id: 46, src: foto46, comment: '🎭 Una imagen que cuenta una historia sin necesidad de palabras. Tu expresión aquí es tan elocuente que habla directamente al corazón. Esta fotografía captura uno de esos momentos en los que una imagen vale más que mil palabras.' },
    { id: 47, src: foto47, comment: '🌟 Una captura que destaca entre miles en el mar digital. Tu luz aquí es tan intensa que logra atravesar la pantalla y llegar al alma. Esta imagen es un recordatorio de que algunas personas tienen el don de brillar sin importar el medio.' },
    { id: 48, src: foto48, comment: '📸 Una imagen que merece estar en una galería de arte. La composición, la luz, la expresión, todo se combina para crear una obra maestra. Pero el elemento más valioso de esta obra de arte eres tú, con toda tu belleza natural y tu espíritu luminoso.' },
    { id: 49, src: foto49, comment: '🎨 Una captura que es como contemplar una pintura renacentista. Hay una cualidad atemporal en tu expresión que trasciende las épocas. Esta imagen podría haber sido tomada en cualquier momento de la historia y seguiría siendo igualmente hermosa.' },
    { id: 50, src: foto50, comment: '🌺 Una imagen que florece con belleza natural en el jardín digital. Tu sonrisa aquí es como una flor que no necesita temporada para brillar. Esta fotografía captura esa parte tuya que siempre encuentra formas de crear belleza, sin importar las circunstancias.' },
    { id: 51, src: foto51, comment: '💎 Una captura que brilla como una joya preciosa en el tesoro de los recuerdos. Tu presencia aquí añade valor a cada pixel, convirtiendo una simple imagen en un tesoro invaluable. Esta fotografía es un recordatorio de que tú eres la joya más preciosa en cualquier colección.' },
    { id: 52, src: foto52, comment: '🌅 Una imagen que promete un nuevo amanecer lleno de posibilidades. Tu expresión aquí transmite esperanza y optimismo, como si estuvieras lista para conquistar el mundo. Esta fotografía captura esa determinación especial que siempre llevas contigo.' },
    { id: 53, src: foto53, comment: '🎪 Una captura llena de vida y energía contagiosa. Tu vitalidad aquí es tan intensa que parece saltar de la pantalla. Esta imagen es un testimonio de tu capacidad para llevar alegría y animación a cualquier situación, por más ordinaria que parezca.' },
    { id: 54, src: foto54, comment: '🏆 Una imagen victoriosa que celebra tus logros y tu crecimiento personal. Tu expresión aquí transmite satisfacción y orgullo bien merecido. Esta fotografía es un recordatorio de que has recorrido un camino largo y hermoso, y que mereces celebrar cada paso del viaje.' },
    { id: 55, src: foto55, comment: '🌈 Una captura que es como ver todos los colores del arcoíris reunidos en una sola imagen. Tu diversidad de expresiones y emociones crea una paleta rica y compleja. Esta fotografía celebra la complejidad hermosa de tu personalidad multifacética.' },
    { id: 56, src: foto56, comment: '💐 Una imagen que florece con elegancia y gracia natural. Tu postura aquí habla de una confianza que viene de adentro, de conocer tu propio valor. Esta fotografía captura esa dignidad especial que siempre llevas contigo, esa nobleza que no se puede fingir.' },
    { id: 57, src: foto57, comment: '🎯 Una captura que da en el blanco de la perfección visual. Cada elemento de esta imagen está perfectamente balanceado, creando una composición que es simplemente impresionante. Pero el elemento más importante eres tú, siendo el centro magnético de toda la obra.' },
    { id: 58, src: foto58, comment: '⭐ Una imagen que brilla con la intensidad de una supernova en el cosmos digital. Tu luz aquí es tan poderosa que parece iluminar no solo la fotografía, sino también el día de quien la contempla. Esta captura es un recordatorio de tu capacidad para ser un faro de luz.' },
    { id: 59, src: foto59, comment: '🌻 Una captura que irradia calidez como el sol en un día de verano. Tu expresión aquí transmite una alegría tan contagiosa que es imposible no sentirse mejor después de verla. Esta imagen captura esa parte tuya que siempre encuentra razones para sonreír.' },
    { id: 60, src: foto60, comment: '🎨 Una imagen final que cierra esta colección con broche de oro. Tu presencia aquí es como la firma de un artista en su obra maestra. Esta fotografía no solo termina el álbum, sino que también abre la puerta a todos los momentos hermosos que están por venir en tu vida.' }
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
                alt="Foto de Evita" 
                className="photo-image"
                loading="lazy"
              />
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