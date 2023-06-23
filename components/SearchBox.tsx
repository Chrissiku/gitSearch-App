import { View, TextInput, Pressable, Text } from "react-native";
import React, { useState } from "react";

type Props = {
  onSearch: Function;
  className?: string;
};

const SearchBox = ({ onSearch }: Props) => {
  const [username, setUsername] = useState<string>("");
  return (
    <View className="flex flex-row items-center justify-between space-x-4 mx-auto mt-5">
      <TextInput
        placeholder="Enter your username here ... "
        className="rounded-lg w-3/4 border border-gray-100 p-2 text-white focus:border-2 focus:border-blue-500"
        placeholderTextColor="#ccc"
        onChangeText={(text: string) => setUsername(text)}
      />
      <Pressable
        className="bg-sky-600 px-4 py-3 rounded-lg"
        onPress={() => onSearch(username)}
      >
        <Text className="text-gray-50">Search</Text>
      </Pressable>
    </View>
  );
};

export default SearchBox;
