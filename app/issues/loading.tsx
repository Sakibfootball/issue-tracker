import { Skeleton, Table } from "@radix-ui/themes";
import React from "react";
import IssueStatusBadge from "../components/IssueStatusBadge";

const loadingIssuePage = () => {
  const issues = [1, 2, 3, 4, 5];
  return (
    <Skeleton loading={true}>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Created At
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue}>
              <Table.Cell>
                asdasdasdasdasd
                <div className="block md:hidden">asdasd</div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                asdasdasdasd
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                asdasdasdasdasdas
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Skeleton>
  );
};

export default loadingIssuePage;
