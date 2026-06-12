"use client";

import React, { useActionState, useEffect, useState } from "react";
import { createExperienceAction, updateExperienceAction } from "@/app/billal-admin/actions";
import type { Experience } from "@/db/schema";
import { HiPlus, HiX } from "react-icons/hi";

type Props = { experience?: Experience; onDone: () => void };

const TYPES = ["Full-time", "Part-time", "Freelance", "Internship", "Contract"];

export default function ExperienceForm({ experience, onDone }: Props) {
  const editing = !!experience;
  const action  = editing ? updateExperienceAction : createExperienceAction;
  const [state, formAction, pending] = useActionState(action, {});

  const [points, setPoints] = useState<string[]>(experience?.points ?? [""]);
  const [tags,   setTags]   = useState((experience?.tags ?? []).join(", "));

  useEffect(() => { if (state.success) onDone(); }, [state.success, onDone]);

  const addPoint    = () => setPoints((p) => [...p, ""]);
  const removePoint = (i: number) => setPoints((p) => p.filter((_, idx) => idx !== i));
  const updatePoint = (i: number, v: string) => setPoints((p) => p.map((x, idx) => idx === i ? v : x));

  return (
    <form action={formAction} className={"space-y-5"}>
      {editing && <input type="hidden" name="id" value={experience.id} />}
      <input type="hidden" name="points" value={JSON.stringify(points.filter(Boolean))} />
      <input type="hidden" name="tags"   value={JSON.stringify(tags.split(",").map(t => t.trim()).filter(Boolean))} />

      {state.error && (
        <p className={"rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-400"}>{state.error}</p>
      )}

      {/* Row 1: Company + Role */}
      <div className={"grid grid-cols-2 gap-4"}>
        <div className={"space-y-1"}>
          <label className={"label"}>Company *</label>
          <input name="company" required defaultValue={experience?.company ?? ""} className={"input"} placeholder="Acme Corp" />
        </div>
        <div className={"space-y-1"}>
          <label className={"label"}>Role *</label>
          <input name="role" required defaultValue={experience?.role ?? ""} className={"input"} placeholder="Senior Developer" />
        </div>
      </div>

      {/* Row 2: Type + Location */}
      <div className={"grid grid-cols-2 gap-4"}>
        <div className={"space-y-1"}>
          <label className={"label"}>Type</label>
          <select name="type" defaultValue={experience?.type ?? "Full-time"} className={"input"}>
            {TYPES.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div className={"space-y-1"}>
          <label className={"label"}>Location</label>
          <input name="location" defaultValue={experience?.location ?? "Remote"} className={"input"} placeholder="Remote / Dhaka, BD" />
        </div>
      </div>

      {/* Row 3: Start + End */}
      <div className={"grid grid-cols-2 gap-4"}>
        <div className={"space-y-1"}>
          <label className={"label"}>Start Date *</label>
          <input name="startDate" required defaultValue={experience?.startDate ?? ""} className={"input"} placeholder="Jan 2023" />
        </div>
        <div className={"space-y-1"}>
          <label className={"label"}>End Date</label>
          <input name="endDate" defaultValue={experience?.endDate ?? "Present"} className={"input"} placeholder="Present" />
        </div>
      </div>

      {/* Logo URL */}
      <div className={"space-y-1"}>
        <label className={"label"}>Company Logo URL <span className={"text-gray-500"}>(optional)</span></label>
        <input name="logoUrl" defaultValue={experience?.logoUrl ?? ""} className={"input"} placeholder="https://..." />
      </div>

      {/* Tags */}
      <div className={"space-y-1"}>
        <label className={"label"}>Technologies <span className={"text-gray-500"}>(comma-separated)</span></label>
        <input value={tags} onChange={e => setTags(e.target.value)} className={"input"} placeholder="Next.js, TypeScript, PostgreSQL" />
      </div>

      {/* Key points */}
      <div className={"space-y-2"}>
        <label className={"label"}>Key Responsibilities / Achievements *</label>
        {points.map((p, i) => (
          <div key={i} className={"flex gap-2"}>
            <textarea
              rows={2}
              value={p}
              onChange={e => updatePoint(i, e.target.value)}
              className={"input flex-1 resize-none"}
              placeholder={`Achievement or responsibility ${i + 1}…`}
            />
            {points.length > 1 && (
              <button type="button" onClick={() => removePoint(i)}
                className={"self-start mt-1 p-1.5 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition"}>
                <HiX className={"size-4"} />
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={addPoint}
          className={"inline-flex items-center gap-1.5 text-sm text-green-400 hover:text-green-300 transition"}>
          <HiPlus className={"size-4"} /> Add point
        </button>
      </div>

      {/* Order + Published */}
      <div className={"grid grid-cols-2 gap-4 items-end"}>
        <div className={"space-y-1"}>
          <label className={"label"}>Display order</label>
          <input name="order" type="number" defaultValue={experience?.order ?? 0} className={"input"} />
        </div>
        <label className={"flex items-center gap-3 cursor-pointer"}>
          <input type="checkbox" name="published" value="true" defaultChecked={experience?.published ?? true} className={"size-4 accent-green-500"} />
          <span className={"text-sm text-gray-300"}>Published</span>
        </label>
      </div>

      {/* Buttons */}
      <div className={"flex gap-3 pt-2"}>
        <button type="submit" disabled={pending}
          className={"flex-1 rounded-lg bg-green-500 hover:bg-green-400 disabled:opacity-60 py-2.5 font-semibold text-gray-900 transition"}>
          {pending ? "Saving…" : editing ? "Save Changes" : "Add Experience"}
        </button>
        <button type="button" onClick={onDone}
          className={"px-5 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition"}>
          Cancel
        </button>
      </div>
    </form>
  );
}
