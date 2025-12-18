import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import type { getResumeData } from "@/data/get-resume-data";
import { Markdown } from "./markdown";
import { QRCodeSVG } from "@/components/qrcode-react";
import {
  MessageCircle as MessageCircleIcon,
  Download as DownloadIcon,
  BookOpen as BookOpenIcon,
} from "lucide-react";
import { useState } from "react";

// Use React components directly (no wrapper needed)
const MessageCircle = MessageCircleIcon;
const Download = DownloadIcon;
const BookOpen = BookOpenIcon;

// iOS-style spinner component
const Spinner = ({ className }: { className?: string }) => (
  <svg
    className={`animate-spin ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

const BLUR_FADE_DELAY = 0.04;

interface ResumePageProps {
  lang?: string;
  data?: ReturnType<typeof getResumeData>;
  translations?: {
    downloadPDF: string;
    downloadFilename: string;
    hero: {
      title: string;
    };
    sections: {
      about: string;
      work: string;
      education: string;
      skills: string;
      skillsBackend: string;
      skillsFrontend: string;
      skillsDevOps: string;
      skillsDB: string;
      skillsMobile: string;
      projects: string;
      projectsSubtitle: string;
      projectsDescription: string;
      publications: string;
      publicationsSubtitle: string;
      publicationsDescription: string;
      hackathons: string;
      hackathonsSubtitle: string;
      hackathonsDescription: string;
      contact: string;
    };
    publication: {
      author: string;
      publisher: string;
      publishDate: string;
      ebookLink: string;
    };
    contact: {
      kakao: string;
      twitter?: string;
    };
    portfolioLink: string;
    sideProjectsLink?: string;
  };
}

export default function ResumePage({
  lang = "ko",
  data,
  translations,
}: ResumePageProps = {}) {
  const resumeData = data || DATA;
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsDownloading(true);

    try {
      const response = await fetch(`/resume-${lang}.pdf`);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = translations?.downloadFilename || "진환_이력서.pdf";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Download failed:", error);
    } finally {
      // Keep spinner visible for a moment for better UX
      setTimeout(() => setIsDownloading(false), 500);
    }
  };

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 max-w-3xl mx-auto pt-30 pb-12 sm:pt-24 sm:pb-24 px-6">
      <button
        onClick={handleDownload}
        disabled={isDownloading}
        className="fixed top-6 right-6 flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-md border border-border rounded-lg hover:bg-background/90 transition-all shadow-lg print:hidden z-50 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isDownloading ? (
          <Spinner className="size-4" />
        ) : (
          <Download className="size-4" />
        )}
        <span className="text-sm font-medium">
          {translations?.downloadPDF || "인쇄용 PDF 다운로드"}
        </span>
      </button>
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-balance [word-break:keep-all] mb-5"
                yOffset={8}
                text={translations?.hero.title || "풀스택 엔지니어 진환입니다."}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={resumeData.summary}
              />
              {/* <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-black dark:text-white mt-4">
                  <div className="flex items-center gap-1">
                    <span>
                      {resumeData.birthDate} ({resumeData.age}세)
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>{resumeData.gender}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>{resumeData.location}</span>
                  </div>
                </div>
              </BlurFade> */}
              <BlurFade delay={BLUR_FADE_DELAY * 2.5}>
                <div className="flex flex-col gap-y-2 text-sm mt-4">
                  {resumeData.contact.phone && (
                    <div className="flex items-center gap-1.5 text-black dark:text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-4"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <span>{resumeData.contact.phone}</span>
                    </div>
                  )}
                  {resumeData.contact.email && (
                    <div className="flex items-center gap-1.5 text-black dark:text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-4"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      <span>{resumeData.contact.email}</span>
                    </div>
                  )}
                  {resumeData.contact.github && (
                    <a
                      href={resumeData.contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 hover:underline text-black dark:text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-4"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                      <span>https://github.com/jinhwan7</span>
                    </a>
                  )}
                  {resumeData.contact.blog && (
                    <a
                      href={resumeData.contact.blog}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 hover:underline text-black dark:text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-4"
                      >
                        <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" />
                        <polyline points="14 2 14 8 20 8" />
                        <path d="M2 13h4" />
                        <path d="M2 17h4" />
                        <path d="M2 21h4" />
                      </svg>
                      <span>블로그</span>
                    </a>
                  )}
                  {resumeData.url && (
                    <a
                      href={resumeData.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 hover:underline text-black dark:text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-4"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                        <path d="M2 12h20" />
                      </svg>
                      <span>{resumeData.url}</span>
                    </a>
                  )}
                </div>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-36 border">
                <AvatarImage
                  alt={resumeData.name}
                  src={resumeData.avatarUrl}
                  className="object-cover object-top"
                />
                <AvatarFallback>{resumeData.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">
            {translations?.sections.about || "소개"}
          </h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-black dark:text-white dark:prose-invert">
            {resumeData.description}
          </Markdown>
        </BlurFade>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span className="text-2xl">🛠️</span>
              {translations?.sections.skills || "기술 스택"}
            </h2>
          </BlurFade>

          <div className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-4 text-sm">
            {/* Backend */}
            <BlurFade delay={BLUR_FADE_DELAY * 6}>
              <div className="font-semibold text-foreground">
                {translations?.sections.skillsBackend || "Backend"}
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 6}>
              <ul className="space-y-1 text-black dark:text-white">
                {DATA.skills.backend.map((skill, id) => (
                  <li key={id} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </BlurFade>

            {/* Frontend */}
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <div className="font-semibold text-foreground">
                {translations?.sections.skillsFrontend || "Frontend"}
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <ul className="space-y-1 text-black dark:text-white">
                {DATA.skills.frontend.map((skill, id) => (
                  <li key={id} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </BlurFade>

            {/* DevOps */}
            <BlurFade delay={BLUR_FADE_DELAY * 8}>
              <div className="font-semibold text-foreground">
                {translations?.sections.skillsDevOps || "DevOps"}
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 8}>
              <ul className="space-y-1 text-black dark:text-white">
                {DATA.skills.devops.map((skill, id) => (
                  <li key={id} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </BlurFade>

            {/* DB */}
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <div className="font-semibold text-foreground">
                {translations?.sections.skillsDB || "DB"}
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <ul className="space-y-1 text-black dark:text-white">
                {DATA.skills.db.map((skill, id) => (
                  <li key={id} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </BlurFade>

            {/* Mobile */}
            <BlurFade delay={BLUR_FADE_DELAY * 10}>
              <div className="font-semibold text-foreground">
                {translations?.sections.skillsMobile || "mobile"}
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 10}>
              <ul className="space-y-1 text-black dark:text-white">
                {DATA.skills.mobile.map((skill, id) => (
                  <li key={id} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </BlurFade>
          </div>
        </div>
      </section>
      <div className="border-t border-border my-16" />
      <div className="my-16" />
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <h2 className="text-xl font-bold">
              {translations?.sections.work || "경력"}
            </h2>
          </BlurFade>
          {resumeData.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 13 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                projects={work.projects}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      {/* <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <h2 className="text-xl font-bold">
              {translations?.sections.education || "학력"}
            </h2>
          </BlurFade>
          {resumeData.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 15 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section> */}
      {/* <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  {translations?.sections.projects || "프로젝트"}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {translations?.sections.projectsSubtitle ||
                    "사이드 프로젝트 이력"}
                </h2>
                <p className="text-black dark:text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-balance [word-break:keep-all]">
                  {translations?.sections.projectsDescription ||
                    "다양한 사이드 프로젝트를 진행하며 새로운 기술을 탐구하고 아이디어를 실현해왔습니다."}
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto pt-[20px]">
            {resumeData.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 17 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section> */}
      {/* <section id="publications">
        <div className="space-y-8 w-full py-6" style={{ marginTop: "-60px" }}>
          <BlurFade delay={BLUR_FADE_DELAY * 11.5}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  {translations?.sections.publications || "출판"}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {translations?.sections.publicationsSubtitle || "출판 이력"}
                </h2>
                <p className="text-black dark:text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-balance [word-break:keep-all]">
                  {translations?.sections.publicationsDescription ||
                    "기술과 개발에 대한 인사이트를 담은 저서입니다."}
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-6 max-w-[800px] mx-auto">
            {resumeData.publications.map((publication, id) => (
              <BlurFade
                key={publication.title}
                delay={BLUR_FADE_DELAY * 12.5 + id * 0.05}
              >
                <div className="block p-6 border rounded-lg">
                  <div className="flex flex-col md:flex-row gap-6 mb-4">
                    {publication.image && (
                      <div className="flex-shrink-0 mx-auto md:mx-0">
                        <img
                          src={publication.image}
                          alt={publication.title}
                          width={300}
                          height={420}
                          loading="lazy"
                          decoding="async"
                          className="rounded-lg object-cover max-w-[200px] md:max-w-none"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">
                        {publication.title}
                      </h3>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-black dark:text-white mb-4">
                        <span>
                          {translations?.publication.author || "저자"}:{" "}
                          {publication.author}
                        </span>
                        <span>
                          {translations?.publication.publisher || "출판사"}:{" "}
                          {publication.publisher}
                        </span>
                        <span>
                          {translations?.publication.publishDate || "출간일"}:{" "}
                          {publication.publishDate}
                        </span>
                      </div>
                      <p className="text-sm text-black dark:text-white leading-relaxed text-balance [word-break:keep-all]">
                        {publication.description}
                      </p>
                    </div>
                  </div>
                  {publication.links && publication.links.length > 0 ? (
                    <div className="flex flex-col gap-3">
                      {publication.links.map(
                        (
                          link: { href: string; type: string },
                          linkId: number
                        ) => (
                          <a
                            key={linkId}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-2 rounded-md hover:bg-muted transition-colors border print:border-gray-300"
                          >
                            <div className="flex-shrink-0">
                              <QRCodeSVG
                                value={link.href}
                                size={48}
                                level="M"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-xs font-medium text-black dark:text-white mb-1">
                                {link.type}
                              </div>
                              <div className="text-xs text-black dark:text-white font-bold break-all text-balance">
                                {link.href}
                              </div>
                            </div>
                          </a>
                        )
                      )}
                    </div>
                  ) : (
                    <a
                      href={publication.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-2 rounded-md hover:bg-muted transition-colors border print:border-gray-300"
                    >
                      <div className="flex-shrink-0">
                        <QRCodeSVG
                          value={publication.url}
                          size={48}
                          level="M"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-medium text-black dark:text-white mb-1">
                          {translations?.publication.ebookLink || "E-Book 링크"}
                        </div>
                        <div className="text-xs text-black dark:text-white font-bold break-all text-balance">
                          {publication.url}
                        </div>
                      </div>
                    </a>
                  )}
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section> */}
      {/* <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  {translations?.sections.hackathons || "수상 및 자격증"}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {translations?.sections.hackathonsSubtitle || "수상 이력"}
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {translations?.sections.hackathonsDescription ||
                    "다양한 공모전과 대회에서 수상한 경력과 보유 자격증입니다."}
                </p>
              </div>
            </div>
          </BlurFade>
          <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
            {resumeData.hackathons.map((project, id) => (
              <BlurFade
                key={project.title + project.dates}
                delay={BLUR_FADE_DELAY * 14 + id * 0.05}
                as="li"
                className="relative ml-10 py-4"
              >
                <HackathonCard
                  title={project.title}
                  description={project.description}
                  location={project.location}
                  dates={project.dates}
                  image={project.image}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </ul>
        </div>
      </section> */}
      {/* <section id="contact">
        <div
          className="w-full pt-4 pb-8 sm:pb-4"
          style={{ marginTop: "-80px" }}
        >
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="flex flex-col items-center justify-center text-center mb-4">
              <h2 className="text-2xl font-bold tracking-tight">
                {translations?.sections.contact || "연락처"}
              </h2>
            </div>
          </BlurFade>
          <div className="max-w-[400px] mx-auto px-4">
            <BlurFade delay={BLUR_FADE_DELAY * 17}>
              {lang === "ko" ? (
                <a
                  href={resumeData.contact.kakao}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 rounded-lg border hover:bg-muted transition-colors print:border-gray-300"
                >
                  <div className="flex-shrink-0">
                    <QRCodeSVG
                      value={resumeData.contact.kakao}
                      size={48}
                      level="M"
                      className="print:block"
                    />
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <div className="text-xs font-medium text-muted-foreground mb-0.5 flex items-center gap-1">
                      <MessageCircle className="size-3" />
                      {translations?.contact.kakao || "카카오톡"}
                    </div>
                    <div className="text-xs text-black dark:text-white font-bold">
                      {resumeData.contact.kakao}
                    </div>
                  </div>
                </a>
              ) : (
                <a
                  href={resumeData.contact.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 rounded-lg border hover:bg-muted transition-colors print:border-gray-300"
                >
                  <div className="flex-shrink-0">
                    <QRCodeSVG
                      value={resumeData.contact.twitter}
                      size={48}
                      level="M"
                      className="print:block"
                    />
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <div className="text-xs font-medium text-muted-foreground mb-0.5 flex items-center gap-1">
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-3"
                        fill="currentColor"
                      >
                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                      </svg>
                      {translations?.contact.twitter || "Twitter"}
                    </div>
                    <div className="text-xs text-black dark:text-white font-bold">
                      {resumeData.contact.twitter}
                    </div>
                  </div>
                </a>
              )}
            </BlurFade>
          </div>
        </div>
      </section> */}
      {/* <section id="portfolio-link" className="print:hidden">
        <div className="w-full pb-4 sm:pb-4">
          <div className="max-w-[400px] mx-auto px-4">
            <BlurFade delay={BLUR_FADE_DELAY * 18}>
              <a
                href={`/${lang}/portfolio`}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg hover:opacity-90 transition-all shadow-md font-medium"
              >
                <BookOpen className="size-5" />
                <span>{translations?.portfolioLink || "포트폴리오 읽기"}</span>
              </a>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="side-projects-link" className="print:hidden">
        <div className="w-full pb-16 sm:pb-8">
          <div className="max-w-[400px] mx-auto px-4">
            <BlurFade delay={BLUR_FADE_DELAY * 19}>
              <a
                href={`/${lang}/side`}
                className="flex items-center justify-center gap-2 px-6 py-3 border border-foreground text-foreground rounded-lg hover:bg-foreground hover:text-background transition-all shadow-md font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-5"
                >
                  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  <rect width="20" height="14" x="2" y="6" rx="2" />
                </svg>
                <span>
                  {translations?.sideProjectsLink || "사이드 프로젝트 보기"}
                </span>
              </a>
            </BlurFade>
          </div>
        </div>
      </section> */}
    </main>
  );
}
