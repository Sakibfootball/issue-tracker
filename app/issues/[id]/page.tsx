"use client";
import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import { Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import React from "react";
import Markdown from "react-markdown";
import { Pencil2Icon } from "@radix-ui/react-icons";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  const issue = await prisma.issues.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound;
  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="4">
      <Box>
        <Heading>{issue?.title}</Heading>
        <Flex gap="3" mt="4" mb="4">
          <IssueStatusBadge status={issue?.status} />
          <Text>{issue?.createdAt.toDateString()}</Text>
        </Flex>
        <Card className="prose">
          <Markdown>{issue?.description}</Markdown>
        </Card>
      </Box>
      <Box>
        <Button>
          <Pencil2Icon />
          Edit Issue
        </Button>
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
