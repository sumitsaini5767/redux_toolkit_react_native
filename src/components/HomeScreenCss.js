import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    width: "90%",
    paddingHorizontal: 30,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  input: { width: 100, backgroundColor: "lightgrey" },
});

export { styles };
