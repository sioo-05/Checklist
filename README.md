# React Todo App

React 학습을 위한 Todo 앱 실습 프로젝트입니다.

## 기술 스택

- **React 19** — UI 컴포넌트
- **Vite 8** — 빌드 도구 및 개발 서버
- **ESLint** — 코드 품질 관리

## 프로젝트 구조

```
src/
├── App.jsx              # 루트 컴포넌트 (상태 관리)
├── components/
│   ├── Header.jsx       # 헤더 (날짜 표시)
│   ├── Editor.jsx       # Todo 입력 폼
│   ├── List.jsx         # Todo 목록 및 검색
│   └── TodoItem.jsx     # 개별 Todo 아이템
```

## 주요 기능

- Todo 항목 추가 (버튼 클릭 또는 Enter 키)
- Todo 목록 실시간 검색 (대소문자 무관)
- 완료 여부 체크박스
- Todo 삭제 버튼

## 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 코드 린트
npm run lint
```

## 학습 포인트

- `useState` — todos 목록 및 입력값 상태 관리
- `useRef` — Todo ID 증가값 관리 (리렌더링 없이)
- Props drilling — 부모→자식 데이터 및 이벤트 핸들러 전달
- 조건부 렌더링 및 배열 `.map()` / `.filter()` 활용
