"use client";

import React, { useActionState, useEffect, useRef, useState } from "react";
import { createProjectAction, updateProjectAction } from "@/app/billal-admin/actions";
import type { Project } from "@/db/schema";
import { HiPlus, HiX } from "react-icons/hi";

type Props = {
  project?: Project;
  onDone: () => void;
};

export default function ProjectForm({ project, onDone }: Props) {
  const editing = !!project;
  const action  = editing ? updateProjectAction : createProjectAction;
  const [state, formAction, pending] = useActionState(action, {});

  const [descriptions, setDescriptions] = useState<string[]>(
    project?.descriptions ?? [""],
  );
  const [tags, setTags] = useState<string>(
    (project?.tags ?? []).join(", "),
  );
  const [imgUrl, setImgUrl] = useState(project?.imgUrl ?? "");

  const descRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (state.success) onDone();
  }, [state.success, onDone]);

  const addDesc = () => setDescriptions((d) => [...d, ""]);
  const removeDesc = (i: number) => setDescriptions((d) => d.filter((_, idx) => idx !== i));
  const updateDesc = (i: number, val: string) =>
    setDescriptions((d) => d.map((v, idx) => (idx === i ? val : v)));

  return (
    <form action={formAction} className={"space-y-5"}>
      {editing && <input type={"hidden"} name={"id"} value={project.id} />}

      {/* Hidden serialized arrays */}
      <input type={"hidden"} name={"descriptions"} value={JSON.stringify(descriptions.filter(Boolean))} />
      <input type={"hidden"} name={"tags"} value={JSON.stringify(tags.split(",").map((t) => t.trim()).filter(Boolean))} />

      {state.error && (
        <p className={"rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-400"}>
          {state.error}
        </p>
      )}

      {/* Row 1 */}
      <div className={"grid grid-cols-3 gap-4"}>
        <div className={"col-span-2 space-y-1"}>
          <label className={"label"}>Title *</label>
          <input name={"title"} required defaultValue={project?.title ?? ""} className={"input"} placeholder={"Social Platform"} />
        </div>
        <div className={"space-y-1"}>
          <label className={"label"}>Year *</label>
          <input name={"dateTitle"} required defaultValue={project?.dateTitle ?? ""} className={"input"} placeholder={"2025"} />
        </div>
      </div>

      {/* Tags */}
      <div className={"space-y-1"}>
        <label className={"label"}>Tags <span className={"text-gray-500"}>(comma-separated)</span></label>
        <input
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className={"input"}
          placeholder={"Next.js, TypeScript, Prisma"}
        />
      </div>

      {/* Descriptions */}
      <div className={"space-y-2"}>
        <label className={"label"}>Descriptions *</label>
        {descriptions.map((d, i) => (
          <div key={i} className={"flex gap-2"}>
            <textarea
              ref={i === 0 ? descRef : undefined}
              rows={2}
              value={d}
              onChange={(e) => updateDesc(i, e.target.value)}
              className={"input flex-1 resize-none"}
              placeholder={`Feature ${i + 1}…`}
            />
            {descriptions.length > 1 && (
              <button type={"button"} onClick={() => removeDesc(i)}
                className={"self-start mt-1 p-1.5 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition"}>
                <HiX className={"size-4"} />
              </button>
            )}
          </div>
        ))}
        <button type={"button"} onClick={addDesc}
          className={"inline-flex items-center gap-1.5 text-sm text-green-400 hover:text-green-300 transition"}>
          <HiPlus className={"size-4"} /> Add point
        </button>
      </div>

      {/* Image URL */}
      <div className={"space-y-1"}>
        <label className={"label"}>Image URL *</label>
        <input
          name={"imgUrl"}
          required
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
          className={"input"}
          placeholder={"https://i.imgur.com/…"}
        />
        {imgUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={imgUrl} alt={"preview"} className={"mt-2 h-36 w-full rounded-lg object-cover border border-white/10"} />
        )}
      </div>

      {/* Image Alt */}
      <div className={"space-y-1"}>
        <label className={"label"}>Image Alt</label>
        <input name={"imgAlt"} defaultValue={project?.imgAlt ?? ""} className={"input"} placeholder={"Screenshot of…"} />
      </div>

      {/* Row: links */}
      <div className={"grid grid-cols-2 gap-4"}>
        <div className={"space-y-1"}>
          <label className={"label"}>Live URL</label>
          <input name={"link"} type={"url"} defaultValue={project?.link ?? ""} className={"input"} placeholder={"https://…"} />
        </div>
        <div className={"space-y-1"}>
          <label className={"label"}>GitHub URL</label>
          <input name={"github"} type={"url"} defaultValue={project?.github ?? ""} className={"input"} placeholder={"https://github.com/…"} />
        </div>
      </div>

      {/* Row: order + published */}
      <div className={"grid grid-cols-2 gap-4 items-end"}>
        <div className={"space-y-1"}>
          <label className={"label"}>Display order</label>
          <input name={"order"} type={"number"} defaultValue={project?.order ?? 0} className={"input"} />
        </div>
        <label className={"flex items-center gap-3 cursor-pointer"}>
          <input
            type={"checkbox"}
            name={"published"}
            value={"true"}
            defaultChecked={project?.published ?? true}
            className={"size-4 accent-green-500"}
          />
          <span className={"text-sm text-gray-300"}>Published</span>
        </label>
      </div>

      {/* Actions */}
      <div className={"flex gap-3 pt-2"}>
        <button type={"submit"} disabled={pending}
          className={"flex-1 rounded-lg bg-green-500 hover:bg-green-400 disabled:opacity-60 py-2.5 font-semibold text-gray-900 transition"}>
          {pending ? "Saving…" : editing ? "Save Changes" : "Create Project"}
        </button>
        <button type={"button"} onClick={onDone}
          className={"px-5 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition"}>
          Cancel
        </button>
      </div>
    </form>
  );
}
