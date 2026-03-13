import React, { useState } from 'react';
import { FileText, Database, LayoutTemplate, Activity, ChevronRight, Info } from 'lucide-react';

const dataTypes = [
  {
    id: 'file',
    title: '파일 데이터',
    subtitle: 'File Data',
    icon: <FileText className="w-8 h-8 text-blue-500" />,
    color: 'bg-blue-50 border-blue-200',
    analogy: '📁 내 책상 위의 서류함',
    description: '가장 기본적이고 친숙한 형태의 데이터입니다. 운영체제의 파일 시스템 내에 저장되며, 파일명, 확장자, 경로 등의 속성을 가집니다.',
    features: [
      '데이터가 개별 파일 단위로 생성 및 관리됨',
      '문서, 이미지, 영상 등 다양한 포맷 지원',
      '폴더(디렉토리)를 통한 계층적 구조화'
    ],
    examples: '엑셀 문서(.xlsx), 사진(.jpg), 로그 텍스트(.txt)'
  },
  {
    id: 'database',
    title: '데이터베이스 데이터',
    subtitle: 'Database Data',
    icon: <Database className="w-8 h-8 text-emerald-500" />,
    color: 'bg-emerald-50 border-emerald-200',
    analogy: '🗄️ 체계적으로 정리된 도서관 색인',
    description: '데이터를 효율적으로 저장, 검색, 수정, 관리하기 위해 고도로 구조화된 형태입니다. 중복을 최소화하고 무결성을 유지합니다.',
    features: [
      '표(Table) 형태의 행(Row)과 열(Column) 구조 (RDBMS)',
      'SQL 등의 쿼리 언어를 통한 빠르고 정교한 검색',
      '다수의 사용자가 동시에 접근하고 수정 가능'
    ],
    examples: '고객 정보 테이블, 쇼핑몰 결제 내역, 상품 재고 데이터'
  },
  {
    id: 'content',
    title: '콘텐츠 데이터',
    subtitle: 'Content Data',
    icon: <LayoutTemplate className="w-8 h-8 text-purple-500" />,
    color: 'bg-purple-50 border-purple-200',
    analogy: '📰 사람을 위해 편집된 잡지나 웹페이지',
    description: '텍스트, 이미지, 메타데이터 등이 결합되어 사람에게 특정한 의미와 맥락을 전달하는 데이터입니다. 비정형 또는 반정형 데이터에 속합니다.',
    features: [
      '사람이 읽고 소비하기 위한 목적이 강함',
      'HTML, XML, JSON 등 태그와 구조를 포함함',
      '콘텐츠 관리 시스템(CMS)을 통해 관리됨'
    ],
    examples: '뉴스 기사, 블로그 포스트, SNS 게시글, 위키백과 문서'
  },
  {
    id: 'stream',
    title: '스트림 데이터',
    subtitle: 'Stream Data',
    icon: <Activity className="w-8 h-8 text-rose-500" />,
    color: 'bg-rose-50 border-rose-200',
    analogy: '🌊 멈추지 않고 계속 흐르는 강물',
    description: '일정 기간 동안 끊임없이 생성되어 연속적으로 흘러들어오는 데이터입니다. 저장보다 "실시간 처리 및 분석"이 핵심입니다.',
    features: [
      '시작과 끝이 정해져 있지 않은 무한한 데이터의 흐름',
      '시간적 순서(Time-series)가 매우 중요함',
      '실시간 모니터링 및 즉각적인 대응에 활용'
    ],
    examples: '실시간 주식 시세, IoT 센서 온도 변화, 웹 트래픽 로그'
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState(dataTypes[0].id);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Hero Section */}
      <header className="bg-white border-b border-slate-200 pt-20 pb-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            데이터의 형태를 이해하다
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
            디지털 시대의 정보는 다양한 방식으로 저장되고 활용됩니다.<br className="hidden md:block"/>
            저장 형태 관점에서 바라본 <span className="font-semibold text-blue-600">4가지 핵심 데이터 유형</span>을 쉽고 명확하게 알아보세요.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-24">
        
        {/* Grid Cards Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">4가지 데이터 유형 살펴보기</h2>
            <p className="text-slate-500">카드를 클릭하여 각 데이터의 상세 정보를 확인하세요.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataTypes.map((type) => (
              <div 
                key={type.id}
                onClick={() => setActiveTab(type.id)}
                className={`group cursor-pointer rounded-2xl p-8 border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-white
                  ${activeTab === type.id ? type.color + ' shadow-md' : 'border-slate-100 hover:border-slate-300'}
                `}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100">
                      {type.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{type.title}</h3>
                      <p className="text-sm font-medium text-slate-500">{type.subtitle}</p>
                    </div>
                  </div>
                  <ChevronRight className={`w-6 h-6 text-slate-300 transition-transform ${activeTab === type.id ? 'rotate-90 text-slate-600' : 'group-hover:translate-x-1'}`} />
                </div>
                
                <div className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full font-medium mb-4">
                  비유: {type.analogy}
                </div>
                
                <p className="text-slate-600 leading-relaxed mb-6">
                  {type.description}
                </p>

                <div className="space-y-4 border-t border-slate-100 pt-6">
                  <div>
                    <strong className="text-sm text-slate-900 block mb-2">핵심 특징</strong>
                    <ul className="space-y-2">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-slate-600">
                          <span className="mr-2 text-slate-400">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <strong className="text-sm text-slate-900 block mb-1 flex items-center">
                      <Info className="w-4 h-4 mr-1 text-slate-500" /> 대표적인 예시
                    </strong>
                    <p className="text-sm text-slate-600">{type.examples}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">한눈에 비교하기</h2>
            <p className="text-slate-500">각 데이터 유형이 어떻게 다르게 관리되고 활용되는지 요약했습니다.</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-800 text-slate-900">
                  <th className="py-4 px-4 font-bold whitespace-nowrap">유형</th>
                  <th className="py-4 px-4 font-bold">비유</th>
                  <th className="py-4 px-4 font-bold min-w-[200px]">목적 및 특징</th>
                  <th className="py-4 px-4 font-bold">관리 도구/시스템</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600 text-sm md:text-base">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-5 px-4 font-semibold text-slate-900 whitespace-nowrap">
                    <span className="flex items-center"><FileText className="w-4 h-4 mr-2 text-blue-500"/> 파일 데이터</span>
                  </td>
                  <td className="py-5 px-4">서류함</td>
                  <td className="py-5 px-4">독립적인 개별 콘텐츠 저장, 운영체제 종속적</td>
                  <td className="py-5 px-4">파일 시스템 (OS, 클라우드 스토리지)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-5 px-4 font-semibold text-slate-900 whitespace-nowrap">
                    <span className="flex items-center"><Database className="w-4 h-4 mr-2 text-emerald-500"/> 데이터베이스</span>
                  </td>
                  <td className="py-5 px-4">도서관 색인</td>
                  <td className="py-5 px-4">대량의 데이터 구조화, 빠른 검색, 무결성 보장</td>
                  <td className="py-5 px-4">DBMS (MySQL, Oracle, MongoDB 등)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-5 px-4 font-semibold text-slate-900 whitespace-nowrap">
                    <span className="flex items-center"><LayoutTemplate className="w-4 h-4 mr-2 text-purple-500"/> 콘텐츠 데이터</span>
                  </td>
                  <td className="py-5 px-4">웹페이지 / 잡지</td>
                  <td className="py-5 px-4">인간의 소비 목적, 메타데이터와 결합된 정보 전달</td>
                  <td className="py-5 px-4">CMS (WordPress, Notion 등)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-5 px-4 font-semibold text-slate-900 whitespace-nowrap">
                    <span className="flex items-center"><Activity className="w-4 h-4 mr-2 text-rose-500"/> 스트림 데이터</span>
                  </td>
                  <td className="py-5 px-4">흐르는 강물</td>
                  <td className="py-5 px-4">지속적인 데이터 유입, 실시간 처리 및 분석 요구</td>
                  <td className="py-5 px-4">스트리밍 플랫폼 (Apache Kafka, Spark 등)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 text-center text-slate-400 text-sm">
        <p>© 2026 Data Architecture Insight. All rights reserved.</p>
        <p className="mt-2">Designed to help understand the core concepts of data storage types.</p>
      </footer>
    </div>
  );
}