 import { Status } from '@prisma/client'
import { Badge } from '@radix-ui/themes'
import React from 'react'
 
  
const statusMap: Record<Status, {label: string, color: "red" | "orange" | "green"}> = {
    OPEN: {label: "Open", color: "orange"},
    IN_PROGRESS: {label: "In Progress", color: "green"},
    CLOSED: {label: "Closed", color: "red"}
}


interface Props {
    status: Status
 }
 
 const IssueStatusBadge = ({status}: Props) => {
   return (
     <Badge color={statusMap[status].color}>
        {statusMap[status].label}
     </Badge>
   )
 }
 
 export default IssueStatusBadge