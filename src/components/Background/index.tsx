import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

const { secondary100, secondary80 } = theme.colors;

interface Props {
  // children: React.ReactNode; why? :(
  // https://github.com/expo/expo/issues/10302
  children: any;
}

export function Background({ children }: Props) {
  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary80, secondary100]}
    >
      {children}
    </LinearGradient>
  );
}
