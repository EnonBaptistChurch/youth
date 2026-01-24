// app/origami/page.tsx
import Carousel from "../components/Carousel";
import fs from "fs";
import path from "path";

export default function Page() {
  const imagesDir = path.join(process.cwd(), "public/origami/images");
  const files = fs.readdirSync(imagesDir)
    .filter((f) => f.endsWith(".png"))
    .sort(); // sort alphabetically

  const images = files.map((f) => `/origami/images/${f}`);

  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: 16 }}>
      <h1>Origami Gallery</h1>
      <Carousel images={images} />
    </main>
  );
}
