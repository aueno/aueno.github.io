'use client'

import { useEffect } from 'react';
import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Icon,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
import { ReactElement } from 'react'
import {
    FcBullish,
    FcDataSheet,
    FcDiploma1,
} from 'react-icons/fc'
import { FaExternalLinkAlt } from "react-icons/fa";

import AOS from 'aos';
import 'aos/dist/aos.css';

interface CardProps {
    heading: string
    description: string
    icon: ReactElement
    href: string
}

const Card = ({ heading, description, icon, href }: CardProps) => {
    return (
        <Box
            maxW={{ base: 'full', md: '275px' }}
            w={'full'}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={5}>
            <Stack align={'start'} spacing={2}>
                <Flex
                    w={16}
                    h={16}
                    align={'center'}
                    justify={'center'}
                    color={'white'}
                    rounded={'full'}
                    bg={useColorModeValue('gray.100', 'gray.700')}>
                    {icon}
                </Flex>
                <Box mt={2}>
                    <Text fontSize={'lg'} fontWeight={'600'}>
                        {heading}
                    </Text>
                    <Text mt={1} fontSize={'sm'}>
                        {description}
                    </Text>
                </Box>
                <Button as={'a'} href={href} target='_blank' variant={'link'} colorScheme={'blue'} size={'sm'}>
                    {href ? <>サイト・機能概要（PDF）へ &nbsp; <FaExternalLinkAlt /></> : ''}
                </Button>
            </Stack>
        </Box>
    )
}

export default function Works() {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <Box p={4} pt={{ base: '20', md: '24' }}>
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
                    Works
                </Heading>
            </Stack>

            <Container maxW={'5xl'} mt={12}>
                <Flex flexWrap="wrap" gridGap={6} justify="center">
                    <div data-aos="fade-up" data-aos-delay="100">
                        <Card
                            heading={'積立シミュレーション'}
                            icon={<Icon as={FcBullish} w={10} h={10} />}
                            description={'複利計算を行うシミュレーションツールです．目標資産額から，必要な積立額を逆算する機能も実装しています．'}
                            href={'https://aueno.github.io/accum-sim/'}
                        />
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300">
                        <Card
                            heading={'統計解析システム'}
                            icon={<Icon as={FcDataSheet} w={10} h={10} />}
                            description={'関数やコマンドを入力することなく，ヒストグラム作成・相関分析・最小二乗法計算などを行うことができるWebアプリケーションです．'}
                            href={'https://aueno.github.io/charts-generator/'}
                        />
                    </div>
                    <div data-aos="fade-up" data-aos-delay="500">
                        <Card
                            heading={'履修管理システム（非公開）'}
                            icon={<Icon as={FcDiploma1} w={10} h={10} />}
                            description={'Laravelを用いて，CRUDアプリケーションを実装しました．SAML認証によるシングルサインオンも併せて実装しています．'}
                            href={'./academic-affairs.pdf'}
                        />
                    </div>
                </Flex>
            </Container>
        </Box>
    )
}
