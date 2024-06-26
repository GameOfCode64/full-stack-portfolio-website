import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { aboutformSchema } from "@/lib/formschema";

interface CustominputProps {
  control: Control<z.infer<typeof aboutformSchema>>;
  name: FieldPath<z.infer<typeof aboutformSchema>>;
  placeholder: string;
  label: string;
  type: string;
}

const AuthCustominput = ({
  control,
  name,
  placeholder,
  label,
  type,
}: CustominputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className=" font-semibold">{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              type={type}
              className="my-4 focus-visible:ring-1 focus-visible:ring-[#91c753]  min-w-auto md:min-w-auto"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default AuthCustominput;
