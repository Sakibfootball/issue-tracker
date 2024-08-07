"use client";
import { usePathname } from "next/navigation";
import { Button, Table } from "@radix-ui/themes";
import React from "react";
import Link from "next/link";
import prisma from "@/prisma/client";
import IssueStatusBadge from "../components/IssueStatusBadge";

const IssuePage = async() => {
  const issues =  await prisma.issues.findMany();
  return (
    <div>
      <div className=" mb-5">

      <Button>
        <Link href="/issues/newIssue">Issue Page</Link>
      </Button>
      </div>
      <Table.Root variant="surface" >
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">Created At</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map(issue => (
            <Table.Row key={issue.id}>
              <Table.Cell>
               <Link href={`/issues/${issue.id}`} className="hover:scale-110 transition-all hover:text-orange-500">

                {issue.title}
               </Link>
                <div className="block md:hidden"><IssueStatusBadge status={issue.status}/></div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell"><IssueStatusBadge status={issue.status}/></Table.Cell>
              <Table.Cell className="hidden md:table-cell">{issue.createdAt.toDateString()}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export const dynamic = 'force-dynamic'

export default IssuePage;
