"use client";

import React, { useActionState, useEffect, useState } from "react";
import { createGalleryAction, updateGalleryAction } from "@/app/billal-admin/actions";
import type { GalleryItem } from "@/db/schema";

type Props = {
  item?: GalleryItem;
  onDone: () => void;
};

export default function GalleryForm({ item, onDone }: Props) {
  const editing = !!item;
  const action  = editing ? updateGalleryAction : createGalleryAction;
  const [state, formAction, pending] = useActionState(action, {});
  const [imgUrl, setImgUrl] = useState(item?.imgUrl ?? "");

  useEffect(() => {
    if (state.success) onDone();
  }, [state.success, onDone]);

  return (
    <form action={formAction} className={"space-y-4"}>
      {editing && <input type={"hidden"} name={"id"} value={item.id} />}

      {state.error && (
        <p className={"rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-400"}>
          {state.error}
        </p>
      )}

      {/* Image URL + preview */}
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
          <img src={imgUrl} alt={"preview"} className={"mt-2 h-40 w-full rounded-lg object-cover border border-white/10"} />
        )}
      </div>

      {/* Alt text */}
      <div className={"space-y-1"}>
        <label className={"label"}>Alt Text</label>
        <input name={"imgAlt"} defaultValue={item?.imgAlt ?? ""} className={"input"} placeholder={"Describe the image…"} />
      </div>

      {/* Caption */}
      <div className={"space-y-1"}>
        <label className={"label"}>Caption</label>
        <input name={"caption"} defaultValue={item?.caption ?? ""} className={"input"} placeholder={"Optional caption text"} />
      </div>

      {/* Category + Order */}
      <div className={"grid grid-cols-2 gap-4"}>
        <div className={"space-y-1"}>
          <label className={"label"}>Category</label>
          <select name={"category"} defaultValue={item?.category ?? "general"} className={"input"}>
            <option value="general">General</option>
            <option value="ui">UI / Design</option>
            <option value="screenshot">Screenshot</option>
            <option value="certificate">Certificate</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className={"space-y-1"}>
          <label className={"label"}>Order</label>
          <input name={"order"} type={"number"} defaultValue={item?.order ?? 0} className={"input"} />
        </div>
      </div>

      {/* Published */}
      <label className={"flex items-center gap-3 cursor-pointer"}>
        <input type={"checkbox"} name={"published"} value={"true"} defaultChecked={item?.published ?? true} className={"size-4 accent-green-500"} />
        <span className={"text-sm text-gray-300"}>Published</span>
      </label>

      {/* Buttons */}
      <div className={"flex gap-3 pt-2"}>
        <button type={"submit"} disabled={pending}
          className={"flex-1 rounded-lg bg-green-500 hover:bg-green-400 disabled:opacity-60 py-2.5 font-semibold text-gray-900 transition"}>
          {pending ? "Saving…" : editing ? "Save Changes" : "Add Image"}
        </button>
        <button type={"button"} onClick={onDone}
          className={"px-5 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition"}>
          Cancel
        </button>
      </div>
    </form>
  );
}
