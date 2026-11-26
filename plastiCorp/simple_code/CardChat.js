import { View, Image, Text, useWindowDimensions } from "react-native";
import estilo from "../style/global";

function Cabecalho() {
  const { height, width } = useWindowDimensions();

  return (
    <View
      style={{
        top: -2,
        height: height * 0.05,
        width: width * 0.89,
        padding: 10,
        alignItems: "center",
        backgroundColor: "white",
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        flexDirection: "row",
        borderWidth: 3.5,
        borderColor: "rgba(106, 217, 165, 1.0)",
        boxShadow: "0px 0px 10px 0px rgba(106, 217, 165, 1.0)",
      }}
    >
      <Image
        source={require("../assets/icon.png")}
        style={{
          height: 35,
          width: 35,
          borderRadius: 1000,
          left: 10,
        }}
      />
      <Text
        style={[
          estilo.titulo,
          {
            alignSelf: "center",
            left: 12,
            fontWeight: "bold",
            fontSize: 20,
            lineHeight: 20,
            color: "rgba(106, 217, 125, 1.0)",
          },
        ]}
      >
        Especialista IA:
      </Text>
    </View>
  );
}

function Corpo({ text, date }) {
  return (
    <View>
      <Text
        style={[
          estilo.textito,
          {
            textAlign: "center",
            maxWidth: "90%",
            paddingInline: 10,
            fontSize: 18,
            lineHeight: 20,
            alignSelf: "center",
            overflow: "scroll",
            margin: 10,
          },
        ]}
      >
        {text}
      </Text>
      <Text
        style={[
          estilo.textito,
          { alignSelf: "flex-end", right: 10, bottom: 10 },
        ]}
      >
        {date}
      </Text>
    </View>
  );
}
/**
 *
 * @param {import('react-native').ViewProps  & {
 * style?: import('react-native').StyleProp<import('react-native').ViewStyle>
 *  }} props
 */
export default function CardChat({ text, date, style }) {
  const { width } = useWindowDimensions();

  return (
    <View
      style={[
        {
          flex: 1,
          width: width * 0.9,
          alignItems: "center",
          borderRadius: 0,
          backgroundColor: "rgba(20, 33, 120, 1.0)",
          borderTopStartRadius: 30,
          borderTopEndRadius: 30,
          borderEndEndRadius: 30,
          borderWidth: 3.5,
          borderColor: "rgba(106, 217, 165, 1.0)",
          boxShadow: "0px 0px 10px 0px rgba(106, 217, 165, 1.0)",
        },
        style,
      ]}
    >
      <Cabecalho />
      <Corpo text={text} date={date} />
    </View>
  );
}
