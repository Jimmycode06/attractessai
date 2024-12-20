// app/api/youtube/route.ts

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url); // Utilisation de l'URL construite
  const videoId = url.searchParams.get("videoId");

  if (!videoId) {
    return NextResponse.json(
      { error: "Video ID is required" },
      { status: 400 }
    );
  }

  try {
    // Logique pour interroger l'API YouTube avec le videoId
    const apiKey = process.env.YOUTUBE_API_KEY;
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${apiKey}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data from YouTube");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching YouTube data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data from YouTube" },
      { status: 500 }
    );
  }
}
