"use server";
import { db } from "@/lib/prisma";

export const skillAction = async (data: {
  skillname: string;
  skillimgurl: string;
  skilltype: string;
}) => {
  try {
    const skill = await db.skill.create({
      data: {
        skillname: data.skillname,
        skillimgurl: data.skillimgurl,
        skilltype: data.skilltype,
      },
    });
    return skill;
  } catch (err) {
    console.log(err, "Server Error");
  }
};
