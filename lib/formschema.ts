import { z } from "zod";

export const aboutformSchema = z.object({
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters")
    .min(1, "Name is required"),
  titel: z
    .string()
    .min(2, "Project title must be at least 2 characters")
    .max(50, "Project title must be at most 50 characters"),
  projectdesc: z.string().min(1, "Project description is required"),
  website: z.string().min(1, "Project Website Url is required"),
  projectimg: z.string().min(1, "Project Image is required"),
  githuburl: z.string().min(1, "Project Github Url is required"),
  skillname: z.string().min(1, "Skill name is required"),
  skillimgurl: z.string().min(1, "Skill image URL is required"),
  skilltype: z.string().min(1, "Skill type is required"),
  role: z.string().min(1, "Role is required"),
  description: z
    .string()
    .min(30, "Description must be at least 30 characters")
    .max(500, "Description must be at most 500 characters")
    .min(1, "Description is required"),
  imageurl: z.string().min(1, "Image URL is required"),
  resumeurl: z.string().min(1, "Resume URL is required"),
});
