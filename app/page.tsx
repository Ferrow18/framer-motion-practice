"use client";

import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { Carousel } from "@/components/section/carousel";
import { Hero } from "@/components/section/hero";
import { Usps } from "@/components/section/usps";

import Lenis from "lenis";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Header />
      <main className="">
        <div className="bg-background relative z-10">
          <Hero />
          <Usps />
        </div>
        <div>
          <Container className="">3 col</Container>
        </div>
        <Carousel />
        <div className="h-[100vh] flex justify-center items-center">
          <p className="text-3xl font-semibold">Mega footer</p>
        </div>
      </main>
    </>
  );
}
