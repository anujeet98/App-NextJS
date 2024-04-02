//for our-domain.com/aboutus/developer
import { useRouter } from "next/router";

function AboutUs(){
    const details = [
        { id : 1, name: 'Anujeet', role: 'Senior Developer'},
        { id : 2, name: 'Kevin', role: 'Backend Developer'},
        { id : 3, name: 'Brian', role: 'Frontend Developer'},
    ]
    const developerId = useRouter().query.developerId;
    if(!developerId || developerId===NaN || developerId<1 || developerId>details.length)
        return <h1>Developer doesn't exist</h1>;
    return <h1>{details[developerId-1].name} {details[developerId-1].role}</h1>;
}

export default AboutUs;
