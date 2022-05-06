import {
  Card,
  Image,
  Text,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";
import { Link } from "next/link";

export default function GymCard(props) {
  const { id, name, image, description } = props;
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <div style={{ width: 340, margin: "auto" }}>
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image src={image} height={160} alt={id} />
        </Card.Section>

        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
        >
          <Text weight={500}>{name}</Text>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          {description}
        </Text>

        <Button
          variant="light"
          color="blue"
          fullWidth
          style={{ marginTop: 14 }}
          component="a"
          href={`/${id}`}
        >
          Click me
        </Button>
      </Card>
    </div>
  );
}
