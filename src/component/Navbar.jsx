import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="flex justify-between px-16 py-2">
      <div>Logo</div>
      <div>
        <div className="bg-slate-950  text-slate-100 rounded-3xl px-3 py-1.5">
          <input type="text" className="bg-transparent" />
          <button className="bg-orange-400 hover:bg-orange-700 transition-all duration-500 p-2 rounded-full">
            <FaSearch />
          </button>
        </div>
      </div>
    </nav>
  );
}
