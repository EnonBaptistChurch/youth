"use client";

import Image from "next/image";
import { useState } from "react";

type CarouselProps = {
  images: string[];
  thumbnailWidth?: number;
  thumbnailHeight?: number;
};

export default function Carousel({
  images,
  thumbnailWidth = 90,
  thumbnailHeight = 60,
}: CarouselProps) {
  const [selected, setSelected] = useState(0);

  if (!images || images.length === 0) return <p>No images found.</p>;
    const scale = 0.9;
  return (
    <div>
      {/* Large selected image */}
      <div style={{ marginBottom: 16, textAlign: "center", height: "80%" }}>
        <Image
          src={images[selected]}
          alt={`Image ${selected + 1}`}
          width={600 * scale}
          height={400 * scale}
          style={{ objectFit: "cover", borderRadius: 6 }}
          loading="eager"
        />
      </div>

      {/* Thumbnail carousel */}
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: 8,
          padding: 8,
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch", // smooth scroll on iOS
        }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            style={{
              flex: "0 0 auto", // don't shrink
              scrollSnapAlign: "start",
              border: selected === i ? "2px solid #333" : "2px solid transparent",
              borderRadius: 4,
              cursor: "pointer",
              textAlign: "center",
            }}
            onClick={() => setSelected(i)}
          >
            <Image
              src={src}
              alt={`Thumbnail ${i + 1}`}
              width={thumbnailWidth}
              height={thumbnailHeight}
              style={{ objectFit: "cover", borderRadius: 4 }}
            />
            <div
              style={{
                fontSize: 11,
                maxWidth: thumbnailWidth,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {src.split("/").pop()?.replace(/\.[^/.]+$/, "")}
            </div>
          </div>
        ))}
      </div>

      <p style={{ marginTop: 12, fontSize: 12, color: "#666", textAlign: "center" }}>
        Designs are from{" "}
        <a href="https://origamiusa.org/diagrams/free" target="_blank" rel="noreferrer">
          origamiusa.org
        </a>
      </p>
    </div>
  );
}
