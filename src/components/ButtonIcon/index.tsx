import React from "react";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  ImageSourcePropType,
  TouchableOpacityProps,
} from "react-native";

import { styles } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  icon: ImageSourcePropType;
}

export function ButtonIcon({
  icon,
  title,
  activeOpacity = 0.7,
  ...rest
}: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={activeOpacity}
      {...rest}
    >
      <View style={styles.iconWrapper}>
        <Image source={icon} style={styles.icon} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
