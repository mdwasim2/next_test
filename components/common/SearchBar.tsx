import { Search } from "lucide-react";

export function SearchBar({ mobile = false }) {
  return (
    <div className={`relative ${mobile ? "w-full" : "w-64"}`}>
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
      <input
        type="text"
        placeholder="Search products..."
        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
      />
    </div>
  );
}
