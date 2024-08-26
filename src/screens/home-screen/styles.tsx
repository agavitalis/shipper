import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    gap: 20,
    paddingTop: 55,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconWrap: {
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: '#F4F2F8',
  },
  logoWrap: {
    height: 40,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  icon: {
    width: 20,
    height: 20,
  },
  logo: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  col: {
    flexDirection: 'column',
  },
  text: {
    fontSize: 14,
    fontWeight: 400,
    color: '#00000060',
  },
  name: {
    fontSize: 28,
    fontWeight: 600,
    color: '#000000',
  },
  title: {
    fontSize: 22,
    fontWeight: 600,
    color: '#000000',
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 400,
    color: '#2F50C1',
  },
  inputWrap: {
    height: 44,
    borderRadius: 10,
    gap: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F2F8',
  },
  input: {
    fontSize: 16,
    fontWeight: 400,
    flex: 1,
    height: '100%',
  },
  buttonFlex: {
    gap: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonCard: {
    flex: 1,
    gap: 10,
    height: 44,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4F2F8',
  },
  buttonCard2: {
    backgroundColor: '#2F50C1',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 400,
    textTransform: 'capitalize',
    color: '#fff',
  },
  btnColor: {
    color: '#58536E',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  checkbox: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#D0D5DD',
  },
  grid: {
    flex: 1,
    gap: 5,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  modalContent: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: 10,
    gap: 10,
    height: 250,
  },
  modalGrid: {
    flex: 1,
    gap: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  modalFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingVertical: 10,
    borderBottomColor: '#EAE7F2',
  },
  filterCard: {
    paddingHorizontal: 20,
    gap: 20,
    height: 44,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#F4F2F8',
    backgroundColor: '#F4F2F8',
  },
  selectedCard: {
    borderWidth: 1,
    borderColor: '#6E91EC',
  },
  cardContent: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    backgroundColor: '#fff',
  },
  notfound: {
    width: '100%',
    height: 200,
    objectFit: 'contain',
  },
  activeColor: {
    color: '#2F50C1',
  },
  boldText: {
    fontSize: 18,
    fontWeight: 700,
    color: '#000',
  },
});
