import { Text, View } from "react-native";
import { Host, Checkbox } from "@expo/ui";

export default function ChequeBox({
  textStyle,
  text = "none",
  value = Boolean(),
  onValueChange = (value = Boolean()) => {},
}) {
  return (
    <View
      style={{
        display: "flex",
        width: "150",
        height: "50",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Host matchContents>
        <Checkbox value={value} onValueChange={onValueChange} />
      </Host>
      <Text style={[{ color: "black" }, textStyle]}>{text}</Text>
    </View>
  );
}
