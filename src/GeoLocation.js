import RNLocation from 'react-native-location';


export const getLocation = async () => {

    let permission = await RNLocation.checkPermission({
      ios: 'whenInUse', // or 'always'
      android: {
        detail: 'fine' // or 'fine'
      }
    });

    let location;
    if(!permission) {
      permission = await RNLocation.requestPermission({
        ios: "whenInUse",
        android: {
          detail: "fine",
          rationale: {
            title: "We need to access your location",
            message: "We use your location to show where you are on the map",
            buttonPositive: "OK",
            buttonNegative: "Cancel"
          }
        }
      })
      location = await RNLocation.getLatestLocation({timeout: 100})
      return location
      
    } else {
      location = await RNLocation.getLatestLocation({timeout: 100})
      return location
    }
  }