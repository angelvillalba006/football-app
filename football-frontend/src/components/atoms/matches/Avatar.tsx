import { View, StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";

interface ProfileAvatarProps {
  size: number;
  source: any;
}

const ProfileAvatar = ({ size, source }: ProfileAvatarProps) => (
  <View>
    <Avatar.Image size={size} source={source} />
  </View>
);

export default ProfileAvatar;
