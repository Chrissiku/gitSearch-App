import { View, Text } from "react-native";
import React from "react";

type Props = {
  allData: Record<string, any>;
};

const InfoCard = ({
  infoKey,
  infoValue,
}: {
  infoKey: string;
  infoValue: string;
}) => {
  return (
    <View className="flex flex-row items-center justify-start gap-5 py-2 border-b border-green-500">
      <Text className="font-semibold text-center text-[16px] text-green-800">
        {infoKey} :
      </Text>
      <Text className="text-gray-300 font-medium text-[14px]">{infoValue}</Text>
    </View>
  );
};

const AllInfo = ({ allData }: Props) => {
  return (
    <View className="py-5">
      {Object.entries(allData).map(([key, value]) => (
        <View key={key}>
          <InfoCard infoKey={key} infoValue={value} />
        </View>
      ))}
    </View>
  );
};

export default AllInfo;
