import { useState } from "react";

export default function Input({ handleSubmit }) {
  const [value, setValue] = useState("");

  let submitForm = (e) => {
    e.preventDefault();
    handleSubmit(value);
    setValue("");
  };

  return (
    <form onSubmit={submitForm} className="p-5">
      <input
        placeholder="enter your gratitude"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="rounded px-3 py-3 mr-1 w-72 shadow-lg	"
      ></input>
      <button
        type="submit"
        className="bg-blue-400 rounded px-12 py-3 hover:bg-blue-500 shadow-lg	"
      >
        Save
      </button>
    </form>
  );
}
