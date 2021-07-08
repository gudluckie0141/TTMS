import React, { useContext } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/lists/ListItem";
import ListItemSeparatorComponent from "../components/lists/ListItemSeparator";
import colors from "../config/colors";
import Icon from "../components/Icon";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";

const menuItems = [
  {
    title: "Clients",
    icon: {
      name: "account-tie",
      backgroundColor: colors.primary,
    },
    targetScreen: "Client"
  },
  {
    title: "Category",
    icon: {
      name: "tune",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Category"
  },
  {
    title: "Subcategory",
    icon: {
      name: "tune-vertical",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Subcategory"
  },
];

function AccountScreen({navigation}) {

  const { user, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    setUser(null)
    authStorage.removeToken();
  }

  return (
    <Screen>
      <View style={styles.container}>
        <ListItem
          title={user.username}
          subTitle={user.email}
          image={require("../assets/default-avatar.png")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparatorComponent}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={()=>navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#c875c4" />}
        onPress={handleLogout}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
