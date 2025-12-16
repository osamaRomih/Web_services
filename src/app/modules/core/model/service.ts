export interface ServiceExtra {
  name: string;
  price: number;
}

export interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  thumbnail: string;
  fullDescription: string;
  deliverables: string[];
  extras: ServiceExtra[];
  gallery?: string[];
}
