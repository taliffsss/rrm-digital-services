import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  contactApi,
  type ContactResponse,
  type ContactError,
} from '@/api/contact-form';
import { type ContactFormData } from '@/types/contact';

export const useContactSubmission = () => {
  const queryClient = useQueryClient();

  return useMutation<ContactResponse, ContactError, ContactFormData>({
    mutationFn: contactApi.submit,
    onSuccess: (data, variables) => {
      // Invalidate and refetch any contact-related queries if needed
      queryClient.invalidateQueries({ queryKey: ['contact'] });

      // Optional: Store successful submission in cache
      queryClient.setQueryData(['contact', 'latest'], {
        ...data,
        submittedData: variables,
      });
    },
    onError: error => {
      // Handle error logging or additional error processing
      console.error('Contact submission failed:', error);
    },
  });
};
