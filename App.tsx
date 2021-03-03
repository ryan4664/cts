import * as React from "react";
import { SafeAreaView } from "react-native";
import { Div, Text, ThemeProvider } from "react-native-magnus";
export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <Div alignItems="center" justifyContent="center" flex={1}>
            <Text
              fontSize={90}
              fontWeight="bold"
              color="red400"
              letterSpacing={2}
              mt="lg"
            >
              Fuck yeah Ryan
            </Text>
          </Div>
        </SafeAreaView>
      </ThemeProvider>
    );
  }
}
