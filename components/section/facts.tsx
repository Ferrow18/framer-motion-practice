import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Container } from "../container";
import { useWindowSize } from "react-use";

export const Facts = () => {
  const container = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();
  const [initialX, setInitialX] = useState(0);

  useEffect(() => {
    setInitialX(width);
  }, [width]);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["-0.5 -0.5", "0 0"],
  });

  const scaleImg = useTransform(scrollYProgress, [0, 1], [0, 0.7]);

  return (
    <div
      ref={container}
      className="w-full relative py-36 z-20 h-[220vh] bg-background"
    >
      <div className="relative">
        <motion.div style={{ scale: scaleImg }} className="w-full">
          <Image
            src="/posters/kea.jpg"
            alt="facts"
            width={1600}
            height={900}
            className="w-full h-[50vh] aspect-video object-cover"
          />
        </motion.div>
        <p className="text-5xl font-bold text-white absolute top-0 left-1/2 -translate-x-1/2 z-10">
          Facts
        </p>
      </div>
      <div className="space-y-5">
        <Container className="relative overflow-clip">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ margin: "100% 0px -500px 0px" }}
            className="w-full"
          >
            <Image
              src="/posters/sue.jpg"
              alt="facts"
              width={1600}
              height={900}
              className="w-full h-[25vh] md:h-[35vh] aspect-video object-cover"
            />
          </motion.div>
          <motion.p
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ margin: "100% 0px -500px 0px" }}
            className="text-4xl font-bold text-white absolute top-[65%] left-[10%] md:left-[30%] z-10 [text-shadow:1px_1px_2px_black]"
          >
            They have amazing eyesight.
          </motion.p>
        </Container>
        <Container className="relative overflow-clip">
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ margin: "100% 0px -500px 0px" }}
            className="w-full"
          >
            <Image
              src="/posters/ray.jpg"
              alt="facts"
              width={1600}
              height={900}
              className="w-full h-[25vh] md:h-[35vh] aspect-video object-cover"
            />
          </motion.div>
          <motion.p
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ margin: "100% 0px -600px 0px" }}
            className="text-4xl font-bold text-white absolute top-[65%] right-[10%] z-10 [text-shadow:1px_1px_2px_black]"
          >
            They don&apos;t need to eat every day.
          </motion.p>
        </Container>
        <Container className="relative overflow-clip">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ margin: "100% 0px -500px 0px" }}
            className="w-full"
          >
            <Image
              src="/posters/nathan.jpg"
              alt="facts"
              width={1600}
              height={900}
              className="w-full h-[25vh] md:h-[35vh] aspect-video object-cover"
            />
          </motion.div>
          <motion.p
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ margin: "100% 0px -500px 0px" }}
            className="text-4xl font-bold text-white absolute top-[65%] left-[10%] z-10 [text-shadow:1px_1px_2px_black]"
          >
            They build enormous nests.
          </motion.p>
        </Container>
        <Container className="relative overflow-clip">
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ margin: "100% 0px -500px 0px" }}
            className="w-full"
          >
            <Image
              src="/posters/bruno.jpg"
              alt="facts"
              width={1600}
              height={900}
              className="w-full h-[25vh] md:h-[35vh] aspect-video object-cover"
            />
          </motion.div>
          <motion.p
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ margin: "100% 0px -500px 0px" }}
            className="text-4xl font-bold text-white absolute top-[65%] right-[10%] z-10 [text-shadow:1px_1px_2px_black]"
          >
            They aren&apos;t bald!
          </motion.p>
        </Container>
      </div>
    </div>
  );
};
