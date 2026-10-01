"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

type CopyButtonProps = {
  value: string;
};

const CopyButton = ({
  value,
}: CopyButtonProps)=> {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1600);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`Copy ${value}`}
      className="
        inline-flex
        items-center
        gap-1.5
        rounded-lg
        border
        border-white/[0.08]
        bg-white/[0.04]
        px-3
        py-1.5
        text-[11px]
        font-semibold
        text-white/60
        transition-all
        duration-200
        hover:border-white/15
        hover:bg-white/[0.08]
        hover:text-white
        active:scale-95
      "
    >
      {copied ? (
        <>
          <Check size={13} />
          تم النسخ
        </>
      ) : (
        <>
          <Copy size={13} />
          نسخ
        </>
      )}
    </button>
  );
}
export default  CopyButton;