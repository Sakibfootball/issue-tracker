
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
import IssueForm from "../_components/IssueForm";


interface Props {
    params: {id: string}
}

const EditIssuePage = async({params}: Props) => {

    const issue = await prisma.issues.findUnique({
        where: {id: parseInt(params.id)}
    })

    if(!issue) notFound()

        return(
            <IssueForm issue={issue}/>
        )

}

export default EditIssuePage;
