## 프로젝트 실행 방법

1. 배포 링크: [https://developer-t2.github.io/lxper/](https://developer-t2.github.io/lxper/).
2. 소스 코드 다운로드 및 모듈 설치(npm install)한 다음, 실행(npm start)

## 소스 폴더 구조(src 하위 폴더)

1. components

   - 프로젝트에 필요한 컴포넌트 관리(레이아웃, 기능 등)

2. config

   - 프로젝트 설정 관리(Material-UI 색상 등)

3. redux

   - Redux, Redux-Saga와 관련된 파일 모음
   - reducers: 스토어의 상태 변경과 관련된 파일 모음
   - sagas: 액션에 대한 비동기 작업 관련 파일 모음

4. routes
   - 화면 전환과 관련된 파일 모음

## 사용한 패키지

1. @material-ui/core, @material-ui/icons

   - 머티리얼 디자인 사용

2. axios

   - 서버와 통신

3. connected-react-router

   - 리덕스를 사용하여 라우터 관리

4. dotenv

   - 데이터 보안 관련

5. redux, react-redux, redux-saga

   - 리덕스 사용 및 리액트에서 리덕스 사용

6. react-router-dom

   - 리액트에서 라우터 사용

7. uuid

   - 문제 생성에 대한 ID 생성

8. 기타
   - CRA로 기본적으로 설치된 모듈들
   - Material-UI 등 설치 이후에 사용하지 않지만 경고로 인해 설치된 모듈들
