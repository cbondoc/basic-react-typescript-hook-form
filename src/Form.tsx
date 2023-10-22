import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      isAdmin: true,
      createdAt: "",
    },
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          {...register("username", {
            required: "Username is required",
            minLength: {
              value: 5,
              message: "The username should have at least 5 characters",
            },
            pattern: {
              value: /^[a-zA-Z0-9_]+$/,
              message: "Username must contain only letters, numbers, and _",
            },
          })}
        />
        {errors.username && <small>{errors.username.message}</small>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          {...register("email", {
            required: "Email is required",
            maxLength: {
              value: 50,
              message: "The email should have at most 50 characters",
            },
            pattern: {
              value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              message: "Email address must be a valid address",
            },
          })}
        />
        {errors.email && <small>{errors.email.message}</small>}
      </div>

      <div>
        <label htmlFor="isAdmin">IsAdmin</label>
        <input id="isAdmin" type="checkbox" {...register("isAdmin")} />
      </div>

      <div>
        <label htmlFor="createdAt">Creation Date</label>
        <input
          id="createdAt"
          type="date"
          {...register("createdAt", {
            required: "Date is required",
          })}
        />
        {errors.createdAt && <small>{errors.createdAt.message}</small>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
