import CardComponent from "@/components/CardComponent";
import { AlertDialog, AlertDialogBackdrop, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader } from "@/components/ui/alert-dialog";
import { Button, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { list as initialList, listType } from "@/lib/mocks/list";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native";

export default function HomeScreen() {
  const [list, setList] = useState<listType[]>(initialList);
  const [showAlertDialog, setShowAlertDialog] = useState(false)
  const [itemSite, setItemSite] = useState<string | null>(null);
  const handleClose = () => setShowAlertDialog(false)

  useEffect(() => {
    setList(initialList);
  }, [list]);

  return (
    <>
      <ScrollView className="flex-1">
        <VStack space="sm" className="justify-between lg:flex-row pt-10">
          {list.map((item) => (
            <Pressable
              onPress={() => (setShowAlertDialog(true), setItemSite(item.site))}
              key={item.id}
            >
              <CardComponent item={item} />
            </Pressable>
          ))}
        </VStack>
      </ScrollView>
      <AlertDialog isOpen={showAlertDialog} onClose={handleClose} size="md">
        <AlertDialogBackdrop />
        <AlertDialogContent className="bg-[#6ea9b1] border-0">
          <AlertDialogHeader>
            <Heading className="text-typography-950 font-semibold" size="md">
              Deseja responder o formulário dessa atividade?
            </Heading>
          </AlertDialogHeader>
          <AlertDialogBody className="mt-3 mb-4">
            <Text size="sm" className="pt-1.5 w-[93%]">Código da atividade - <Text className="font-bold">{itemSite}</Text></Text>
          </AlertDialogBody>
          <AlertDialogFooter className="">
            <Button
              variant="outline"
              action="secondary"
              onPress={handleClose}
              size="sm"
            >
              <ButtonText action="secondary">Cancel</ButtonText>
            </Button>
            <Button size="sm" onPress={handleClose}>
              <ButtonText action="primary" >Confirmar</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>

  );
}


