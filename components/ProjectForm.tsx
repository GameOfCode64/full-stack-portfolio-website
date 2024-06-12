"use client";
import { aboutformSchema } from "@/lib/formschema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import Custominput from "./CoustomInput";
import { Fileupload } from "./fileupload";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "./ui/use-toast";
import { projectAction } from "@/actions/project-action";

const ProjectForm = () => {
  const [isLodding, setisLodding] = useState(false);
  const form = useForm<z.infer<typeof aboutformSchema>>({
    resolver: zodResolver(aboutformSchema),
    defaultValues: {
      titel: "",
      projectdesc: "",
      website: "",
      githuburl: "",
      projectimg: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof aboutformSchema>) => {
    try {
      const result = await projectAction(values);
      toast({
        title: ` Data Update Successfully! ${values}`,
      });
    } catch (error) {
      alert(`Error: ${error}`);
    }
  };
  return (
    <div className="py-8 px-1 relative">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 md:gap-32 lg:gap-32 gap-4">
            <Custominput
              control={form.control}
              name="titel"
              label="Enter Project Titel"
              placeholder="Full Stack Instagram Clone!"
            />
            <Custominput
              control={form.control}
              name="projectdesc"
              label="Enter Project description"
              placeholder="ReactJS, Redux, NodeJS, ExpressJS, MongoDB, TailwindCSS"
            />
          </div>
          <div className="grid md:grid-cols-2 mt-4 md:mt-6 lg:mt-6 lg:grid-cols-2 grid-cols-1 md:gap-32 lg:gap-32 gap-4">
            <Custominput
              control={form.control}
              name="githuburl"
              label="Enter Github Url"
              placeholder="https://github.com/GameOfCode64/full-stack-portfolio-website"
            />
            <Custominput
              control={form.control}
              name="projectdesc"
              label="Enter Live Website Like"
              placeholder="https://yourwebsitename.vercel.app"
            />
          </div>
          <div className="mt-4">
            <FormField
              control={form.control}
              name="projectimg"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">
                    Upload Project Banner Image
                  </FormLabel>
                  <FormControl>
                    <Fileupload
                      endpoint="serverImage"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <Button
            className="mt-4 bg-[#2563eb] hover:bg-[#2563eb]/90 md:w-auto w-full"
            type="submit"
            disabled={isLodding}
          >
            {isLodding ? (
              <>
                <p className="flex items-center justify-center gap-2">
                  <Loader2 className="animate-spin" />
                  Lodding....
                </p>
              </>
            ) : (
              <>Add Skill</>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ProjectForm;
