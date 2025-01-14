export interface NavigationLink {
  id: number;
  title: string;
  subCategories?: SubCategory[];
  href: string;
}

export interface SubCategory {
  title: string;
  href: string;
}
