
import type { LucideIcon, LucideProps } from 'lucide-react';
import type * as LucideIcons from 'lucide-react'; // For keyof typeof

export interface CourseModule {
  name: string;
  iconName?: keyof typeof LucideIcons; // Changed from 'icon' to 'iconName' and type to string key
}

export interface Course {
  id: string;
  title: string;
  modules: CourseModule[];
  duration: string;
  image: string;
  imageHint: string;
  price?: string; // Optional
  shortDescription?: string; // Optional
}

export interface ContactFormState {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
    general?: string[];
  };
  isSuccess: boolean;
  isError: boolean;
}
