"use client";

import { useForm, SubmitHandler } from "react-hook-form";

type UserData = {
  promptPayNumber: string;
};

export default function Page() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserData>();
  const onSubmit: SubmitHandler<UserData> = (data) => console.log(data);
  return (
    <div className="bg-blue-400 flex justify-center h-screen items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Promp Pay
          </label>
          <input
            {...register("promptPayNumber", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
           {errors.promptPayNumber && <span>This field is required</span>}
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}
