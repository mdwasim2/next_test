"use client";

import React, { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // redirect to search results, e.g. /search?q={query}
    window.location.href = `/search?q=${encodeURIComponent(query)}`;
  };

  return (
    <form
      onSubmit={onSubmit}
      className="hidden md:flex items-center w-full max-w-md"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
        className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-indigo-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-700"
      >
        Search
      </button>
    </form>
  );
}
