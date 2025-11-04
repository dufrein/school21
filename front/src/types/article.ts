import { RootNode } from "node_modules/@strapi/blocks-react-renderer/dist/BlocksRenderer";

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  content: RootNode[] | null;
  publishedAt: string;
  updatedAt: string;
}
