import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SocialIcons = () => (
    <div className='row'>
        <div className='pr-3'>
            <a target='_blank' rel='noopener noreferrer' href='https://github.com/biehlerj/'>
                <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
        </div>
        <div className='pr-3'>
            <a target='_blank' rel='noopener noreferrer' href='https://gitlab.com/biehlerj/'>
                <FontAwesomeIcon icon={["fab", "gitlab"]} />
            </a>
        </div>
        <div className='pr-3'>
            <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/jacob-biehler/'>
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
        </div>
        <div className='pr-3'>
            <a href='/resume.pdf' download>
                <FontAwesomeIcon icon={["fas", "file"]} />
            </a>
        </div>
        <div className='pr-3'>
            <a target='_blank' rel='noopener noreferrer' href='mailto:jacob@biehlerj.xyz'>
                <FontAwesomeIcon icon={["fas", "envelope"]} />
            </a>
        </div>
    </div>
);

export default SocialIcons;