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
    <>
      <button className=" absolute bg-[#AC925A] py-2 px-3 ml-3 mt-3 rounded">
        <svg
          width="47"
          height="16"
          viewBox="0 0 47 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.292835 7.29289C-0.0976868 7.68342 -0.0976868 8.31658 0.292835 8.70711L6.6568 15.0711C7.04732 15.4616 7.68048 15.4616 8.07101 15.0711C8.46154 14.6805 8.46154 14.0474 8.07101 13.6569L2.41416 8L8.07101 2.34315C8.46154 1.95262 8.46154 1.31946 8.07101 0.928932C7.68048 0.538408 7.04732 0.538408 6.6568 0.928932L0.292835 7.29289ZM46.2307 7L0.999943 7V9L46.2307 9V7Z"
            fill="black"
          />
        </svg>
      </button>
      <div className="bg-[#3C3D37] flex justify-center h-screen items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2  text-center text-4xl mb-5">
              เลขพร้อมเพย์
            </label>
            <input
              {...register("promptPayNumber", { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.promptPayNumber && (
              <p className="text-red-500 text-xs italic mt-4">Please Enter</p>
            )}
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-12 rounded focus:outline-none focus:shadow-outline text-4xl"
            >
              บันทึก
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
