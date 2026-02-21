const Features = () => {
  const features = [
    {
      title: "Product Showcase",
      desc: "Upload and display your products in a clean, digital catalog."
    },
    {
      title: "WhatsApp Integration",
      desc: "Receive orders directly through WhatsApp with one click."
    },
    {
      title: "Mobile First",
      desc: "Designed for Nigerian mobile users."
    },
  ];

  return (
    <section className="py-20 px-8 bg-gray-50 dark:bg-gray-800">
      <h3 className="text-3xl font-bold text-center mb-12">
        Why Choose IgbaMi?
      </h3>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 bg-white dark:bg-gray-900"
          >
            <h4 className="text-xl font-semibold mb-4 text-green-600">
              {feature.title}
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
