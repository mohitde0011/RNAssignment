import { StyleSheet } from 'react-native';
import { Color, FontFamily } from '../../../utils/theme';
import { SCREEN_WIDTH } from "../../../utils/constant";

export const styles = StyleSheet.create({
  title: {
    fontFamily: FontFamily.PLUS_JAKARTA_EBOLD,
    color: Color.BLACK,
    fontSize: 24,
    lineHeight: 38,
    marginTop: 14
  },
  subTitle: {
    fontFamily: FontFamily.PLUS_JAKARTA_MEDIUM,
    color: "#101828",
    fontSize: 14,
    lineHeight: 18,
    marginTop: 10,
    marginBottom: 20
  },
  createAccount:{
    fontFamily: FontFamily.PLUS_JAKARTA_EBOLD,
    color: "#101828",
    fontSize: 26,
    fontWeight: '800',
    alignSelf: 'center',
    marginLeft: 20
  },
  itemContainer: {
    width: '100%',
    backgroundColor: "#253BFF",
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingVertical: 20,
    marginBottom: 10, // Add some spacing between items
  },
  listTitle:{
    fontFamily: FontFamily.PLUS_JAKARTA_EBOLD,
    color: Color.WHITE,
    fontSize: 18,
    fontWeight: '800',
  },
  listSubTitle:{
    fontFamily: FontFamily.PLUS_JAKARTA_MEDIUM,
    color: Color.WHITE,
    fontSize: 14,
    marginTop: 8
  },
  date:{
    fontFamily: FontFamily.PLUS_JAKARTA_MEDIUM,
    color: "#B8BFFF",
    fontSize: 14,
    marginTop: 8
  },
  bottomContainer: {
    zIndex: 1000,
    position: 'absolute',
    bottom: 20,
    width: "100%",
    paddingHorizontal: 20
  },
  btncontainerStyle: {
    backgroundColor: "#253BFF",
    height: 52,
    justifyContent: 'center',
    paddingLeft: 0,
    width: '100%',
    bottom: 20
  },
  btncontainerModalStyle: {
    backgroundColor: "#253BFF",
    height: 44,
    justifyContent: 'center',
    paddingLeft: 0,
    width: SCREEN_WIDTH - 120,
    marginTop: 28
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 50,
    paddingHorizontal: 20
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  iconView: {
    width: SCREEN_WIDTH - 120,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 38
  },
  iconStyles: {
    height: 50,
    width: 50,
    borderRadius: 44,
    borderColor: Color.WHITE,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rightIconStyle: {
    width: 28,
    height: 28,
  },
  
});
