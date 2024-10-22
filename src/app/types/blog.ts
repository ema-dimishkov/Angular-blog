// blog.ts
export interface Blog {
  id: number;
  title: string;
  description: string;
  content: string;
  image: string; // URL to the image
  isFeatured: boolean;
  categoryId: string; // Updated to use camelCase for consistency
}
