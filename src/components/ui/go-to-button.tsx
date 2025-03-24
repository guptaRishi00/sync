"use client";

import { Button } from "@/components/ui/button";
import { toSnakeCase } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

const GoToButton = ({ link, label }: { link: string; label: string }) => {
    const router = useRouter();

    const [id] = useState(() => toSnakeCase(label));
    const onClick = useCallback(() => router.push(link), [router, link]);

    return (
        <Button id={id} aria-label={label} onClick={onClick}>
            {label}
        </Button>
    );
};

export default GoToButton;
