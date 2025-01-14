export type PriceItem = {
    id: number;       
    title: string;    
    description: string; 
    price: string;   
  };
  
  
  export type PricesSection = {
    sectionTitle: string;   
    sectionSubtitle: string; 
    prices: PriceItem[];    
  };
  