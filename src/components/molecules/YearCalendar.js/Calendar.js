/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions, FlatList} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import {extendMoment} from 'moment-range';
import Moment from 'moment';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  NEW_HEADER_TEXT,
  SEARCH_PLACEHOLDER_COLOR,
  NEW_UNSELECTED_TEXT,
  NEW_PRIMARY_COLOR,
  SECONDARY_COLOR,
  SECONDARY_BACKGROUND,
} from '../../../styles/colors';
const moment = extendMoment(Moment);

export default function Calendar({onDateChange, getDateView}) {
  const width = Dimensions.get('screen').width;
  const [months, setMonths] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const exampleRef = React.createRef();
  const daysLable = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const [selectedStartDate, setStartDate] = useState('');
  const [EndDate, setEndDate] = useState();

  const getMonths = () => {
    const monthList = moment.months();
    const coming12Months = monthList
      .concat(monthList.slice(0, moment().month()))
      .slice(-12);
    console.log(coming12Months);
    setMonths(coming12Months);
  };
  const minDate = new Date(1950, 1, 1);
  const maxDate = new Date(2050, 12, 31);

  const setMonth = async (i) => {
    var index = months.indexOf(i);
    var index2 = selectedIndex;
    console.log(index2, ' --- ', index);
    if (index > index2) {
      while (index2 < index) {
        await exampleRef.current.handleOnPressNext();
        console.log('changing');
        index2++;
      }
      setSelectedIndex(index2);
    } else if (index < index2) {
      while (index2 > index) {
        await exampleRef.current.handleOnPressPrevious();
        console.log('changing');
        index2--;
      }
      setSelectedIndex(index2);
    }
    console.log(index2, ' --- ', index);
  };

  // const onDateChange2 = async (date, type) => {
  //   if (type == 'START_DATE') {
  //     await setStartDate(date);
  //     console.log('in1', date);
  //     // setEndDate(null);
  //   } else if (type === 'END_DATE') {
  //     await setEndDate(date);
  //     console.log('in2', date);
  //     if (date != null) {
  //       console.log(selectedStartDate, date);
  //       getDateView(selectedStartDate, date);
  //     }
  //   }
  //   // console.log(selectedStartDate, EndDate);
  // };

  useEffect(() => {
    getMonths();
  }, []);

  return (
    <View>
      <FlatList
        data={months}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          console.log(item, index);
          return (
            <TouchableOpacity
              style={{
                width: 150,
                alignItems: 'center',
                borderRightWidth: 3,
                borderColor: NEW_PRIMARY_COLOR,
              }}
              onPress={() => {
                setMonth(item);
              }}>
              <Text
                style={{
                  fontSize: 25,
                  color:
                    selectedIndex == index
                      ? NEW_HEADER_TEXT
                      : NEW_UNSELECTED_TEXT,
                  fontWeight: 'bold',
                }}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
      <FlatList
        data={daysLable}
        scrollEnabled={false}
        horizontal
        style={{marginHorizontal: 10, marginTop: 20}}
        renderItem={({item}) => {
          return (
            <View
              style={{
                width: width / 7 - 20 / 7,
              }}>
              <Text
                style={{
                  fontSize: 22,
                  color: NEW_HEADER_TEXT,
                  fontWeight: 'bold',
                  width: '100%',
                  textAlign: 'center',
                }}>
                {item}
              </Text>
            </View>
          );
        }}
      />
      <CalendarPicker
        ref={exampleRef}
        startFromMonday={false}
        allowRangeSelection={true}
        minDate={minDate}
        maxDate={maxDate}
        todayBackgroundColor="transparent"
        // selectedDayColor={'white'}
        selectedDayStyle={{
          backgroundColor: SECONDARY_COLOR,
          borderRadius: 11,
        }}
        nextTitleStyle={{height: 0}}
        previousTitleStyle={{height: 0}}
        todayTextStyle={{
          borderRadius: 11,
          borderWidth: 1.5,
          width: 30,
          height: 30,
          textAlignVertical: 'center',
          textAlign: 'center',
          borderColor: NEW_PRIMARY_COLOR,
        }}
        textStyle={{
          color: NEW_HEADER_TEXT,
        }}
        selectedDayTextColor="#000000"
        onDateChange={onDateChange}
        selectedRangeStartStyle={{
          backgroundColor: SECONDARY_COLOR,
          // borderRadius: 11,
        }}
        selectedRangeEndStyle={{
          backgroundColor: SECONDARY_COLOR,

          // borderRadius: 11,
        }}
        selectedRangeStyle={{
          backgroundColor: SECONDARY_BACKGROUND,
          paddingVertical: -20,
          // color: NEW_HEADER_TEXT,
        }}
        weekdays={['S', 'M', 'T', 'W', 'T', 'F', 'S']}
        dayLabelsWrapper={{
          height: 0,
          borderBottomWidth: 0,
          borderTopWidth: 0,
          backgroundColor: 'transaprent',
          maxHeight: 0,
          width: 2,
          marginBottom: -25,
        }}
        showDayStragglers
        monthYearHeaderWrapperStyle={{
          height: 0,
          width: 0,
        }}
      />
    </View>
  );
}
