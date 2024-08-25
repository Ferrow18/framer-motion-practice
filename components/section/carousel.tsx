"use client";

import { movies } from "@/data/movies";
import Image from "next/image";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { useWindowSize } from "react-use";

type Photos = {
  photos1: string[];
  photos2: string[];
};

export const Carousel = () => {
  const { width, height } = useWindowSize();
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const maxScale = useMemo(() => {
    const windowYRatio = height / width;
    const xScale = 1.66667;
    const yScale = xScale * (16 / 9) * windowYRatio;
    return Math.max(xScale, yScale);
  }, [width, height]);

  const scale = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.66],
    [maxScale * 1.1, maxScale, 1]
  );

  const imageOpacity = useTransform(scrollYProgress, [0.655, 0.66], [0, 1]);
  const imageFromLeft = useTransform(scrollYProgress, [0.655, 0.66], [-20, 0]);
  const imageFromRight = useTransform(scrollYProgress, [0.655, 0.66], [20, 0]);

  const [carouselVariant, setCarouselVariant] = useState<"inactive" | "active">(
    "inactive"
  );
  const [photos, setPhotos] = useState<Photos>({
    photos1: [],
    photos2: [],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.66) {
      setCarouselVariant("active");
    } else {
      setCarouselVariant("inactive");
    }
  });

  useEffect(() => {
    async function fetchPhotos() {
      const res = await fetch("/api/photos")
        .then((res) => res.json())
        .catch((err) => console.error(err));

      setPhotos(res);
    }

    fetchPhotos();
  }, []);

  return (
    <motion.div animate={carouselVariant} className="bg-background pb-16">
      <div ref={container} className="mt-[-100vh] h-[300vh] overflow-clip">
        <div className="sticky top-0 flex h-screen items-center">
          <div className="relative left-1/2 mb-5 flex -translate-x-1/2 gap-5">
            <motion.div
              style={{ opacity: imageOpacity, x: imageFromLeft }}
              className="aspect-[9/16] w-[300px] shrink-0 overflow-clip rounded-2xl md:aspect-video md:w-[60vw]"
            >
              <Image
                className="h-full w-full object-cover"
                src={movies[0].image}
                alt={movies[0].name}
                width={1600}
                height={900}
              />
            </motion.div>
            <motion.div
              style={{ scale }}
              className="relative aspect-[9/16] w-[300px] shrink-0 overflow-clip rounded-2xl md:aspect-video md:w-[60vw]"
            >
              <Image
                className="h-full w-full object-cover"
                src={movies[1].image}
                alt={movies[1].name}
                width={1600}
                height={900}
              />
              <motion.div
                variants={{
                  active: { opacity: 1 },
                  inactive: { opacity: 0 },
                }}
                className="absolute bottom-0 left-0 flex w-full flex-col items-center gap-4 p-5 text-lg text-white md:flex-row md:justify-between md:gap-0"
              >
                <p>Best title ever</p>
                <p>Button</p>
              </motion.div>
            </motion.div>
            <motion.div
              style={{ opacity: imageOpacity, x: imageFromRight }}
              className="aspect-[9/16] w-[300px] shrink-0 overflow-clip rounded-2xl md:aspect-video md:w-[60vw]"
            >
              <Image
                className="h-full w-full object-cover"
                src={movies[2].image}
                alt={movies[2].name}
                width={1600}
                height={900}
              />
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        variants={{
          active: { opacity: 1, y: 0 },
          inactive: { opacity: 0, y: 20 },
        }}
        transition={{ duration: 0.5 }}
        className="-mt-[calc((100vh-(300px*(16/9)))/2)] space-y-3 pt-4 md:-mt-[calc((100vh-(60vw*(9/16)))/2)]"
      >
        <SmallCarousel movies={photos.photos1} />
        <div className="[--carousel-offset:-60px] [--carousel-duration:70s]">
          <SmallCarousel movies={photos.photos2} />
        </div>
      </motion.div>
    </motion.div>
  );
};

const SmallCarousel = ({ movies }: { movies: string[] }) => {
  return (
    <div className="overflow-clip">
      <div className="flex gap-3 animate-carousel-move relative left-[var(--carousel-offset,0px)]">
        {movies.map((movie, index) => (
          <div className="w-[25vw] aspect-video shrink-0" key={index}>
            <Image
              src={movie}
              alt="movie"
              width={300}
              height={300}
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
