import { Button, Flex, Heading, Text } from "@radix-ui/themes";
import { AppNames, getAppUrl } from "@repo/utils";

export default function Home() {
  return (
    <Flex direction={"column"} align={"center"} gap={"4"}>
      <Heading>Root repo</Heading>
      <Text>Available projects</Text>
      <Flex gap={"2"}>
        <a href={getAppUrl(AppNames.verona)}>
          <Button>Verona</Button>
        </a>
        <Button disabled={true}>CI/CD</Button>
      </Flex>
    </Flex>
  );
}
