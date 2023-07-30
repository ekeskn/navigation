import React from 'react';

import {View, Text, Button} from 'react-native';

const First = ({navigation}) => {
   const gotoDetail = ()=>{
    navigation.navigate('Detail'); // navigate to Second screen when button pressed
   }

  return (
    <View>
      <Text>This is First Page with a line</Text>
      <Text>
        --------------------------------------------------------------
      </Text>
      <Button title="go to detail page" onPress={gotoDetail} />
    </View>
  );
};
export default First;
 