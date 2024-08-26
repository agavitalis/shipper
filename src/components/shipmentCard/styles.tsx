import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F2F8',
    borderRadius: 10,
    marginVertical: 10,
    overflow: 'hidden',
  },
  cardWrap: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    backgroundColor: '#F4F2F8',
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
  iconWrap: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  textCol: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  id: {
    width: '100%',
    flexWrap: 'wrap',
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    textTransform: 'capitalize',
    color: '#3F395C',
  },
  paragraph: {
    fontSize: 13,
    fontWeight: '400',
    textTransform: 'capitalize',
    color: '#757281',
  },
  coloredText: {
    fontSize: 11,
    fontWeight: '500',
    color: '#4561DB',
  },
  header: {
    color: '#3F395C',
  },
  statusCard: {
    fontSize: 11,
    fontWeight: '500',
    paddingVertical: 4,
    paddingHorizontal: 4,
    borderRadius: 5,
    color: '#58536E',
    borderWidth: 1.2,
    borderColor: '#fff',
    overflow: 'hidden',
  },
  statusCardText: {
    fontSize: 8,
    fontWeight: '500',
    textTransform: 'capitalize',
    color: 'pink',
  },
  openIconWrap: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: '#fff',
  },
  bgColored: {
    backgroundColor: '#4561DB',
    opacity: 0.8,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  cardContent: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    gap: 20,
    borderTopWidth: 2,
    borderTopColor: '#fff',
    backgroundColor: '#ffffff70',
  },
  cardFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardCol: {
    flex: 1,
    flexDirection: 'column',
  },
  center: {
    alignItems: 'center',
  },
  bottonFlex: {
    gap: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonCard: {
    gap: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2F50C1',
    opacity: 0.7,
  },
  buttonCard2: {
    backgroundColor: 'green',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    textTransform: 'capitalize',
    color: '#fff',
  },
});
