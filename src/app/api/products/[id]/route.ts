import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

// 🧺 DELETE
export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (!id) {
      return NextResponse.json({ error: 'ID obrigatório' }, { status: 400 });
    }
    await prisma.product.delete({
      where: { id: Number(id) },
    });
    return NextResponse.json({ message: 'Registro deletado com sucesso.' });
  } catch (error: any) {
    console.error('Erro ao deletar navMenu:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// 🔁 UPDATE
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: 'O ID é obrigatório para atualização.' },
        { status: 400 }
      );
    }
    const updatedBanner = await prisma.product.update({
      where: { id: Number(id) },
      data: body,
    });
    return NextResponse.json({
      message: 'Registro atualizado com sucesso.',
      data: updatedBanner,
    });
  } catch (error: any) {
    console.error('Erro ao atualizar navMenu:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
