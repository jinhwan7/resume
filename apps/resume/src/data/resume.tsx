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
    ],
    frontend: ["React, NextJs"],
    devops: [
      "AWS : ec2, ALB, autoscailing, NAT gateway, RDS, Cloudfront, CloudFormation, route53, S3 etc...",
      "GCP",
    ],
    db: ["postgresql, mssql, mysql", "mongoDB", "Redis"],
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
      logoUrl: "/image/eeboon_logo.webp",
      start: "", // ko.json/en.json에서 가져옴
      end: "", // ko.json/en.json에서 가져옴
      projects: [
        {
          title: "", // ko.json/en.json에서 가져옴
          description: "", // ko.json/en.json에서 가져옴
          techStack: [
            "Nestj.js",
            "FastApi",
            "React",
            "AWS",
            "CI/CD",
            "Docker",
            "styled-components",
            "antd",
          ],
        },
        {
          title: "", // ko.json/en.json에서 가져옴
          description: "", // ko.json/en.json에서 가져옴
          techStack: ["Github", "AWS", "MongoDB", "Notion"],
        },
        {
          title: "", // ko.json/en.json에서 가져옴
          description: "", // ko.json/en.json에서 가져옴
          techStack: ["Performance Optimization"],
        },
        {
          title: "", // ko.json/en.json에서 가져옴
          description: "", // ko.json/en.json에서 가져옴
          techStack: ["Python", "Architecture", "Performance"],
        },
        {
          title: "", // ko.json/en.json에서 가져옴
          description: "", // ko.json/en.json에서 가져옴
          techStack: ["Figma", "TypeScript"],
        },
      ],
    },
    {
      company: "", // ko.json/en.json에서 가져옴
      badges: [],
      href: "",
      location: "", // ko.json/en.json에서 가져옴
      title: "", // ko.json/en.json에서 가져옴
      logoUrl: "/image/withuscpa_logo.webp",
      start: "", // ko.json/en.json에서 가져옴
      end: "", // ko.json/en.json에서 가져옴
      projects: [
        {
          title: "", // ko.json/en.json에서 가져옴
          description: "", // ko.json/en.json에서 가져옴
          techStack: ["Nest.js", "TypeScript"],
        },
      ],
    },
    {
      company: "", // ko.json/en.json에서 가져옴
      href: "",
      badges: [],
      location: "", // ko.json/en.json에서 가져옴
      title: "", // ko.json/en.json에서 가져옴
      logoUrl: "/image/printcity_logo.webp",
      start: "", // ko.json/en.json에서 가져옴
      end: "", // ko.json/en.json에서 가져옴
      projects: [
        {
          title: "", // ko.json/en.json에서 가져옴
          description: "", // ko.json/en.json에서 가져옴
          techStack: ["NestJS", "Express", "Architecture"],
        },
        {
          title: "", // ko.json/en.json에서 가져옴
          description: "", // ko.json/en.json에서 가져옴
          techStack: ["Turborepo", "pnpm", "Monorepo"],
        },
        {
          title: "", // ko.json/en.json에서 가져옴
          description: "", // ko.json/en.json에서 가져옴
          techStack: ["ngrinder", "Performance Testing"],
        },
        {
          title: "", // ko.json/en.json에서 가져옴
          description: "", // ko.json/en.json에서 가져옴
          techStack: ["AWS", "EC2", "Infrastructure"],
        },
      ],
    },
    {
      company: "", // ko.json/en.json에서 가져옴
      href: "",
      badges: [],
      location: "", // ko.json/en.json에서 가져옴
      title: "", // ko.json/en.json에서 가져옴
      logoUrl: "/image/bymisslim_logo.webp",
      start: "", // ko.json/en.json에서 가져옴
      end: "", // ko.json/en.json에서 가져옴
      projects: [
        {
          title: "", // ko.json/en.json에서 가져옴
          description: "", // ko.json/en.json에서 가져옴
          techStack: ["Python", "Django", "DRF", "Web Scraping"],
        },
        {
          title: "", // ko.json/en.json에서 가져옴
          description: "", // ko.json/en.json에서 가져옴
          techStack: ["Flutter", "Provider", "MVVM"],
        },
        {
          title: "", // ko.json/en.json에서 가져옴
          description: "", // ko.json/en.json에서 가져옴
          techStack: ["Next.js", "React"],
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
