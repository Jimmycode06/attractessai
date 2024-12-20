import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { subtitles } = await req.json();

    if (!subtitles) {
      return NextResponse.json(
        { error: "Sous-titres manquants" },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Clé API OpenAI manquante" },
        { status: 500 }
      );
    }

    // Envoie des sous-titres à OpenAI pour résumé
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "Tu es un assistant qui résume des sous-titres de vidéos.",
          },
          {
            role: "user",
            content: `Voici les sous-titres :\n\n${subtitles}\n\nFais un résumé clair et concis.`,
          },
        ],
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    if (data.choices && data.choices.length > 0) {
      return NextResponse.json(
        { summary: data.choices[0].message.content },
        { status: 200 }
      );
    } else {
      return NextResponse.json({ error: "Résumé non généré" }, { status: 500 });
    }
  } catch (error) {
    console.error("Erreur serveur :", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
