'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0b1221] text-gray-300 font-sans selection:bg-neon-cyan selection:text-deep-blue flex flex-col">
      <Header />
      
      <main className="flex-grow pt-[100px] pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 border-b border-white/10 pb-4">
          개인정보 처리방침
        </h1>

        <div className="space-y-12">
          
          <div className="bg-white/5 p-6 rounded-xl border border-white/10 mb-8 leading-relaxed">
            <p>계약의 신(이하 '회사')는 고객의 개인정보보호를 매우 중요시하며 고객이 제공하는 개인정보를 보호하기 위하여 항상 최선을 다해 노력하고 있습니다. 회사는 개인정보보호 관련 주요 법률인『정보통신망 이용촉진 및 정보보호에 관한 법률』의 기준에 따라 '개인정보취급방침'을 제정하고 준수하여 고객의 개인정보가 어떠한 용도와 방식으로 이용되고 있으며 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.</p>
          </div>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-neon-cyan mb-4">1. 개인정보 수집 항목 및 수집방법</h2>
            <div className="space-y-4 bg-white/5 p-6 rounded-xl border border-white/10 text-sm md:text-base leading-relaxed">
              <h3 className="font-bold text-white text-lg">1. 개인정보 수집항목</h3>
              <p>① 회사는 개인의 식별, 서비스 제공을 위해 수집하는 항목과 목적은 다음과 같습니다.</p>
              <p>② 이메일 : 회원제 서비스를 위한 본인식별, 매물접수 및 Q&A 본인식별</p>
              <p>③ 전화번호, 휴대폰번호, 회원 회사명, 회원사 사업자번호, 주소, 이메일: 상품상담 및 예약내역 확인, 약관의 주요 변경사항, 기타 마케팅 정보 등을 제공하기 위해 필요</p>
              <br/>
              <h3 className="font-bold text-white text-lg">2. 개인정보 수집방법</h3>
              <p>① 계약의 신에서 운영하는 홈페이지(home.gyesin.com 또는 gyesin.com)에 회원가입, 중개업소, 영업점, 제휴사, 투자 및 협력사 신청접수를 통항여 본인 확인의 제공 등으로 개인정보를 수집합니다.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-neon-cyan mb-4">2. 개인 정보의 수집 및 이용 목적</h2>
            <div className="space-y-4 bg-white/5 p-6 rounded-xl border border-white/10 text-sm md:text-base leading-relaxed">
              <p className="mb-2">회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.</p>
              
              <h3 className="font-bold text-white mt-4">1. 서비스 제공에 관한 계약 이행 및 서비스 제공을 따른 요금정산</h3>
              <p>① 매물접수 내역의 확인 및 상담, 컨텐츠 제공, 부동산서비스 이용시 회원의 우대 등</p>

              <h3 className="font-bold text-white mt-4">2. 회원관리</h3>
              <p>① 회원제서비스 이용을 위한 본인확인, 개인식별, 불량회원의 부정 이용 방지와 비인가 사용 방지, 가입 의사 확인, 이용 및 이용횟수 제한, 연령확인, 만 14세 미만 아동 개인정보 수집 시 법정 대리인 동의여부 확인, 분쟁조정을 위한 기록보존, 불만처리 등 민원처리, 고지사항 전달 등</p>

              <h3 className="font-bold text-white mt-4">3. 마케팅 및 광고에 활용</h3>
              <p>① 개인정보를 마케팅에 활용하지 않는 것이 원칙이나, 중요 신규 서비스 개발 시 광고 전달용으로 이메일을 발송할 수 있습니다.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-neon-cyan mb-4">3. 개인정보의 이용 및 보유기간</h2>
            <div className="space-y-4 bg-white/5 p-6 rounded-xl border border-white/10 text-sm md:text-base leading-relaxed">
              <p>고객님의 개인정보는 다음과 같이 개인정보의 수집목적 또는 제공받은 목적이 달성되면 파기됩니다. 단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원 정보를 보관 합니다.</p>
              <ul className="list-decimal list-inside space-y-2 mt-2">
                <li>계약 또는 청약철회 등에 관한 기록: 5년 (전자상거래등에서의 소비자보호에 관한 법률)</li>
                <li>대금결제 및 재화 등의 공급에 관한 기록: 5년 (전자상거래등에서의 소비자보호에 관한 법률)</li>
                <li>소비자의 불만 또는 분쟁처리에 관한 기록: 3년 (전자상거래등에서의 소비자보호에 관한 법률)</li>
                <li>개인정보는 회원 탈퇴시 자동으로 등록된 정보가 즉시 삭제가 됩니다.</li>
                <li>예약 정보시 입력한 개인정보는 투어 종료 이후에도 보존이 되며, 해당 고객의 요청(이용내역 확인 등)으로 일치하는 예약정보 검색을 위해 사용되며, 관계법령에 의한 기간이 지난후에는 기록이 소멸될 수 있습니다.</li>
              </ul>
            </div>
          </section>

           <section>
            <h2 className="text-xl md:text-2xl font-bold text-neon-cyan mb-4">4. 개인정보 제공 및 공유</h2>
            <div className="space-y-4 bg-white/5 p-6 rounded-xl border border-white/10 text-sm md:text-base leading-relaxed">
              <ul className="list-decimal list-inside space-y-2">
                <li>회사는 회원님의 동의가 있거나 관련 법령의 규정에 의한 경우를 제외하고 어떠한 경우에도 '개인정보의 수집 및 이용목적' 에서 고지한 범위를 넘어 서비스와 무관한 타 기업/기관에 제공하거나 이용하지 않습니다.</li>
                <li>영업의 양수 등 영업의 전부 또는 일부를 양도하거나, 합병ㆍ상속 등으로 서비스 제공자의 권리ㆍ의무를 이전 승계하는 경우 개인정보보호 관련 고객의 권리를 보장하기 위하여 반드시 그 사실을 회원에게 통지합니다. 이외에는 아래의 경우에 준합니다.</li>
                <li>형사소송법, 금융실명거래 및 비밀보장에 관한 법률, 신용정보의 이용 및 보호에 관한 법률, 지방세법, 소비자보호법, 한국은행법, 등 관계법령에 의하여 수사상의 목적으로 관계기관으로부터 요구가 있는 경우</li>
                <li>통계작성 학술연구나 시장조사를 위하여 특정 개인을 식별할 수 없는 형태로 광고주, 협력사나 연구단체 등에 제공하는 경우</li>
                <li>문화관광부 인증 우수상품에 관한 해당 관련기관의 요청이 있는 경우</li>
                <li>서비스 제공에 따른 요금정산을 위하여 필요한 경우</li>
                <li>회원님의 개인정보는 적합한 맞춤 상품 안내 및 원활한 상담/진행을 위한 정보제공 목적으로 아래와 같이 활용될 수 있습니다.</li>
                <li>회사의 상품 및 관련 서비스를 이용한 고객에게 한정하여 기획상품이나 다양한 서비스를 홍보하고 안내 드리기 위하여 개인정보 제공 및 공유에 동의한 고객에게 맞춤 서비스를 제공할 수 있습니다.</li>
                <li>회사는 고객님께 원활한 서비스를 위해 상담센터를 운영하고 있습니다. 고객님의 상품 상담과 진행에 관련하여 개인정보(성명,연락처,생일,성별) 및 상품이용정보를 당사에서 제공한 관리시스템을 통해 당사와 계약된 협력사에 한해서만 제한적으로 열람할 수 있도록 하고 있습니다. (회원님의 주민등록번호 등은 암호화되어 보여지지 않습니다.)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-neon-cyan mb-4">5. 개인정보의 자동 수집 장치에 관한 사항</h2>
             <div className="space-y-4 bg-white/5 p-6 rounded-xl border border-white/10 text-sm md:text-base leading-relaxed">
              <p>1. 회사는 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다.</p>
              <p>2. 쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자들의 PC 컴퓨터내의 하드디스크에 저장되기도 합니다.</p>
              <div className="pl-4 mt-2 space-y-2">
                <p>① 쿠키의 사용목적: 이용자가 방문한 각 서비스와 웹 사이트들에 대한 방문 및 이용형태, 인기 검색어, 보안접속 여부, 등을 파악하여 이용자에게 최적화된 정보 제공을 위해 사용됩니다.</p>
                <p>② 쿠키의 설치∙운영 및 거부 : 웹브라우저 상단의 도구&gt;인터넷 옵션&gt;개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부 할 수 있습니다.</p>
                <p>③ 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-neon-cyan mb-4">6. 개인정보의 열람, 정정, 동의 철회</h2>
            <div className="space-y-4 bg-white/5 p-6 rounded-xl border border-white/10 text-sm md:text-base leading-relaxed">
               <p>정보주체는 개인정보 보호법 제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다. 회사는 정보주체의 개인정보 열람청구가 신속하게 처리되도록 노력하겠습니다.</p>
               <div className="bg-black/20 p-4 rounded mt-4">
                  <h4 className="font-bold text-white mb-2">■ 개인정보 열람청구 접수, 처리부서</h4>
                  <ul className="space-y-1 text-gray-300">
                    <li><span className="font-bold text-gray-400">부서명 :</span> 운영지원팀</li>
                    <li><span className="font-bold text-gray-400">담당자 :</span> 이준</li>
                    <li><span className="font-bold text-gray-400">E-mail :</span> acanbe@gyesin.com</li>
                  </ul>
               </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-neon-cyan mb-4">7. 개인정보의 안정성 확보조치</h2>
            <div className="space-y-4 bg-white/5 p-6 rounded-xl border border-white/10 text-sm md:text-base leading-relaxed">
               <p>회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>
               <ul className="list-decimal list-inside space-y-2 mt-2">
                 <li>관리적 조치 : 내부관리계획 수립․시행, 정기적 직원 교육 등</li>
                 <li>기술적 조치 : 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 고유식별정보 등의 암호화, 보안프로그램 설치</li>
                 <li>물리적 조치 : 전산실, 자료보관실 등의 접근통제</li>
               </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-neon-cyan mb-4">8. 위탁처리</h2>
            <div className="space-y-4 bg-white/5 p-6 rounded-xl border border-white/10 text-sm md:text-base leading-relaxed">
               <p>1. 회사는 개인정보를 외부전문업체에 위탁하지 않습니다.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-neon-cyan mb-4">9. 고지의 의무</h2>
            <div className="space-y-4 bg-white/5 p-6 rounded-xl border border-white/10 text-sm md:text-base leading-relaxed">
               <p>1. 개인정보취급방침내용의 추가, 삭제 및 수정이 있을 시에는 개정 최소 7일전부터 웹 사이트의 공지사항을 통하여 고지할 것입니다. 또한 개인정보 취급방침에 버전번호 및 개정일자 등을 부여하여 개정여부를 쉽게 알 수 있도록 하고 있습니다.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-neon-cyan mb-4">10. 개인정보의 파기관리</h2>
            <div className="space-y-4 bg-white/5 p-6 rounded-xl border border-white/10 text-sm md:text-base leading-relaxed">
               <p>1. 회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.</p>
               <p>2. 정보주체로부터 동의받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.</p>
               <p>3. 개인정보 파기의 절차 및 방법은 다음과 같습니다.</p>
               <div className="pl-4 mt-2 space-y-2">
                 <p>① 파기절차 회사는 파기 사유가 발생한 개인정보를 선정하고, 회사의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.</p>
                 <p>② 파기방법 회사는 전자적 파일 형태로 기록․저장된 개인정보는 기록을 재생할 수 없도록 로우레밸포멧(Low Level Format) 등의 방법을 이용하여 파기하며, 종이 문서에 기록․저장된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.</p>
               </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-neon-cyan mb-4">11. 개인정보 취급위탁에 관한 사항</h2>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 text-sm md:text-base leading-relaxed">
                <p className="mb-4">당사는 고객의 민원사항의 처리와 상담을 위해 위탁이 아닌 당사에서 자체적으로 처리하고 있습니다.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="font-bold text-white mb-2 text-lg">1. 근무시간</h4>
                         <ul className="space-y-1 text-gray-300">
                             <li>① 평일 10:00 ~ 18:00</li>
                             <li>② 주말 및 공휴일 10:00 ~ 18:00</li>
                             <li>③ 팩스 : 02-6953-0052</li>
                             <li>④ 전자우편 : acanbe@gyesin.com</li>
                         </ul>
                         <p className="mt-4 text-gray-300">2. 그 외 개인정보에 관한 상담이 필요한 경우에는 한국정보보호진흥원(KISA)에서 운영하는 개인정보 침해신고센터 (전화 : 1336)으로 문의하실 수 있습니다.</p>
                         <p className="mt-2 text-gray-300">3. 고객님은 의견이나 불만 사항이 있을때 당사에서는 민원처리센터를 운영하고 있으며 연락처는 다음과 같습니다.</p>
                         <div className="mt-4">
                            <h4 className="font-bold text-white mb-2">4. [계약의 신 상담센터]</h4>
                            <ul className="space-y-1 text-gray-300">
                                <li>① 전자우편 : acanbe@gyesin.com</li>
                                <li>② 전화번호 : 0507-1371-1571</li>
                                <li>③ 팩스 : 02-6953-0052</li>
                            </ul>
                         </div>
                    </div>
                    <div className="space-y-6">
                         <div>
                            <h4 className="font-bold text-white mb-2 text-lg">신고 및 상담 관련 기관</h4>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <p className="font-bold text-gray-400">5. 개인정보침해신고센터</p>
                                    <p>① 전화 : 118 / ② 이메일 : 118@kisa.or.kr / ③ URL : http://www.118.or.kr</p>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-400">6. 정보보호마크 인증위원회</p>
                                    <p>① 전화 : 02-580-0533 / ② URL : http://www.privacymark.or.kr</p>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-400">7. 대검찰청 인터넷범죄수사센터</p>
                                    <p>① 전화 : 02-3480-2000 / ② URL : http://www.spo.go.kr/kor/depart/icic/main.jsp</p>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-400">8. 경찰청 사이버 테러 대응 센터</p>
                                    <p>① 전화 : 02-363-0112 / ② URL : http://www.netan.go.kr</p>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
          </section>

           <section>
            <h2 className="text-xl md:text-2xl font-bold text-neon-cyan mb-4">12. 개인정보 보호책임자</h2>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 text-sm md:text-base leading-relaxed">
                <p className="mb-4">1. 회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                     <div>
                        <h4 className="font-bold text-white mb-2 text-lg">■ 개인정보 보호책임자</h4>
                        <ul className="space-y-1 text-gray-300">
                             <li><span className="font-bold text-gray-400">성명 :</span> 이성종</li>
                             <li><span className="font-bold text-gray-400">직책 :</span> 영업본부 전무</li>
                            <li><span className="font-bold text-gray-400">연락처 :</span> 0507-1371-1571, acanbe@gyesin.com</li>
                        </ul>
                    </div>
                     <div>
                        <h4 className="font-bold text-white mb-2 text-lg">■ 개인정보 보호 담당부서</h4>
                        <ul className="space-y-1 text-gray-300">
                             <li><span className="font-bold text-gray-400">부서명 :</span> 운영지원팀</li>
                             <li><span className="font-bold text-gray-400">담당자 :</span> 이준</li>
                            <li><span className="font-bold text-gray-400">연락처 :</span> 0507-1371-1571, jlee@gyesin.com</li>
                        </ul>
                    </div>
                </div>
                <p>2. 정보주체께서는 회사의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 회사는 정보주체의 문의에 대해 지체없이 답변 및 처리해드릴 것입니다.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-neon-cyan mb-4">13. 개인정보 처리방침 변경</h2>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 text-sm md:text-base leading-relaxed">
               <p>1. 이 개인정보 처리방침은 2023.7.20.부터 적용됩니다.</p>
            </div>
          </section>

        </div>

        <div className="mt-16 flex justify-center">
          <Link href="/" className="px-8 py-4 bg-neon-cyan text-deep-blue font-bold rounded-lg transition-all hover:bg-white hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transform hover:-translate-y-1">
            홈으로 돌아가기
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
