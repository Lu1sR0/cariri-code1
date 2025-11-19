import { HeroParallax } from "../ui/hero-parallax";

const products = [
  {
    title: "Product 1",
    link: "/",
    thumbnail: "sankoilr.png",
  },
  {
    title: "Product 2",
    link: "/",
    thumbnail: "sankoilr.png",
    },
  {
    title: "Product 3",
    link: "/",
    thumbnail: "sankoilr.png",  },
  {
    title: "Product 4",
    link: "/",
    thumbnail: "sankoilr.png",  },
  {
    title: "Product 5",
    link: "/",
    thumbnail: "applelr.png",  },
  {
    title: "Product 6",
    link: "/",
    thumbnail: "sankoilr.png",  },
  {
    title: "Product 7",
    link: "/",
    thumbnail: "sankoilr.png",  },
  {
    title: "Product 8",
    link: "/",
    thumbnail: "sankoilr.png",  },
  {
    title: "Product 9",
    link: "/",
    thumbnail: "sankoilr.png",  },
  {
    title: "Product 10",
    link: "/",
    thumbnail: "sankoilr.png",  },
];


export function BlurFadeDemo() {
  return (
    <HeroParallax products={products} />
  );
}
