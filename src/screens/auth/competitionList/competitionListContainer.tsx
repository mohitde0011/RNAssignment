import React, { useState } from "react";
import CompetitionListComponent from "./competitionListComponent";
import { data } from '../../../utils/validation';

const CompetitionListContainer = ({ navigation }: any) => {
  const [text, onChangeText] = useState('');

  const onPressBack = () => {
    navigation.goBack()
  };
  
  return (
    <>
      <CompetitionListComponent
       onPressBack={onPressBack} 
       data={data}
       value={text}
       onChange={onChangeText}
      />
    </>
  );
};

export default CompetitionListContainer;
