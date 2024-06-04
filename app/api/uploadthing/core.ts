import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

const hendelauth = () => {
  const userId = "adminofportfoli12345689";
  if (!userId) throw new Error("Unauthorized");
  return { userId: userId };
};

export const ourFileRouter = {
  serverImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(() => hendelauth())
    .onUploadComplete(() => {}),
  messageFile: f(["image", "pdf", "image/gif", "application/mp4", "video"])
    .middleware(() => hendelauth())
    .onUploadComplete(() => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
