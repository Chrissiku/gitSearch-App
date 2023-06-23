import { View, Text } from "react-native";
import React from "react";
import { Data } from "./utils/data";

type Props = {
  data: Data;
};

const Card = ({
  number,
  text,
  ...other
}: {
  number: string | number;
  text: string;
  [other: string]: any;
}) => {
  return (
    <View
      className="flex justify-center items-center rounded-md w-full h-20"
      {...other}
    >
      <View className="flex flex-row items-center justify-center gap-3">
        <Text className="text-gray-50 font-semibold text-center text-[20px]">
          {number}
        </Text>
        <Text className="text-gray-50 font-semibold">{text}</Text>
      </View>
    </View>
  );
};

const CardList = ({ data }: Props) => {
  return (
    <View className="flex flex-row flex-wrap space-y-5 py-5 mx-auto justify-center">
      <Card
        text="Public repos"
        number={data.public_repos}
        className="bg-blue-500"
      />

      <Card
        text="Followers"
        number={data.followers}
        className="bg-green-500"
      />
      <Card
        text="Following"
        number={data.following}
        className="bg-orange-500"
      />
    </View>
  );
};

export default CardList;
