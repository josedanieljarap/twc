import WhatsAppIcon from "@/components/icons/whatsapp-icon";
import MapPinIcon from "@/components/icons/map-pin-icon";
import PhoneIcon from "@/components/icons/phone-icon";


export default function ContactoPage() {
  const whatsappNumber = "+51967274225"; // Número sin código de país
  const whatsappMessage = "Hola! Me gustaría hacer un pedido de panes."; // Mensaje predefinido
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header de la página */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contáctanos</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Estamos aquí para atenderte. Visítanos en nuestra panadería o contáctanos 
          directamente por WhatsApp para hacer tus pedidos.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Información de contacto */}
        <div className="space-y-8">
          {/* WhatsApp */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Haz tu pedido por WhatsApp</h2>
            <p className="text-gray-600 mb-4">
              Envíanos un mensaje directamente a nuestro WhatsApp para hacer pedidos 
              o consultar sobre nuestros productos.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200"
            >
              <WhatsAppIcon />
              <span>Chatear por WhatsApp</span>
            </a>
          </div>

          {/* Horarios */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Horarios de Atención</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="font-medium text-gray-700">Lunes - Viernes</span>
                <span className="text-gray-600">6:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="font-medium text-gray-700">Sábado</span>
                <span className="text-gray-600">6:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>

          {/* Información adicional */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Información de Contacto</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPinIcon className="w-6 h-6 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">Dirección</h3>
                  <p className="text-gray-600">Av. José Carlos Mariátegui cuadra 5, Sector Ramón Castilla, Huanchaco</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <PhoneIcon className="w-6 h-6 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">Teléfono</h3>
                  <p className="text-gray-600">967-274-225</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mapa */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Ubicación</h2>
          <p className="text-gray-600 mb-4">
            Ecuéntranos a 5 minutos del óvalo Huanchaco, cerca al residencial El Marquéz
          </p>
          
          {/* Mapa de Google Maps embebido */}
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3438.8071803586813!2d-79.08923225052533!3d-8.085964751203774!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3ddfb99e292b%3A0x91621c8374ab34e8!2sMois%C3%A9s%20Bakery!5e0!3m2!1sen!2spe!4v1754016880636!5m2!1sen!2spe"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Panadería Moisés"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
} 