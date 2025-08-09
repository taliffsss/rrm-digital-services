import { api } from '../core';
import { type ContactFormData } from '@/types/contact';

// API response types
export interface ContactResponse {
  message: string;
}

export interface ContactError {
  message: string;
  errors?: Record<string, string[]>;
}

// Contact API functions
export const contactApi = {
  // Submit contact form
  submit: async (data: ContactFormData): Promise<ContactResponse> => {
    const response = await api.post<ContactResponse>('/contact-us', data);
    return response.data;
  },
};
