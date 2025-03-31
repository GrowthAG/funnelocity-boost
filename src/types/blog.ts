
export interface BlogPostType {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  image: string;
  author: string;
  authorImage: string;
  authorBio: string;
  date: string;
  readTime: string;
  tags: string[];
  socialShare: {
    facebook: string;
    twitter: string;
    linkedin: string;
    whatsapp: string;
    telegram: string;
  };
}
