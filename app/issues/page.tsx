"use client"
import { usePathname } from "next/navigation";
import { Button } from "@radix-ui/themes";
import React from "react";
import Link from "next/link";

const IssuePage = () => {
  
  return (
  <div>
    
    <Button><Link href="/issues/newIssue">
      
      Issue Page
    </Link>
    </Button>

  </div>
  
  );
};

export default IssuePage;
