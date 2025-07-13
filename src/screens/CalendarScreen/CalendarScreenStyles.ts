import { StyleSheet } from 'react-native';
const buttonSize = 60;
export default StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    padding: 16,
    alignSelf: 'center',
    marginBottom: buttonSize,
  },
  contentContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  dateContainer: {
    marginBottom: 35,
    width: '100%',
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  timeButton: {
    marginBottom: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
  },
  timeText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
  timeButtonSelected: {
    backgroundColor: 'blue',
  },
  timeTextSelected: {
    color: 'white',
  },
  nextButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignSelf: 'center',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 8,
    height: buttonSize,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  nextButtonDisabled: {
    backgroundColor: 'gray',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#000',
  },
});
