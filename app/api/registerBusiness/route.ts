import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { step, ownerid , ...data } = await req.json();
    
    // Ensure `step` is provided in the request
    if (typeof step === "undefined") {
      return NextResponse.json({ error: "Step is required." }, { status: 400 });
    }

    // Validate and process data based on the current step
    switch (step) {
      case 0: // Validate business name
        if (!data.businessName || data.businessName.length < 2 || data.businessName.length > 50) {
          return NextResponse.json(
            { error: "Business name must be between 2 and 50 characters." },
            { status: 400 }
          );
        }

        // Check if the business name already exists
        const existingBusiness = await prisma.business.findUnique({
          where: { businessName : data.businessName },
        });
        if (existingBusiness) {
          return NextResponse.json(
            { error: "Business name already exists." },
            { status: 409 }
          );
        }
        return NextResponse.json({ message: "Business name is available." });

      case 1: // Validate category
        if (!data.category || data.category.trim() === "") {
          return NextResponse.json(
            { error: "Category is required." },
            { status: 400 }
          );
        }
        return NextResponse.json({ message: "Category is valid." });

      case 2: // Validate address and phone
        if (!data.address || data.address.length < 5 || data.address.length > 100) {
          return NextResponse.json(
            { error: "Address must be between 5 and 100 characters." },
            { status: 400 }
          );
        }
        if (!data.phone || !/^\+?\d{10,15}$/.test(data.phone)) {
          return NextResponse.json(
            { error: "Phone number must be a valid international format." },
            { status: 400 }
          );
        }
        return NextResponse.json({ message: "Address and phone are valid." });

      case 3: // Finalize registration
        // Ensure all required fields are provided
        if (!data.businessName || !data.category || !data.address || !data.phone || !ownerid) {
          return NextResponse.json(
            { error: "All required fields (businessName, category, address, phone) must be provided." },
            { status: 400 }
          );
        }

        // Create a new business entry in the database
        await prisma.business.create({
          data: {
            businessName : data.businessName,
            category: data.category,
            address: data.address,
            phone: data.phone,
            description: data.description || "",
            operatingHours: data.operatingHours || "",
            owner: {
              connect: { id: ownerid }, // Ensure this is how you connect the owner
            },
          },
        });

        return NextResponse.json(
          { message: "Business registered successfully!" },
          { status: 201 }
        );

      default:
        return NextResponse.json({ error: "Invalid step." }, { status: 400 });
    }
  } catch (error) {
    console.error("Error processing registration:", error);
    return NextResponse.json(
      { error: "An error occurred during registration." },
      { status: 500 }
    );
  }
}
