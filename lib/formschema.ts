import { z } from "zod";

export const aboutformSchema = z.object({
  email: z.string().email().nonempty("Email is required"),
  password: z.string().nonempty("Password is required"),
  name: z.string().min(2).max(50).nonempty("Name is required"),
  titel: z.string().min(2).max(50).nonempty("Project title is required"),
  projectdesc: z.string().nonempty("Project descripation is required"),
  website: z.string().nonempty("Project Website Url is required"),
  projectimg: z.string().nonempty("Project Image is required"),
  githuburl: z.string().nonempty("Project Github Url is required"),
  skillname: z.string().nonempty("Skill name is required"),
  skillimgurl: z.string().nonempty("Skill img is required"),
  skilltype: z.string().nonempty("Skill type is required"),
  role: z.string().nonempty("role is required"),
  description: z.string().min(30).max(500).nonempty("descripation is required"),
  imageurl: z.string().nonempty("image is required"),
  resumeurl: z.string().nonempty("resume is required"),
});
