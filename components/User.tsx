import { View, Text, Image } from "react-native";
import React from "react";

type Props = {
  src: string;
  username: string;
};

const User = ({ src, username }: Props) => {
  return (
    <View className="flex flex-row items-center space-x-3 mt-5">
      <View className="w-12 h-12 rounded-full overflow-hidden">
        <Image source={{ uri: src }} className="w-full h-full object-cover" />
      </View>
      <Text className="text-lg text-gray-200 font-bold">{username}</Text>
    </View>
  );
};

export default User;
