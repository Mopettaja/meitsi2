import React from 'react';
import { View, Text, Modal, Pressable, Platform } from 'react-native';

const ModalScreen = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, elevation: 5 }}>
          <Text>This is modal.</Text>
          <Pressable onPress={onClose}>
            <Text>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default ModalScreen;
