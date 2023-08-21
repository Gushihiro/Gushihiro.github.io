import { cache } from 'react';

export type PageProps = {
  params?: any;
  children?: React.ReactNode;
};
export type Project = {
  name: string;
  slug: string;
  description: string;
};

export const getProjects = cache((): Project[] => [
  {
    name: 'Vedomy',
    slug: 'vedomy',
    description: 'Template'
  },
  {
    name: 'Pong',
    slug: 'pong',
    description: 'this is pong'
  },
  {
    name: 'Oui',
    slug: 'oui',
    description: 'ouiCircles'
  },
]);

export async function fetchProjectBySlug(slug: string | undefined) {
  // Assuming it always return expected categories
  return getProjects().find((project) => project.slug === slug);
}

export async function fetchProjects(): Promise<Project[]> {
  return getProjects();
}