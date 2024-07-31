import { Heading } from "components/atoms/Heading";
import { Form } from "components/molecules/Form";
import { FormProps } from "types";

export function FormContainer ({ handleFormSubmit }: Readonly<FormProps>) {
  return (
    <div className="flex flex-col items-center bg-gray-900 py-10 rounded-lg">
      <Heading level="h1" className="text-3xl font-bold">Add New Item</Heading>
      <Form className="max-w-xl m-auto flex flex-col [&>*]:mt-10 [&>p]:mt-3" handleFormSubmit={handleFormSubmit} />
    </div>
  )
}
