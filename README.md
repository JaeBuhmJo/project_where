# 어디서봄? (where)

<div align="center">
<img width="329" alt="image" src="https://github.com/JaeBuhmJo/project_where/assets/96267539/e013864e-60d7-4026-aaba-080d9fa4ec3e">

</div>

# Web Page v2.0
> **SCSA 22기 자바 프로젝트 ** <br/> **개발기간: 2024.05.13 ~ 2024.05.24**

## 프로젝트 소개
어디서 만날지 고민하지마!
서로의 출발 위치를 선택하면 중간 장소를 찾아줘요.

## Stacks 🐈

### Environment
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)             

### Development
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![SpringBoot](https://img.shields.io/badge/SpringBoot-6DB33F?style=flat-square&logo=Spring&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=Bootstrap&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white)
![Mysql](https://img.shields.io/badge/Mysql-4479A1?style=flat-square&logo=Mysql&logoColor=white)

### Communication
![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white)
![Jira](https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white)

---
## 화면 구성 📺
| 1   |  2   |
| :-------------------------------------------: | :------------: |
|  <img width="329" src="https://github.com/JaeBuhmJo/project_where/assets/109774472/a5e80bda-71c4-4c55-8b17-f260d9ebc7eb"/> |  <img width="329" src="https://github.com/JaeBuhmJo/project_where/assets/109774472/89c6ae9c-1b3e-42a5-8a0d-4f35b4d89da6"/>|  
| 3   |  4   |  
| <img width="329" src="https://github.com/JaeBuhmJo/project_where/assets/109774472/60736fe8-5163-45f6-be82-6a62160c88d7"/>   |  <img width="329" src="https://github.com/JaeBuhmJo/project_where/assets/109774472/680d3b3a-f6f5-4934-b076-3461004f9f97"/>     |

---
## 주요 기능 📦

### ⭐️ 1. 출발지 선택
- 지도에서 출발 위치 선택
- +- 버튼으로 인원 수 설정 가능 (최대 16인)
- 생성된 마커를 드래그하여 위치 수정 가능
- 주소지 등록 위치만 선택 가능

### ⭐️ 2. [어디서봄?] 버튼 클릭
- 출발 위치에 맞게 중간위치 제공 
- 설정한 인원 및 마커 별 도착지 경로 제공
- 만남 장소 3곳 제공 (지하철역 기준)
- 개인별 이동 상세 정보 제공

### ⭐️ 3. 공유하기
- 공유하기 버튼을 통해 친구들에게 각자 경로 정보 전달

---
## 아키텍쳐
---
### 디렉토리 구조
```bash
├─.settings
├─project_where
│  ├─.mvn
│  │  └─wrapper
│  ├─.settings
│  ├─src
│  │  ├─main
│  │  │  ├─java
│  │  │  │  └─com
│  │  │  │      └─service
│  │  │  │          └─spring
│  │  │  │              ├─controller
│  │  │  │              ├─dao
│  │  │  │              │  └─impl
│  │  │  │              ├─domain
│  │  │  │              └─service
│  │  │  │                  └─Impl
│  │  │  ├─resources
│  │  │  │  ├─config
│  │  │  │  └─mapper
│  │  │  └─webapp
│  │  └─test
│  │      └─java
│  │          └─com
│  │              └─service
│  │                  └─spring
│  └─target
│      ├─classes
│      │  ├─com
│      │  │  └─service
│      │  │      └─spring
│      │  │          ├─controller
│      │  │          ├─dao
│      │  │          │  └─impl
│      │  │          ├─domain
│      │  │          └─service
│      │  │              └─Impl
│      │  ├─config
│      │  └─mapper
│      ├─generated-sources
│      │  └─annotations
│      ├─generated-test-sources
│      │  └─test-annotations
│      ├─m2e-wtp
│      │  └─web-resources
│      │      └─META-INF
│      │          └─maven
│      │              └─com.service
│      │                  └─project_where
│      └─test-classes
│          └─com
│              └─service
│                  └─spring
└─share
    └─img
```
