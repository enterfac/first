"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, X } from 'lucide-react';

const schedules = [
  {
    id: "schedule-1",
    title: "5/13 Master Class 한양",
    desc: "2024년 5월 13일(월) 19:00~21:30 | 한양대학교병원 본관 3층 강당 | 오프라인+온라인",
  },
  {
    id: "schedule-2",
    title: "5/20 임상사례 마스터클래스",
    desc: "2024년 5월 20일(월) 19:00~21:30 | 온라인 | 실시간 스트리밍",
  },
  {
    id: "schedule-3",
    title: "5/23 Master Class 서울",
    desc: "2024년 5월 23일(목) 19:00~21:30 | 서울아산병원 동관 6층 대강당 | 오프라인+온라인",
  },
  {
    id: "schedule-4",
    title: "5/27 임상사례 마스터클래스",
    desc: "2024년 5월 27일(월) 19:00~21:30 | 온라인 | 실시간 스트리밍",
  },
  {
    id: "schedule-5",
    title: "5/31 Master Class 세종",
    desc: "2024년 5월 31일(금) 19:00~21:30 | 세종충남대학교병원 2층 대강당 | 오프라인+온라인",
  },
];

const teams = [
  { value: "기획팀", label: "기획팀" },
  { value: "개발팀", label: "개발팀" },
  { value: "마케팅팀", label: "마케팅팀" },
  { value: "기타", label: "기타" },
];

