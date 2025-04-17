// Esta es una implementación simulada para la API del chatbot
// No requiere credenciales externas

export async function post({ request }) {
    try {
      // Parsear el cuerpo de la solicitud
      const data = await request.json();
      const { message } = data;
      
      if (!message) {
        return new Response(
          JSON.stringify({
            error: 'Se requiere un mensaje'
          }),
          {
            status: 400,
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );
      }
      
      // Simular una respuesta basada en palabras clave en el mensaje
      const response = await simulateResponse(message);
      
      return new Response(
        JSON.stringify({
          response: response
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    } catch (error) {
      console.error('Error en la API del chatbot:', error);
      
      return new Response(
        JSON.stringify({
          error: 'Error al procesar la solicitud'
        }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    }
  }
  
  // Función que genera respuestas basadas en palabras clave
  async function simulateResponse(message) {
    // Simulamos un tiempo de respuesta para hacerlo más realista
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const normalizedMessage = message.toLowerCase().trim();
    
    // Respuestas para preguntas comunes
    if (normalizedMessage.includes('hora') && normalizedMessage.includes('ceremonia')) {
      return 'La ceremonia comenzará a las 17:00 horas en la Capilla Nuestra Señora del Carmen.';
    } else if (normalizedMessage.includes('dress code') || normalizedMessage.includes('vestimenta')) {
      return 'El código de vestimenta es "Elegancia casual de playa". Recomendamos ropa fresca pero elegante, en tonos claros. Puedes consultar la sección de Dress Code para más detalles.';
    } else if (normalizedMessage.includes('regalo') || normalizedMessage.includes('mesa de regalo')) {
      return 'Tenemos mesas de regalo en Liverpool, Amazon y Palacio de Hierro. También puedes contribuir a nuestro fondo de luna de miel. Toda la información está en la sección de Mesa de Regalos.';
    } else if (normalizedMessage.includes('hotel') || normalizedMessage.includes('alojamiento')) {
      return 'Recomendamos hospedarte en el Hotel Paraíso Azul, que es donde se realizará la recepción. Tenemos tarifas especiales para nuestros invitados. Consulta la sección de Alojamiento para más opciones.';
    } else if (normalizedMessage.includes('llegar') || normalizedMessage.includes('ubicación')) {
      return 'La ceremonia será en la Capilla Nuestra Señora del Carmen y la recepción en el Hotel Paraíso Azul, ambos en Playa del Carmen. Puedes consultar la sección "Cómo Llegar" para ver el mapa y más detalles.';
    } else if (normalizedMessage.includes('transporte')) {
      return 'Organizaremos transporte entre la ceremonia y la recepción para todos los invitados. Los autobuses saldrán puntualmente después de la ceremonia.';
    } else if (normalizedMessage.includes('confirmar') || normalizedMessage.includes('asistencia')) {
      return 'Puedes confirmar tu asistencia en la sección "Confirma tu Asistencia" de nuestra web. Agradecemos tu confirmación antes del 1 de septiembre de 2025.';
    } else if (normalizedMessage.includes('actividades') || normalizedMessage.includes('programa')) {
      return 'Además de la ceremonia y recepción el sábado 15 de octubre, organizaremos un cóctel de bienvenida el viernes por la tarde y un brunch de despedida el domingo. Te enviaremos el itinerario completo cuando confirmes tu asistencia.';
    } else if (normalizedMessage.includes('niños') || normalizedMessage.includes('hijos')) {
      return 'Nuestra boda es un evento para adultos, pero hemos organizado un área especial con cuidadores profesionales para los niños. Por favor, indícanos en tu confirmación si llevarás niños.';
    } else if (normalizedMessage.includes('clima') || normalizedMessage.includes('tiempo')) {
      return 'En octubre, Playa del Carmen tiene un clima cálido con temperaturas entre 23°C y 30°C. Es el final de la temporada de lluvias, por lo que pueden presentarse chubascos ocasionales, generalmente por las tardes.';
    } else if (normalizedMessage.includes('hola') || normalizedMessage.includes('hey') || normalizedMessage.includes('buenos días') || normalizedMessage.includes('buenas')) {
      return '¡Hola! Soy el chatbot de Memo y Pri. ¿En qué puedo ayudarte con la información de la boda?';
    } else if (normalizedMessage.includes('gracias') || normalizedMessage.includes('thank')) {
      return '¡De nada! Si tienes más preguntas, no dudes en consultarme. ¡Esperamos verte en nuestra boda!';
    } else {
      return 'Gracias por tu pregunta. Puedes encontrar toda la información sobre nuestra boda en las diferentes secciones del sitio web. Si no encuentras lo que buscas, puedes contactarnos directamente en info@bodamemoypri.com';
    }
  }