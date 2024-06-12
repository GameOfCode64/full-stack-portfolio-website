"use server";
import { db } from "@/lib/prisma";

export const projectAction = async (data: {
  titel: string;
  projectdesc: string;
  website: string;
  githuburl: string;
  projectimg: string;
}) => {
  try {
    const project = await db.skill.create({
      data: {
        titel: data.titel,
        projectdesc: data.projectdesc,
        website: data.website,
        githuburl: data.githuburl,
        projectimg: data.projectimg,
      },
    });
    return project;
  } catch (err) {
    console.log(err, "Server Error");
  }
};
