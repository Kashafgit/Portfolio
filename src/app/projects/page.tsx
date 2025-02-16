


"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 pb-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {[
            {
              title: "E-Commerce Shopping Website",
              subtitle: "EXCLUSIVE",
              desc: "Exclusive shopping store is a sleek e-commerce platform offering quality products at great prices with a smooth shopping experience.",
              img: "/ecommerce.jpg",
              link: "https://milestone-3-part-2.vercel.app/",
            },
            {
              title: "Blog Website",
              subtitle: "T-SHIRT-STORE",
              desc: "This T-shirt store is designed as a blog-style website, showcasing trendy and unique T-shirts while sharing fashion insights and the latest trends in casual wear",
              img: "/blog.jpg",
              link: "https://milestone-3-part-1.vercel.app/",
            },
            {
              title: "Beauty and Cosmetics",
              subtitle: "DEWSHAPE",
              desc: " A sleek and elegant makeup landing page designed to showcase premium beauty products, offering a seamless user experience  to attract makeup enthusiasts",
              img: "/makeup.jpg",
              link: "https://tailwind-css-website-six.vercel.app/",
            },
            {
              title: "Coffee Website",
              subtitle: "COFFO Coffee",
              desc: "A premium coffee website offering rich flavors, handcrafted blends, and a seamless shopping experience for coffee lovers.",
              img: "/coffee.png",
              link: "https://my-custom-css-web.vercel.app/",
            },
            {
              title: "Ecommerce Landing Page",
              subtitle: "FASHION",
              desc: "A modern fashion website offering the latest trends, premium quality, exclusive collections, and a seamless shopping experience.",
              img: "/shopping.png",
              link: "https://ecommerce-shopping-website-rho.vercel.app/",
            },
            {
              title: "E-Commerce Furniture website",
              subtitle: "AVION FURNITURE",
              desc: "Avion is a modern furniture website offering sleek, stylish, and high-quality home decor solutions at affordable prices, ensuring a seamless shopping.",
              img: "/avion.png",
              link: "https://avion-hackathone.vercel.app/",
            },
            
          ].map((card, index) => (
            <motion.div
              key={index}
              className="p-4 md:w-1/3"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Link href={card.link} target="_blank">
                  <Image
                    className="lg:h-48 md:h-36 w-full object-cover object-center hover:scale-105 transition-transform duration-300"
                    src={card.img}
                    alt="blog"
                    width={300}
                    height={300}
                  />
                </Link>
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {card.title}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {card.subtitle}
                  </h1>
                  <p className="leading-relaxed mb-3 text-pink-200">{card.desc}</p>
                  <div className="flex items-center flex-wrap">
                    <Link href={card.link} target="_blank" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
