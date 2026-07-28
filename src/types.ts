export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  priceStart: string;
  popular?: boolean;
  features: string[];
  image: string;
  category: 'boda' | 'social' | 'editorial' | 'curso';
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: string;
  beforeImg: string;
  afterImg: string;
  details: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'todas' | 'bodas' | 'social' | 'editorial';
  image: string;
  likes: number;
  tags: string[];
  artistNote?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  eventDate: string;
  comment: string;
  rating: number;
  avatar: string;
  serviceUsed: string;
}

export interface BrandPartner {
  name: string;
  logoUrl?: string;
  category: string;
  description: string;
}
