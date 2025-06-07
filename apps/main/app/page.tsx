import { Heading, Flex, Text, Button } from "@radix-ui/themes";
import { getSubdomainPath } from "@repo/utils";

export default function Home() {
  return (
    <Flex direction={"column"} align={"center"} gap={"4"}>
      <Heading>Root repo</Heading>
      <Text>Available projects</Text>
      <Flex gap={"2"}>
        <a href={getSubdomainPath("verona")}>
          <Button>Verona</Button>
        </a>
        <Button disabled={true}>CI/CD</Button>
      </Flex>
    </Flex>
  );
}
