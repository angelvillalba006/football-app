import { View, StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";

interface ProfileAvatarProps {
  size: number;
  uri: string;
}

const ProfileAvatar = ({ size, uri }: ProfileAvatarProps) => (
  <View>
    <Avatar.Image size={size} source={{ uri }} />
  </View>
);

export default ProfileAvatar;
