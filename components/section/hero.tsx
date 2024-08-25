"use client";

import { Container } from "@/components/container";
import { Button } from "@/components/button";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import picture1 from "@/public/posters/kea.jpg";
import { useRef } from "react";

export const Hero = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const opacityText = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const opacityImg = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  return (
    <div className="relative bg-background text-white">
      <motion.div
        ref={container}
        style={{ opacity: opacityImg }}
        className="absolute -top-[--header-row-height] left-0 w-full h-[200vh]"
      >
        <Image
          src={picture1}
          alt="hero"
          className="sticky top-0 object-cover scale-x-[-1] h-[100vh] w-full"
          placeholder="blur"
        />
      </motion.div>
      <Container className="relative pb-7 z-10 min-h-[--hero-height] flex flex-col justify-end items-start">
        <motion.div style={{ opacity: opacityText }}>
          <h1 className="text-5xl font-bold mb-10">
            The Eagles Experience. <br /> Only Here
          </h1>
          <Button className="mb-16" size="large">
            Test Button
          </Button>
          <p className="font-semibold">Watch them in action</p>
        </motion.div>
      </Container>
    </div>
  );
};
