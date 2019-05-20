import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from "react-native";
import { RNCamera } from "react-native-camera";
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { Container, Camera, Rodape, BotaoContainer, BotaoRaioExterno, BotaoRaioInterno, UltimaFoto } from './style';

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image64: '',
            flashIcon: 'flash-off',
            flashMode: RNCamera.Constants.FlashMode.off,
            cameraType: RNCamera.Constants.Type.back,
            isBackCamera: true,
        }
    }

    takePicture = async () => {
        if (this.camera) {
            const options = { quality: 0.8, base64: true, fixOrientation: true };
            this.camera.takePictureAsync(options).then( res => {
                this.setState({ image64: res.base64 });
            }).catch( error => {console.log(error)});
            
            
        }
    };

    handleFlashMode = () => {
        if (this.state.flashIcon === 'flash-auto') {
            this.setState({
                flashIcon: 'flash-on',
                flashMode: RNCamera.Constants.FlashMode.on
            })
        }
        if (this.state.flashIcon === 'flash-on') {
            this.setState({
                flashIcon: 'flash-off',
                flashMode: RNCamera.Constants.FlashMode.off
            })
        }
        if (this.state.flashIcon === 'flash-off') {
            this.setState({
                flashIcon: 'flash-auto',
                flashMode: RNCamera.Constants.FlashMode.auto
            })
        }
    }

    handleCameraType = () => {
        if (this.state.isBackCamera) {
            this.setState({
                cameraType: RNCamera.Constants.Type.front,
                isBackCamera: false
            })
        }
        else {
            this.setState({
                cameraType: RNCamera.Constants.Type.back,
                isBackCamera: true
            })
        }
    }

    render() {
        return (
            <Container>
                <Camera
                    ref={camera => { this.camera = camera }}
                    type={this.state.cameraType}
                    autoFocus={RNCamera.Constants.AutoFocus.on}
                    flashMode={this.state.flashMode}
                    androidCameraPermissionOptions={{
                        title: 'Permissão para usar a câmera',
                        message: 'Precisamos da sua permissão para usar a câmera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                />
                <Rodape>
                    <BotaoContainer>
                        <BotaoContainer>
                            <UltimaFoto source={{uri: `data:image/gif;base64,${this.state.image64}`}} />
                            <TouchableOpacity onPress={this.handleFlashMode} style={styles.flashIcon}>
                                <MaterialIcon name={this.state.flashIcon} color='white' size={30} />
                            </TouchableOpacity>
                        </BotaoContainer>
                        <BotaoRaioExterno onPress={this.takePicture} >
                            <BotaoRaioInterno ></BotaoRaioInterno>
                        </BotaoRaioExterno>
                        <TouchableOpacity onPress={this.handleCameraType}>
                            <MaterialIcon name='sync' color='white' size={30} />
                        </TouchableOpacity>
                    </BotaoContainer>
                </Rodape>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    flashIcon: {
        marginLeft: 10,
    }
})