# React Todo App

React 학습을 위한 Todo CRUD 앱 실습 프로젝트입니다.

## 기술 스택

- **React 19** — UI 컴포넌트
- **Vite** — 빌드 도구 및 개발 서버
- **ESLint** — 코드 품질 관리

## 프로젝트 구조

```
src/
├── App.jsx              # 루트 컴포넌트 (CRUD 상태 관리)
├── components/
│   ├── Header.jsx       # 헤더 (현재 날짜 표시)
│   ├── Editor.jsx       # Todo 입력 폼 (Create)
│   ├── List.jsx         # Todo 목록 및 검색 (Read)
│   └── TodoItem.jsx     # 개별 Todo 아이템 (Update / Delete)
```

## 주요 기능 (CRUD)

| 기능 | 설명 |
|------|------|
| **Create** | 입력 후 버튼 클릭 또는 Enter로 Todo 추가 |
| **Read** | 전체 목록 렌더링 및 실시간 검색 (대소문자 무관) |
| **Update** | 체크박스로 완료 여부 토글 (`isDone`) |
| **Delete** | 삭제 버튼으로 Todo Item 제거 |

## 데이터 구조

```js
{
  id: number,       // useRef로 관리하는 고유 ID
  isDone: boolean,  // 완료 여부
  content: string,  // Todo 내용
  date: number,     // 생성 시각 (timestamp)
}
```

## 컴포넌트 구조 및 데이터 흐름

```
App
├── state: todos[]         ← CRUD 함수 정의 (onCreate, onUpdate, onDelete)
│
├── Header                 ← 날짜만 표시 (props 없음)
├── Editor                 ← onCreate 전달 → 새 Todo 생성
└── List                   ← todos, onUpdate, onDelete 전달
    └── TodoItem           ← onUpdate(id), onDelete(id) 호출
```

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

- `useState` — todos 배열 및 검색어 상태 관리
- `useRef` — Todo ID 증가값 관리 (리렌더링 없이)
- Props drilling — 부모→자식으로 데이터 및 이벤트 핸들러 전달
- 배열 메서드 — `.map()` (렌더링/수정), `.filter()` (검색/삭제)
- CRUD 패턴 — U/D는 `targetId`로 대상 특정, C는 새 id 부여하는 방식으로 구현
