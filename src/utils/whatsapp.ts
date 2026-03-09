export const WHATSAPP_NUMBER = '+256767765070';

interface WhatsAppMessageOptions {
  text?: string;
  type?: 'general' | 'services' | 'training' | 'marketplace' | 'support';
  customMessage?: string;
}

export class WhatsAppService {
  static formatPhoneNumber(phone: string): string {
    // Remove all non-digit characters and ensure it starts with +
    return phone.replace(/\D/g, '').replace(/^0/, '+256');
  }

  static generateMessageUrl(options: WhatsAppMessageOptions = {}): string {
    const { text = '', type = 'general', customMessage } = options;
    
    let message = '';
    
    if (customMessage) {
      message = customMessage;
    } else {
      switch (type) {
        case 'services':
          message = 'Hello! I\'m interested in your technology services. Could you provide more information about your offerings?';
          break;
        case 'training':
          message = 'Hi! I\'d like to learn more about your training programs. What courses do you currently offer?';
          break;
        case 'marketplace':
          message = 'Hello! I\'m interested in your tech marketplace. Could you tell me more about the products available?';
          break;
        case 'support':
          message = 'Hi! I need technical support for a project. How can I get assistance from your team?';
          break;
        case 'general':
        default:
          message = 'Hello! I\'m reaching out from your website. I\'d like to discuss potential collaboration opportunities.';
          break;
      }
    }
    
    // Add any additional text
    if (text) {
      message += `\n\n${text}`;
    }
    
    // URL encode the message
    const encodedMessage = encodeURIComponent(message);
    const formattedPhone = this.formatPhoneNumber(WHATSAPP_NUMBER);
    
    return `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
  }

  static openChat(options: WhatsAppMessageOptions = {}): void {
    const url = this.generateMessageUrl(options);
    window.open(url, '_blank');
  }

  static getPredefinedMessages() {
    return {
      services: 'Hello! I\'m interested in your technology services. Could you provide more information about your offerings?',
      training: 'Hi! I\'d like to learn more about your training programs. What courses do you currently offer?',
      marketplace: 'Hello! I\'m interested in your tech marketplace. Could you tell me more about the products available?',
      support: 'Hi! I need technical support for a project. How can I get assistance from your team?',
      general: 'Hello! I\'m reaching out from your website. I\'d like to discuss potential collaboration opportunities.'
    };
  }
}

// Predefined quick actions
export const quickWhatsAppActions = {
  bookCall: () => WhatsAppService.openChat({ 
    customMessage: 'Hello! I\'d like to book a consultation call to discuss my project requirements.' 
  }),
  requestQuote: () => WhatsAppService.openChat({ 
    customMessage: 'Hi! I\'d like to request a quote for services. Here are my project details: [Please describe your project]' 
  }),
  askQuestion: () => WhatsAppService.openChat({ 
    customMessage: 'Hello! I have a question about your services.' 
  }),
  placeOrder: () => WhatsAppService.openChat({ 
    type: 'marketplace',
    text: 'I\'d like to place an order for the following items: [Please list items and quantities]'
  })
};