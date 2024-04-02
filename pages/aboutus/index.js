import Link from "next/link";
import { Fragment } from "react";

//for our-domain.com/aboutus
function AboutUs(){
    return (
        <Fragment>
        <h1>THE ABOUT US PAGE</h1>
        <ul>
            <li><Link href={'/aboutus/1'}>Anujeet</Link></li>
            <li><Link href={'/aboutus/2'}>Kevin</Link></li>
            <li><Link href={'/aboutus/3'}>Brian</Link></li>
        </ul>
        </Fragment>
    );

}

export default AboutUs;
