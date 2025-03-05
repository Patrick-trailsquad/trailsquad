
const CTASection = () => {
  return (
    <section className="py-24 bg-terra relative overflow-hidden">
      <div className="absolute inset-0 bg-[#FEF7CD] opacity-90">
        <img
          src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3"
          alt="Background pattern"
          className="w-full h-full object-cover mix-blend-overlay"
          loading="lazy"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-cabinet text-4xl md:text-5xl font-bold text-[#000000e6] mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="font-inter text-xl text-[#000000e6]/90 mb-8">
            Join our community of trail runners and experience the world's most beautiful paths.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full font-inter focus:outline-none focus:ring-2 focus:ring-[#000000e6]/20"
            />
            <button className="bg-[#000000] text-white px-8 py-4 rounded-full font-cabinet font-medium hover:bg-[#000000e6] transition-colors duration-300">
              Get Started
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
