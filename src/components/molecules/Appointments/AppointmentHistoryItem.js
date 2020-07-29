import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {
  NEW_PRIMARY_BACKGROUND,
  INPUT_PLACEHOLDER,
  SECONDARY_COLOR,
  NEW_PRIMARY_COLOR,
} from '../../../styles/colors';

const AppointmentHistoryItem = ({
  style,
  docName,
  docSpeciality,
  appointmentName,
}) => (
  <View style={[styles.mainContainer, style ?? {}]}>
    <Image
      source={require('../../../assets/jpg/person1.jpg')}
      style={{height: 70, width: 70, borderRadius: 35, margin: 10}}
    />

    <View
      style={{
        flex: 1,
        justifyContent: 'space-evenly',
        margin: 10,
      }}>
      <Text style={styles.docName}>{docName}</Text>
      <Text style={styles.docSpeciality}>{docSpeciality}</Text>
      <Text style={styles.appointmentName}>{appointmentName}</Text>
    </View>

    <View style={{justifyContent: 'space-evenly'}}>
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <Text
            style={{
              fontFamily: 'Montserrat-SemiBold',
              fontSize: 12,
              color: INPUT_PLACEHOLDER,
            }}>
            Fri,{' '}
          </Text>
          <Text
            style={{
              fontFamily: 'Montserrat-Regular',
              fontSize: 12,
              color: INPUT_PLACEHOLDER,
            }}>
            July 29
          </Text>
        </View>
        <Text
          style={{
            fontFamily: 'Montserrat-Regular',
            fontSize: 9,
            color: INPUT_PLACEHOLDER,
          }}>
          10:40 am - 11:00 am
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <View
          style={[styles.iconContainer, {backgroundColor: SECONDARY_COLOR}]}>
          <Image
            source={require('../../../assets/icons/med.png')}
            style={{
              height: 15,
              width: 16,
            }}
            resizeMode="contain"
          />
        </View>

        <View
          style={[
            styles.iconContainer,
            {backgroundColor: NEW_PRIMARY_BACKGROUND},
          ]}>
          <Image
            source={require('../../../assets/icons/doc.png')}
            style={{
              height: 15,
              width: 12,
            }}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  </View>
);

export default AppointmentHistoryItem;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    padding: 7,
    borderRadius: 14,
    flexDirection: 'row',
    // borderWidth: 1,
  },
  docName: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 17,
  },
  docSpeciality: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
  },
  appointmentName: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: NEW_PRIMARY_BACKGROUND,
  },
  iconContainer: {
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    borderRadius: 15,
  },
});
