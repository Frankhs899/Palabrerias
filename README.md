# Palabrerías

**Palabrerías** es una aplicación interactiva que reinventa el clásico juego Mad Libs, donde los usuarios completan historias con palabras que ellos mismos eligen, generando resultados divertidos e inesperados. Este proyecto surge como respuesta creativa al desafío planteado en [50 react projects for the static web](https://50reactprojects.com/), combinando aprendizaje y entretenimiento en una experiencia diseñada para todos los públicos.

## Demo

[Demo](https://frankhs899.github.io/Palabrerias/)

## Features

- **Cargar y mostrar una historia aleatoria**: Obtiene la historia de forma aleatoria desde un archivo 'stories.json' usando el id aleatorio proporcionado en la URL.
- **Cargar y mostrar una historia**:Obtiene la historia seleccionada desde un archivo 'stories.json' usando el id proporcionado en la URL.
- **Formulario dinámico de preguntas**:Genera un formulario basado en las preguntas de la historia seleccionada.
- **Generar la historia personalizada**:Al enviar el formulario, los marcadores de la historia ({n}) se reemplazan con las respuestas proporcionadas por el usuario. Si no se proporciona una respuesta para un marcador, este se mantiene en su forma original ({n}).
- **Renderizado condicional**:Antes de enviar muestra el formulario con preguntas y un botón de envío, después de enviar muestra la historia personalizada junto con un botón para reiniciar el formulario y crear otra historia.

## Tech Stack

**Frontend:** React, React Router, TailwindCSS, React Icons

## Installation

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Frankhs899/Palabrerias.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd frontend
   ```
3. Instalar dependencias del frontend:
   ```bash
   npm install
   ```
4. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Contributing

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar el juego o encuentras algún bug, por favor abre un issue o envía un pull request.
