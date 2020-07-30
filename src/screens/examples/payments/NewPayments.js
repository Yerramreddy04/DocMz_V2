import React from 'react';
import {Text, View, ScrollView, StyleSheet, Image} from 'react-native';
import {
  NEW_HEADER_TEXT,
  GREY_OUTLINE,
  SECONDARY_COLOR,
  INPUT_PLACEHOLDER,
} from '../../../styles/colors';
import TopNavBar from '../../../components/molecules/TopNavBar/TopNavBar';
import DmzButton from '../../../components/atoms/DmzButton/DmzButton';

const NewPayment = ({params, navigation}) => {
  return (
    <View style={styles.Container}>
      <TopNavBar
        headerText="Payment"
        navigation={navigation}
        style={{
          Container: {
            height: 'auto',
            marginTop: 5,
          },
        }}
      />
      <ScrollView style={styles.ScrollView}>
        <View style={[styles.rootGroup, {marginTop: 40}]}>
          <Text style={styles.rootHeading}>Credit/ Debit Cards</Text>
          <View style={styles.inputGroup}>
            <View style={[styles.row, styles.upperRow]}>
              <Image
                source={require('../../../assets/icons/mastercard.png')}
                style={styles.logo}
                resizeMode="contain"
              />
              <Text style={styles.text}>3967-XXXXXXXX-8243</Text>
            </View>

            <View style={[styles.row]}>
              <Image
                source={require('../../../assets/icons/mastercard.png')}
                style={styles.logo}
                resizeMode="contain"
              />
              <Text style={styles.text}>5428-XXXXXXXX-5685 </Text>
            </View>

            <View style={[styles.row, styles.bottomRow]}>
              <Image
                source={require('../../../assets/icons/newcard.png')}
                style={styles.logo}
                resizeMode="contain"
              />
              <Text style={styles.text}>ADD NEW CARD </Text>
            </View>
          </View>
        </View>

        <View style={[styles.rootGroup]}>
          <Text style={styles.rootHeading}>Wallets</Text>
          <View style={styles.inputGroup}>
            <View style={[styles.row, styles.upperRow]}>
              <Image
                source={require('../../../assets/icons/amazonpay.png')}
                style={styles.logo}
                resizeMode="contain"
              />
              <Text style={styles.text}>Amazon Pay</Text>
            </View>

            <View style={[styles.row]}>
              <Image
                source={require('../../../assets/icons/paytm.png')}
                style={[styles.logo, {height: 30}]}
                resizeMode="contain"
              />
              <Text style={styles.text}>PayTM </Text>
            </View>

            <View style={[styles.row, styles.bottomRow]}>
              <Image
                source={require('../../../assets/icons/newcard.png')}
                style={styles.logo}
                resizeMode="contain"
              />
              <Text style={styles.text}>LINK NEW ACCOUNT </Text>
            </View>
          </View>
        </View>

        <View style={[styles.rootGroup]}>
          <Text style={styles.rootHeading}>UPI</Text>
          <View style={styles.inputGroup}>
            <View style={[styles.row, styles.upperRow]}>
              <Image
                source={require('../../../assets/icons/gpay.png')}
                style={[styles.logo, {height: 30}]}
                resizeMode="contain"
              />
              <Text style={styles.text}>Google Pay</Text>
            </View>

            <View style={[styles.row, styles.bottomRow]}>
              <Image
                source={require('../../../assets/icons/newcard.png')}
                style={styles.logo}
                resizeMode="contain"
              />
              <Text style={styles.text}>LINK NEW UPI ACCOUNT </Text>
            </View>
          </View>
        </View>

        <View style={[styles.rootGroup]}>
          <Text style={styles.rootHeading}>Others</Text>
          <View style={styles.inputGroup}>
            <View style={[styles.row, styles.upperRow]}>
              <Image
                source={require('../../../assets/icons/paypal.png')}
                style={styles.logo}
                resizeMode="contain"
              />
              <Text style={styles.text}>Paypal</Text>
              <Text style={[styles.text, {color: INPUT_PLACEHOLDER}]}>
                (Link Account)
              </Text>
            </View>

            <View style={[styles.row, styles.bottomRow]}>
              <Image
                source={require('../../../assets/icons/cash.png')}
                style={styles.logo}
                resizeMode="contain"
              />
              <Text style={styles.text}>Cash Payment</Text>
            </View>
          </View>
        </View>

        <DmzButton
          onPress={() => {
            navigation.navigate('aa');
          }}
          style={{
            Text: {
              width: '100%',
              textAlign: 'center',
              color: '#fff',
              fontSize: 18,
              fontFamily: 'Montserrat-SemiBold',
            },
            Container: {
              width: 250,
              height: 46,
              borderRadius: 25,
              backgroundColor: SECONDARY_COLOR,
              alignSelf: 'center',
              marginVertical: 20,
              elevation: 3,
            },
          }}
          text="PAY"
        />
      </ScrollView>
    </View>
  );
};

export default NewPayment;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  ScrollView: {
    flex: 1,
  },
  rootGroup: {
    margin: 15,
    marginVertical: 20,
  },
  rootHeading: {
    fontSize: 19,
    fontFamily: 'Montserrat-SemiBold',
    color: NEW_HEADER_TEXT,
    marginBottom: 10,
  },
  inputGroup: {
    borderRadius: 15,
    // padding: 10,
    borderWidth: 1,
    borderColor: GREY_OUTLINE,
    overflow: 'hidden',
  },
  row: {
    padding: 15,
    borderWidth: 1,
    borderColor: GREY_OUTLINE,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  upperRow: {
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  bottomRow: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
  },
  logo: {
    height: 17,
    marginHorizontal: 5,
    width: 50,
  },
});