export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          backgroundImage: string | null;
          createdAt: string | null;
          id: number;
          name: string;
          slug: string;
          updatedAt: string | null;
        };
        Insert: {
          backgroundImage?: string | null;
          createdAt?: string | null;
          id?: number;
          name: string;
          slug: string;
          updatedAt?: string | null;
        };
        Update: {
          backgroundImage?: string | null;
          createdAt?: string | null;
          id?: number;
          name?: string;
          slug?: string;
          updatedAt?: string | null;
        };
      };
      collections: {
        Row: {
          createdAt: string | null;
          id: number;
          name: string;
          slug: string;
          updatedAt: string | null;
        };
        Insert: {
          createdAt?: string | null;
          id?: number;
          name: string;
          slug: string;
          updatedAt?: string | null;
        };
        Update: {
          createdAt?: string | null;
          id?: number;
          name?: string;
          slug?: string;
          updatedAt?: string | null;
        };
      };
      order_items: {
        Row: {
          createdAt: string | null;
          id: number;
          orderId: number;
          productId: number;
          updatedAt: string | null;
        };
        Insert: {
          createdAt?: string | null;
          id?: number;
          orderId: number;
          productId: number;
          updatedAt?: string | null;
        };
        Update: {
          createdAt?: string | null;
          id?: number;
          orderId?: number;
          productId?: number;
          updatedAt?: string | null;
        };
      };
      orders: {
        Row: {
          createdAt: string | null;
          id: number;
          orderStatus: string | null;
          paymentStatus: string | null;
          updatedAt: string | null;
          userId: number | null;
        };
        Insert: {
          createdAt?: string | null;
          id?: number;
          orderStatus?: string | null;
          paymentStatus?: string | null;
          updatedAt?: string | null;
          userId?: number | null;
        };
        Update: {
          createdAt?: string | null;
          id?: number;
          orderStatus?: string | null;
          paymentStatus?: string | null;
          updatedAt?: string | null;
          userId?: number | null;
        };
      };
      products: {
        Row: {
          categoryId: number | null;
          createdAt: string | null;
          description: string;
          id: number;
          images: string[] | null;
          name: string;
          price: number;
          quantity: number;
          slug: string;
          updatedAt: string | null;
        };
        Insert: {
          categoryId?: number | null;
          createdAt?: string | null;
          description: string;
          id?: number;
          images?: string[] | null;
          name: string;
          price: number;
          quantity: number;
          slug: string;
          updatedAt?: string | null;
        };
        Update: {
          categoryId?: number | null;
          createdAt?: string | null;
          description?: string;
          id?: number;
          images?: string[] | null;
          name?: string;
          price?: number;
          quantity?: number;
          slug?: string;
          updatedAt?: string | null;
        };
      };
      products_and_collections: {
        Row: {
          collectionId: number;
          createdAt: string | null;
          id: number;
          productId: number;
        };
        Insert: {
          collectionId: number;
          createdAt?: string | null;
          id?: number;
          productId: number;
        };
        Update: {
          collectionId?: number;
          createdAt?: string | null;
          id?: number;
          productId?: number;
        };
      };
      users: {
        Row: {
          createdAt: string | null;
          email: string;
          id: number;
          name: string;
          profileImage: string | null;
          role: string | null;
          stripeCustomerId: string | null;
        };
        Insert: {
          createdAt?: string | null;
          email: string;
          id?: number;
          name: string;
          profileImage?: string | null;
          role?: string | null;
          stripeCustomerId?: string | null;
        };
        Update: {
          createdAt?: string | null;
          email?: string;
          id?: number;
          name?: string;
          profileImage?: string | null;
          role?: string | null;
          stripeCustomerId?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
