import React from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';
import QRCodeComponent from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  isVisible: boolean;
  modalHandler: () => void;
  qrValue: string;
  type:string
}



export const QRModal = ({ isVisible, modalHandler, qrValue , type }: Props) => {
  const name = (type=== 'tv') ? 'serie' : 'pelicula'
  return (
    <Modal transparent={true} visible={isVisible} onRequestClose={modalHandler}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Icon
            onPress={modalHandler}
            color="grey"
            name="close"
            size={25}
            style={{ position: 'absolute', right: 10, top: 10 }}
          />
          <Text style={[styles.modalText, { fontSize: 25 }]}>Escanéame</Text>
          <QRCodeComponent
            value={qrValue}
            backgroundColor="transparent"
            size={160}
          />
          <Text style={styles.modalText}>Para saber de esta {name}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(100,93,93,.6)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
  },
});

export default QRModal;
