import {
  fetchProjectBySlug,
  PageProps,
  type Project,
} from '../../../lib/getProjects';

// const fetchProject = async (
//   categorySlug: string | undefined,
// ): Promise<Project | undefined> => {
//   if (!categorySlug) return;

//   return await fetchProjectBySlug(categorySlug);
// };

// export default async function Page({ params }: PageProps) {
//   const project = await fetchProject(params.categorySlug);
//   if (!project) return null;

//   return (
//     <div className="space-y-4">
//       <h1 className="text-xl font-medium text-gray-400/80">{project.name}</h1>
//     </div>
//   );
// }