/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Graph from '../../../assets/svg/graph.svg';
import DmzText from '../../atoms/DmzText/DmzText';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';

export default function PatientHistoryCardLarge({
  style,
  headerOne,
  infoOne,
  headerTwo,
  infoTwo,
  infoThree,
  onPress,
}) {
  return (
    <View style={[styles.Card, style ? style.Card : null]}>
      <View style={styles.Container}>
        <DmzText
          style={[styles.HeaderOne, style ? style.HeaderOne : null]}
          text={headerOne}
        />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <DmzText
            style={[styles.InfoOne, style ? style.InfoOne : null]}
            text={infoOne}
          />
          <DmzText
            style={[styles.InfoThree, style ? style.InfoThree : null]}
            text={infoThree}
          />
        </View>
      </View>
      <Graph style={{alignSelf: 'center'}} />
      <DmzText
        style={[styles.HeaderTwo, style ? style.HeaderTwo : null]}
        text={headerTwo}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: 20,
        }}>
        <DmzText
          style={[styles.InfoTwo, style ? style.InfoTwo : null]}
          text={infoTwo}
        />
        <TouchableOpacity onPress={onPress} style={{marginRight: 10}}>
          <Entypo name="chevron-right" size={22} color="#FF7A59" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Card: {
    elevation: 4,
    borderRadius: 20,
    height: 240,
    width: '80%',
    paddingHorizontal: 4,
    marginBottom: 50,
    backgroundColor: '#fff',
  },
  Container: {
    flexDirection: 'row',
    width: '100%',
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
  },
  HeaderOne: {
    color: '#9D9D9D',
    fontSize: 16,
    paddingLeft: 10,
    paddingTop: 8,
    fontWeight: '500',
  },
  HeaderTwo: {
    color: '#9D9D9D',
    fontSize: 18,
    paddingLeft: 30,
    lineHeight: 20,
    fontWeight: '500',
    marginTop: 5,
  },
  InfoOne: {
    color: '#007E96',
    fontSize: 25.5,
    marginRight: 5,
    paddingTop: 8,
    width: 'auto',
  },
  InfoTwo: {
    color: '#007E96',
    fontSize: 18,
    paddingLeft: 10,
  },

  InfoThree: {
    color: '#007E96',
    fontSize: 13,
    lineHeight: 16,
    paddingTop: 8,
    marginRight: 15,
    fontWeight: 'normal',
    textTransform: 'none',
  },
});
