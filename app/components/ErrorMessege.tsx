import { Text } from "@radix-ui/themes";
import React, { PropsWithChildren } from "react";

type Props = {};

function ErrorMessege({ children }: PropsWithChildren) {
  return (
    <Text color="red" as="p">
      {children}
    </Text>
  );
}

export default ErrorMessege;
