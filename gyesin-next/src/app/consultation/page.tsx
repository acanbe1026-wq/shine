'use client';
import { Container, Title, Text, SimpleGrid, TextInput, Textarea, Button, Checkbox, Paper } from '@mantine/core';

export default function ConsultationPage() {
    return (
        <div className="py-20 bg-[#0a0a0a] min-h-screen">
            <Container size="sm">
                <Title className="text-white mb-2 text-center">상담 문의</Title>
                <Text c="dimmed" className="text-center mb-10">
                    전문 컨설턴트가 빠른 시일 내에 연락드리겠습니다.
                </Text>

                <Paper p="xl" radius="md" className="bg-[#111827] border border-gray-800">
                    <form className="space-y-4">
                        <SimpleGrid cols={{ base: 1, sm: 2 }}>
                            <TextInput label="이름" placeholder="홍길동" withAsterisk classNames={{ input: 'bg-gray-800 border-gray-700 text-white', label: 'text-gray-300' }} />
                            <TextInput label="연락처" placeholder="010-1234-5678" withAsterisk classNames={{ input: 'bg-gray-800 border-gray-700 text-white', label: 'text-gray-300' }} />
                        </SimpleGrid>

                        <TextInput label="이메일" placeholder="example@gyesin.com" classNames={{ input: 'bg-gray-800 border-gray-700 text-white', label: 'text-gray-300' }} />

                        <SimpleGrid cols={{ base: 1, sm: 2 }}>
                            <TextInput label="업체명" placeholder="(주)부동산" classNames={{ input: 'bg-gray-800 border-gray-700 text-white', label: 'text-gray-300' }} />
                            <TextInput label="지역" placeholder="서울 강남구" classNames={{ input: 'bg-gray-800 border-gray-700 text-white', label: 'text-gray-300' }} />
                        </SimpleGrid>

                        <Textarea label="문의 내용" placeholder="문의하실 내용을 자유롭게 적어주세요." minRows={4} classNames={{ input: 'bg-gray-800 border-gray-700 text-white', label: 'text-gray-300' }} />

                        <Checkbox label="개인정보 수집 및 이용에 동의합니다." classNames={{ label: 'text-gray-400' }} />

                        <Button fullWidth size="lg" variant="gradient" gradient={{ from: 'cyan', to: 'blue' }} className="mt-4">
                            문의하기
                        </Button>
                    </form>
                </Paper>
            </Container>
        </div>
    );
}
