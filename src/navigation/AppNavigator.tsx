import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '@screens/LoginScreen';
import { BookingScreen } from '@screens/BookingScreen';
import { CalendarScreen } from '@screens/CalendarScreen';
import { SummaryScreen } from '@screens/SummaryScreen';
import { ManageAppointmentScreen } from '@screens/ManageAppointmentScreen';
import { ROUTES, ROUTES_HEADER } from '@/constants/routes';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsAuthenticated } from '@/store/selectors/authSelector';
import { logout } from '@/store/slices/authSlice';
import { Text, TouchableOpacity } from 'react-native';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          headerTitle: ROUTES_HEADER[route.name as keyof typeof ROUTES_HEADER],
          headerRight: () =>
            isAuthenticated ? (
              <TouchableOpacity onPress={handleLogout}>
                <Text style={{ color: 'red' }}>התנתקות</Text>
              </TouchableOpacity>
            ) : null,
        })}
      >
        {!isAuthenticated ? (
          <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
        ) : (
          <>
            <Stack.Screen name={ROUTES.BOOKING} component={BookingScreen} />
            <Stack.Screen name={ROUTES.CALENDAR} component={CalendarScreen} />
            <Stack.Screen name={ROUTES.SUMMARY} component={SummaryScreen} />
            <Stack.Screen name={ROUTES.MANAGE_APPOINTMENT} component={ManageAppointmentScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
