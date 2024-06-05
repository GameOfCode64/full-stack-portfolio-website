"use client";
import { aboutformSchema } from "@/lib/formschema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "./ui/use-toast";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import Custominput from "./CoustomInput";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Fileupload } from "./fileupload";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

const inputValue = [
  {
    name: "Backend",
    value: "backend",
  },
  {
    name: "Frontend",
    value: "frontend",
  },
  {
    name: "Other",
    value: "other",
  },
];

const SkillAuth = () => {
  const [isLodding, setisLodding] = useState(false);
  const form = useForm<z.infer<typeof aboutformSchema>>({
    resolver: zodResolver(aboutformSchema),
    defaultValues: {
      skillname: "",
      skillimgurl: "",
      skilltype: "",
    },
  });

  const onSubmit = (values: z.infer<typeof aboutformSchema>) => {
    console.log("Hello");
    try {
      // setisLodding(true);
      console.log(values);

      toast({
        title: ` Data Update Successfully! ${values}`,
      });
      // setisLodding(false);
      // window.location.reload();
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
              name="skillname"
              label="Enter Skill Name"
              placeholder="Javascript"
            />
            <FormField
              control={form.control}
              name="skilltype"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Skill Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="focus:ring-1 focus:ring-[#91c753]">
                        <SelectValue placeholder="Select Skill" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {inputValue.map((value) => (
                        <SelectItem value={value.value} key={value.value}>
                          {value.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </div>
          <div className="mt-4">
            <FormField
              control={form.control}
              name="skillimgurl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">
                    Upload Skill Image
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

export default SkillAuth;
