/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Svg from 'react-native-svg';
import DmzText from '../../../components/atoms/DmzText/DmzText';
import TextInputIcon from '../../../components/atoms/TextInputCustom/TextInputIcon';
import DmzButton from '../../../components/atoms/DmzButton/DmzButton';
import StepsTracker from '../../../components/atoms/StepsTracker/StepsTracker';
import {
  TERTIARY_TEXT,
  HEADER_TEXT,
  PRIMARY_COLOR,
} from '../../../styles/colors';
import {HeaderStyleInterpolators} from 'react-navigation-stack';

export default function SignUpStep1Screen(props) {
  const {credential, setCredential, isLoading} = props;
  const handleFirstName = (firstName) => {
    setCredential({...credential, firstName});
  };
  const handleLastName = (lastName) => {
    setCredential({...credential, lastName});
  };
  const handleEmail = (email) => {
    setCredential({...credential, email});
  };
  const handlePassword = (password) => {
    setCredential({...credential, password});
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      {/* <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        useAngle
        angle={100}
        colors={[
          'rgba(2, 126, 151, 0)',
          'rgba(2, 126, 151, 0)',
          'rgba(2, 126, 151, 0)',
          'rgba(2, 126, 151, 0.31)',
        ]}
        style={{flex: 1, opacity: 0.4}}
      /> */}
      <View
        style={{
          position: 'absolute',
          flex: 1,
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent',
        }}>
        <StepsTracker
          text="Step 1"
          textStyle={{
            fontSize: 16,
            color: TERTIARY_TEXT,
          }}
          completed={33}
          completedColor={TERTIARY_TEXT}
          incompletedColor={'#F8F7FF'}
        />
        <DmzText
          style={{
            fontSize: 45,
            fontWeight: 'bold',
            color: HEADER_TEXT,
            marginTop: 20,
            width: '100%',
            textAlign: 'center',
            lineHeight: 50,
          }}
          text="Hello Doctor!"
        />
        <Image
          source={require('../../../assets/images/doc_2.png')}
          style={{
            alignSelf: 'center',
            transform: [{scale: 0.9}],
          }}
          resizeMode="cover"
          resizeMethod="scale"
        />
        <TextInputIcon
          placeholder="First Name"
          inputHandler={handleFirstName}
          placeholderTextColor="rgba(0, 0, 0, 0.15)"
          style={styles.inputStyle}
          textStyle={{
            color: '#027E97',
            fontSize: 14,
          }}
        />
        <TextInputIcon
          placeholder="Last Name"
          inputHandler={handleLastName}
          placeholderTextColor="rgba(0, 0, 0, 0.15)"
          style={styles.inputStyle}
          textStyle={styles.textStyle}
        />
        <TextInputIcon
          placeholder="Email"
          inputHandler={handleEmail}
          placeholderTextColor="rgba(0, 0, 0, 0.15)"
          style={styles.inputStyle}
          textStyle={styles.textStyle}
        />
        <TextInputIcon
          placeholder="Password"
          inputHandler={handlePassword}
          placeholderTextColor="rgba(0, 0, 0, 0.15)"
          style={styles.inputStyle}
          textStyle={styles.textStyle}
        />
        <View
          style={{
            width: '50%',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignSelf: 'center',
            marginTop: 30,
          }}>
          <EvilIcons name="sc-facebook" color="#EA508F" size={35} />
          <EvilIcons name="sc-twitter" color="#EA508F" size={35} />
          <EvilIcons name="sc-google-plus" color="#EA508F" size={35} />
        </View>
        <DmzButton
          onPress={props.onPress}
          style={{
            Text: {
              width: '100%',
              textAlign: 'center',
              color: 'white',
              fontSize: 16,
            },
            Container: {
              width: 131,
              height: 46,
              borderRadius: 17,
              backgroundColor: PRIMARY_COLOR,
              alignSelf: 'center',
              marginTop: 10,
              elevation: 10,
            },
          }}
          text="SIGN UP"
          isLoading={isLoading}
          disabled={isLoading}
        />
        <DmzText
          style={{
            // width: '100%',
            textAlign: 'center',
            color: 'rgba(0, 0, 0, 0.15)',
            fontSize: 14,
            marginTop: 10,
            marginLeft: '20%',
          }}
          text=" Already have an account?">
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('loginScreen');
            }}>
            <DmzText
              style={{
                color: HEADER_TEXT,
                textAlign: 'center',
                fontSize: 14,
                marginTop: 10,
                paddingLeft: 10,
              }}
              text="Sign In"
            />
          </TouchableOpacity>
        </DmzText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    width: '70%',
    borderBottomColor: 'rgba(0, 0, 0, 0.15)',
    borderBottomWidth: 2,
    height: 'auto',
    alignSelf: 'center',
  },
  textStyle: {
    color: HEADER_TEXT,
    fontSize: 14,
    marginTop: 20,
  },
});
