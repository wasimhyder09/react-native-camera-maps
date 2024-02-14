import { View, Button, Alert } from 'react-native';
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker';

function ImagePicker() {
  const [cameraPermissionInformation, requestPermission] = useCameraPermissions();

  async function verifyPermissions() {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert('Insufficient permission', 'You need to grant camera permissions to use this app.');
      return false;
    }
    return true;
  }

  async function takeImage() {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5
    });
    console.log(image);
  }
  return <View>
    <View>

    </View>
    <Button title='Take image' onPress={takeImage} />
  </View>
}

export default ImagePicker;