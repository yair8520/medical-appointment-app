import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#000',
  },
  specialtiesContainer: {
    marginBottom: 30,
  },
  specialtyItem: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedSpecialty: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  specialtyText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000',
  },
  selectedSpecialtyText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  searchButton: {
    backgroundColor: '#34C759',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  manageAppointmentsButton: {
    backgroundColor: '#FF9500',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    height: 50,
  },
  manageAppointmentsButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    backgroundColor: '#E5E5E7',
    marginVertical: 20,
  },
  manageAppointmentsButtonIcon: {
    backgroundColor: 'red',
    position: 'absolute',
    left: -5,
    top: -10,
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  manageAppointmentsButtonIconText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#E5E5E7',
  },
});
