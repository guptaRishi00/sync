// app/loading.tsx
"use client";

import React from "react";

export default function Loading() {
    return (
        <div className="flex h-screen w-full items-center justify-center">
            <div className="border-primary h-16 w-16 animate-spin rounded-full border-4 border-t-transparent" />
        </div>
    );
}
