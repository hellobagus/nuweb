export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  author: string;
  image: string;
  tags?: string[];
}

export interface UMKMItem {
  id: string;
  name: string;
  category: string;
  description: string;
  content?: string;
  image: string;
  gallery?: string[];
  location: string;
  contact: string;
  socialMedia?: {
    instagram?: string;
    facebook?: string;
    whatsapp?: string;
  };
  products?: {
    name: string;
    description: string;
    price: string;
    image: string;
  }[];
}

export interface KoperasiItem {
  id: string;
  name: string;
  type: string;
  description: string;
  content?: string;
  image: string;
  location: string;
  contact: string;
  established: string;
  memberCount: number;
  services?: string[];
  achievements?: string[];
}

export interface ReportItem {
  id: string;
  title: string;
  description: string;
  date: string;
  fileUrl: string;
  fileSize: string;
  category: string;
}

export interface StreamItem {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  videoUrl: string;
  thumbnail: string;
  presenter: string;
  isLive: boolean;
}