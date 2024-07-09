import { createIssueSchema } from "@/app/validationSchema";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

interface Props{
    params: {id: string}
}

export async function PATCH(req: NextRequest, {params}: Props){
    const body = await req.json()
    const validate = createIssueSchema.safeParse(body)
    if(!validate.success){
        return NextResponse.json(validate.error.errors, {status: 400})
    }
    const issue = prisma.issues.findUnique({
        where: {id: parseInt(params.id)}
    })
    if(!issue){
        return NextResponse.json({error: "No Such Issue"}, {status:400})
    }
    const updatedIssue =  await prisma.issues.update({
        where: {id: parseInt(params.id)},
        data: {
            title:body.title,
            description:body.description
        }
    })
    return NextResponse.json(updatedIssue)
}