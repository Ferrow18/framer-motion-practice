import { createClient, PhotosWithTotalResults } from "pexels";
import { NextResponse } from "next/server";

export type PhotoUrl = {
  large: string;
};

export type Photo = {
  src: PhotoUrl;
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

    const photos1: string[] = [];
    const photos2: string[] = [];
    const photosUrl = {
      photos1,
      photos2,
    };

    photosQuery.photos.forEach((photo, index) => {
      if (index < 7) {
        photos1.push(photo.src.large);
      } else {
        photos2.push(photo.src.large);
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
