import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  View,
} from "react-native";
import { GlobalStyles } from "../../theme";
import { Text, ActivityIndicator } from "react-native";
import { useCallback, useEffect, useState } from "react";
import { getCountryList, searchCountries } from "../../services";
import { horizontalScale, moderateScale, verticalScale } from "../../utils";
import CountryListItem from "./CountryListItem";
import { Colors } from "../../constants";
import { TextInput } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../../routes";

type CountriesScreenProp = NativeStackScreenProps<StackParamList, "Countries">;

export const Countries: React.FC<CountriesScreenProp> = ({ navigation }) => {
  const [countries, setCountries] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const fetchCountries = useCallback(async () => {
    setLoading(true);
    setSearchTerm("");
    setCountries([]);
    setError("");
    try {
      const response = await getCountryList();
      setCountries(response.data);
    } catch (err) {
      console.log("err", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  // The search service here uncessesary actually, client-side filtering is better. However in project case restrictions , searching is expected so i implemented it like that.

  // This service would better in a screen like "CountryDetail" but i couldn't trust the api, because the responde data is inconsistent in terms of type so it will be prone to bugs. If you wish to see, just tell me i can implement it anyway.

  // The error handling of api from server-side is not good. It return error instead of empty return. That'why error message is like below.
  const searchCountry = useCallback(async () => {
    setLoading(true);
    setCountries([]);
    setError("");
    try {
      const response = await searchCountries(searchTerm.toLocaleLowerCase());
      setCountries(response.data);
    } catch (err) {
      console.log("err", err);
      setError("Country is not found or something went wrong.");
    } finally {
      setLoading(false);
    }
  }, [searchTerm]);

  // clear error
  useEffect(() => {
    if (!searchTerm) {
      setError("");
    }
  }, [searchTerm]);

  return (
    <SafeAreaView style={[GlobalStyles.container]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="md-chevron-back" size={32} color={Colors.Purple} />
      </TouchableOpacity>
      <Text style={[GlobalStyles.headline, styles.headline]}>
        Countries List
      </Text>
      <Text style={[styles.informationText]}>
        Number of countries : {countries.length}
      </Text>

      <TextInput
        style={[GlobalStyles.input]}
        mode="outlined"
        autoCapitalize="none"
        autoCorrect={false}
        value={searchTerm}
        onChangeText={setSearchTerm}
        placeholder="example: Germany"
        label="Country Name"
        right={
          <TextInput.Icon
            style={styles.clearIcon}
            icon="close"
            onPress={() => setSearchTerm("")}
          />
        }
      />
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={[
            styles.searchButton,
            !searchTerm && GlobalStyles.disabledButton,
          ]}
          onPress={searchCountry}
          disabled={!searchTerm}
        >
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.allCountryButton}
          onPress={fetchCountries}
        >
          <Text style={styles.allCountryButtonText}>All Countries</Text>
        </TouchableOpacity>
      </View>
      {loading && <ActivityIndicator size="large" color={Colors.Purple} />}
      {error && <Text style={GlobalStyles.errorText}>{error}</Text>}

      {/* Too much rendering here, i couldn't limit it because of api contrainst. There is not limit param in rest api. That's why i use React.memo in list item to prevent unnecessary re-rendering caused from parent state changes.
      
      "Key" here is another issue because of api, because results don't have uniuqe id, i use name as a key and add index number for an extra control.
      */}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={countries}
        renderItem={({ item }) => (
          <CountryListItem name={item.name} flags={item.flags} />
        )}
        keyExtractor={(item, i) => item.name + i}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headline: {
    marginTop: verticalScale(20),
    marginBottom: verticalScale(5),
  },
  informationText: {
    fontSize: moderateScale(14),
    opacity: 0.7,
    marginBottom: verticalScale(10),
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: verticalScale(10),
    marginBottom: verticalScale(30),
  },
  searchButton: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.Purple,
    padding: moderateScale(10),
    borderRadius: moderateScale(30),
    marginRight: horizontalScale(10),
  },
  allCountryButton: {
    flex: 1,
    borderColor: Colors.Purple,
    borderWidth: 3,
    padding: moderateScale(10),
    borderRadius: moderateScale(30),
    marginLeft: horizontalScale(10),
  },
  searchButtonText: {
    color: Colors.White,
    fontWeight: "600",
    textAlign: "center",
  },
  allCountryButtonText: {
    color: Colors.Purple,
    fontWeight: "600",
    textAlign: "center",
  },
  clearIcon: {
    marginTop: verticalScale(14),
  },
});
