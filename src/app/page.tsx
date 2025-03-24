import GoToButton from "@/components/ui/go-to-button";
import { H4, Muted } from "@/components/ui/typography";

export default function HomePage() {
    return (
        <main className="flex h-screen flex-col items-center justify-center">
            <H4>Services Page</H4>
            <Muted className="mb-2 text-center">Under Construction</Muted>

            <div className="flex items-center gap-4">
                <GoToButton link="/about" label="About" />
                <GoToButton link="/academy" label="Academy" />
                <GoToButton link="/services" label="Services" />
            </div>
        </main>
    );
}
