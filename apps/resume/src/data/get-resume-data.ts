import { DATA } from "./resume";

type TFunction = (key: string, options?: any) => string;

export function getResumeData(t: TFunction) {
  return {
    ...DATA,
    location: t("data.location"),
    birthDate: t("data.birthDate"),
    age: new Date().getFullYear() - new Date(t("data.birthDate")).getFullYear(),
    gender: t("data.gender"),
    description: t("data.description"),
    summary: t("data.summary"),
    work: DATA.work.map((work: any, index) => {
      // Map each project with translations
      const translatedProjects =
        work.projects?.map((project: any, projectIndex: number) => {
          return {
            ...project,
            title: t(`data.work.${index}.projects.${projectIndex}.title`),
            description: t(
              `data.work.${index}.projects.${projectIndex}.description`
            ),
            techStack: t(
              `data.work.${index}.projects.${projectIndex}.techStack`,
              { returnObjects: true }
            ),
          };
        }) || [];

      return {
        ...work,
        company: t(`data.work.${index}.company`),
        title: t(`data.work.${index}.title`),
        location: t(`data.work.${index}.location`),
        logoUrl: t(`data.work.${index}.logoUrl`),
        start: t(`data.work.${index}.start`),
        end: t(`data.work.${index}.end`),
        description: t(`data.work.${index}.description`),
        projects: translatedProjects,
      };
    }),
    education: DATA.education.map((edu: any) => ({
      ...edu,
      school: t("data.education.mokwon.school"),
      degree: t("data.education.mokwon.degree"),
    })),
  };
}
