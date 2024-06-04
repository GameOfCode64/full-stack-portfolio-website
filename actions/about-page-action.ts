"use server";
import { db } from "@/lib/prisma";

export const upsertAbout = async (data: {
  name: string;
  role: string;
  description: string;
  imageurl: string;
  resumeurl: string;
}) => {
  const { name, role, description, imageurl, resumeurl } = data;

  try {
    // Check if both imageurl and resumeurl are provided and not empty
    if (imageurl.trim() !== "" && resumeurl.trim() !== "") {
      const existingAbout = await db.about.findUnique({
        where: { id: "about-info" },
      });

      // Check if the provided imageurl and resumeurl match the existing values
      if (
        existingAbout &&
        existingAbout.imageurl === imageurl &&
        existingAbout.resumeurl === resumeurl
      ) {
        // If they match, return early without performing the upsert
        return existingAbout;
      }
    }

    const about = await db.about.upsert({
      where: { id: "about-info" },
      update: {
        name,
        role,
        description,
        imageurl,
        resumeurl,
      },
      create: {
        id: "about-info",
        name,
        role,
        description,
        imageurl,
        resumeurl,
      },
    });

    return about;
  } catch (error) {
    throw new Error(`Internal server error: ${error}`);
  } finally {
    await db.$disconnect();
  }
};
