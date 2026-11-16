import { View, Text, FlatList } from "react-native";
import estilo from "../style/global";
import ChequeBox from "../components/ChequeBox";
import { useState } from "react";
import Input from "../components/Input";

function ChequeBoxUse({ texto, info = (value) => {}, id = "check" }) {
  const [check, setCheck] = useState(false);

  info({ id, state: check });
  return <ChequeBox text={texto} value={check} onValueChange={setCheck} />;
}
/**
 * @param {import('react-native').ViewProps & {
 *   styleView?: import('react-native').StyleProp<import('react-native').ViewStyle>,
 *   styleTitle?: import('react-native').StyleProp<import('react-native').TextStyle>
 *   styleSubtitle?: import('react-native').StyleProp<import('react-native').TextStyle>
 * }} props
 */
export default function PreguntaModulo({
  flexdirectionend = "row",
  inputShow = true,
  titulo,
  subtitulos = [],
  inputOptions = {},
  styleView,
  styleTitle,
  styleSubtitle,
  nomesOptions = [{}],
  infoChecks = [],
  retornarChecks = (value) => {},
  ...rest
}) {
  return (
    <View
      style={[
        {
          flex: 1,
          backgroundColor: "rgba(255,255,255, 0.5)",
          borderRadius: 10,
          gap: 10,
          borderWidth: 1,
          borderColor: "white",
          padding: 20,
          alignSelf: "center",
          boxSizing: "border-box",
        },
        styleView,
      ]}
      {...rest}
    >
      <Text style={[estilo.subtitle, styleTitle]}>{titulo}</Text>
      {subtitulos[0] != null ? (
        <Text style={[estilo.subtitle, styleSubtitle]}>{subtitulos[0]}</Text>
      ) : null}
      {inputShow && (
        <Input
          placeholder={inputOptions.placeholder}
          value={inputOptions.value}
          onChangeText={(t) => {inputOptions.onChangeText(t)}}
        />
      )}
      {subtitulos[1] != null ? (
        <Text style={[estilo.subtitle, styleSubtitle]}>{subtitulos[1]}</Text>
      ) : null}
      <View
        style={{
          flex: 1,
          flexDirection: flexdirectionend,
          gap: 15,
          alignSelf: "baseline",
        }}
      >
        <View style={{ flex: 1, flexDirection: "column" }}>
          <ChequeBoxUse
            id={String(nomesOptions[0].nome).replaceAll(" ", "")}
            texto={nomesOptions[0].nome}
            info={(value) => {
              infoChecks[0] = value;
              retornarChecks(infoChecks);
            }}
          />
          <ChequeBoxUse
            id={String(nomesOptions[1].nome).replaceAll(" ", "")}
            texto={nomesOptions[1].nome}
            info={(value) => {
              infoChecks[1] = value;
              retornarChecks(infoChecks);
            }}
          />
          {nomesOptions[3] == null ? (
            <ChequeBoxUse
              id={String(nomesOptions[2].nome).replaceAll(" ", "")}
              texto={nomesOptions[2].nome}
              info={(value) => {
                infoChecks[2] = value;
                retornarChecks(infoChecks);
              }}
            />
          ) : null}
        </View>
        {nomesOptions[3] != null ? (
          <View style={{ flex: 1, flexDirection: "column" }}>
            <ChequeBoxUse
              id={String(nomesOptions[2].nome).replaceAll(" ", "")}
              texto={nomesOptions[2].nome}
              info={(value) => {
                infoChecks[2] = value;
                retornarChecks(infoChecks);
              }}
            />
            <ChequeBoxUse
              id={String(nomesOptions[3].nome).replaceAll(" ", "")}
              texto={nomesOptions[3].nome}
              info={(value) => {
                infoChecks[3] = value;
                retornarChecks(infoChecks);
              }}
            />
          </View>
        ) : null}
      </View>
    </View>
  );
}
