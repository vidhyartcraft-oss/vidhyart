export default function Home() {
  const categories = [
    "Handcrafted Sarees",
    "Luxury Jewelry",
    "Brass Idols",
    "Sandstone Sculptures",
    "Paintings",
    "Home Decor",
    "Tribal Art",
    "Wholesale Collections",
  ];

  const products = [
    {
      title: "Royal Bamboo Saree",
      price: "₹4,999",
      image:
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Handcrafted Brass Krishna",
      price: "₹8,499",
      image:
        "https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Traditional Tribal Painting",
      price: "₹3,299",
      image:
        "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Luxury Temple Jewelry",
      price: "₹12,999",
      image:
        "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <main className="bg-[#0b0b0b] text-white min-h-screen overflow-hidden">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/70 border-b border-yellow-700/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black tracking-[6px] text-yellow-500">
              VIDHYART
            </h1>
            <p className="text-xs text-yellow-100 tracking-[3px]">
              WHERE TRADITION CRAFTS THE EXTRAORDINARY
            </p>
          </div>

          <nav className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#" className="hover:text-yellow-400 transition">
              Home
            </a>
            <a href="#categories" className="hover:text-yellow-400 transition">
              Categories
            </a>
            <a href="#products" className="hover:text-yellow-400 transition">
              Collections
            </a>
            <a href="#about" className="hover:text-yellow-400 transition">
              About
            </a>
            <a href="#contact" className="hover:text-yellow-400 transition">
              Contact
            </a>
          </nav>

          <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-2 rounded-full font-bold transition duration-300 shadow-xl shadow-yellow-600/30">
            Shop Now
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center text-center px-6">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black" />

        <div className="relative z-10 max-w-5xl">
          <p className="text-yellow-400 tracking-[8px] uppercase text-sm mb-4">
            India’s Premium Handmade Marketplace
          </p>

          <h1 className="text-5xl md:text-8xl font-black leading-tight mb-8">
            Discover
            <span className="text-yellow-500"> Luxury </span>
            Crafted By Tradition
          </h1>

          <p className="text-gray-300 text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto mb-10">
            Premium handcrafted sarees, sculptures, jewelry, paintings and
            luxury Indian artistry curated for modern buyers and wholesale
            businesses.
          </p>

          <div className="flex flex-col md:flex-row gap-5 justify-center">
            <button className="bg-yellow-500 text-black px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition duration-300 shadow-2xl shadow-yellow-500/40">
              Explore Collections
            </button>

            <button className="border border-yellow-500 px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 hover:text-black transition duration-300">
              Wholesale Inquiry
            </button>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 py-16 bg-[#111111] border-y border-yellow-700/20 text-center">
        <div>
          <h3 className="text-4xl font-black text-yellow-500">10K+</h3>
          <p className="text-gray-400 mt-2">Luxury Customers</p>
        </div>

        <div>
          <h3 className="text-4xl font-black text-yellow-500">500+</h3>
          <p className="text-gray-400 mt-2">Premium Products</p>
        </div>

        <div>
          <h3 className="text-4xl font-black text-yellow-500">100%</h3>
          <p className="text-gray-400 mt-2">Handcrafted Heritage</p>
        </div>

        <div>
          <h3 className="text-4xl font-black text-yellow-500">24/7</h3>
          <p className="text-gray-400 mt-2">Support & Assistance</p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categories" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-yellow-500 uppercase tracking-[5px] mb-3">
            Shop By Category
          </p>
          <h2 className="text-5xl font-black">Luxury Collections</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-yellow-700/20 to-black border border-yellow-600/20 rounded-3xl p-8 text-center hover:-translate-y-2 hover:border-yellow-500 transition duration-300 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-yellow-500 mx-auto mb-5 flex items-center justify-center text-black font-black text-2xl">
                {index + 1}
              </div>

              <h3 className="text-xl font-bold">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURE BANNER */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto rounded-[40px] overflow-hidden relative h-[500px] flex items-center px-10 md:px-20">
          <img
            src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1600&auto=format&fit=crop"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-10 max-w-2xl">
            <p className="uppercase tracking-[5px] text-yellow-500 mb-5">
              Exclusive Wholesale Deals
            </p>

            <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">
              Crafted For Luxury Retailers
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Buy handcrafted Indian products in wholesale quantities directly
              from artisans and premium suppliers.
            </p>

            <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition duration-300">
              Start Wholesale Buying
            </button>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-14">
          <div>
            <p className="uppercase tracking-[5px] text-yellow-500 mb-3">
              Trending Products
            </p>
            <h2 className="text-5xl font-black">Best Sellers</h2>
          </div>

          <button className="border border-yellow-500 px-6 py-3 rounded-full hover:bg-yellow-500 hover:text-black transition duration-300">
            View All
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-[#111111] rounded-[30px] overflow-hidden border border-yellow-700/20 hover:border-yellow-500 transition duration-300"
            >
              <div className="overflow-hidden h-[320px]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{product.title}</h3>

                <p className="text-yellow-500 text-3xl font-black mb-5">
                  {product.price}
                </p>

                <button className="w-full bg-yellow-500 text-black py-3 rounded-full font-bold hover:bg-yellow-400 transition duration-300">
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-24 px-6 bg-gradient-to-b from-[#111111] to-black"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[5px] text-yellow-500 mb-4">
              About VIDHYART
            </p>

            <h2 className="text-5xl font-black leading-tight mb-8">
              Bringing India’s Timeless Craftsmanship Online
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              VIDHYART is a luxury Indian marketplace dedicated to handcrafted
              traditions, artisan culture, heritage fashion, sculptures and
              premium artistic creations.
            </p>

            <p className="text-gray-400 leading-relaxed">
              We connect customers directly with authentic craftsmanship and
              wholesale suppliers across India.
            </p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1400&auto=format&fit=crop"
              className="rounded-[40px] shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 max-w-4xl mx-auto text-center">
        <p className="uppercase tracking-[5px] text-yellow-500 mb-4">
          Contact Us
        </p>

        <h2 className="text-5xl font-black mb-10">
          Let’s Build Your Wholesale Journey
        </h2>

        <div className="grid gap-5">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-[#111111] border border-yellow-700/20 rounded-2xl px-6 py-4 outline-none focus:border-yellow-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="bg-[#111111] border border-yellow-700/20 rounded-2xl px-6 py-4 outline-none focus:border-yellow-500"
          />

          <textarea
            placeholder="Tell us about your requirement"
            rows={5}
            className="bg-[#111111] border border-yellow-700/20 rounded-2xl px-6 py-4 outline-none focus:border-yellow-500"
          />

          <button className="bg-yellow-500 text-black py-4 rounded-full font-black text-lg hover:bg-yellow-400 transition duration-300">
            Send Inquiry
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-yellow-700/20 py-10 text-center text-gray-400">
        <h3 className="text-3xl font-black text-yellow-500 tracking-[5px] mb-4">
          VIDHYART
        </h3>

        <p className="mb-4">Where Tradition Crafts The Extraordinary</p>

        <p className="text-sm">© 2026 VIDHYART. All Rights Reserved.</p>
      </footer>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-4 rounded-full shadow-2xl font-bold hover:scale-110 transition duration-300 z-50"
      >
        WhatsApp
      </a>
    </main>
  );
}