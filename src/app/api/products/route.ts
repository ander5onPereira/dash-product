import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

function parseValue(value: string): string | number | boolean {
  if (value === 'true') return true;
  if (value === 'false') return false;
  if (!isNaN(Number(value))) return Number(value);
  return value;
}

// 💾 CREATE
export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (
      !body.name ||
      !body.category ||
      !body.price ||
      !body.description ||
      !body.imageUrl
    ) {
      return NextResponse.json(
        {
          error:
            'Campos name, category, price, description e imageUrl são obrigatórios.',
        },
        { status: 400 }
      );
    }
    const newProduct = await prisma.product.create({
      data: {
        name: body.name,
        category: body.category,
        price: body.price,
        description: body.description,
        imageUrl: body.imageUrl,
      },
    });
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// 🔎 LIST FILTER
export async function GET(request: NextRequest) {
  try {
    const products = await prisma.product.findMany();

    return NextResponse.json({ products }, { status: 200 });
  } catch (error: any) {
    console.error('Error fetching menus:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
