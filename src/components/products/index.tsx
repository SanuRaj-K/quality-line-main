"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useTransform, useScroll, motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Link from "next/link";
const images = [
  "slider1.jpg",
  "slider2.jpg",
  "slider3.jpg",
  "slider4.jpg",
  "slider3.jpg",
  "slider6.jpg",
  "slider2.jpg",
  "slider8.jpg",
  "slider9.jpg",
  "slider2.jpg",
  "slider3.jpg",
  "slider4.jpg",
];
const Products = () => {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section>
      <div className="h-10 p-[2vw]"></div>
      <div
        ref={gallery}
        className="h-[175vh] relative flex gap-[2vw] p-[2vw] box-border overflow-hidden"
      >
        <Column images={[images[0], images[1], images[2]]} y={y} top="-45%" />
        <Column images={[images[3], images[4], images[5]]} y={y2} top="-95%" />
        <Column images={[images[6], images[7], images[8]]} y={y3} top="-45%" />
        <Column
          images={[images[9], images[10], images[11]]}
          y={y4}
          top="-75%"
        />
      </div>
      <div className="h-32 flex items-center justify-center ">
        <Link href={"/products"}>
          <button className="px-10 py-3   rounded-md text-white bg-blue-400 ">
            view all products
          </button>
        </Link>
      </div>
    </section>
  );
};

const Column = ({ images, y, top }: any) => {
  return (
    <motion.div
      className="relative h-full w-[25%] min-w-[250px] flex flex-col gap-[2vw]"
      style={{ top, y }}
    >
      {images.map((src: any, i: string) => {
        return (
          <div
            key={i}
            className="relative w-full h-full rounded-md overflow-hidden"
          >
            <Image
              src={`/assets/images/${src}`}
              alt={src}
              fill
              className="object-cover"
            />
          </div>
        );
      })}
    </motion.div>
  );
};
export default Products;
