import React, { useContext, useState } from "react";
import {
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import SousPageFormatComponent from "../../../components/SousPageFormatComponent";

import AllTransaction from "../../../data/AllTransaction.json";
import ItemHistory from "../../../components/ItemHistory";

//Context
import AppContext from "../../../components/AppContext";

function HistoryScreen({ navigation }) {
  const [thedata, setdata] = useState(AllTransaction.reverse());
  const TheContext = useContext(AppContext);
  return (
    <SousPageFormatComponent
      params={{ title: "Historique des transactions" }}
      navigation={navigation}
      scrollable={false}
    >
      <FlatList
        style={{ height: "100%" }}
        refreshing={false}
        onRefresh={() => setdata(AllTransaction.reverse())}
        data={thedata}
        initialNumToRender={1}
        keyExtractor={(item) => item.ID.toString()}
        renderItem={(item) => (
          <ItemHistory
            item={item}
            navigation={navigation}
            User={TheContext.loggedUserId}
          />
        )}
        ListFooterComponent={<View style={{ height: 100 }}></View>}
      />
    </SousPageFormatComponent>
  );
}

const StyleLowerMenu = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#F6F6F9",
  },
  containerHeader: {},
  containerbottom: {},
  chevron: {},
  title: {},
});

export default HistoryScreen;
