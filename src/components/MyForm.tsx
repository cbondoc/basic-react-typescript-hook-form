// src/components/MyForm.tsx
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

interface IFormInput {
  firstName: string;
  lastName: string;
}

const MyForm: React.FC = () => {
  const { register, handleSubmit, getValues, reset } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const { firstName, lastName } = data;
    if (!firstName && !lastName) {
      toast.error("Both First Name and Last Name are required.");
      return;
    }
    if (!firstName) {
      toast.error("First Name is required.");
      return;
    }
    if (!lastName) {
      toast.error("Last Name is required.");
      return;
    }
    toast.success(`Hello, ${firstName} ${lastName}!`);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input {...register("firstName")} id="firstName" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input {...register("lastName")} id="lastName" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
