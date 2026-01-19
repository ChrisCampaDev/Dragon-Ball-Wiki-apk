# Dragon Ball Wiki

Una aplicación móvil de React Native que explora el universo de Dragon Ball a través de una interfaz intuitiva y moderna.

## 📱 Descripción del Proyecto

Dragon Ball Wiki es una aplicación móvil desarrollada con React Native y Expo Router que permite a los usuarios explorar información sobre personajes y planetas del universo de Dragon Ball. La aplicación consume datos de la API pública de Dragon Ball para mostrar información detallada de manera atractiva.

## 🚀 Características Principales

### 🎭 Sección de Personajes

- Lista completa de personajes de Dragon Ball
- Tarjetas animadas con información básica (nombre, raza, ki, afiliación)
- Vista detallada de cada personaje con:
  - Imagen del personaje
  - Estadísticas (ki, max ki)
  - Información personal (género, afiliación, planeta natal)
  - Descripción completa
  - Transformaciones disponibles

### 🌍 Sección de Planetas

- Catálogo de planetas del universo Dragon Ball
- Información de estado (destruido/habitado)
- Vista detallada del planeta con:
  - Imagen del planeta
  - Descripción completa
  - Lista de habitantes conocidos
  - Estadísticas relevantes

### 🎨 Interfaz de Usuario

- Navegación por pestañas inferior
- Diseño moderno con tema Dragon Ball
- Animaciones fluidas y transiciones
- Tarjetas interactivas con efectos visuales
- Colores personalizados que evocan el universo Dragon Ball

## 🛠️ Stack Tecnológico

### Frontend

- **React Native**: Framework principal para desarrollo móvil
- **Expo SDK**: Plataforma de desarrollo y despliegue
- **Expo Router**: Navegación basada en archivos
- **React Navigation**: Navegación por pestañas inferiores

### Estilos y UI

- **StyleSheet**: Sistema de estilos nativo de React Native
- **React Native Reanimated**: Animaciones fluidas
- **React Native Safe Area Context**: Manejo de áreas seguras

### Desarrollo

- **TypeScript**: Tipado estático para mayor robustez
- **Babel**: Transpilación de código JavaScript/TypeScript

## 📁 Estructura del Proyecto

```
dragon-ball-wiki/
├── app/                          # Navegación principal (Expo Router)
│   ├── _layout.js               # Layout raíz de la aplicación
│   ├── index.js                 # Pantalla principal con navegación de pestañas
│   ├── [id].js                  # Detalle de personaje
│   └── planets/
│       └── [id].js              # Detalle de planeta
├── components/                  # Componentes reutilizables
│   ├── PjCard.jsx              # Tarjeta de personaje/planeta
│   ├── detail.jsx              # Componente de detalle de personaje
│   └── PlanetDetail.jsx        # Componente de detalle de planeta
├── screens/                     # Pantallas principales
│   ├── Main.js                 # Pantalla de personajes
│   └── Planets.js              # Pantalla de planetas
├── api/                        # Conexión a APIs externas
│   └── dragonBall.api.js      # Funciones de la API Dragon Ball
├── styles/                     # Estilos de la aplicación
│   └── sheets.js              # Hojas de estilos principales
└── assets/                     # Recursos estáticos
    ├── icon.png
    ├── adaptive-icon.png
    └── dragon-ball-svgrepo-com.svg
```

## 🔧 Instalación y Configuración

### Prerrequisitos

- Node.js (versión 18 o superior)
- Expo CLI
- Dispositivo móvil o emulador (iOS/Android)

### Pasos de Instalación

1. **Clonar el repositorio**

   ```bash
   git clone <URL-del-repositorio>
   cd react-native-blank
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   # o
   bun install
   ```

3. **Iniciar el servidor de desarrollo**

   ```bash
   npm start
   # o
   expo start
   ```

4. **Ejecutar en dispositivo/emulador**

   ```bash
   # Para Android
   npm run android

   # Para iOS
   npm run ios

   # Para Web
   npm run web
   ```

## 📡 API Externa

La aplicación consume datos de la **Dragon Ball API**:

- **URL Base**: `https://dragonball-api.com/api/`
- **Endpoints utilizados**:
  - `/characters?limit=58` - Lista de personajes
  - `/characters/{id}` - Detalle de personaje específico
  - `/planets?limit=20` - Lista de planetas
  - `/planets/{id}` - Detalle de planeta específico

## 🎨 Diseño y Estilos

### Paleta de Colores

- **Naranja Dragon Ball**: `#f89719` (acentos y elementos interactivos)
- **Negro**: `#000000` (tarjetas y elementos oscuros)
- **Blanco**: `#ffffff` (fondos y texto principal)
- **Gris claro**: `#f1eeee` (fondos de tarjetas)

### Componentes de Estilo

- **Tarjetas animadas** con sombras y bordes redondeados
- **Efectos de hover** en elementos interactivos
- **Transiciones suaves** entre pantallas
- **Tipografía jerárquica** para mejor legibilidad

## 🚀 Funcionalidades Técnicas

### Navegación

- **Expo Router**: Navegación declarativa basada en sistema de archivos
- **React Navigation**: Navegación por pestañas inferiores
- **Deep linking**: Soporte para enlaces directos a personajes y planetas

### Estado y Datos

- **Hooks de React**: `useState`, `useEffect` para gestión de estado local
- **Carga asíncrona**: Manejo de estados de carga y error
- **Caching local**: Almacenamiento temporal de datos para mejor rendimiento

### Animaciones

- **React Native Reanimated**: Animaciones de alto rendimiento
- **Animaciones de entrada**: Efectos de aparición progresiva en listas
- **Transiciones de pantalla**: Animaciones fluidas entre rutas

## 📱 Plataformas Soportadas

- ✅ **iOS**: iPhone y iPad
- ✅ **Android**: Dispositivos Android
- ✅ **Web**: Navegadores web modernos
- ✅ **Expo Go**: Pruebas rápidas sin compilación

## 🔮 Mejoras Futuras

- [ ] Búsqueda de personajes y planetas
- [ ] Sistema de favoritos
- [ ] Modo oscuro/claro
- [ ] Comparación de personajes

## 🤝 Contribución

Las contribuciones son bienvenidas. Para contribuir al proyecto:

1. Fork del repositorio
2. Crear una rama de características (`git checkout - feature/nueva-caracteristica`)
3. Commit de los cambios (`git commit -m 'Añadir nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## 📞 Contacto

Para preguntas o sugerencias sobre el proyecto:

- **Nombre del Proyecto**: Dragon Ball Wiki
- **Versión**: 1.0.0
- **Framework**: React Native con Expo

---

¡Explora el universo Dragon Ball desde tu dispositivo móvil! 🐉⚡
