import { 
    Heading, 
    Text,
    Table,
    Thead,
    Tbody,
    Tr,
    Td,
    TableContainer,
    Flex
} from '@chakra-ui/react';

import '../anime.css';

import { Noto_Sans_JP } from 'next/font/google';
const notoSansJP400 = Noto_Sans_JP({
    weight: '400',
    display: 'swap',
    preload: false,
});

export default function Skills() {
    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            direction="column"
            height="100vh"
            gap={6}
            px={4}
        >
            <Heading
                fontWeight={100}
                fontSize={{ base: 'lg', sm: 'xl', md: '2xl' }}
                lineHeight={'110%'}
                textAlign="center" // 見出しを中央揃えに
            >
                <Text as={'span'} color={'black.600'} className={notoSansJP400.className}>
                    保有資格
                </Text>
            </Heading>

            <TableContainer w="full" maxW="600px">
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Td>資格名</Td>
                            <Td>取得年月</Td>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>基本情報技術者試験</Td>
                            <Td>2022年6月 合格</Td>
                        </Tr>
                        <Tr>
                            <Td>応用情報技術者試験</Td>
                            <Td>2022年12月 合格</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Flex>
        
    );
}
