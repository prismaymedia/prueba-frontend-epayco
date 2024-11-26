export interface FormData {
    title: string;
    body: string;
  }
  
  export interface FormProps {
    onSubmit: (data: FormData) => void;
  }
  