import React from "react";
import { FaSearch } from "react-icons/fa";

type SearchBarProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function SearchBar({ ...rest }: SearchBarProps) {
  return (
    <div className="relative flex items-center justify-center w-full mx-auto">
      <FaSearch className="w-4 h-4 text-gray-400 absolute left-3" />
      <input
        type="text"
        {...rest}
        className="w-full peer pl-10 px-4 py-3 text-sm rounded bg-white outline-none ring-gray-200 ring-1 focus:ring-primary"
      />
      <button
        type="submit"
        className="rounded-r bg-primary absolute right-0 px-4 h-full text-white text-sm">
        Cari
      </button>
    </div>
  );
}
