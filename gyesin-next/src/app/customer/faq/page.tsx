'use client';

import { Container, Accordion, ThemeIcon } from '@mantine/core';
import { IconHelp, IconQuestionMark } from '@tabler/icons-react';
import { Footer } from '@/components/layout/Footer';

export default function FAQPage() {
  const faqs = [
    {
      value: 'item-10',
      question: '아무래도 고객명단이 있어서 보안걱정이 되는데 안전한걸까요?',
      answer: '저희는 보안 전문 개발자가 직접 관리를 하고 있으며 사무실 외 다른 데스크톱에서 접속하실 시 유출 되지 않도록 보안 문제를 항상 신경쓰고 있습니다.',
    },
    {
      value: 'item-9',
      question: '기존 플랫폼과의 차이는 무엇인가요?',
      answer: '안녕하세요~~저희 "계약의 신"은...... 1. 국내 유일 반응형 웹 기반 플랫폼으로 인터넷이 있으면 언제, 어디서나 업무가 가능합니다. 2. 제작모토는 신속,정확,효율성 기반으로 공인중개사 업무에 있어 인원감축 및 매출 극대화가 이루어집니다. 3. 고객,매물,만기,계약관리의 알고리즘 적용으로 모두 연동되어 있어 사용에 최적화 되어 있습니다. 4. 공인중개사가 기획부터 끝까지 개발에 참여하여, 진정으로 공인중개사가 업무함에 있어 반드시 필요한 기능만 구성하였습니다.',
    },
    {
      value: 'item-8',
      question: '핸드폰으로도 전화착신(고객DB에 있는 고객 및 손님)이 되나요?',
      answer: '물론입니다. 사무실PC 및 핸드폰에 모든 고객이 전화가 오게되면, PC화면 및 핸드폰 액정에 누가 전화왔는지 바로 식별이 가능할 뿐아니라, 스마트폰으로 통화함과 동시에 업무(매물등록)를 할수 있게 되어 있습니다.',
    },
    {
      value: 'item-7',
      question: '매물관리는 어떻게 진행되나요?',
      answer: '“계약의 신”은 업무자동화 프로그램으로서 매일 해야할 일을 자동으로 분배시켜줌으로써, 매물을 100%관리 함으로 인해, 매출관리의 극대화를 실현하였습니다.',
    },
    {
      value: 'item-6',
      question: '매물종류가 아파트, 오피스텔, 다세대, 다가구, 상가, 꼬마빌딩, 건물인데 모두 적용 가능한가요?',
      answer: '“계약의 신”은 아파트, 오피스텔, 다세대, 다가구, 상가, 건물(빌딩)의 각 분야 공인중개사가 직접 다년간 걸쳐 만든 업무 TOOL로서, 각 ITEM별 최적화된 업무기능을 탑재하였습니다.',
    },
    {
      value: 'item-5',
      question: '아파트또는 오피스텔 신규단지 발생시 업무가 가능한가요?',
      answer: '“계약의 신”은 부동산 포탈(네이버 등)에서 API DB자료가 구축되기 전이라도, 사용자가 직접 물건을 미리 설정(동호수, 타입, 공급면적, 전용면적, 주소 등)하여 업무를 할수 있게 구성되어 있습니다.',
    },
    {
      value: 'item-4',
      question: '전화착신기능 적용시 통신사를 바꿔야하나요?',
      answer: '“계약의 신”은 SK, KT, LG-UPLUS 주요3사 인터넷전화를 모두 연동구축하였으므로, 통신사를 바꿔야 하는 번거로움이 없습니다.',
    },
    {
      value: 'item-3',
      question: '재택근무가 가능한가요?',
      answer: '네 가능합니다저희 계약의 신은 재택근무가 용이하도록 앱 출시, 웹기반 플랫폼으로 사무실 외 다른 환경에서도 작업이 가능합니다.',
    },
    {
      value: 'item-2',
      question: '엑셀에 고객정보 및 매물정보가 있는데 계약의 신을 이용하게 되면 수동적으로 하나씩 입력해야하나요?',
      answer: '저희 계약의 신을 이용하시게 되면 계약의 신에서 엑셀 업로드로 편리하게 고객정보 및 매물정보를 옮기실 수 있습니다. 보유하고 계신 고객정보 및 매물정보 액셀파일 전체를 업로드하면 계약의 신에 자동으로 업데이트가 됩니다.',
    },
    {
      value: 'item-1',
      question: '계약의 신을 쓰고 싶은데 어떻게 해야 하나요?',
      answer: '안녕하세요 "계약의 신"입니다. 우선 저희 플랫폼에 관심을 가져주셔서 감사드립니다. 저희 홈페이지 하단 ERP중개업소 회원신청 또는 1대1 문의하기를 통하여 질의주시면, 최대한 빠른시간내에 피드백 해드리도록 하겠습니다. 감사합니다.',
    },
  ];

  return (
    <>
      {/* Sub Banner */}
      <div className="relative w-full h-[300px] bg-gradient-to-r from-[#0b1221] to-[#1f2937] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="relative z-10 animate-fade-in-up">
            <p className="text-neon-cyan text-sm md:text-base font-bold tracking-widest mb-2 uppercase">FAQ</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">자주 묻는 질문</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
                서비스 이용 중 궁금하신 점을 빠르게 해결해 드립니다.
            </p>
        </div>
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-neon-purple/10 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-neon-cyan/10 rounded-full blur-[80px]"></div>
      </div>

      <Container size="lg" className="py-16">
        <div className="bg-[#111827] border border-[#1f2937] rounded-xl overflow-hidden shadow-xl p-6 md:p-10">
          <Accordion variant="separated" radius="md" chevronPosition="right" 
            styles={{
                item: {
                    backgroundColor: '#1f2937',
                    border: '1px solid #374151',
                    marginBottom: '1rem',
                    color: '#e5e7eb',
                },
                control: {
                    color: '#e5e7eb',
                    fontWeight: 600,
                    '&:hover': {
                        backgroundColor: '#374151',
                    }
                },
                content: {
                    color: '#9ca3af',
                    backgroundColor: '#111827', // darker internal background
                    borderTop: '1px solid #374151',
                    padding: '1.5rem',
                },
                label: {
                    paddingTop: '0.5rem',
                    paddingBottom: '0.5rem',
                }
            }}
          >
            {faqs.map((item) => (
              <Accordion.Item key={item.value} value={item.value}>
                <Accordion.Control icon={
                    <ThemeIcon color="cyan" variant="light" size="lg" radius="xl">
                        <IconHelp size={20} />
                    </ThemeIcon>
                }>
                  {item.question}
                </Accordion.Control>
                <Accordion.Panel>{item.answer}</Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </Container>
    </>
  );
}
