"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React from "react";
import Custominput from "@/components/CoustomInput";
import { z } from "zod";
import { aboutformSchema } from "@/lib/formschema";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Button } from "@/components/ui/button";
import { Fileupload } from "./fileupload";
import { upsertAbout } from "@/actions/about-page-action";
import { useToast } from "./ui/use-toast";
import { useRouter } from "next/navigation";

const AboutAuthForm = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof aboutformSchema>>({
    resolver: zodResolver(aboutformSchema),
    defaultValues: {
      name: "",
      role: "",
      description: "",
      imageurl: "",
      resumeurl: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof aboutformSchema>) => {
    console.log("onSubmit called"); // Debug log
    try {
      const result = await upsertAbout(values);
      console.log("Form values:", values); // Debug log
      toast({
        title: "Data Update Successfully!",
      });
      window.location.reload();
    } catch (error) {
      alert(`Error: ${error}`);
    }
  };

  return (
    <div className="mt-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 md:gap-32 gap-2">
            <Custominput
              name="name"
              control={form.control}
              placeholder="Bhavishya Tripathi"
              label="Enter Your Name"
            />
            <Custominput
              name="role"
              control={form.control}
              placeholder="Full Stack Web Developer"
              label="Enter Your Job Role"
            />
          </div>
          <div className="grid md:mt-8 mt-4 md:grid-cols-2 lg:grid-cols-2 grid-cols-1">
            <Custominput
              name="description"
              control={form.control}
              placeholder="Enter description"
              label="Enter Your Description"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:mt-8 mt-4 md:gap-32 gap-4">
            <FormField
              control={form.control}
              name="imageurl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">
                    Upload Your Profile Photo
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
            <FormField
              control={form.control}
              name="resumeurl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">
                    Upload Your Resume
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
            className="mt-16 w-full md:w-auto bg-[#2563eb] hover:bg-[#2563eb]/90"
            type="submit"
            value="submit"
            onClick={() => console.log("Button clicked")} // Debug log
          >
            Save Changes
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AboutAuthForm;
