# Guía de Personalización del Álbum de Evita

## ✨ Personalización Rápida

### Cambiar el título y subtítulo
En `src/components/PhotoAlbum.js`, busca la función `renderCover()`:

```javascript
<h1 className="cover-title">Tu Nuevo Título</h1>
<p className="cover-subtitle">Tu nuevo subtítulo</p>
```

### Agregar más fotos
1. Agrega las nuevas fotos a la carpeta `fotos/`
2. Importa las fotos en `PhotoAlbum.js`:
   ```javascript
   import nuevaFoto from '../../fotos/nombre-de-la-foto.jpg';
   ```
3. Agrega nuevas páginas al array `pages`

### Cambiar colores del álbum
En `src/components/PhotoAlbum.css`:

**Portada:**
```css
.cover-page {
  background: linear-gradient(135deg, #tu-color-1, #tu-color-2);
}
```

**Botones:**
```css
.nav-button {
  background: linear-gradient(135deg, #tu-color-1, #tu-color-2);
}
```

### Agregar efectos especiales

#### Modo nocturno
Agrega al final de `PhotoAlbum.css`:
```css
@media (prefers-color-scheme: dark) {
  .album-page {
    background: linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%);
  }
}
```

#### Música de fondo
En `PhotoAlbum.js`, después de los imports:
```javascript
import musicaFondo from '../../assets/musica-fondo.mp3';

// Dentro del componente
useEffect(() => {
  const audio = new Audio(musicaFondo);
  audio.loop = true;
  audio.volume = 0.3;
  audio.play();
  
  return () => audio.pause();
}, []);
```

## 🎨 Personalización Avanzada

### Animaciones personalizadas
```css
@keyframes miAnimacion {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.photo-image:hover {
  animation: miAnimacion 0.5s ease-in-out;
}
```

### Filtros de imagen
```css
.photo-image {
  filter: sepia(20%) saturate(1.2);
  transition: filter 0.3s ease;
}

.photo-image:hover {
  filter: none;
}
```

### Layout personalizado
Para cambiar de 2 fotos por página a 1 foto grande:
```css
.photos-grid {
  grid-template-columns: 1fr;
  place-items: center;
}
```

### Transiciones avanzadas
```css
.album-book.flipping {
  transform: rotateY(-15deg) translateZ(50px);
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}
```

## 📱 Optimización Móvil

### Gestos táctiles
Agrega en `PhotoAlbum.js`:
```javascript
const [touchStart, setTouchStart] = useState(null);
const [touchEnd, setTouchEnd] = useState(null);

const handleTouchStart = (e) => {
  setTouchStart(e.targetTouches[0].clientX);
};

const handleTouchMove = (e) => {
  setTouchEnd(e.targetTouches[0].clientX);
};

const handleTouchEnd = () => {
  if (!touchStart || !touchEnd) return;
  
  const distance = touchStart - touchEnd;
  const isLeftSwipe = distance > 50;
  const isRightSwipe = distance < -50;
  
  if (isLeftSwipe) nextPage();
  if (isRightSwipe) prevPage();
};
```

Y agrega los eventos al div principal:
```javascript
<div 
  className="album-container"
  onTouchStart={handleTouchStart}
  onTouchMove={handleTouchMove}
  onTouchEnd={handleTouchEnd}
>
```

## 🔧 Funcionalidades Extra

### Modo pantalla completa
```javascript
const toggleFullscreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
};
```

### Compartir en redes sociales
```javascript
const shareAlbum = () => {
  if (navigator.share) {
    navigator.share({
      title: 'Álbum de Evita',
      text: 'Mira este hermoso álbum de recuerdos',
      url: window.location.href
    });
  }
};
```

### Descarga de fotos
```javascript
const downloadPhoto = (photoSrc, fileName) => {
  const link = document.createElement('a');
  link.download = fileName;
  link.href = photoSrc;
  link.click();
};
```

¡Experimenta con estas opciones para crear un álbum único y personalizado! 🎉 