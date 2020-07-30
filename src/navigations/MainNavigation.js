import React, {useEffect} from 'react';
import {createAppContainer} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';
import AuthNavigation from './AuthNavigation';
import PatientNavigation from './PatientNavigation';
import DoctorNavigation from './DoctorNavigaton';
import DocProfileLite from '../screens/patient/docProfileLite/DocProfileLite';
import AppointmentForm from '../screens/patient/appointmentForm/AppointmentForm';
import ConfirmAppointment from '../components/molecules/ConfirmAppointment/ConfirmAppointment';
import Questionnaire from '../screens/patient/questionnaire/Questionnaire';
import BookingDetails from '../screens/patient/questionnaire/BookingDetails';
import NewQuestionnaire from '../screens/patient/questionnaire/NewQuestionnaire';
import AllAnswer from '../screens/patient/questionnaire/AllAnswer';
import SelectFiles from '../screens/patient/questionnaire/SelectFiles';
import {useSelector} from 'react-redux';
import WaitingRoom from '../screens/patient/waitingRoom/WaitingRoom';
import DoctorProfile from '../screens/examples/DoctorProfile/DoctorProfile';
import QuestionnairePP from '../screens/patient/questionnaire/QuestionnairePP';
import PatientCalendarScreen from '../screens/examples/PatientCalendar/PatientCalendarScreen';
// check for login status
// const {isDoctor, isLogedin} = useSelector(state => state.AuthReducer)

// const PageNavigation = createAnimatedSwitchNavigator(
//   {
//     patientHomePage: PatientNavigation,
//     doctorHomePage: DoctorNavigation,
//   },
//   {
//     transition: (
//       <Transition.Together>
//         <Transition.Out
//           type="slide-bottom"
//           durationMs={400}
//           interpolation="easeIn"
//         />
//         <Transition.In type="fade" durationMs={500} />
//       </Transition.Together>
//     ),
//     initialRouteName: isDoctorLogin ? 'doctorHomePage' : 'patientHomePage',
//     // initialRouteName: 'doctorHomePage',
//     headerMode: 'none',
//   },
// );

function GetAuth({navigation}) {
  const {isDoctor} = useSelector((state) => state.AuthReducer);

  if (isDoctor) {
    navigation.replace('DoctorHomePage');
  } else {
    navigation.replace('PatientHomePage');
  }
  return null;
}

const docMainStream = createStackNavigator(
  {
    AppointmentsStack: {
      screen: DoctorProfile,
    },
    QuestionnairePP,
    PatientCalendarScreen,
    ConfirmAppointment,
    AppointmentForm,
    // Questionnaire,
  },
  {
    initialRouteName: 'AppointmentsStack',
    headerMode: 'none',
  },
);

const questionnaire = createStackNavigator(
  {
    AllAnswer,
    BookingDetails,
    NewQuestionnaire,
    Questionnaire,
  },
  {
    initialRouteName: 'BookingDetails',
    headerMode: 'none',
  },
);

const MainNavigation = createStackNavigator(
  {
    authentication: AuthNavigation,
    pageNavigation: GetAuth,
    DoctorHomePage: DoctorNavigation,
    PatientHomePage: PatientNavigation,
    docPatientStrem: docMainStream,
    question: questionnaire,
    selectFiles: SelectFiles,
    WaitingRoom: WaitingRoom,
  },
  {
    // initialRouteName: 'pageNavigation',
    initialRouteName: 'PatientHomePage',
    headerMode: 'none',
  },
);

export default createAppContainer(MainNavigation);
