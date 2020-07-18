/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import LoginAsPatient from '../../../assets/svg/LoginAsPatient.svg';
import LoginAsDoctor from '../../../assets/svg/LoginAsDoctor.svg';
import Check from '../../../assets/svg/check.svg';
import DmzText from '../../../components/atoms/DmzText/DmzText';
import DmzButton from '../../../components/atoms/DmzButton/DmzButton';
import {
  PRIMARY_COLOR,
  TERTIARY_TEXT,
  NEW_PRIMARY_BACKGROUND,
  SEARCH_PLACEHOLDER_COLOR,
  NEW_HEADER_TEXT,
  SECONDARY_COLOR,
} from '../../../styles/colors';
function SignupSplash({onPress, signupAs, setSignupAs}) {
  return (
    <>
      <DmzText text="Welcome!" style={styles.HeaderText} />
      <DmzText style={styles.HeaderDesc} text="Choose Account Type" />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginVertical: 50,
        }}>
        <TouchableOpacity
          onPress={() => {
            setSignupAs('patient');
          }}>
          <View
            style={{
              width: 120,
              height: 120,
              borderRadius: 12,
              position: 'relative',
            }}>
            <LoginAsPatient height={120} width={120} />
            {signupAs === 'patient' && (
              <View
                style={{
                  position: 'absolute',
                  bottom: -15,
                  left: '50%',
                  transform: [
                    {
                      translateX: -15,
                    },
                  ],
                  height: 30,
                  width: 30,
                  borderRadius: 20,
                  backgroundColor: '#fff',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Check height={16} width={16} />
              </View>
            )}
          </View>
          <Text
            style={{
              color:
                signupAs == 'patient'
                  ? NEW_PRIMARY_BACKGROUND
                  : SEARCH_PLACEHOLDER_COLOR,
              fontSize: 18,
              fontWeight: 'bold',
              marginTop: 10,
              width: '100%',
              textAlign: 'center',
            }}>
            PATIENT
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSignupAs('doctor');
          }}>
          <View
            style={{
              width: 120,
              height: 120,
              borderRadius: 11,
            }}>
            <LoginAsDoctor height={120} width={120} />
            {signupAs === 'doctor' && (
              <View
                style={{
                  position: 'absolute',
                  bottom: -15,
                  left: '50%',
                  transform: [
                    {
                      translateX: -15,
                    },
                  ],
                  height: 30,
                  width: 30,
                  borderRadius: 20,
                  backgroundColor: '#fff',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Check height={16} width={16} />
              </View>
            )}
          </View>
          <Text
            style={{
              color:
                signupAs == 'doctor'
                  ? NEW_PRIMARY_BACKGROUND
                  : SEARCH_PLACEHOLDER_COLOR,
              fontSize: 18,
              fontWeight: 'bold',
              marginTop: 10,
              width: '100%',
              textAlign: 'center',
            }}>
            DOCTOR
          </Text>
        </TouchableOpacity>
      </View>
      <DmzButton
        onPress={onPress}
        style={{
          Text: {
            textAlign: 'center',
            color: '#fff',
            fontSize: 16,
          },
          Container: {
            width: 200,
            height: 'auto',
            borderRadius: 30,
            backgroundColor: SECONDARY_COLOR,
            alignSelf: 'center',
            marginVertical: 50,
            elevation: 0,
            padding: 15,
          },
        }}
        text="NEXT"
        // isLoading={isLoading}
        // disabled={isLoading}
      />
    </>
  );
}

const styles = StyleSheet.create({
  HeaderText: {
    fontSize: 45,
    fontWeight: 'bold',
    color: NEW_HEADER_TEXT,
    marginTop: 40,
    width: '100%',
    textAlign: 'center',
    lineHeight: 50,
  },
  HeaderDesc: {
    fontSize: 18,
    fontWeight: 'normal',
    lineHeight: 18,
    color: TERTIARY_TEXT,
    marginTop: 10,
    width: '100%',
    textAlign: 'center',
    opacity: 1,
    letterSpacing: 0.8,
  },
});

export default SignupSplash;
