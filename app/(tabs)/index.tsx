import CardComponent from "@/components/CardComponent";
import { VStack } from "@/components/ui/vstack";
import { list as initialList, listType } from "@/lib/mocks/list";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native";

export default function HomeScreen() {
  const [list, setList] = useState<listType[]>(initialList);

  useEffect(() => {
    setList(initialList);
  }, [list]);

  return (
    <ScrollView className="flex-1">
      <VStack space="sm" className="justify-between lg:flex-row pt-10">
        {list.map((item) => (
          <CardComponent key={item.id} item={item} />
        ))}
      </VStack>
    </ScrollView>
  );
}


