import Header from "@/components/common/header";
import {  productsData } from "@/constants";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Products = () => {
  return (
    <main className="min-h-screen">
      <Header
        title="PRODUCTS"
        desc="Explore our top-quality products that meet your every need. From steel and welding to automobile, find the perfect solutions at Quality Line."
        image="/images/bg_19.jpg"
      />
      <nav className="h-[70px] bg-white flex items-center max-w-screen-xl mx-auto px-5 md:px-7">
        <div className="flex items-center">
          <ul className="flex items-center text-xs gap-4">
            <Link href={"/"}>
              <li className="hover:text-blue-400 hover:font-semibold cursor-pointer relative">
                Home
              </li>
            </Link>
            <li>
              <hr className="w-[6px] h-[3px] bg-blue-400" />
            </li>
            <li className="font-semibold">Products</li>
          </ul>
        </div>
      </nav>
      <div className="max-w-screen-xl mx-auto mb-20 my-7 px-5 lg:px-7">
        <h3 className="text-3xl font-semibold text-gray-800">Products</h3>
        <div className=" grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7  my-5 ">
          {productsData.map((product) => (
            // <Link href={`/products/${product.title}`}>
              <div
                key={product.id}
                className="  min-h-[200px] md:min-h-[220px] lg:min-h-[250px] shadow-md flex items-center  group cursor-pointer  rounded-md  justify-center overflow-hidden bg-black text-white relative"
              >
                <Image
                  src={product.image}
                  width={300}
                  height={300}
                  className="object-cover group-hover:scale-105 absolute w-full h-full group-hover:opacity-45 transition-all duration-500"
                  alt={`product.title`}
                />
                <h4 className="absolute font-semibold  text-sm  md:text-base text-center group-hover:opacity-100 transition-all duration-300 opacity-0 top-0 left-0 right-0 bottom-0 m-auto text-white flex items-center justify-center ">
                  {product.title}
                </h4>
              </div>
            // </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Products;

export const metadata: Metadata = {
  title: "Top Support Products | High-Quality Construction Materials",
  description:
    "Browse Top Support's premium construction products, including PVC waterstoppers, geotextiles, fiber admixtures, and more. Quality materials for superior results.",
  alternates: {
    canonical: "https://www.topsupportsa.com/products",
  },
  openGraph: {
    title: "Top Support - Premium Construction Products",
    description:
      "Explore our range of high-quality construction products. From PVC waterstoppers to construction chemicals, we provide materials that ensure project success.",
  },
  keywords:
    "Construction Products, PVC Waterstopper, Geotextiles, Fiber Admixture, Construction Chemicals, Waterproofing Materials, Expansion Joint Tape",
};
