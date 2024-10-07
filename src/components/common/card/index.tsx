import React from "react";

const ProductCard = () => {
  return (
    <div>
      <a
        href="#"
        className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3"
      >
        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&q=75&fit=crop&w=600"
          loading="lazy"
          alt="Photo by Rachit Tank"
          className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />

        <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
          sale
        </span>
      </a>

      <div>
        <a
          href="#"
          className="hover:gray-800 mb-1 text-gray-500 transition duration-100 "
        >
          Timely Watch
        </a>

        <div className="flex items-end gap-2">
          <span className="font-medium text-gray-800 text-sm">Know more</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
