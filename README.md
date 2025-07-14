# Álbum de Fotos de Evita

Una hermosa landing page que presenta un álbum de fotos con transiciones estilo libro, diseñado especialmente para mostrar los recuerdos de Evita.

## Características

- 📖 **Efecto de libro**: Transiciones suaves que simulan el volteo de páginas
- 📱 **Responsive**: Diseño adaptable para dispositivos móviles y escritorio
- 🎨 **Diseño elegante**: Portada personalizada con tipografías elegantes
- 🖼️ **Espacios para fotos**: Placeholders listos para agregar las fotos
- ⚡ **Navegación fluida**: Controles intuitivos para navegar entre páginas

## Estructura del Proyecto

```
src/
├── components/
│   ├── PhotoAlbum.js      # Componente principal del álbum
│   └── PhotoAlbum.css     # Estilos del álbum
├── App.js                 # Componente principal de la aplicación
├── App.css                # Estilos globales
└── index.js               # Punto de entrada
```

## Instalación y Uso

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Ejecutar el proyecto**:
   ```bash
   npm start
   ```

3. **Abrir en el navegador**:
   La aplicación se abrirá automáticamente en `http://localhost:3000`

## Cómo Agregar Fotos

### Opción 1: Usar URLs de imágenes

1. Abre `src/components/PhotoAlbum.js`
2. Encuentra el array `pages` 
3. Reemplaza los placeholders con URLs de imágenes:

```javascript
{
  id: 'page1',
  type: 'photo',
  photos: [
    { id: 1, src: 'ruta/a/tu/imagen1.jpg', alt: 'Descripción de la foto 1' },
    { id: 2, src: 'ruta/a/tu/imagen2.jpg', alt: 'Descripción de la foto 2' }
  ]
}
```

### Opción 2: Usar imágenes locales

1. Crea una carpeta `src/assets/images/`
2. Coloca tus imágenes en esa carpeta
3. Importa las imágenes en `PhotoAlbum.js`:

```javascript
import foto1 from '../assets/images/foto1.jpg';
import foto2 from '../assets/images/foto2.jpg';
```

4. Actualiza el array `pages`:

```javascript
{
  id: 'page1',
  type: 'photo',
  photos: [
    { id: 1, src: foto1, alt: 'Descripción de la foto 1' },
    { id: 2, src: foto2, alt: 'Descripción de la foto 2' }
  ]
}
```

### Actualizar el renderizado

En la función `renderPhotoPage`, cambia:

```javascript
const renderPhotoPage = (pageData) => (
  <div className="photo-page">
    <div className="photos-grid">
      {pageData.photos.map((photo) => (
        <div key={photo.id} className="photo-slot">
          {photo.src ? (
            <img 
              src={photo.src} 
              alt={photo.alt || 'Foto del álbum'} 
              className="photo-image"
            />
          ) : (
            <div className="photo-placeholder">
              <span>{photo.placeholder}</span>
              <p>Aquí va la foto</p>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);
```

Y agregar estos estilos en `PhotoAlbum.css`:

```css
.photo-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.photo-image:hover {
  transform: scale(1.05);
}
```

## Personalización

### Cambiar el título del álbum

Edita la portada en `src/components/PhotoAlbum.js`:

```javascript
const renderCover = () => (
  <div className="cover-page">
    <div className="cover-content">
      <h1 className="cover-title">Tu Título Aquí</h1>
      <p className="cover-subtitle">Tu subtítulo aquí</p>
      // ...
    </div>
  </div>
);
```

### Agregar más páginas

Simplemente añade más objetos al array `pages`:

```javascript
{
  id: 'page6',
  type: 'photo',
  photos: [
    { id: 11, placeholder: 'Foto 11' },
    { id: 12, placeholder: 'Foto 12' }
  ]
}
```

### Cambiar colores y fuentes

Edita los estilos en `src/components/PhotoAlbum.css` para personalizar:
- Colores de fondo
- Tipografías
- Efectos de transición
- Tamaños y espaciados

## Diseño Responsive

La aplicación está optimizada para:
- **Escritorio**: Álbum ocupa 80% del viewport
- **Tablet**: Ajustes de tamaño y espaciado
- **Móvil**: Layout de una columna para fotos, controles adaptados
- **Orientación horizontal**: Optimizaciones especiales

## Tecnologías Utilizadas

- **React 18**: Framework principal
- **CSS3**: Animaciones y transiciones
- **Google Fonts**: Tipografías Playfair Display y Lora
- **Flexbox y Grid**: Para layouts responsive

## Próximas Mejoras

- Zoom en fotos
- Modo pantalla completa
- Efectos de sonido
- Compartir en redes sociales
- Descarga del álbum como PDF

¡Disfruta creando tu álbum de recuerdos! 📸✨ 