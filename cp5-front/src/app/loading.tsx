"use client";

import Spinner from "@/components/Spinner/Spinner";

export default function Loading() {

  return (
    <div>
        <div className="min-h-screen flex justify-center items-center">
            <Spinner />
        </div>
    </div>
  )
}
