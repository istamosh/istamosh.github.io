"use client";
import React, { FC, useEffect, useRef } from "react";
import SectionContainer from "./SectionContainer";

const minStarSize = 0.5;
const maxStarSize = 1;
const starSpacing = 90;
const minStarOpacity = 0.1;
const maxStarOpacity = 1;
const starsDirectionInDegree = 200;
const earthRotationSpeedFactor = 0.05;

const getOpacity = (factor: number) => {
  const opacityIncrement =
    (maxStarOpacity - minStarOpacity) * Math.abs(Math.sin(factor));
  return minStarOpacity + opacityIncrement;
};

const randomInt = (max: number) => Math.floor(Math.random() * max);
const getRandomArbitrary = (min: number, max: number) =>
  Math.random() * (max - min) + min;

const populateStars = (w: number, h: number, spacing: number) => {
  const stars = [];
  for (let x = 0; x < w; x += spacing) {
    for (let y = 0; y < h; y += spacing) {
      const star = {
        x: x + randomInt(spacing),
        y: y + randomInt(spacing),
        r: getRandomArbitrary(minStarSize, maxStarSize),

        offset: Math.random() * 100,
        speed: 0.0001 + Math.random() * 0.0002,
      };
      stars.push(star);
    }
  }
  return stars;
};

const fillCircle = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number,
  fillStyle: string
) => {
  ctx.beginPath();
  ctx.fillStyle = fillStyle;
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
};

const HeroSection: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const counterRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let stars = populateStars(width, height, starSpacing);

    const render = () => {
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, "oklch(0.208 0.042 265.755)");
      gradient.addColorStop(1, "oklch(0.293 0.066 243.157)");

      // bg
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      const angleRad = (starsDirectionInDegree * Math.PI) / 180;

      stars = stars.map((star) => {
        let newX = star.x + Math.cos(angleRad) * earthRotationSpeedFactor;
        let newY = star.y + Math.sin(angleRad) * earthRotationSpeedFactor;

        if (newX < 0 || newX > width || newY < 0 || newY > height) {
          const spawnOnBottom = Math.random() > 0.5;
          if (spawnOnBottom) {
            newX = Math.random() * width;
            newY = height;
          } else {
            newX = width;
            newY = Math.random() * height;
          }
        }

        star.x = newX;
        star.y = newY;

        const factor = counterRef.current * star.speed * star.offset;
        const opacity = getOpacity(factor);
        fillCircle(ctx, star.x, star.y, star.r, `rgba(255,255,255,${opacity}`);

        return star;
      });

      counterRef.current += 1;
      window.requestAnimationFrame(render);
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      stars = populateStars(width, height, starSpacing);
    };

    window.addEventListener("resize", handleResize);
    render();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="w-full h-screen bg-slate-900 relative flex" id="hero">
        <canvas ref={canvasRef} className="w-full h-full absolute" />
        <img
          src="/portfolio-page-hero-transparent.webp"
          alt="hero-img"
          className="absolute place-self-end w-full"
        />

        <SectionContainer className="z-0">
          <div
            data-theme="night"
            className="bg-transparent flex flex-col gap-y-4 pt-12 w-full sm:w-2/3 sh:h-full sh:justify-center sh:pt-0"
          >
            <h1 className="text-4xl sm:text-6xl sm:font-bold lg:text-8xl 2xl:text-9xl">
              Hi, I am Alfian
            </h1>

            <h2 className="text-3xl sm:text-5xl sm:font-bold lg:text-6xl 2xl:text-8xl">
              Welcome to my digital playground.
            </h2>

            <p className="lg:text-2xl">
              Where all of my crafts, thoughts, and experiments come to life{" "}
              <br />I won&apos;t waste your time, please take a quick peek,{" "}
              <em>it&apos;s free of charge.</em>
            </p>

            <p className="text-sm">
              This starry sky is created using HTML5 Canvas.{" "}
              <a
                href="https://kaeruct.github.io/posts/2019/04/13/starry-sky-in-html5-canvas-pt1/"
                target="_blank"
                className="link link-hover link-primary"
              >
                More on that here.
              </a>
            </p>
          </div>
        </SectionContainer>
      </div>
    </>
  );
};

export default HeroSection;
