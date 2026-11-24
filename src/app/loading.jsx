import React from "react";

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center pt-32">
      <div className="h-10 w-10 rounded-full border-4 border-slate-200 border-t-[#0E2E71] animate-spin" />
    </div>
  );
}
