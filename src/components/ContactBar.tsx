import {ReactElement} from "react";
import Link from "next/link";
import Linkedin from "@/constants/icons/Linkedin";
import Github from "@/constants/icons/Github";
import Email from "@/constants/icons/Email";
import {contacts} from "@/config";

interface ContactBarProps {
    size?: string
}

function ContactBar({size = '2rem'}: ContactBarProps): ReactElement {
    return (
        <div className="flex items-center gap-1">
            <Link href={contacts.linkedin}>
                <Linkedin size={size} color={"var(--icon-color)"} className="hover:linkedin"/>
            </Link>
            <Link href={contacts.github}>
                <Github size={size} color={"var(--icon-color)"} className="hover:github"/>
            </Link>
            <Link href={`mailto:${contacts.email}`}>
                <Email size={size} color={"var(--icon-color)"} className="hover:email"/>
            </Link>
        </div>
    );
}

export default ContactBar;