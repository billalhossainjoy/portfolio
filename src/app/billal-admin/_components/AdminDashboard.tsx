"use client";

import React, { useTransition, useState } from "react";
import type { Project, GalleryItem, Experience } from "@/db/schema";
import ProjectForm from "./ProjectForm";
import GalleryForm from "./GalleryForm";
import ExperienceForm from "./ExperienceForm";
import {
  deleteProjectAction,
  logoutAction,
  togglePublishedAction,
  deleteGalleryAction,
  toggleGalleryPublishedAction,
  deleteExperienceAction,
  toggleExperiencePublishedAction,
} from "@/app/billal-admin/actions";
import {
  HiPlus, HiPencil, HiTrash, HiLogout, HiEye, HiEyeOff,
  HiPhotograph, HiOfficeBuilding,
} from "react-icons/hi";
import { TbBrandNextjs } from "react-icons/tb";
import { twMerge } from "tailwind-merge";

type Tab = "projects" | "gallery" | "experience";
type ProjectMode    = { type: "none" } | { type: "create" } | { type: "edit"; project: Project };
type GalleryMode    = { type: "none" } | { type: "create" } | { type: "edit"; item: GalleryItem };
type ExperienceMode = { type: "none" } | { type: "create" } | { type: "edit"; experience: Experience };

