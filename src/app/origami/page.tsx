// app/origami/page.tsx
import Carousel from "../components/Carousel";
import fs from "fs";
import path from "path";
import { basePath } from '@/../modules/config';
import Link from "next/link";


export default function Page() {
  const imagesDir = path.join(process.cwd(), "public/origami/images");
  const files = fs.readdirSync(imagesDir)
    .filter((f) => f.endsWith(".png"))
    .sort(); // sort alphabetically
  
  const images = files.map((f) => basePath + `/origami/images/${f}`);
  
  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: 16 }}>
      <Link className="pb-4 inline-block" href="/">
      <svg className="inline-block mr-2" width="24px" height="24px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-iconid="390866" data-svgname="Back">
      <path fill="currentColor" d="M224 480h640a32 32 0 110 64H224a32 32 0 010-64z"/>
      <path fill="currentColor" d="M237.248 512l265.408 265.344a32 32 0 01-45.312 45.312l-288-288a32 32 0 010-45.312l288-288a32 32 0 1145.312 45.312L237.248 512z"/>
      </svg>
      Back to Youth</Link>
      <h1>Origami Gallery</h1>
      <Carousel images={images} />
    </main>
  );
}
