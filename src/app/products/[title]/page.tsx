import Header from "@/components/common/header";
import { porducts } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductPage = ({ params: { title } }: { params: { title: string } }) => {
  const currentProduct = porducts.filter(
    (product) => product.title === decodeURIComponent(title)
  )[0];
  return (
    <section className="min-h-screen">
      <Header
        title={decodeURIComponent(title)}
        desc="Quality Line: Special automobile solutions"
        image={`products/${currentProduct.image}`}
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
            <Link href={"/products"}>
              <li className="hover:text-blue-400 hover:font-semibold cursor-pointe">
                Water Proofing
              </li>
            </Link>
            <li>
              <hr className="w-[6px] h-[3px] bg-blue-400" />
            </li>
            <li className="font-semibold capitalize">
              {decodeURIComponent(title)}
            </li>
          </ul>
        </div>
      </nav>
      <div className="bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-5 md:px-7 py-10 pb-20 lg:py-20 ">
          <h5 className="font-semibold text-lg">Product Description</h5>
          <div className="grid grid-cols-1   lg:grid-cols-2">
            <div className="order-2">
              <p className="mt-4 text-gray-600 leading-7 text-sm">
                {currentProduct.desc}
              </p>
              <ul className="text-gray-600 leading-7 text-sm list-disc pl-5 mt-5 gap-3 flex flex-col">
                {currentProduct.points?.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center my-6 lg:my-0 order-1 lg:order-2">
              <Image
                src={`/images/products/${currentProduct.image}`}
                alt={currentProduct.title}
                width={400}
                height={400}
                className="rounded-lg w-full lg:w-[400px] border shadow-md hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
