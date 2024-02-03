import React from 'react'

const WhatsApp = () => {
    const phoneNumber = '123456789';

const openWhatsAppChat = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
}
  return (

    <a
    href="https://wa.me/3477301572"
    class="whatsapp_float"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i class="fa fa-whatsapp whatsapp-icon"></i>
  </a>
        
  )
   
}
export default WhatsApp