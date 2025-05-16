import type { LucideIcon } from 'lucide-react';

export interface CourseModule {
  name: string;
  icon?: LucideIcon;
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
