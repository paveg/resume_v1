import { Container, Flex, Button, Progress } from "@mantine/core";
import Link from "next/link";
import {
	IconBrandGithubFilled,
	IconBrandLinkedin,
	IconMail,
	IconArticle,
} from "@tabler/icons-react";

export function ExternalLinks() {
	return (
		<Container>
			<Flex
				direction={{ base: "column", sm: "row" }}
				gap={{ base: "sm", sm: "lg" }}
				justify={{ sm: "center" }}
			>
				<Button
					compact
					radius="md"
					variant="subtle"
					component="a"
					color="indigo"
					href="https://www.linkedin.com/in/xpav/"
					leftIcon={<IconBrandLinkedin />}
				>
					LinkedIn
				</Button>
				<Button
					compact
					radius="md"
					variant="subtle"
					component="a"
					color="indigo"
					href="https://www.funailog.com/"
					leftIcon={<IconArticle />}
				>
					funailog.com
				</Button>
				<Button
					compact
					radius="md"
					variant="subtle"
					component="a"
					color="indigo"
					href="mailto:pavegy+work@gmail.com"
					leftIcon={<IconMail />}
				>
					pavegy+work@gmail.com
				</Button>
				<Button
					compact
					radius="md"
					variant="subtle"
					component="a"
					color="indigo"
					href="https://github.com/paveg"
					leftIcon={<IconBrandGithubFilled />}
				>
					GitHub
				</Button>
			</Flex>
		</Container>
	);
}
