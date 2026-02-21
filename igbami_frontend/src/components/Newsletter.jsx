const Newsletter = () => {
  return (
    <section className="py-20 px-8 text-center">
      <h3 className="text-3xl font-bold mb-6">
        Stay Updated
      </h3>

      <p className="mb-8 text-gray-600 dark:text-gray-300">
        Subscribe to get updates about new features and improvements.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-4 max-w-xl mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-3 rounded-lg border w-full dark:bg-gray-800"
        />
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Newsletter;