const CampaignAuthentication = () => {
  const [showAuthInput, setShowAuthInput] = useState(false);
  const [timer, setTimer] = useState(0); // seconds
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (showAuthInput && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [showAuthInput, timer]);

  const handleAuthClick = () => {
    setShowAuthInput(true);
    setTimer(299); // 4분 59초 (299초)
  };

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60)
      .toString()
      .padStart(2, "0");
    const s = (sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  return (
    <div className="min-h-screen bg-[#fff] flex flex-col items-center pt-1 pb-2 text-gray-900">
      {/* 헤더 */}
      <header className="w-full mb-8">
        <div className="w-full flex justify-between items-center px-6 pt-1 pb-2">
          <span className="text-orange-500 font-bold text-xl">GSK</span>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900" onClick={(e) => { e.preventDefault(); handleLoginClick(); }}>신청정보 수정</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-900">사이트 바로가기</a>
          </div>
        </div>
        <div className="w-full border-t border-gray-200"></div>
        <div className="w-full flex justify-center mt-4">
          <div className="w-full max-w-5xl rounded overflow-hidden">
            <div className="bg-[#a51c30] w-full h-40 md:h-56 flex items-center justify-center relative">
              <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg text-center z-10">SHINGRIX WEBINAR</h1>
            </div>
          </div>
        </div>
      </header>

      {/* 로그인 모달 */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">로그인</h2>
              <button 
                className="text-gray-500 hover:text-gray-800" 
                onClick={() => setShowLoginModal(false)}
              >
                <X size={24} />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <Input 
                  placeholder="share01 - 참가고유코드를 입력해주세요." 
                  className="border rounded w-full px-3 py-2"
                />
              </div>
              <Button className="w-full bg-[#4945FF] hover:bg-[#3730a3] text-white py-2">
                로그인
              </Button>
              <div className="text-right">
                <a href="/find-participation-code" className="text-sm text-gray-600 hover:underline">참가고유코드 찾기</a>
              </div>
              <div className="mt-8 pt-4 border-t">
                <h3 className="font-semibold mb-2">심포지엄 사무국</h3>
                <p className="text-sm text-gray-600">도움이 필요하신가요?</p>
                <p className="text-sm text-gray-600">담당자: 02-1234-5678 (평일 09:00-18:00)</p>
                <p className="text-sm text-gray-600">이메일: support@webinars.co.kr</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 본문+사무국 박스 flex row */}
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row md:items-start md:gap-8">
        {/* 본문(왼쪽) */}
        <div className="flex-1">
          <main className="w-full bg-white flex flex-col gap-8">
            {/* 안내 */}
            <section className="mb-2">
              <h2 className="font-bold text-3xl mb-4">GSK Shingrix 오프라인 사전등록</h2>
              <div className="text-sm text-gray-500 mb-2">아래 내용을 입력해 주시면 등록이 완료됩니다. 개인정보 수집 항목, 이용 목적에 동의하셔야 참여가 가능합니다.</div>
            </section>

            {/* 일정 선택 */}
            <section className="mb-2">
              <h3 className="font-semibold text-lg mb-4 border-b pb-2">참석희망 일정 선택</h3>
              <ul className="flex flex-col gap-2">
                {schedules.map((s) => (
                  <li key={s.id} className="flex items-center justify-between border-b pb-2">
                    <div>
                      <div className="font-medium text-base">{s.title}</div>
                      <div className="text-xs text-gray-500">{s.desc}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id={s.id} />
                      <span className="text-sm text-gray-600">온라인 참가</span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* 기본 정보 */}
            <section className="mb-2">
              <h3 className="font-semibold text-lg mb-4 border-b pb-2">기본정보</h3>
              <form className="grid grid-cols-1 gap-4 max-w-2xl w-full">
                {/* 성명 */}
                <div className="flex items-center gap-4">
                  <Label htmlFor="name" className="w-24 flex-shrink-0 font-semibold">
                    성명 <span className="text-red-500">*</span>
                  </Label>
                  <Input id="name" placeholder="홍길동" className="flex-1 w-full" required />
                </div>
                {/* 휴대폰 + 인증버튼 + 인증번호 입력란(동일 row) */}
                <div className="flex items-center gap-4">
                  <Label htmlFor="phone" className="w-24 flex-shrink-0 font-semibold">
                    휴대폰 <span className="text-red-500">*</span>
                  </Label>
                  <div className="flex-1 flex flex-col gap-2 w-full">
                    <div className="flex gap-2 w-full">
                      <Input id="phone" placeholder="01011112222 (- 제외)" required className="flex-1 w-full" />
                      <Button type="button" className="whitespace-nowrap min-w-[96px]" onClick={handleAuthClick}>
                        인증
                      </Button>
                    </div>
                    {showAuthInput && (
                      <div className="flex gap-2 items-center w-full">
                        <div className="relative flex-1 max-w-xs w-full">
                          <Input placeholder="인증번호 입력" className="pr-16 w-full" />
                          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-red-500 font-semibold text-sm">
                            {timer > 0 ? formatTime(timer) : "시간초과"}
                          </span>
                        </div>
                        <Button variant="outline">확인</Button>
                        <Button type="button" className="whitespace-nowrap min-w-[96px]" onClick={handleAuthClick}>
                          다시 받기
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
                {/* 이메일 */}
                <div className="flex items-center gap-4">
                  <Label htmlFor="email" className="w-24 flex-shrink-0 font-semibold">
                    이메일 <span className="text-red-500">*</span>
                  </Label>
                  <Input id="email" placeholder="support@webinars.co.kr" className="flex-1 w-full" required />
                </div>
                {/* 병원명 + 검색 */}
                <div className="flex items-center gap-4">
                  <Label htmlFor="hospital" className="w-24 flex-shrink-0 font-semibold">
                    병원명
                  </Label>
                  <div className="relative flex-1 w-full">
                    <Input id="hospital" placeholder="병원명을 입력해 주세요" className="pr-10 w-full" />
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  </div>
                </div>
                {/* 소속(셀렉트) */}
                <div className="flex items-center gap-4">
                  <Label htmlFor="team" className="w-24 flex-shrink-0 font-semibold">
                    소속 <span className="text-red-500">*</span>
                  </Label>
                  <Select>
                    <SelectTrigger id="team" className="flex-1 w-full">
                      <SelectValue placeholder="팀 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      {teams.map((team) => (
                        <SelectItem key={team.value} value={team.value}>{team.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                {/* 담당자(비활성화) */}
                <div className="flex items-center gap-4">
                  <Label htmlFor="manager" className="w-24 flex-shrink-0 font-semibold">
                    담당자
                  </Label>
                  <Input id="manager" placeholder="담당자를 입력해 주세요 (없는 경우 - 기입)" className="flex-1 w-full" disabled />
                </div>
              </form>
            </section>

            {/* 이용약관 및 개인정보 동의 */}
            <section className="mb-2">
              <h3 className="font-semibold text-lg mb-4 border-b pb-2">이용약관 및 개인정보 동의</h3>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Checkbox id="agreement1" />
                  <Label htmlFor="agreement1" className="text-xs">Webinar 개인정보 처리방침 동의 (필수)</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="agreement2" />
                  <Label htmlFor="agreement2" className="text-xs">마케팅 정보 수신 동의 (선택)</Label>
                </div>
              </div>
              <div className="mt-2 text-xs text-gray-500 bg-gray-50 p-2 rounded">
                <div className="font-semibold mb-1">1. Webinar 개인정보 처리방침</div>
                Webinar 사전등록 개인정보 수집·이용·제공 및 제3자 제공에 대한 동의서<br />
                본인은 Webinar 사전등록을 위해 개인정보 수집·이용·제공 및 제3자 제공에 동의합니다.<br />
                <br />
                <div className="font-semibold mb-1">2. 마케팅 정보 수신 동의</div>
                GSK 마케팅 담당자는 귀하에게 연락할 수 있습니다. GSK 제품 정보, 질환 정보, GSK가 후원하는 교육 정보 등을 제공받을 수 있습니다.
              </div>
            </section>

            <Button className="w-full mt-4 h-12 text-base font-semibold bg-[#4f46e5] hover:bg-[#3730a3] text-white">사전등록하기</Button>
          </main>
        </div>
        {/* 심포지엄 사무국 박스(오른쪽) */}
        <div className="hidden md:block min-w-[220px]">
          <div className="bg-white border rounded-lg p-5 mb-8">
            <div className="font-semibold text-base mb-1">심포지엄 사무국</div>
            <div className="text-gray-700 text-base">02-6342-6830</div>
          </div>
        </div>
      </div>

      {/* 푸터 */}
      <footer className="w-full max-w-5xl mt-8 text-xs text-gray-400 text-center border-t pt-4">
        Trade marks are owned by or licensed to the GSK group of companies. ⓒ2023 GSK group of companies or its licensor.<br />
        PM-KR-SGX-WCNT-230002 August 2023
      </footer>
    </div>
  );
};

export default CampaignAuthentication;
