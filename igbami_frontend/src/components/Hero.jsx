const Hero = () => {
  return (
    <section className="text-center py-24 px-6">
      <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
        Your Market. <span className="text-green-600">Digitized.</span>
      </h2>

      <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-8">
        IgbaMi helps small Nigerian businesses showcase their products
        professionally and share a digital catalog with customers.
      </p>

      <div className="flex justify-center gap-4">
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition">
          Get Started
        </button>
        <button className="border border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-600 hover:text-white transition">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Hero;
