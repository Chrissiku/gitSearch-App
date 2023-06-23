import React, { useState, useCallback, useEffect } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import SearchBox from "./components/SearchBox";
import User from "./components/User";
import CardList from "./components/CardList";
import { Data } from "./components/utils/data";
import AllInfo from "./components/AllInfo";

const App = () => {
  const [data, setData] = useState<Data>();
  const defaultUsername = "Chrissiku";
  const search = useCallback((searchTerm: string) => {
    if (searchTerm == "") {
      alert("please entre something");
      return;
    }
    fetch(`https://api.github.com/users/${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  useEffect(() => {
    // Set loading state to true on app launch
    search(defaultUsername); // Fetch data for the default username on app launch
  }, [defaultUsername, search]);

  return (
    <SafeAreaView className="text-white bg-gray-800 flex-1 py-12 px-5 mx-auto w-full">
      <ScrollView className="h-screen" keyboardShouldPersistTaps="handled">
        <SearchBox onSearch={search} />
        {data && (
          <>
            <User src={data?.avatar_url} username={data?.login} />
            <CardList data={data} />
            <View>
              <Text className="text-[20px] text-gray-300">More data</Text>
              {data && <AllInfo allData={data} />}
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
