import { View, Image } from "react-native";

interface ClubLogoProps {
  size: number;
  source: any;
}

const ClubLogo = ({ size, source }: ClubLogoProps) => (
  <View>
    <Image source={source} style={{ width: size, height: size }} />
  </View>
);

export default ClubLogo;
