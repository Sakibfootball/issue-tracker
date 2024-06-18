import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import {z} from 'zod'

const createIssueSchema = z.object({
    title: z.string().min(1).max(255),
    description: z.string().min(1)
})

export async function POST(req: NextRequest){
    const body = await req.json()

    const validate = createIssueSchema.safeParse(body)
    if(!validate.success){
        return NextResponse.json(validate.error.errors, {status:400})
    }

    const newIssue = await prisma.issues.create({
        data: {title: body.title, description: body.description}
    })

    return NextResponse.json(newIssue, {status:201}) 

}