'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0b1221] text-gray-300 font-sans selection:bg-neon-cyan selection:text-deep-blue flex flex-col">
      <Header />
      
      <main className="flex-grow pt-[100px] pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 border-b border-white/10 pb-4">
          이용약관
        </h1>

        <div className="space-y-12">
          
          <section>
            <h2 className="text-xl md:text-2xl font-bold text-neon-cyan mb-4">제 1 장 총 칙</h2>
            <div className="space-y-6 bg-white/5 p-6 rounded-xl border border-white/10">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">제 1 조 (목적)</h3>
                <p>1. 이 약관은 계약의 신(이하 “회사”라 한다)홈페이지 제공하는 모든 서비스(이하“서비스”라 한다)의 이용조건 및 절차에 관한 사항을 규정함을 목적으로 합니다.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">제 2 조 (약관의 효력과 변경)</h3>
                <p>1. 이 약관의 내용은 서비스 화면에 게시하거나 기타의 방법으로 회원에게 공지함으로서 효력을 발생합니다.</p>
                <p>2. 회사는 이 규정을 변경할 수 있으며, 변경된 규정은 제1항과 같은 방법으로 공지함으로서 효력을 발생합니다.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">제 3 조 (약관의 준칙)</h3>
                <p>1. 이 약관에 명시되지 않은 사항은 전기통신기본법, 전기통신사업법 및 기타관계법령의 규정에 따릅니다.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">제 4 조 (용어의 정의)</h3>
                <p className="mb-2">1. 이 규정에서 사용하는 용어의 정의는 다음 각 호와 같습니다.</p>
                <ul className="list-none space-y-2 text-sm md:text-base pl-2">
                  <li>1) 회원 : 본 약관에 따라 회사가 제공하는 서비스를 받는 자</li>
                  <li>2) 아이디(ID) : 회원식별과 회원의 서비스 이용을 위하여 회원이 선정하고 회사가 승인한 문자 또는 숫자로 이루어진 조합</li>
                  <li>3) 패스워드(PASSWORD) : 회원의 정보 보호를 위해 이용자 자신이 설정한 영문자와 숫자의 조합</li>
                  <li>4) 이메일(e-mail) : 회원의 인터넷 메일계정</li>
                  <li>5) 운영자 : 서비스의 전반적인 관리와 원활한 운영을 위하여 회사에서 선정한 사람</li>
                  <li>6) 해지 : 회사 또는 회원이 서비스 개통 후 이용계약을 해약 하는 것</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-neon-cyan mb-4">제 2 장 회원가입</h2>
            <div className="space-y-6 bg-white/5 p-6 rounded-xl border border-white/10">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">제 1 조 (이용 계약의 성립)</h3>
                <p className="mb-2">1. 이용 계약은 이용자의 이용 신청에 대한 회사의 이용 응낙과 이용자의 약관 내용에 대한 동의로 성립됩니다.</p>
                <p className="mb-2">2. 회원에 가입하여 서비스를 이용하고자 하는 희망자는 회사에서 요청하는 개인 신상정보를 제공해야 합니다.</p>
                <p className="mb-2">3. 회사는 다음 각 호에 해당하는 이용계약신청에 대하여는 이를 응낙하지 아니할 수 있습니다.</p>
                <ul className="list-none space-y-2 text-sm md:text-base pl-4">
                  <li>1) 다른 사람의 명의를 사용하여 신청한 경우</li>
                  <li>2) 이용신청 시 필요내용을 허위로 기재하여 신청한 경우</li>
                  <li>3) 사회의 안녕질서 또는 미풍양속을 저해할 목적으로 신청한 경우</li>
                  <li>4) 기타 회사가 정한 이용신청요건이 미비된 경우</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">제 2 조 (계약사항의 변경)</h3>
                <p>1. 회원은 이용신청 시 기재한 사항이 변경되었을 경우에는 즉시 온라인 수정을 하여야 하며, 수정하지 아니하여 발생하는 문제의 책임은 회원에게 있습니다.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-neon-cyan mb-4">제 3 장 서비스이용</h2>
            <div className="space-y-6 bg-white/5 p-6 rounded-xl border border-white/10">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">제 1 조 (서비스 이용 시간)</h3>
                <p>1. 서비스의 이용은 회사의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴 1일 24시간을 원칙으로 합니다. 다만 정기점검, 홈페이지 업그레이드 등의 필요로 회사가 정한 날이나 시간은 그러하지 않습니다.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">제 2 조 (회원 아이디, 이메일과 비밀번호 관리에 대한 의무)</h3>
                <p className="mb-2">1. 아이디, 이메일과 비밀번호에 관한 모든 관리책임은 회원에게 있습니다. 회원에게 부여된 아이디(ID), 이메일(e-mail)과 비밀번호의 관리소홀, 부정사용에 의하여 발생하는 모든 결과에 대한 책임은 회원에게 있습니다.</p>
                <p className="mb-2">2. 자신의 아이디(ID), 이메일(e-mail)과 비밀번호가 부정하게 사용된 경우 회원은 반드시 회사에 그 사실을 통보해야 합니다.</p>
                <p className="mb-2">3. 회사는 중복로그인 방지를 위하여, 한 계정(한개의 아이디와 패스워드)당 한 개의 기기(PC 또는 모바일)에서 만의 접속을 하게끔 설정시스템을 구축하였고, 회원은 반드시 이 규정을 지켜야합니다.</p>
                <p>4. 회사의 플랫폼은 웹기반 플랫폼으로 인터넷이 허용되는 어느장소에서도 계정을 알면 접속을 하여 업무를 처리할 수 있고, 회사는 외부 접속시 발생될 수 있는 DB노출의 환경을 막기위해 이중로그인 시스템(카카오톡 알림톡 또는 이메일 인증)을 구축하였으나, 그럼에도 불구하고 사용자로 인하여, 계정관리 및 접속해제의 관리 의무는 회원에게 있으며, 이에 따라 발생되는 모든 책임은 회원에게 있습니다.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">제 3 조 (정보의 제공)</h3>
                <p>1. 회사는 회원이 서비스 이용 중 필요가 있다고 인정되는 다양한 정보에 대해서 전자우편, 유선매체, 서신우편 등의 방법으로 회원에게 제공할 수 있습니다.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">제 4 조 (게시물 관리 및 삭제)</h3>
                <p className="mb-2">1. 회사는 회원이 게시하거나 등록하는 서비스내의 내용물이 다음 각 호의 1에 해당한다고 판단되는 경우에 사전통지 없이 삭제할 수 있습니다.</p>
                <ul className="list-none space-y-2 text-sm md:text-base pl-4">
                  <li>1) 다른 회원 또는 제3자를 비방하거나 중상모략으로 명예를 손상시키는 내용인 경우</li>
                  <li>2) 공공질서 및 미풍양속에 위반되는 내용인 경우</li>
                  <li>3) 범죄적 행위에 결부된다고 인정되는 내용인 경우</li>
                  <li>4) 제 3 자의 저작권 등 기타 권리를 침해하는 내용인 경우</li>
                  <li>5) 회사에서 규정한 게시기간을 초과한 경우</li>
                  <li>6) 해당 게시판의 주제에 관계없는 광고성 내용을 기재한 경우</li>
                  <li>7) 기타 관계법령에 위반된다고 판단되는 경우</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">제 5 조 (게시물의 저작권 및 사용권)</h3>
                <p className="mb-2">1. 서비스에 게재된 자료에 대한 권리는 다음 각 호와 같습니다.</p>
                <ul className="list-none space-y-2 text-sm md:text-base pl-4">
                  <li>1) 게시물에 대한 권리와 책임은 게시자에게 있으며, 회사는 각 게시물에 대한 사용권을 갖습니다.</li>
                  <li>2) 회원은 서비스를 이용하여 얻은 정보를 가공, 판매하는 행위 등 서비스에 게재된 자료를 상업적으로 사용할 수 없습니다.</li>
                  <li className="pl-4 text-gray-400">단, 비상업적 목적으로 사용하고자할 경우에는 회사의 동의를 얻어 사용할 수 있습니다.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">제 6 조 (서비스 제공의 중지)</h3>
                <p className="mb-2">1. 회사는 다음 각 호에 해당하는 경우 서비스 제공을 중지할 수 있습니다.</p>
                <ul className="list-none space-y-2 text-sm md:text-base pl-4 mb-2">
                  <li>1) 서비스용 설비의 보수 등 공사로 인한 부득이한 경우</li>
                  <li>2) 전기통신사업법에 규정된 기간통신사업자가 전기통신서비스를 중지했을 경우</li>
                </ul>
                <p>2. 회사는 국가비상사태, 정전, 서비스 설비의 장애 또는 서비스 이용의 폭주 등으로 정상적인 서비스 이용에 지장이 있는 때에는 서비스의 전부 또는 일부를 제한하거나 정지할 수 있습니다.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-neon-cyan mb-4">제 4 장 책 임</h2>
            <div className="space-y-6 bg-white/5 p-6 rounded-xl border border-white/10">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">제 1 조 (회사의 의무)</h3>
                <p className="mb-2">1. 회사는 특별한 사정이 없는 한 이용자가 신청한 서비스 제공 개시일에 서비스를 이용할 수 있도록 합니다.</p>
                <p className="mb-2">2. 회사는 이 약관에서 정한 바에 따라 계속적, 안정적으로 서비스를 제공할 의무가 있습니다.</p>
                <p>3. 회사는 서비스 제공과 관련해서 알고 있는 회원의 신상정보를 본인의 승낙없이 제 3자에게 누설, 배포하지 않습니다. 단, 전기통신기본법 등 법률의 규정에 의해 국가기관의 요구가 있는 경우, 범죄에 대한 수사상의 목적이 있거나 정보통신 윤리위원회의 요청이 있는 경우 또는 기타 관계법령에서 정한 절차에 따른 요청이 있는 경우에는 그러하지 않습니다.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">제 2 조 (회원의 의무)</h3>
                <p className="mb-2">1. 회원은 서비스를 이용할 때 다음 각 호의 행위를 하지 않아야 합니다..</p>
                <ul className="list-none space-y-2 text-sm md:text-base pl-4 mb-4">
                  <li>1) 다른 회원의 이메일(e-mail)을 부정하게 사용하는 행위</li>
                  <li>2) 서비스에서 얻은 정보를 회사의 사전승낙 없이 회원의 이용이외의 목적으로 복제하거나 이를 출판 및 방송 등에 사용하거나 제 3 자에게 제공하는 행위</li>
                  <li>3) 제 3자의 저작권 등 기타 권리를 침해하는 행위</li>
                  <li>4) 공공질서 및 미풍양속에 위반되는 내용의 정보, 문장, 도형 등을 타인에게 유포하는 행위</li>
                  <li>5) 범죄와 결부된다고 객관적으로 판단되는 행위</li>
                  <li>6) 서비스의 이용권한, 기타 이용 계약상 지위를 타인에게 양도, 증여하는 행위</li>
                  <li>7) 회사가 서비스에 게시한 정보를 변경하거나 전송하는 행위</li>
                  <li>8) 회사와 기타 제3자의 저작권, 영업비밀, 특허권 등 지적재산권을 침해하는 행위</li>
                  <li>9) 자신의 재산상 이익을 위하여 허위의 정보를 유통하거나 비정상적으로 서비스를 이용하는 행위</li>
                  <li>10) 해킹을 통해서 다른 사용자의 정보를 취득 및 사용하는 행위</li>
                  <li>11) 기타 관계법령에 위배되는 행위</li>
                </ul>
                <p className="mb-2">2. 회원은 이 규정에서 규정하는 사항과 서비스 이용안내 또는 주의사항을 준수하여야 합니다.</p>
                <p className="mb-2">3. 회원은 내용별로 회사가 공지사항에 게시하거나 별도로 공지한 이용제한 사항을 준수하여야 합니다.</p>
                <p>4. 회원은 회사의 사전승낙없이는 서비스를 이용하여 영업활동을 할 수 없으며, 영업활동의 결과와 회원이 규정에 위반한 영업활동을 이용하여 발생한 결과에 대하여 회사는 책임을 지지 않습니다.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-neon-cyan mb-4">제 5 장 계약해지 및 이용제한</h2>
            <div className="space-y-6 bg-white/5 p-6 rounded-xl border border-white/10">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">제 1 조 (계약해지 및 이용제한)</h3>
                <p className="mb-2">1. 회원이 이용계약을 해지하고자 하는 때에는 회원 본인이 온라인을 통해 회사에 해지신청을 하여야 합니다.</p>
                <p className="mb-2">2. 회사는 회원이 다음 각 호의 1에 해당하는 행위를 하였을 경우 사전통지없이 이용계약을 해지하거나 또는 기간을 정하여 서비스이용을 중지할 수 있습니다.</p>
                <ul className="list-none space-y-2 text-sm md:text-base pl-4">
                  <li>1) 타인의 서비스 아이디(ID), 이메일(e-mail) 및 비밀번호를 도용한 경우</li>
                  <li>2) 서비스 운영을 고의로 방해한 경우</li>
                  <li>3) 공공질서 및 미풍양속에 저해되는 내용을 고의로 유포시킨 경우</li>
                  <li>4) 회원이 국익 또는 사회적 공익을 저해할 목적으로 서비스 이용을 계획 또는 실행하는 경우</li>
                  <li>5) 타인의 명예를 손상시키거나 불이익을 주는 행위를 한 경우</li>
                  <li>6) 기타 회사가 정한 이용조건에 위배되는 경우</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">제 2 조 (이용 제한 및 해제 절차)</h3>
                <p className="mb-2">1. 회원이 이용계약을 해지하고자 하는 때에는 회원 본인이 인터넷을 통하여 해지신청을 하여야 하며, 회사에서는 본인 여부를 확인 후 조치합니다.</p>
                <p className="mb-2">2. 회사는 회원이 다음 각 호에 해당하는 행위를 하였을 경우 해지조치 30일전까지 그 뜻을 이용고객에게 통지하여 의견진술할 기회를 주어야 합니다.</p>
                <ul className="list-none space-y-2 text-sm md:text-base pl-4">
                  <li>1) 타인의 이용자ID 및 패스워드를 도용한 경우</li>
                  <li>2) 서비스 운영을 고의로 방해한 경우</li>
                  <li>3) 허위로 가입 신청을 한 경우</li>
                  <li>4) 같은 사용자가 다른 ID로 이중 등록을 한 경우</li>
                  <li>5) 공공질서 및 미풍양속에 저해되는 내용을 유포시킨 경우</li>
                  <li>6) 타인의 명예를 손상시키거나 불이익을 주는 행위를 한 경우</li>
                  <li>7) 서비스의 안정적 운영을 방해할 목적으로 다량의 정보를 전송하거나 광고성 정보를 전송하는 경우</li>
                  <li>8) 정보통신설비의 오작동이나 정보 등의 파괴를 유발시키는 컴퓨터바이러스 프로그램 등을 유포하는 경우</li>
                  <li>9) 회사 또는 다른 회원이나 제3자의 지적재산권을 침해하는 경우</li>
                  <li>10) 타인의 개인정보, 이용자ID 및 패스워드를 부정하게 사용하는 경우</li>
                  <li>11) 회원이 자신의 홈페이지나 게시판 등에 음란물을 게재하거나 음란 사이트를 링크하는 경우</li>
                  <li>12) 기타 관련법령에 위반된다고 판단되는 경우</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-neon-cyan mb-4">제 6 장 서비스 이용 책임</h2>
            <div className="space-y-6 bg-white/5 p-6 rounded-xl border border-white/10">
              <p>1. 서비스를 이용하여 해킹, 음란사이트 링크, 상용S/W 불법배포 등의 행위를 하여서는 아니되며, 이를 위반으로 인해 발생한 영업활동의 결과 및 손실, 관계기관에 의한 법적 조치 등에 관하여는 회사는 책임을 지지 않습니다.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-neon-cyan mb-4">제 7 장 손해배상 등</h2>
            <div className="space-y-6 bg-white/5 p-6 rounded-xl border border-white/10">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">제 1 조 (손해배상)</h3>
                <p className="mb-2">1. 회사는 회사가 제공하는 상품구매등 유료 또는 무료로 제공되는 것을 제외한 일체의 무료로 제공되는 서비스의 이용과 관련하여 회원에게 발생한 어떠한 손해에 관하여도 책임을 지지 않습니다.</p>
                <p>2. 회사는 회사가 제공하는 상품구매등 유료로 제공되는 서비스와 관련되어 회사의 귀책사유로 발생하는 모든 손해에 관하여 관계법률이 정하는 손해배상을 해당회원에게 하여야 합니다.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">제 2 조 (면책조항)</h3>
                <p className="mb-2">1. 회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.</p>
                <p className="mb-2">2. 회사는 회원의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다.</p>
                <p className="mb-2">3. 회사는 회원이 서비스를 이용하여 기대하는 손익이나 서비스를 통하여 얻은 자료로 인한 손해에 관하여 책임을 지지 않습니다.</p>
                <p>4. 회사는 회원이 서비스에 게재한 정보, 자료, 사실의 신뢰도, 정확성 등 내용에 관하여는 책임을 지지 않습니다.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">제 3 조 (관할법원)</h3>
                <p>1. 서비스의 이용으로 발생한 분쟁에 대해 소송이 제기될 경우 회사의 본사 소재지를 관할하는 법원을 관할법원으로 합니다.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-neon-cyan mb-4">제 8 장 유료서비스 이용 및 결재</h2>
            <div className="space-y-6 bg-white/5 p-6 rounded-xl border border-white/10">
               <div>
                  <h3 className="text-lg font-bold text-white mb-2">제 1 조 (유료서비스 이용 및 결재)</h3>
                  <p className="mb-2">1. 구독은 구독이 취소될 때까지 계속 유지됩니다. 본 약관에 명시적으로 허용되지 않는 한 구독 요금은 환불되지 않음에 동의합니다.</p>
                  <p className="mb-2">2. 요금은 변경될 수 있으며 이러한 변경 내용은 사용자에게 사전 통지됩니다. 요금 변경은 현재 요금제 기간이 끝난 후에 적용되며 통지 후 다음 결제 기한부터 변경이 적용됩니다.</p>
                  <p className="mb-2">3. 서비스 또는 새 요금을 원하지 않는 경우 언제든지 서비스를 다운그레이드(계정수 축소) 또는 업그레이드(계정수 확대)하거나 취소할 수 있습니다. 이 경우 즉시 결재 반영적용 됩니다.</p>
                  <p className="mb-2">4. 결재방식은 카드(신용카드 또는 체크카드)등록으로 적용되며, 가상계좌 또는 현금입금 방식은 지원되지 않으며, 월 자동결재 됩니다. 또한, 언제든지 카드 변경은 회원이 직접 할 수 있습니다.</p>
                  <p>5. 문자전송관련 유료 결재방식은 기존 등록한 카드 또는 타 카드로 2가지 방식으로 결재가 되며, 금액충전을 하여 회원은 사용하게 됩니다.</p>
               </div>
               <div>
                  <h3 className="text-lg font-bold text-white mb-2">제 2 조 (보증 및 책임의 제한)</h3>
                  <p className="mb-2">1. 회사는 안정적인 서비스 제공을 위해 노력합니다. 다만, 회사의 책임 없이 서비스 중단이나 오류가 발생할 수 있습니다.</p>
                  <p>2. 회사는 고의 또는 과실로 인하여 회원이 입은 손해를 배상하되, 특별한 사정으로 통상적인 범위를 벗어나는 손해는 회사의 고의 또는 중대한 과실을 제외하고는 책임지지 않습니다.</p>
               </div>
               <div>
                  <h3 className="text-lg font-bold text-white mb-2">제 3 조 (양도금지)</h3>
                  <p>
                      회원은 서비스의 이용권한, 기타 이용계약상의 지위를 타인에게 양도, 증여할 수 없으며, 이를 담보로 제공할 수 없습니다.
                  </p>
               </div>
            </div>
          </section>

          <section className="text-center pt-8 border-t border-white/10">
            <p className="text-lg text-gray-400 font-bold">[부칙] (시행일) 이 약관은 2023년 7월 20일부터 시행합니다.</p>
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
