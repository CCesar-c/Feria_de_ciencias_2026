import { Text, View } from "react-native";
import { Host, Checkbox } from "@expo/ui/jetpack-compose";
import estilo from "../style/global";

export default function ChequeBox({
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
        boxSizing: "border-box",
      }}
    >
      <Host matchContents>
        <Checkbox
          colors={{
            checkedColor: "black",
            uncheckedColor: "black",

            checkmarkColor: "white",
          }}
          value={value}
          onCheckedChange={onValueChange}
          // onValueChange={onValueChange}
        />
      </Host>
      <Text
        style={[
          estilo.textito,
          { left: 2, lineHeight: 18, color: "black", overflow: "scroll" },
        ]}
      >
        {text}
      </Text>
    </View>
  );
}
