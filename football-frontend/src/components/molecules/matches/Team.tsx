import { View, StyleSheet } from "react-native";
import ClubLogo from "../../atoms/matches/ClubLogo";
import { Text } from "react-native-paper";

interface TeamProps {
  name: string;
  source: any;
  type?: "Home" | "Away";
}

const Team = ({ name, source, type }: TeamProps) => (
  <View style={styles.container}>
    <ClubLogo size={60} source={source} />
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.type}>{type}</Text>
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
    color: "white",
    fontWeight: "600",
    fontSize: 16,
    marginTop: 8,
    textAlign: "center",
  },
  type: {
    color: "white",
    opacity: 0.6,
    fontSize: 14,
    marginTop: 4,
    textAlign: "center",
  },
});

export default Team;
