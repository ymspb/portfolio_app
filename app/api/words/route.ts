import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// Create a new word
export async function POST(req: Request) {
    try {
        const { userId, japanese, english } = await req.json();
        // check if a posted word already exists
        const existingWord = await prisma.word.findFirst({
            where: {
                userId,
                japanese,
                english
            }
        });
        if (existingWord) {
            return NextResponse.json({ error: 'Word already exists' }, { status: 409 });
        }
        const newWord = await prisma.word.create({
            data: {
                userId,
                japanese,
                english
            }
        });
        return NextResponse.json(newWord, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create word' }, { status: 500 });
    }
}

// Get all words
export async function GET(req: Request) {
    const { userId } = await req.json();
    try {
        const words = await prisma.word.findMany({where: { userId }});
        return NextResponse.json(words, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch words' }, { status: 500 });
    }
}

// Update a word by ID
export async function PUT(req: Request) {
    try {
        const { id, japanese, english } = await req.json();
        const updatedWord = await prisma.word.update({
            where: { id },
            data: { japanese, english },
        });
        return NextResponse.json(updatedWord, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update word' }, { status: 500 });
    }
}

// Delete a word by ID
export async function DELETE(req: Request) {
    try {
        const { id } = await req.json();
        await prisma.word.delete({
            where: { id },
        });
        return NextResponse.json({ message: 'Word deleted successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete word' }, { status: 500 });
    }
}