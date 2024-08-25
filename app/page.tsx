"use client";

import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Carousel } from "@/components/section/carousel";
import { Facts } from "@/components/section/facts";
import { Hero } from "@/components/section/hero";
import { Usps } from "@/components/section/usps";

import Lenis from "lenis";
import { useEffect, useState } from "react";
import { PhotosArray } from "./api/photos/route";

export default function Home() {
  const [photos, setPhotos] = useState<PhotosArray>({
    photos1: [],
    photos2: [],
  });

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

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
    <>
      <Header />
      <main className="">
        <div className="bg-background relative z-10">
          <Hero />
          <Usps />
        </div>
        <Carousel photos={photos} />
        <Facts />
        <Footer photos={photos} />
      </main>
    </>
  );
}
