const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="flex justify-between items-center px-8 py-5 shadow-md dark:shadow-gray-800">
      <h1 className="text-2xl font-bold text-green-600">IgbaMi</h1>

      <div className="flex items-center gap-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-2 rounded-lg border dark:border-gray-600"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
