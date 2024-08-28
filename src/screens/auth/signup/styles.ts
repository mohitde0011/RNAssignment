import { StyleSheet } from 'react-native';
import { Color, FontFamily } from '../../../utils/theme';
import { SCREEN_WIDTH } from "../../../utils/constant";

export const styles = StyleSheet.create({
  upperContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 20
  },
  signUpCom:{
    fontFamily: FontFamily.PLUS_JAKARTA_MEDIUM,
    color: "#667085",
    fontSize: 14,
    lineHeight: 38,
    top: 5
  },
  title: {
    fontFamily: FontFamily.PLUS_JAKARTA_EBOLD,
    color: Color.BLACK,
    fontSize: 24,
    lineHeight: 38,
    textAlign: 'left'
  },
  subTitle: {
    fontFamily: FontFamily.PLUS_JAKARTA_MEDIUM,
    color: "#101828",
    fontSize: 18,
    lineHeight: 38,
    marginTop: 18,
    textAlign: 'left'
  },
  createAccount:{
    fontFamily: FontFamily.PLUS_JAKARTA_EBOLD,
    color: "#101828",
    fontSize: 26,
    fontWeight: '800',
    alignSelf: 'center',
    marginLeft: 20
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
    // alignItems: 'center',
    marginTop: 50,
    paddingHorizontal: 20
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    width: '90%',
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
    height: 54,
    width: 54,
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
  termsAndConditionContainer: {
    marginTop: 16,
  },
  iAgreeText: {
    fontFamily: FontFamily.PLUS_JAKARTA_MEDIUM,
    color: Color.GRAY,
    fontSize: 14,
    lineHeight: 16.8,
    paddingLeft: 8,
  },
  termsAndCondition: {
    fontFamily: FontFamily.PLUS_JAKARTA_MEDIUM,
    color: Color.GRAY,
    fontSize: 14,
    lineHeight: 16.8,
    textDecorationLine: 'underline',
  },
  termsAndConditionCon: {
    marginTop: 26,
    flexDirection: 'row',
    alignItems: 'center',
  },
  formConatiner: {
    width: '100%',
    marginTop: 16,
  },
  passwordContainer: {
    width: '100%',
    marginTop: 16,
  },
  arrowIconStyle:{
    width: 28,
    height: 28,
    alignSelf: 'center'
  },
  inputStyle: {
    marginTop: 16,
    backgroundColor: "#F9FAFB",
    borderRadius: 46,
    height: 52,
    paddingLeft: 16,
    fontSize: 14,
    fontFamily: FontFamily.PLUS_JAKARTA_REGULAR,
    paddingRight: 15,
    width: '100%',
    justifyContent: 'space-between',
    flexDirection:'row'
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: Color.GRAY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    marginLeft: 8,
    fontSize: 16,
    color: '#333',
  },
});
