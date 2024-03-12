import { View, Image } from "react-native";

interface ClubLogoProps {
  size: number;
  uri: string;
}

const ClubLogo = ({ size, uri }: ClubLogoProps) => (
  <View>
    <Image source={{ uri }} style={{ width: size, height: size }} />
  </View>
);

export default ClubLogo;
