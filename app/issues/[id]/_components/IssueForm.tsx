"use client";
import { Button, Callout, Text, TextArea, TextField } from "@radix-ui/themes";
import dynamic from "next/dynamic";
import "easymde/dist/easymde.min.css";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import axios from "axios";
import { notFound, useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/validationSchema";
import { z } from "zod";
import ErrorMessege from "@/app/components/ErrorMessege";
import Spinnner from "@/app/components/Spinnner";
import prisma from "@/prisma/client";
import { Issues } from "@prisma/client";

interface Props {
  issue: Issues;
}

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});
type IssueFormData = z.infer<typeof createIssueSchema>;

const IssueForm = ({ issue }: Props) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueFormData>({
    resolver: zodResolver(createIssueSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      if (issue) {
        await axios.patch("/api/issues/" + issue.id, data);
      } else {
        await axios.post("/api/issues", data);
      }
      route.push("/issues");
    } catch (error) {
      setSubmitting(false);
      setError("errrrrrrroooooooorrrrrrr");
      console.log(error);
    }
  });
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const route = useRouter();
  return (
    <div className="max-w-xl ">
      {error && (
        <Callout.Root color="purple" className=" mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form className=" space-y-3" onSubmit={onSubmit}>
        <TextField.Root
          defaultValue={issue?.title}
          placeholder="Title"
          {...register("title")}
        ></TextField.Root>
        {errors.title && <ErrorMessege>{errors.title.message}</ErrorMessege>}
        <Controller
          defaultValue={issue?.description}
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        {errors.description && (
          <ErrorMessege>{errors.description.message}</ErrorMessege>
        )}

        <Button disabled={isSubmitting}>
          {issue ? "Update Issue" : "Submit New Issue"}{" "}
          {isSubmitting && <Spinnner />}
        </Button>
      </form>
    </div>
  );
};

export default IssueForm;
