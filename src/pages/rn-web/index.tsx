import CardRN from "@foodbag/web/components/CardRN";
import { View, StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
    padding: 16,
  },
});

export default function Home() {
  const render = () => {
    let cards = [];
    for (let i = 0; i < 500; i++) {
      cards.push(<CardRN key={i.toString()} />);
    }
    return cards;
  };
  return <View style={styles.container}>{render()}</View>;
}
