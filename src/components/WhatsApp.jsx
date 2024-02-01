import React from 'react'

const WhatsApp = () => {
    const phoneNumber = '123456789';

const openWhatsAppChat = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
}
  return (
        <button type="button" id="whatsapp-menu-btn" onClick={openWhatsAppChat}>
              <span id="whatsapp-menu-btn-text">
               WhatsApp
              </span>
              
        </button>
  )
   
}
export default WhatsApp