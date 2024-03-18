import { View, StyleSheet } from "react-native";
import ClubLogo from "../../atoms/matches/ClubLogo";
import { Text } from "react-native-paper";

interface TeamProps {
  name: string;
  source: string;
  type?: "Home" | "Away";
  textColor?: string;
}

const Team = ({ name, source, type, textColor = "white" }: TeamProps) => (
  <View style={styles.container}>
    <ClubLogo size={60} uri={source} />
    <Text style={[styles.name, { color: textColor }]}>{name}</Text>
    <Text style={[styles.type, { color: textColor }]}>{type}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: -8,
    width: 100,
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
    marginTop: 8,
    textAlign: "center",
  },
  type: {
    opacity: 0.6,
    fontSize: 14,
    marginTop: 4,
    textAlign: "center",
  },
});

export default Team;
