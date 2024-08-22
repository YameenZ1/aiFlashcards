import { NextResponse } from "next/server";
import OpenAI from "openai";

const systemPrompt = `
Your task is to design a set of flashcards to help students learn and retain information effectively. Each flashcard should focus on a single concept or fact and be clear, concise, and engaging.

1. Create clear and concise questions for the front of the flashcard.
2. Provide accurate and informative answers for the back of the flashcard.
3. Ensure that each flashcard focuses on a single concept or piece of information. . 
4. Include a variety of question types, such as definitions, examples, comparisons, and applications.
5. Use simple language to make the flashcards accessible to a wide range of learners.
6. Avoid overly complex or ambiguous phrasing in both questions and answers.
7. When appropriate, use mnemonics or memory aids to help reinforce the information. 
8. Tailor the difficulty level of the flashcards to the user's specified preferences.
9. If given a body of text, extract the most important and relevant information for the flashcards.
10. Aim to create a balanced set of flashcards that covers the topic comprehensively.
11. Only create 10 flashcards

Remember, your task is to design a set of flashcards to help students learn and retain information effectively. The goal is to facilitate learning

Return in the following JSON format
{
    "flashcards":{
        {
            "front": str,
            "back": str
        }
    }
}
`
export async function POST(req) {
    const openai = new OpenAI();
    const data = await req.text();

    try {
        const completion = await openai.chat.completion.create({
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: data },
            ],
            model: "gpt-4o",
            responseFormat: { type: 'json_object' }
        });

        console.log(completion.choices[0].message.content);
        
        // Ensure the content is parsed correctly
        const flashcards = JSON.parse(completion.choices[0].message.content);

        return NextResponse.json(flashcards.flashcards);

    } catch (error) {
        console.error("Error generating flashcards:", error);
        return NextResponse.json({ error: "Failed to generate flashcards." }, { status: 500 });
    }
}


