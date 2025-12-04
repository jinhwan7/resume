import { Icons } from "@/components/icons";
import {
  FileText as ResumeIcon,
  Briefcase as PortfolioIcon,
  Package as SideIcon,
} from "lucide-react";

export const DATA = {
  name: "Jin Hwan",
  initials: "JH",
  url: "https://allmightguy.com",
  location: "대한민국 서울",
  locationLink: "https://www.google.com/maps/place/south-korea",
  birthDate: "1993-06-07",
  age: "32",
  gender: "남성",
  description:
    "풀스택 엔지니어를 지향하며, 실제 테스트와 측정을 통해 성능 개선을 확인하는 과정에 큰 즐거움을 느낍니다.",
  summary:
    "풀스택 엔지니어를 지향하며, 실제 테스트와 측정을 통해 성능 개선을 확인하는 과정에 큰 즐거움을 느낍니다. 새로운 기술과 다양한 지식을 직접 적용해보고, 이해되지 않던 개념을 하나씩 명확하게 깨닫는 탐구 과정을 좋아합니다.",
  avatarUrl: "/image/profile.webp",
  skills: [
    { name: "JavaScript", icon: Icons.javascript },
    { name: "TypeScript", icon: Icons.typescript },
    { name: "Express.js", icon: "/icons/express.svg" },
    { name: "Nest.js", icon: "/icons/nestjs.svg" },
    { name: "Next.js", icon: Icons.nextjs },
    { name: "React", icon: Icons.react },
    { name: "Tailwind CSS", icon: Icons.tailwindcss },
    { name: "MongoDb", icon: "/icons/express.svg" },
    { name: "Prisma ORM", icon: "/icons/prisma.svg" },
    { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
    { name: "MySQL", icon: "/icons/mysql.svg" },
    { name: "Redis", icon: "/image/redis.webp" },
    { name: "Supabase", icon: "/icons/supabase.svg" },
    { name: "Docker", icon: "/icons/docker.svg" },
    { name: "AWS", icon: "/image/aws.webp" },
    { name: "Vercel", icon: "/icons/vercel.svg" },
    { name: "Cloudflare", icon: "/icons/cloudflare.svg" },
    { name: "Electron.js", icon: "/icons/electron.svg" },
    { name: "ONNX Runtime", icon: "/icons/onnx.svg" },
    { name: "Python", icon: "/icons/python.svg" },
    { name: "Git", icon: "/icons/git.svg" },
    { name: "Astro", icon: "/icons/astro.svg" },
  ],
  navbar: [
    { href: "/ko", icon: ResumeIcon, label: "이력서", key: "resume" },
    {
      href: "/ko/portfolio",
      icon: PortfolioIcon,
      label: "포트폴리오",
      key: "portfolio",
    },
    { href: "/ko/side", icon: SideIcon, label: "사이드", key: "side" },
  ],
  contact: {
    email: "rkflql851@gmail.com",
    github: "https://github.com/jinhwan7",
    blog: "https://hwansci.tistory.com/",
    kakao: "https://open.kakao.com/me/yourname", // TODO: 본인의 카카오톡 링크로 변경
    twitter: "https://x.com/yourname", // TODO: 본인의 트위터 링크로 변경 (또는 제거)
  },

  work: [
    {
      company: "주식회사 이분",
      href: "",
      badges: [],
      location: "대한민국",
      title:
        "AI Agent를 활용 NH투자증권, 삼성증권, 한화생명 등 금융권 대상 리라이팅 '쉽게'라는 프로덕트 제공",
      logoUrl: "/image/eeboon_logo.webp",
      start: "2025년 3월",
      end: "2025년 10월",
      projects: [
        {
          title: "CI/CD 파이프라인 구축 및 최적화",
          description:
            "프로덕트 전체 CI/CD 신규 구현 및 유지보수. Docker Compose + ECR 환경 최적화.",
          techStack: ["Docker", "AWS ECR", "CI/CD"],
        },
        {
          title: "운영 환경 리팩토링",
          description:
            "불필요한 코드, 저장소, AWS 클라우드 자원 등을 정리하여 가시성과 유지보수성 향상.",
          techStack: ["AWS", "Refactoring"],
        },
        {
          title: "API 성능 최적화",
          description: "API 응답시간을 수분에서 8초 이내로 단축.",
          techStack: ["Performance Optimization"],
        },
        {
          title: "AI 모델 서빙 서버 개선",
          description:
            "AI 모델 서빙 서버를 레이어드 아키텍처 기반으로 리팩토링. 처리 시간을 24초에서 4초로 최적화.",
          techStack: ["Python", "Architecture", "Performance"],
        },
        {
          title: "Figma Plugin 및 PPTX 기능 개발",
          description:
            "Figma Plugin 유지보수. pptx-automizer 라이브러리 분석 및 다중 요소 수정 로직 추가.",
          techStack: ["Figma", "TypeScript"],
        },
        {
          title: "풀스택 프로덕트 개발",
          description:
            "클라이언트 웹 어플리케이션, 관리자 대시보드, API 서비스 관리자 대시보드 개발 및 유지보수.",
          techStack: ["Next.js", "React", "Node.js"],
        },
      ],
    },
    {
      company: "함께하는 세무회계",
      badges: [],
      href: "",
      location: "대한민국",
      title: "세무회계 SaaS '와트' 제공",
      logoUrl: "/image/withuscpa_logo.webp",
      start: "2025년 2월",
      end: "2025년 3월",
      projects: [
        {
          title: "세무 회계 SaaS 백엔드 개발",
          description:
            "다양한 계산 규칙(공제 항목, 비율 계산, 금액 범위 조건 등)을 반영한 비즈니스 로직 구현 및 모듈화.",
          techStack: ["Nest.js", "TypeScript"],
        },
      ],
    },
    {
      company: "주식회사 메가프레스",
      href: "",
      badges: [],
      location: "대한민국",
      title: "백엔드 개발자",
      logoUrl: "/image/printcity_logo.webp",
      start: "2023년 4월",
      end: "2025년 1월",
      projects: [
        {
          title: "NestJS 마이그레이션",
          description:
            "Express에서 NestJS로 마이그레이션하여 표준화된 개발 환경 및 유지보수성 향상. 헥사고널 아키텍처 적용.",
          techStack: ["NestJS", "Express", "Architecture"],
        },
        {
          title: "모노레포 구축",
          description:
            "Next.js/NestJS 서비스를 Turborepo + pnpm 기반 모노레포로 통합하여 공통 모듈 재사용 체계 구축 및 중복 코드 제거.",
          techStack: ["Turborepo", "pnpm", "Monorepo"],
        },
        {
          title: "부하 테스트 및 성능 검증",
          description: "ngrinder를 사용한 부하 테스트로 서비스 안정성 체크.",
          techStack: ["ngrinder", "Performance Testing"],
        },
        {
          title: "AWS 인프라 관리",
          description:
            "EC2 모니터링, 신규 사이트 도메인 세팅 등 AWS 인프라 관리.",
          techStack: ["AWS", "EC2", "Infrastructure"],
        },
      ],
    },
    {
      company: "바이미스림",
      href: "",
      badges: [],
      location: "대한민국",
      title: "풀스택 개발자(프리랜서)",
      logoUrl: "/image/bymisslim_logo.webp",
      start: "2024년 9월",
      end: "2025년 11월",
      projects: [
        {
          title: "백엔드 서버 개발",
          description:
            "Python/Django를 통한 백엔드 서버 개발, DRF를 사용한 REST API 처리, 로그인 및 예약 관련 CRUD 구현. 스마트스토어 크롤링으로 고객 편의성 향상.",
          techStack: ["Python", "Django", "DRF", "Web Scraping"],
        },
        {
          title: "Flutter 앱 개발",
          description:
            "Flutter를 사용한 크로스플랫폼 앱 개발, Provider 패키지를 활용한 상태관리, MVVM 디자인 패턴 적용.",
          techStack: ["Flutter", "Provider", "MVVM"],
        },
        {
          title: "관리자 페이지 개발",
          description: "Next.js를 사용한 admin 페이지 개발.",
          techStack: ["Next.js", "React"],
        },
      ],
    },
  ],
  education: [
    {
      school: "목원대학교",
      href: "학교 웹사이트",
      degree: "작곡재즈학부 클래식작곡 전공 (중퇴)",
      logoUrl: "/image/mokwonlogo.svg",
      start: "2018년 3월",
      end: "2018년 9월",
    },
  ],
  projects: [
    // TODO: 프로젝트 정보 추가
    // 예시:
    // {
    //   title: "프로젝트명",
    //   href: "https://github.com/username/project",
    //   dates: "2024",
    //   active: true,
    //   description: "프로젝트 설명",
    //   technologies: ["React", "Next.js", "TypeScript"],
    //   links: [
    //     {
    //       type: "GitHub",
    //       href: "https://github.com/username/project",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "/image/project.webp",
    //   video: "",
    // },
  ],
  hackathons: [
    // TODO: 수상 및 자격증 정보 추가
    // 예시:
    // {
    //   title: "수상명 또는 자격증명",
    //   dates: "2024년 1월",
    //   location: "주관 기관",
    //   description: "설명",
    //   image: "/image/award.webp",
    //   win: "수상 등급 (선택 사항)",
    //   links: [],
    // },
  ],
  publications: [
    // TODO: 출판 이력 추가 (블로그 글이나 기술 문서도 포함 가능)
    // 예시:
    // {
    //   title: "제목",
    //   author: "Jin Hwan",
    //   publisher: "출판사 또는 플랫폼",
    //   publishDate: "2024년",
    //   description: "설명",
    //   url: "링크",
    //   links: [],
    //   image: "/image/publication.webp",
    // },
  ],
} as const;
