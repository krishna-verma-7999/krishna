import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  // this hook is used to check form submit status

  return (
    <button
      type="submit"
      className="h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all flex items-center justify-center gap-2 group focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950
      disabled:bg-opacity-65
      disabled:scale-100 dark:bg-white dark:bg-opacity-10"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-white border-b-2"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-o=hover:-translate-y-1" />
          {""}
        </>
      )}
    </button>
  );
};

export default SubmitBtn;
