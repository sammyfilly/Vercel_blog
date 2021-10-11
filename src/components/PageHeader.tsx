import { Flex, Box, Link, Stack, List, Input } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Logo } from "./Logo";

export const PageHeader: React.FC = () => (
  <Stack
    as="header"
    py="3"
    px="6"
    display="flex"
    justifyContent="space-between"
    alignItems="left"
    direction={{ base: "column", md: "row" }}
  >
    <Logo />
    <Box as="nav">
      <Stack
        spacing="6"
        direction={{ base: "column", md: "row" }}
        alignItems="center"
      >
        <form>
          <Input
            placeholder="Search"
            size="md"
            type="search"
            _placeholder={{ color: "white" }}
          />
        </form>
        <Stack as={List} listStyleType="none" direction="row" wrap="wrap">
          <Box as="li">
            <Link
              href="https://stately.ai"
              isExternal
              display="block"
              padding="2"
              color="gray.400"
            >
              Stately.ai <ExternalLinkIcon />
            </Link>
          </Box>
          <Box as="li">
            <Link
              href="https://xstate.js.org/docs"
              isExternal
              display="block"
              padding="2"
              color="gray.400"
            >
              Documentation <ExternalLinkIcon />
            </Link>
          </Box>
          <Box as="li">
            <Link
              href="https://github.com/stately.ai/eng-blog"
              isExternal
              display="block"
              padding="2"
              color="gray.400"
            >
              Github <ExternalLinkIcon />
            </Link>
          </Box>
        </Stack>
      </Stack>
    </Box>
  </Stack>
);
