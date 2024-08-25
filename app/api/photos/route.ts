import { createClient } from "pexels";
import { NextResponse } from "next/server";

export type PhotoUrl = {
  large: string;
};

export type Photo = {
  src: PhotoUrl;
};

export type PhotosArray = {
  photos1: Photos[];
  photos2: Photos[];
};

export type Photos = {
  src: string;
  authorName: string;
  authorUrl: string;
};

const client = createClient(process.env.PEXELS_API_KEY!);

export async function GET(request: Request) {
  try {
    // Generate a random page number between 1 and 100
    const randomPage = Math.floor(Math.random() * 100) + 1;

    const photosQuery = await client.photos.search({
      query: "nature",
      per_page: 14,
      page: randomPage,
    });

    // Check if the response is an error
    if ("error" in photosQuery) {
      console.error(
        "Error fetching photos from Pexels API:",
        photosQuery.error
      );
      return undefined;
    }

    const photos1: Photos[] = [];
    const photos2: Photos[] = [];
    const photosUrl = {
      photos1,
      photos2,
    };

    photosQuery.photos.forEach((photo, index) => {
      const formattedAuthorName = capitalizeWords(photo.photographer);

      if (index < 7) {
        photos1.push({
          src: photo.src.large,
          authorName: formattedAuthorName,
          authorUrl: photo.photographer_url,
        });
      } else {
        photos2.push({
          src: photo.src.large,
          authorName: formattedAuthorName,
          authorUrl: photo.photographer_url,
        });
      }
    });

    return NextResponse.json(photosUrl);
  } catch (error) {
    console.error("Error fetching photos from Pexels API:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

function capitalizeWords(name: string) {
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
