import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { Issues } from "@prisma/client";
import { Heading, Flex, Card, Text } from "@radix-ui/themes";
import React from "react";
import Markdown from "react-markdown";

const IssueDetails = ({ issue }: { issue: Issues }) => {
  return (
    <>
      <Heading>{issue?.title}</Heading>
      <Flex gap="3" mt="4" mb="4">
        <IssueStatusBadge status={issue?.status} />
        <Text>{issue?.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose">
        <Markdown>{issue?.description}</Markdown>
      </Card>
    </>
  );
};

export default IssueDetails;
