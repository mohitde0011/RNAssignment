import {StyleSheet} from 'react-native';
import {Color, FontFamily} from '../../../utils/theme';

export const styles = StyleSheet.create({
  bottomContainer: {
    zIndex: 1000, position: 'absolute', bottom: 20, width: "100%", paddingHorizontal: 20
  },
  creatAccText: {
    fontFamily: FontFamily.PLUS_JAKARTA_EBOLD,
    color: Color.WHITE,
    fontSize: 36,
    lineHeight: 38,
    zIndex: 1000, 
    position: 'absolute',
    top: "12%", 
    width: "100%", 
    paddingHorizontal: 20
  },
  video:{
     width: "100%", height: "100%"
  }
});
