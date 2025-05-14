import { Github, Linkedin } from "lucide-react";

export default function SocialMedia() {
    return (
        <div className="sticky bottom-4 left-3 w-fit flex flex-col gap-3 bg-white/10 border rounded-full px-1.5 py-2 *:cursor-pointer *:p-1 *:rounded-full *:border">
            <div><Github /></div>
            <div><Linkedin /></div>
        </div>
    );
}