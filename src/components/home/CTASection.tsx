
const CTASection = () => {
  return (
    <section className="py-24 bg-[#FFDC00] relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-cabinet text-4xl md:text-5xl font-bold text-black mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="font-inter text-xl text-black/90 mb-8">
            Join our community of trail runners and experience the world's most beautiful paths.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full font-inter focus:outline-none focus:ring-2 focus:ring-black/20"
            />
            <button className="bg-black text-white px-8 py-4 rounded-full font-cabinet font-medium hover:bg-black/90 transition-colors duration-300">
              Get Started
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
