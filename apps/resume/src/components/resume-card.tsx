import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRight as ChevronRightIcon } from "lucide-react";
import { Markdown } from "./markdown";

const ChevronRight = ({ className, ...props }: any) => (
  <ChevronRightIcon className={className} {...props} />
);

interface Project {
  title: string;
  description: string;
  techStack?: readonly string[];
}

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
  projects?: readonly Project[];
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  projects,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleClick = (e: React.MouseEvent) => {
    if (description || projects) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <a
      href={href || "#"}
      className="block cursor-default"
      onClick={handleClick}
    >
      <Card className="flex mb-2 hover:shadow-md transition-shadow p-4">
        <div className="flex-none">
          <Avatar className="border size-12 m-auto bg-muted dark:bg-muted">
            <AvatarImage src={logoUrl} alt={altText} className="object-cover" />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-4 items-center flex-col group">
          <CardHeader>
            <div className="flex items-center gap-x-3 text-base">
              <h3
                className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm"
                style={{
                  marginTop: 0,
                }}
              >
                {title}
                {badges && (
                  <span className="inline-flex gap-x-1">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                <ChevronRight
                  className={cn(
                    "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground">
                {period}
              </div>
            </div>
            {subtitle && (
              <div className="font-sans text-sm font-bold mt-3">{subtitle}</div>
            )}
          </CardHeader>
          {description && !projects && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-2 text-xs sm:text-sm"
            >
              {description}
            </motion.div>
          )}
          {projects && projects.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-4 space-y-4"
            >
              {projects.map((project, index) => (
                <div key={index}>
                  {index > 0 && <div className="border-t border-border my-4" />}
                  <div className="text-xs sm:text-sm">
                    <h4 className="font-semibold text-sm mb-1">
                      {project.title}
                    </h4>
                    <Markdown className="prose max-w-full text-pretty font-sans text-xs sm:text-sm text-muted-foreground dark:prose-invert mb-2">
                      {project.description}
                    </Markdown>
                    {project.techStack && project.techStack.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {project.techStack.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </Card>
    </a>
  );
};