export default function AdminDashboard({
  projects,
  galleryItems,
  experienceItems,
}: {
  projects:        Project[];
  galleryItems:    GalleryItem[];
  experienceItems: Experience[];
}) {
  const [tab, setTab]               = useState<Tab>("projects");
  const [projectMode, setProjectMode]       = useState<ProjectMode>({ type: "none" });
  const [galleryMode, setGalleryMode]       = useState<GalleryMode>({ type: "none" });
  const [experienceMode, setExperienceMode] = useState<ExperienceMode>({ type: "none" });
  const [isPending, startTransition] = useTransition();

  /* ── Project handlers ─────────────────────────────────────── */
  const handleDeleteProject = (id: number) => {
    if (!confirm("Delete this project?")) return;
    startTransition(() => deleteProjectAction(id));
  };
  const handleToggleProject = (id: number, pub: boolean) => {
    startTransition(() => togglePublishedAction(id, !pub));
  };

  /* ── Gallery handlers ─────────────────────────────────────── */
  const handleDeleteGallery = (id: number) => {
    if (!confirm("Delete this image?")) return;
    startTransition(() => deleteGalleryAction(id));
  };
  const handleToggleGallery = (id: number, pub: boolean) => {
    startTransition(() => toggleGalleryPublishedAction(id, !pub));
  };

  const handleDeleteExperience = (id: number) => {
    if (!confirm("Delete this experience?")) return;
    startTransition(() => deleteExperienceAction(id));
  };
  const handleToggleExperience = (id: number, pub: boolean) => {
    startTransition(() => toggleExperiencePublishedAction(id, !pub));
  };

  return (
    <div className={"min-h-screen bg-gray-950"}>
      {/* Top bar */}
      <header className={"sticky top-0 z-20 border-b border-white/8 bg-gray-950/90 backdrop-blur-md"}>
        <div className={"max-w-6xl mx-auto px-5 h-16 flex items-center justify-between"}>
          <div className={"flex items-center gap-3"}>
            <div className={"size-8 rounded-lg bg-gradient-to-br from-green-400 to-green-700 flex items-center justify-center"}>
              <TbBrandNextjs className={"size-5 text-gray-900"} />
            </div>
            <span className={"font-semibold text-white"}>Portfolio Admin</span>
          </div>
          <button
            onClick={() => startTransition(() => logoutAction())}
            className={"flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"}
          >
            <HiLogout className={"size-4"} /> Logout
          </button>
        </div>
      </header>

      <main className={"max-w-6xl mx-auto px-5 py-8 space-y-6"}>

        {/* Tab bar */}
        <div className={"flex gap-1 p-1 rounded-xl border border-white/10 bg-white/5 w-fit"}>
          <button
            onClick={() => { setTab("projects"); setGalleryMode({ type: "none" }); }}
            className={twMerge(
              "px-5 py-2 rounded-lg text-sm font-medium transition",
              tab === "projects" ? "bg-white text-gray-900 shadow-sm" : "text-white/60 hover:text-white hover:bg-white/10"
            )}
          >
            Projects
            <span className={twMerge("ml-2 text-xs px-1.5 py-0.5 rounded-full", tab === "projects" ? "bg-gray-900/20 text-gray-700" : "bg-white/10 text-white/50")}>
              {projects.length}
            </span>
          </button>
          <button
            onClick={() => { setTab("gallery"); setProjectMode({ type: "none" }); setExperienceMode({ type: "none" }); }}
            className={twMerge(
              "px-5 py-2 rounded-lg text-sm font-medium transition",
              tab === "gallery" ? "bg-white text-gray-900 shadow-sm" : "text-white/60 hover:text-white hover:bg-white/10"
            )}
          >
            Gallery
            <span className={twMerge("ml-2 text-xs px-1.5 py-0.5 rounded-full", tab === "gallery" ? "bg-gray-900/20 text-gray-700" : "bg-white/10 text-white/50")}>
              {galleryItems.length}
            </span>
          </button>
          <button
            onClick={() => { setTab("experience"); setProjectMode({ type: "none" }); setGalleryMode({ type: "none" }); }}
            className={twMerge(
              "px-5 py-2 rounded-lg text-sm font-medium transition",
              tab === "experience" ? "bg-white text-gray-900 shadow-sm" : "text-white/60 hover:text-white hover:bg-white/10"
            )}
          >
            Experience
            <span className={twMerge("ml-2 text-xs px-1.5 py-0.5 rounded-full", tab === "experience" ? "bg-gray-900/20 text-gray-700" : "bg-white/10 text-white/50")}>
              {experienceItems.length}
            </span>
          </button>
        </div>

        {/* ── Projects tab ──────────────────────────────────── */}
        {tab === "projects" && (
          <div className={"space-y-6"}>
            <div className={"flex items-center justify-between"}>
              <h1 className={"text-2xl font-bold"}>Projects</h1>
              {projectMode.type === "none" && (
                <button onClick={() => setProjectMode({ type: "create" })}
                  className={"inline-flex items-center gap-2 rounded-lg bg-green-500 hover:bg-green-400 px-4 py-2.5 font-semibold text-sm text-gray-900 transition"}>
                  <HiPlus className={"size-4"} /> New Project
                </button>
              )}
            </div>

            {projectMode.type !== "none" && (
              <div className={"rounded-2xl border border-white/10 bg-gray-900 p-6"}>
                <h2 className={"text-lg font-semibold mb-6"}>
                  {projectMode.type === "create" ? "Add New Project" : `Editing: ${(projectMode as { type: "edit"; project: Project }).project.title}`}
                </h2>
                <ProjectForm
                  project={projectMode.type === "edit" ? (projectMode as { type: "edit"; project: Project }).project : undefined}
                  onDone={() => setProjectMode({ type: "none" })}
                />
              </div>
            )}

            <div className={"space-y-3"}>
              {projects.length === 0 && projectMode.type === "none" && (
                <div className={"rounded-2xl border border-dashed border-white/10 py-20 text-center text-gray-500"}>
                  No projects yet. Click &ldquo;New Project&rdquo; to add one.
                </div>
              )}
              {projects.map((p) => (
                <div key={p.id} className={twMerge("flex items-center gap-4 rounded-xl border border-white/8 bg-gray-900 p-4 transition hover:border-white/15", !p.published && "opacity-50")}>
                  {p.imgUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.imgUrl} alt={p.imgAlt} className={"size-16 shrink-0 rounded-lg object-cover border border-white/10"} />
                  ) : (
                    <div className={"size-16 shrink-0 rounded-lg bg-white/5 border border-white/10"} />
                  )}
                  <div className={"flex-1 min-w-0"}>
                    <div className={"flex items-center gap-2 flex-wrap"}>
                      <span className={"font-semibold text-white truncate"}>{p.title}</span>
                      <span className={"text-xs text-gray-500"}>{p.dateTitle}</span>
                      {!p.published && <span className={"text-xs px-2 py-0.5 rounded-full bg-yellow-500/15 text-yellow-400 border border-yellow-500/25"}>Draft</span>}
                    </div>
                    <div className={"flex gap-1.5 flex-wrap mt-1.5"}>
                      {p.tags.slice(0, 4).map((tag) => (
                        <span key={tag} className={"text-xs px-2 py-0.5 rounded-full border border-white/10 bg-white/5 text-gray-400"}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className={"flex items-center gap-1 shrink-0"}>
                    <button title={p.published ? "Unpublish" : "Publish"} onClick={() => handleToggleProject(p.id, p.published)} disabled={isPending}
                      className={"p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/8 transition"}>
                      {p.published ? <HiEye className={"size-4"} /> : <HiEyeOff className={"size-4"} />}
                    </button>
                    <button title={"Edit"} onClick={() => setProjectMode({ type: "edit", project: p })}
                      className={"p-2 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 transition"}>
                      <HiPencil className={"size-4"} />
                    </button>
                    <button title={"Delete"} onClick={() => handleDeleteProject(p.id)} disabled={isPending}
                      className={"p-2 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition"}>
                      <HiTrash className={"size-4"} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Gallery tab ───────────────────────────────────── */}
        {tab === "gallery" && (
          <div className={"space-y-6"}>
            <div className={"flex items-center justify-between"}>
              <h1 className={"text-2xl font-bold"}>Gallery</h1>
              {galleryMode.type === "none" && (
                <button onClick={() => setGalleryMode({ type: "create" })}
                  className={"inline-flex items-center gap-2 rounded-lg bg-green-500 hover:bg-green-400 px-4 py-2.5 font-semibold text-sm text-gray-900 transition"}>
                  <HiPlus className={"size-4"} /> Add Image
                </button>
              )}
            </div>

            {galleryMode.type !== "none" && (
              <div className={"rounded-2xl border border-white/10 bg-gray-900 p-6"}>
                <h2 className={"text-lg font-semibold mb-6"}>
                  {galleryMode.type === "create" ? "Add New Image" : "Edit Image"}
                </h2>
                <GalleryForm
                  item={galleryMode.type === "edit" ? (galleryMode as { type: "edit"; item: GalleryItem }).item : undefined}
                  onDone={() => setGalleryMode({ type: "none" })}
                />
              </div>
            )}

            {/* Gallery grid */}
            {galleryItems.length === 0 && galleryMode.type === "none" && (
              <div className={"rounded-2xl border border-dashed border-white/10 py-20 text-center text-gray-500"}>
                <HiPhotograph className={"size-10 mx-auto mb-3 text-gray-600"} />
                No gallery images yet. Click &ldquo;Add Image&rdquo; to upload one.
              </div>
            )}

            <div className={"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"}>
              {galleryItems.map((item) => (
                <div key={item.id} className={twMerge("group relative rounded-xl border border-white/8 overflow-hidden transition hover:border-white/15", !item.published && "opacity-50")}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.imgUrl} alt={item.imgAlt} className={"aspect-square w-full object-cover"} />

                  {/* Overlay actions */}
                  <div className={"absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-2"}>
                    {item.caption && <p className={"text-xs text-white/80 px-3 text-center line-clamp-2"}>{item.caption}</p>}
                    <div className={"flex gap-1"}>
                      <button title={item.published ? "Unpublish" : "Publish"} onClick={() => handleToggleGallery(item.id, item.published)} disabled={isPending}
                        className={"p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition"}>
                        {item.published ? <HiEye className={"size-4"} /> : <HiEyeOff className={"size-4"} />}
                      </button>
                      <button title={"Edit"} onClick={() => setGalleryMode({ type: "edit", item })}
                        className={"p-2 rounded-lg bg-white/10 hover:bg-blue-500/30 text-white transition"}>
                        <HiPencil className={"size-4"} />
                      </button>
                      <button title={"Delete"} onClick={() => handleDeleteGallery(item.id)} disabled={isPending}
                        className={"p-2 rounded-lg bg-white/10 hover:bg-red-500/30 text-white transition"}>
                        <HiTrash className={"size-4"} />
                      </button>
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className={"absolute top-2 left-2 px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-sm text-[10px] font-medium text-white/80"}>
                    {item.category}
                  </div>

                  {!item.published && (
                    <div className={"absolute top-2 right-2 px-2 py-0.5 rounded-full bg-yellow-500/20 text-[10px] font-medium text-yellow-400 border border-yellow-500/25"}>
                      Draft
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Experience tab ────────────────────────────────── */}
        {tab === "experience" && (
          <div className={"space-y-6"}>
            <div className={"flex items-center justify-between"}>
              <h1 className={"text-2xl font-bold"}>Experience</h1>
              {experienceMode.type === "none" && (
                <button onClick={() => setExperienceMode({ type: "create" })}
                  className={"inline-flex items-center gap-2 rounded-lg bg-green-500 hover:bg-green-400 px-4 py-2.5 font-semibold text-sm text-gray-900 transition"}>
                  <HiPlus className={"size-4"} /> Add Experience
                </button>
              )}
            </div>

            {experienceMode.type !== "none" && (
              <div className={"rounded-2xl border border-white/10 bg-gray-900 p-6"}>
                <h2 className={"text-lg font-semibold mb-6"}>
                  {experienceMode.type === "create" ? "Add New Experience" : `Editing: ${(experienceMode as { type: "edit"; experience: Experience }).experience.role} @ ${(experienceMode as { type: "edit"; experience: Experience }).experience.company}`}
                </h2>
                <ExperienceForm
                  experience={experienceMode.type === "edit" ? (experienceMode as { type: "edit"; experience: Experience }).experience : undefined}
                  onDone={() => setExperienceMode({ type: "none" })}
                />
              </div>
            )}

            <div className={"space-y-3"}>
              {experienceItems.length === 0 && experienceMode.type === "none" && (
                <div className={"rounded-2xl border border-dashed border-white/10 py-20 text-center text-gray-500"}>
                  <HiOfficeBuilding className={"size-10 mx-auto mb-3 text-gray-600"} />
                  No experiences yet. Click &ldquo;Add Experience&rdquo; to add one.
                </div>
              )}

              {experienceItems.map((exp) => (
                <div key={exp.id} className={twMerge(
                  "flex items-start gap-4 rounded-xl border border-white/8 bg-gray-900 p-4 transition hover:border-white/15",
                  !exp.published && "opacity-50"
                )}>
                  {/* Logo or placeholder */}
                  {exp.logoUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={exp.logoUrl} alt={exp.company} className={"size-12 shrink-0 rounded-lg object-cover border border-white/10"} />
                  ) : (
                    <div className={"size-12 shrink-0 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center"}>
                      <HiOfficeBuilding className={"size-5 text-gray-500"} />
                    </div>
                  )}

                  {/* Info */}
                  <div className={"flex-1 min-w-0"}>
                    <div className={"flex items-center gap-2 flex-wrap"}>
                      <span className={"font-semibold text-white"}>{exp.role}</span>
                      <span className={"text-gray-400 text-sm"}>@ {exp.company}</span>
                      <span className={"text-xs px-2 py-0.5 rounded-full border border-white/10 bg-white/5 text-gray-400"}>{exp.type}</span>
                      {!exp.published && <span className={"text-xs px-2 py-0.5 rounded-full bg-yellow-500/15 text-yellow-400 border border-yellow-500/25"}>Draft</span>}
                    </div>
                    <div className={"text-xs text-gray-500 mt-1"}>{exp.startDate} – {exp.endDate} · {exp.location}</div>
                    <div className={"flex gap-1.5 flex-wrap mt-2"}>
                      {exp.tags.slice(0, 5).map(tag => (
                        <span key={tag} className={"text-xs px-2 py-0.5 rounded-full border border-white/10 bg-white/5 text-gray-400"}>{tag}</span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className={"flex items-center gap-1 shrink-0"}>
                    <button title={exp.published ? "Unpublish" : "Publish"} onClick={() => handleToggleExperience(exp.id, exp.published)} disabled={isPending}
                      className={"p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/8 transition"}>
                      {exp.published ? <HiEye className={"size-4"} /> : <HiEyeOff className={"size-4"} />}
                    </button>
                    <button title={"Edit"} onClick={() => setExperienceMode({ type: "edit", experience: exp })}
                      className={"p-2 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 transition"}>
                      <HiPencil className={"size-4"} />
                    </button>
                    <button title={"Delete"} onClick={() => handleDeleteExperience(exp.id)} disabled={isPending}
                      className={"p-2 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition"}>
                      <HiTrash className={"size-4"} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
