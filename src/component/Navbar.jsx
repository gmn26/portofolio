export default function Navbar() {
  return (
    <nav className="sticky left-0 top-0 right-0 flex justify-between px-16 py-4 z-10">
      <div>Nav</div>
      <div>Logo</div>
      <div className="py-1.5 relative group">
        <a className="relative z-50 bg-white text-black px-3 py-1.5 font-semibold" href="https://github.com/gmn26">
          Reach Me Out!
        </a>
        <div className="z-10 opacity-0 absolute left-0 top-0 right-0 bottom-0 bg-yellow-500 group-hover:opacity-100 group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-700" />
      </div>
    </nav>
  );
}
