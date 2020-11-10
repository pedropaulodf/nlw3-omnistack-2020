import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OrphanagesMap from "./pages/OrphanagesMap";
import OrphanagesDetails from "./pages/OrphanageDetails";
import OrphanageData from "./pages/CreateOrphanage/OrphanageData";
import SelectMapPosition from "./pages/CreateOrphanage/SelectMapPosition";
import FormSuccessPage from "./pages/CreateOrphanage/FormSuccessPage";
import FormCancelPage from "./pages/CreateOrphanage/FormCancelPage";
import Header from "./components/Header";
import OnboardPage from "./pages/OnboardPage";
import LandingAnimated from "./pages/LandingAnimated";
import InstructionsClickMap from "./pages/InstructionsClickMap";

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "#f2f3f5" },
        }}
      >
        <Screen 
          name="OnboardPage" 
          component={OnboardPage}
        />

        <Screen 
          name="LandingAnimated" 
          component={LandingAnimated}
        />

        <Screen 
          name="OrphanagesMap" 
          component={OrphanagesMap}
        />

        <Screen 
          name="FormCancelPage" 
          component={FormCancelPage}
        />

        <Screen 
          name="FormSuccessPage" 
          component={FormSuccessPage}
        />
        
        <Screen 
          name="InstructionsClickMap" 
          component={InstructionsClickMap}
        />

        <Screen 
          name="OrphanagesDetails" 
          component={OrphanagesDetails}
          options={{
            headerShown: true,
            header: () => <Header showCancel={false} title="Orfanato" />
          }}
        />

        <Screen 
          name="SelectMapPosition" 
          component={SelectMapPosition}
          options={{
            headerShown: true,
            header: () => <Header title="Selecione no mapa" />
          }}
        /> 

        <Screen 
          name="OrphanageData" 
          component={OrphanageData}
          options={{
            headerShown: true,
            header: () => <Header title="Informe os dados" />
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
