export interface ContactProps {
  className?: string;
  onSubmitSuccess?: (data: unknown) => void;
  onSubmitError?: (error: unknown) => void;
}
