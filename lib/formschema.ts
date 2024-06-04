import { z } from "zod";

export const aboutformSchema = z.object({
  name: z.string().min(2).max(50).nonempty("Name name is required"),
  role: z.string().nonempty("role is required"),
  description: z.string().min(30).max(500).nonempty("descripation is required"),
  imageurl: z.string().nonempty("image is required"),
  resumeurl: z.string().nonempty("resume is required"),
});
