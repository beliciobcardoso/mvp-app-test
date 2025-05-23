import { Card } from "@/components/ui/card";
import {
    GlobeIcon,
    Icon,
    MenuIcon
} from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { listType } from "@/lib/mocks/list";
import { Box } from "./ui/box";


export default function CardComponent({ item }: { item: listType }) {
    return (
        <Card size="md" variant="filled" className="flex w-fit rounded-3xl bg-[#E9EEF0] mx-4 p-0">
            <Box className="rounded-t-3xl bg-[#008191] p-2">
                <Text className="flex-1 text-center text-sm text-white font-bold">
                    {item.scorper}
                </Text>
            </Box>
            <Box className="pl-2">
                <Text size="sm" className="uppercase text-xl">{item.client}</Text>
            </Box>
            <Box className="pl-2 w-[50%]">
                <Text size="sm" className="uppercase font-bold text-xl">{item.site}</Text>
            </Box>
            <Box className="flex flex-row items-center">
                <Icon as={GlobeIcon} className="text-typography-500 m-2 w-4 h-4" />
                <Text size="sm" className="flex flex-wrap w-[93%]">{item.address}</Text>
            </Box>
            <Box className="flex flex-row items-center">
                <Icon as={MenuIcon} className="text-typography-500 m-2 w-4 h-4" />
                <Text size="sm">{item.activity}</Text>
            </Box>
            <Box className="flex flex-row justify-between">
                <Text size="sm" className={
                    `${item.status === "APROVADO" ? "bg-[#58DA47]" : item.status === "REPROVADO" ? "bg-[#F2484B]" : "bg-[#EAFA71]"}
                    px-6 py-2 rounded-tr-3xl rounded-bl-3xl font-bold text-[#494A50]
                    `}>{item.status}</Text>
                <Text size="sm" className="pr-2">{item.idActivity}</Text>
            </Box>
        </Card>
    );
}