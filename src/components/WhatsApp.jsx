import React from 'react'

const WhatsApp = () => {
    const phoneNumber = '3477301572';

const openWhatsAppChat = () => {
    window.open(`https://wa.me/${phoneNumber}?text=Hola como estas me llamo Raymond Del Rosario dale el botton para que chat &lang=es`, '_blank');
}
  return (

    <a
    href="https://wa.me/3477301572"
    class="whatsapp_float"
    target="_blank"
    rel="noopener noreferrer"
    onClick={openWhatsAppChat}
  >
    <i class="fa fa-whatsapp whatsapp-icon"></i>
  </a>
        
  )
   
}
export default WhatsApp