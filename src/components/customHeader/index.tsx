import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
// import { CustomIconButton, HeaderTitle } from "..";
import { ICustomHeader } from "../interface";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Color, FontSize, FontFamily } from "../../utils/theme";

const CustomHeader = ({
  headerRightIconName,
  headerTitle,
  headerLeftIconName,
  headerRightTitle,
  onLeftIconPress,
  onRightIconPress,
  onRightPress
}: ICustomHeader) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        { height: insets.top + 52, paddingTop: insets.top, justifyContent: 'space-between' },
      ]}
    >
      <View style={styles.leftConatiner}>
        {/* {headerLeftIconName ? (
          <CustomIconButton
            onPress={onLeftIconPress!}
            name={headerLeftIconName}
            customIconStyle={styles.customIconStyle}
          />
        ) : null} */}
      </View>
      <View style={headerRightTitle ?  styles.middleContainerWithTitle : styles.middleContainer}>
        {/* {headerTitle ? <HeaderTitle title={headerTitle} /> : null} */}
      </View>
      <Pressable style={headerRightTitle ? styles.rightContainerWithTitle : styles.rightContainer}
      onPress={onRightPress}
      >
        {/* {headerRightIconName ? (
          <CustomIconButton
            onPress={onRightIconPress!}
            name={headerRightIconName}
            customIconStyle={styles.customIconStyle}
          />
        ) : null} */}
        {/* {headerRightTitle ? <HeaderTitle title={headerRightTitle} customStyle={{ fontFamily: FontFamily.NEUE_MONTREAL_REGULAR, paddingLeft: 5 }}/> : null} */}
      </Pressable>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    height: 52,
    flexDirection: "row",
    backgroundColor: Color.WHITE,
  },
  leftConatiner: {
    width: "18.5%",
    justifyContent: "center",
    paddingLeft: 20,
  },
  middleContainer: {
    width: "63%",
    justifyContent: "center",
    alignItems: "center",
  },
  rightContainer: {
    width: "18.5%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'row'
  },
  rightContainerWithTitle: {
    justifyContent: "center",
    alignContent: 'flex-end',
    alignItems: "center",
    flexDirection: 'row',
    paddingRight: 20,
  },
  customIconStyle: {
    color: Color.DARK_GREEN,
    fontSize: FontSize.SIZE_24,
  },
  middleContainerWithTitle:{
    justifyContent: "center",
    alignItems: "center",
  }
});
