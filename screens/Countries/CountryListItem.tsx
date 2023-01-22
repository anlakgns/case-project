import { Text, View, StyleSheet, Image } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../utils";
import { Colors } from "../../constants";
import { memo } from "react";

interface CountryListItemProps {
  name: string;
  flags?: {
    svg?: string;
    png?: string;
  };
}
const CountryListItem: React.FC<CountryListItemProps> = ({ name, flags }) => {
  return (
    <View style={styles.container}>
      {flags && (
        <Image
          style={styles.countryFlag}
          source={{
            uri: flags.png,
          }}
        />
      )}
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: verticalScale(50),
    borderWidth: 1,
    borderColor: Colors.PurpleLight,
    borderRadius: moderateScale(10),
    paddingHorizontal: horizontalScale(20),
    marginBottom: verticalScale(10),
    flexDirection: "row",
    alignItems: "center",
  },
  countryFlag: {
    height: 20,
    width: 30,
    marginRight: 20,
  },
});

export default memo(CountryListItem);
