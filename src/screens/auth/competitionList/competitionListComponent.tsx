import React from 'react';
import { Image, Pressable, View, FlatList, SafeAreaView } from 'react-native';
import { styles } from "./styles";
import {
  CustomLabel,
  CustomTextInput
} from "../../../components";

// Define the type for each competition item
interface CompetitionItem {
  id: string;
  title: string;
  date: string;
  location: string;
}

// Define the props for the component
interface CompetitionListComponentProps {
  onPressBack: () => void;
  data: CompetitionItem[];
  value: string;
  onChange: (text: string) => void;
}

const CompetitionListComponent: React.FC<CompetitionListComponentProps> = ({ 
  onPressBack,
  data,
  value,
  onChange
}) => {

  const renderItem = ({ item }: { item: CompetitionItem }) => (
    <View style={styles.itemContainer}>
      <CustomLabel customStyle={styles.listTitle}>{item.title}</CustomLabel>
      <CustomLabel customStyle={styles.listSubTitle}>{item.date}</CustomLabel>
      <CustomLabel customStyle={styles.date}>{item.location}</CustomLabel>
    </View>
  );


  return (
    <SafeAreaView style={styles.centeredView}>
      <View style={{ flex: 1, alignItems: 'flex-start' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
          <Pressable style={[styles.iconStyles, { borderColor: "black" }]} onPress={onPressBack}>
            <Image
              source={require("../../../assets/images/back.png")}
              style={styles.rightIconStyle}
            />
          </Pressable>
          <CustomTextInput
              autoCapitalize="none"
              returnKeyType={"next"}
              placeholder={"Search"}
              value={value}
              onChangeText={onChange}
              iconName="Letter"
              keyboardType="email-address"
              isRequired
              customInputStyle={{ width: '80%', marginLeft: 16, marginTop: 0 }}
            />
        </View>
        <CustomLabel customStyle={styles.title}>
          {"Competition"}
        </CustomLabel>
        <CustomLabel customStyle={styles.subTitle}>
          {"An account is needed per one host. If you already have an account for the host of competition you want to sign up, you can login and  register."}
        </CustomLabel>

        <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />


      </View>
    </SafeAreaView>
  );
};

export default CompetitionListComponent;
