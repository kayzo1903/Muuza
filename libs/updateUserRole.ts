import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function updateUserRoleToSeller(businessId: string): Promise<void> {
  // Fetch the business and owner information
  const business = await prisma.business.findUnique({
    where: { id: businessId },
    select: { ownerId: true } // Only select the ownerId
  });

  // Check if the business exists
  if (business) {
    if (business.ownerId) {
      // Update the owner's role to SELLER
      await prisma.user.update({
        where: { id: business.ownerId },
        data: { role: 'SELLER' }
      });
      console.log(`User role updated to SELLER for ownerId: ${business.ownerId}`);
    } else {
      throw new Error('Owner ID is missing for the business.');
    }
  } else {
    throw new Error('Business not found.');
  }
}
