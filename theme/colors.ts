import { Platform } from 'react-native';

const IOS_SYSTEM_COLORS = {
  white: 'rgb(255, 255, 255)',
  black: 'rgb(0, 0, 0)',
  light: {
    grey6: 'rgb(249, 249, 251)', // background
    grey5: 'rgb(249, 249, 251)', // popover/card
    grey4: 'rgb(210, 210, 215)', // input
    grey3: 'rgb(199, 199, 204)', // optional mid-grey
    grey2: 'rgb(175, 176, 180)', // muted
    grey: 'rgb(147, 144, 183)',  // muted-foreground
    background: 'rgb(249, 249, 251)', // --background
    foreground: 'rgb(10, 6, 13)',     // --foreground
    root: 'rgb(249, 249, 251)',       // same as background
    card: 'rgb(249, 249, 251)',       // --card
    destructive: 'rgb(255, 89, 89)',  // --destructive
    primary: 'rgb(221, 117, 31)',     // --primary
  },
  dark: {
    grey6: 'rgb(0, 0, 3)',        // --background
    grey5: 'rgb(0, 0, 3)',        // --popover/card
    grey4: 'rgb(178, 183, 208)',  // --input
    grey3: 'rgb(70, 70, 73)',     // optional
    grey2: 'rgb(233, 228, 243)',  // --foreground
    grey: 'rgb(233, 228, 243)',   // --muted-foreground
    background: 'rgb(0, 0, 3)',
    foreground: 'rgb(233, 228, 243)',
    root: 'rgb(0, 0, 3)',
    card: 'rgb(0, 0, 3)',
    destructive: 'rgb(109, 29, 29)',
    primary: 'rgb(255, 149, 42)',
  },
} as const;

const ANDROID_COLORS = {
  white: 'rgb(255, 255, 255)',
  black: 'rgb(0, 0, 0)',
  light: {
    grey6: 'rgb(249, 249, 251)', // --android-background
    grey5: 'rgb(249, 249, 251)', // --android-popover/card
    grey4: 'rgb(193, 198, 215)', // --android-input
    grey3: 'rgb(113, 119, 134)', // optional
    grey2: 'rgb(65, 71, 84)',    // --android-muted
    grey: 'rgb(147, 144, 183)',  // --android-muted-foreground
    background: 'rgb(249, 249, 251)',
    foreground: 'rgb(10, 6, 13)',
    root: 'rgb(249, 249, 251)',
    card: 'rgb(249, 249, 251)',
    destructive: 'rgb(255, 89, 89)',
    primary: 'rgb(221, 117, 31)',
  },
  dark: {
    grey6: 'rgb(0, 0, 3)',        // --android-background
    grey5: 'rgb(0, 0, 3)',        // --android-popover/card
    grey4: 'rgb(178, 183, 208)',  // --android-input
    grey3: 'rgb(54, 57, 66)',     // optional
    grey2: 'rgb(139, 144, 160)',  // --android-muted
    grey: 'rgb(233, 228, 243)',   // --android-muted-foreground
    background: 'rgb(0, 0, 3)',
    foreground: 'rgb(233, 228, 243)',
    root: 'rgb(0, 0, 3)',
    card: 'rgb(0, 0, 3)',
    destructive: 'rgb(109, 29, 29)',
    primary: 'rgb(255, 149, 42)',
  },
} as const;

const COLORS = Platform.OS === 'ios' ? IOS_SYSTEM_COLORS : ANDROID_COLORS;

export { COLORS };
