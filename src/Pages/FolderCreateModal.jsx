import React, {useState} from 'react';
import styled from 'styled-components/native';
import ColorPicker from '../Components/ColorPicker';
import RegistrationButton from '../Components/RegistrationButton';
import InputComponent from '../Components/InputComponent';
import IconPicker from '../Components/IconPicker';
import CloseButton from '../Components/CloseButton';
import {Modal} from 'react-native';

const ForderCreateModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const onPressModalOpen = () => {
    setIsModalVisible(true);
  };

  const onPressModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal animationType="slide" visible={isModalVisible} transparent={true}>
      <Container>
        <ModalView>
          <StyledCloseButton />
          <IconPicker />
          <StyledInputComponent />
          <RegistrationContainer>
            <ColorPicker />
            <StyledRegistrationButton />
          </RegistrationContainer>
        </ModalView>
      </Container>
    </Modal>
  );
};

const Container = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ModalView = styled.View`
  border-radius: 10px;
  width: 80%;
  padding: 30px;
  justify-content: center;
  align-items: center;
  top: -8%;
  background-color: white;
`;

const StyledInputComponent = styled(InputComponent)`
  margin: 20px 0;
`;

const RegistrationContainer = styled.View`
  flex-direction: row;
`;

const StyledRegistrationButton = styled(RegistrationButton)`
  margin-left: 15px;
`;

const StyledCloseButton = styled(CloseButton)`
  position: absolute;
  top: 0;
  right: -20px;
`;

export default ForderCreateModal;
