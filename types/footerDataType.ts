export interface Service {
    name: string;
    url: string;
  }
  
  export interface Contact {
    type: string;
    value: string;
    link?: string;
  }
  
  export interface FooterData {
    popularServices: Service[];
    contactInfo: Contact[];
    copyright: string;
  }
  