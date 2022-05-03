import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, AppShell, Header, MediaQuery, Burger, useMantineTheme, Text, Button, Group, Anchor, Navbar } from '@mantine/core';
import { useState } from 'react';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (

    
    <>
      <Head>
        <title>Climbing App</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <AppShell
        padding="md"
        header={<Header height={70} p="md">
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>
              <Group position='apart' sx={{ height: '100%' }} px={20}>
                <Text transform='capitalize'>
                  Welcome to the climbing app!
                </Text>
                <Button component='a' href='/'>Home</Button>
              </Group>
            </div>
          </Header>}
        styles={(theme) => ({
          main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
        })}
      >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
      </AppShell>
    </>
  );
}