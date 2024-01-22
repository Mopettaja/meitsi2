import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import ModalScreen from './ModalScreen';

const MainScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Pressable onPress={openModal}>
        <Text>Show modal message</Text>
      </Pressable>

      <ModalScreen visible={modalVisible} onClose={() => setModalVisible(false)} />
    </View>
  );
};

export default MainScreen;
