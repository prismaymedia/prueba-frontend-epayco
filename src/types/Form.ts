export type FormProps = {
  onSubmit: (data: { title: string; body: string }, reset: () => void) => void;
};
