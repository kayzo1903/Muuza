import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    // Parse the request body to get businessId
    const { businessId } = await req.json();

    if (!businessId) {
      return NextResponse.json({ error: 'Business ID is required.' }, { status: 400 });
    }

    // Fetch the business and the owner's user ID
    const business = await prisma.business.findFirst({
      where: { ownerId: businessId },
    });

    // Check if the business exists and has an ownerId
    if (!business) {
      return NextResponse.json({ error: 'Business not found.' }, { status: 404 });
    }

    if (!business.ownerId) {
      return NextResponse.json({ error: 'Owner ID is missing for the business.' }, { status: 400 });
    }

    // Update the owner's role to SELLER
    await prisma.user.update({
      where: { id: business.ownerId },
      data: { role: 'SELLER' },
    });

    console.log(`User role updated to SELLER for ownerId: ${business.ownerId}`);
    return NextResponse.json({ message: 'User role updated to SELLER.' }, { status: 200 });
  } catch (error) {
    console.error(`Failed to update user role to SELLER:`, error);
    return NextResponse.json({ error: 'An error occurred while updating user role to SELLER.' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
