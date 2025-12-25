import {
  FileText as ResumeIcon,
  Briefcase as PortfolioIcon,
  Package as SideIcon,
} from "lucide-react";

export const DATA = {
  name: "Jin Hwan",
  initials: "JH",
  url: "https://resume.allmightguy.com",
  description: "", // ko.json/en.json에서 가져옴
  summary: "", // ko.json/en.json에서 가져옴
  avatarUrl: "/image/profile.webp",
  skills: {
    backend: [
      "javascript, Typescript / NestJs",
      "java / spring boot",
      "python / Django, FastApi",
      "kafka, rabbitmq",
    ],
    frontend: ["React, NextJs, Astro"],
    db: ["postgresql, mssql, mysql", "mongoDB", "Redis"],
    devops: [
      "AWS : ec2, ALB, autoscailing, NAT gateway, RDS, Cloudfront, CloudFormation, route53, S3 etc...",
      "GCP",
      "Docker, CI/CD( Github action )",
      "cloudflare",
    ],
    mobile: ["dart / flutter( ios, android )"],
  },
  navbar: [
    // TODO: 나중에 포폴이랑 사이드 프로젝트 생기면 추가하기
    // { href: "/ko", icon: ResumeIcon, label: "이력서", key: "resume" },
    // {
    //   href: "/ko/portfolio",
    //   icon: PortfolioIcon,
    //   label: "포트폴리오",
    //   key: "portfolio",
    // },
    // { href: "/ko/side", icon: SideIcon, label: "사이드", key: "side" },
  ],
  contact: {
    phone: "+82 10-7134-3292",
    email: "rkflql851@gmail.com",
    github: "https://github.com/jinhwan7",
    blog: "https://hwansci.tistory.com/",
    kakao: "https://open.kakao.com/me/yourname",
    twitter: "https://x.com/yourname",
  },

  work: [
    {
      company: "", // ko.json/en.json에서 가져옴
      href: "",
      badges: [],
      location: "", // ko.json/en.json에서 가져옴
      title: "", // ko.json/en.json에서 가져옴
      logoUrl: "", // ko.json/en.json에서 가져옴
      start: "", // ko.json/en.json에서 가져옴
      end: "", // ko.json/en.json에서 가져옴
      projects: [
        {
          title: "", // ko.json/en.json에서 가져옴
          description: "", // ko.json/en.json에서 가져옴
          techStack: [], // ko.json/en.json에서 가져옴
        },
        {
          title: "", // ko.json/en.json에서 가져옴
          description: "", // ko.json/en.json에서 가져옴
          techStack: [], // ko.json/en.json에서 가져옴
        },
        {
          title: "", // ko.json/en.json에서 가져옴
          description: "", // ko.json/en.json에서 가져옴
          techStack: [], // ko.json/en.json에서 가져옴
        },
        {
          title: "", // ko.json/en.json에서 가져옴
          description: "", // ko.json/en.json에서 가져옴
          techStack: [], // ko.json/en.json에서 가져옴
        },
        {
          title: "", // ko.json/en.json에서 가져옴
          description: "", // ko.json/en.json에서 가져옴
          techStack: [], // ko.json/en.json에서 가져옴
        },
      ],
    },
    {
      company: "", // ko.json/en.json에서 가져옴
      badges: [],
      href: "",
      location: "", // ko.json/en.json에서 가져옴
      title: "", // ko.json/en.json에서 가져옴
      logoUrl: "", // ko.json/en.json에서 가져옴
      start: "", // ko.json/en.json에서 가져옴
      end: "", // ko.json/en.json에서 가져옴
      projects: [
        {
          title: "", // ko.json/en.json에서 가져옴
          description: "", // ko.json/en.json에서 가져옴
          techStack: [], // ko.json/en.json에서 가져옴
        },
      ],
    },
    {
      company: "", // ko.json/en.json에서 가져옴
      href: "",
      badges: [],
      location: "", // ko.json/en.json에서 가져옴
      title: "", // ko.json/en.json에서 가져옴
      logoUrl: "", // ko.json/en.json에서 가져옴
      start: "", // ko.json/en.json에서 가져옴
      end: "", // ko.json/en.json에서 가져옴
      projects: [
        {
          title: "", // ko.json/en.json에서 가져옴
          description: "", // ko.json/en.json에서 가져옴
          techStack: [], // ko.json/en.json에서 가져옴
        },
        {
          title: "", // ko.json/en.json에서 가져옴
          description: "", // ko.json/en.json에서 가져옴
          techStack: [], // ko.json/en.json에서 가져옴
        },
        {
          title: "", // ko.json/en.json에서 가져옴
          description: "", // ko.json/en.json에서 가져옴
          techStack: [], // ko.json/en.json에서 가져옴
        },
      ],
    },
    {
      company: "", // ko.json/en.json에서 가져옴
      href: "",
      badges: [],
      location: "", // ko.json/en.json에서 가져옴
      title: "", // ko.json/en.json에서 가져옴
      logoUrl: "", // ko.json/en.json에서 가져옴
      start: "", // ko.json/en.json에서 가져옴
      end: "", // ko.json/en.json에서 가져옴
      projects: [
        {
          title: "", // ko.json/en.json에서 가져옴
          description: "", // ko.json/en.json에서 가져옴
          techStack: [], // ko.json/en.json에서 가져옴
        },
        {
          title: "", // ko.json/en.json에서 가져옴
          description: "", // ko.json/en.json에서 가져옴
          techStack: [], // ko.json/en.json에서 가져옴
        },
        {
          title: "", // ko.json/en.json에서 가져옴
          description: "", // ko.json/en.json에서 가져옴
          techStack: [], // ko.json/en.json에서 가져옴
        },
      ],
    },
  ],
  education: [
    {
      school: "", // ko.json/en.json에서 가져옴
      href: "",
      degree: "", // ko.json/en.json에서 가져옴
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
  certifications: [
    // TODO: 수상 및 자격증 정보 추가
    {
      title: "정보처리기사",
      dates: "2025년 12월 24일",
      location: "한국산업인력공단",
      description: "정보처리 기사 자격증 취득",
      image: "/image/hrdk.webp",
      win: "25203021100S",
      links: [],
    },
    {
      title: "전자기능사",
      dates: "2012년 12월 28일",
      location: "한국산업인력공단",
      description: "전자기능사 자격증 취득",
      image: "/image/hrdk.webp",
      win: "12405120481P",
      links: [],
    },
    {
      title: "전자캐드기능사",
      dates: "2012년 10월 19일",
      location: "한국산업인력공단",
      description: "전자캐드 기능사 자격증 취득",
      image: "/image/hrdk.webp",
      win: "12404130308B",
      links: [],
    },
    {
      title: "전산응용건축제도기능사",
      dates: "2014년 10월 17일",
      location: "한국산업인력공단",
      description: "전산응용건축제도 기능사 자격증 취득",
      image: "/image/hrdk.webp",
      win: "14404120639O",
      links: [],
    },
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
