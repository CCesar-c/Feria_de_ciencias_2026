import { Text, View } from "react-native";
import { Host, Checkbox } from "@expo/ui";
import { border, cornerRadius,  } from "@expo/ui/jetpack-compose/modifiers";
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
      }}
    >
      <Host matchContents>
        <Checkbox

          modifiers={[
            border(
              2,
              value == true
                ? "rgba(106, 217, 165, 1.0)"
                : "rgba(21, 77, 89, 1.0)",
            ),
            cornerRadius(4)
          ]}
          value={value}
          onValueChange={onValueChange}
        />
      </Host>
      <Text style={[estilo.textito, {left:2, lineHeight:18}]}>{text}</Text>
    </View>
  );
}
