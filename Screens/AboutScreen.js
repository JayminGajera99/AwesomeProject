import {View, Text, Button} from 'react-native';
import React from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';

const AboutScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <View>
      <Text style={{fontSize: 24}}>AboutScreen</Text>
      <Button title="Go to back" onPress={() => navigation.goBack()} />
      <Button
        title="Go to service"
        onPress={() => navigation.navigate('Service')}
      />
      <Button
        title="Go to service with params"
        onPress={() =>
          navigation.navigate('Service', {
            id: 23,
            otherparams: 'other params is here',
          })
        }
      />
    </View>
  );
};

export default AboutScreen;
