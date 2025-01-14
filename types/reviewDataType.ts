export type Review = {
    id: number;
    text: string;
    name: string;
    role: string;
    imageUrl: string;
  };
  
  export type ReviewSection = {
    sectionTitle: string;    
    sectionSubtitle: string; 
    reviews: Review[];       
  };
  