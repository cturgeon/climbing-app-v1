import { Image, Stack, Text, Divider } from "@mantine/core";

export default function GymHeader(props) {
  const { id, name, image, description, address } = props;
  return (
    <>
      <Stack align="center">
        <Image
          alt={id}
          height={400}
          fit="contain"
          radius="md"
          // withPlaceholder
          // placeholder={
          //   <Text>This is where I would put my image... if I had one!</Text>
          // }
          src={image}
        />
        <Text>{name}</Text>
        <Text>{address}</Text>
        <Text>{description}</Text>
        <Divider my="sm" />
      </Stack>
    </>
  );
}
