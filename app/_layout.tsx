import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import "../global.css";


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    // Add more fonts here
    BarlowBlack: require("../assets/fonts/Barlow/Barlow-Black.ttf"),
    BarlowBlackItalic: require("../assets/fonts/Barlow/Barlow-BlackItalic.ttf"),
    BarlowBold: require("../assets/fonts/Barlow/Barlow-Bold.ttf"),
    BarlowBoldItalic: require("../assets/fonts/Barlow/Barlow-BoldItalic.ttf"),
    // BarlowExtraBold: require("../assets/fonts/Barlow/Barlow-ExtraBold.ttf"),
    // BarlowExtraBoldItalic: require("../assets/fonts/Barlow/Barlow-ExtraBoldItalic.ttf"),
    // BarlowExtraLight: require("../assets/fonts/Barlow/Barlow-ExtraLight.ttf"),
    // BarlowExtraLightItalic: require("../assets/fonts/Barlow/Barlow-ExtraLightItalic.ttf"),
    // BarlowItalic: require("../assets/fonts/Barlow/Barlow-Italic.ttf"),
    // BarlowLight: require("../assets/fonts/Barlow/Barlow-Light.ttf"),
    BarlowLightItalic: require("../assets/fonts/Barlow/Barlow-LightItalic.ttf"),
    BarlowMedium: require("../assets/fonts/Barlow/Barlow-Medium.ttf"),
    BarlowMediumItalic: require("../assets/fonts/Barlow/Barlow-MediumItalic.ttf"),
    BarlowRegular: require("../assets/fonts/Barlow/Barlow-Regular.ttf"),
    BarlowSemiBold: require("../assets/fonts/Barlow/Barlow-SemiBold.ttf"),
    BarlowSemiBoldItalic: require("../assets/fonts/Barlow/Barlow-SemiBoldItalic.ttf"),
    BarlowThin: require("../assets/fonts/Barlow/Barlow-Thin.ttf"),
    BarlowThinItalic: require("../assets/fonts/Barlow/Barlow-ThinItalic.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerShown:false,
        }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
