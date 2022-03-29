import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SocialIcons = () => (
    <div className="row">
        <div className="pr-3">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/biehlerj/">
                <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
            </a>
        </div>
        <div className="pr-3">
            <a target="_blank" rel="noopener noreferrer" href="https://gitlab.com/biehlerj/">
                <FontAwesomeIcon icon={["fab", "gitlab"]} size="2x" />
            </a>
        </div>
        <div className="pr-3">
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jacob-biehler-475573139/">
                <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
            </a>
        </div>
        <div className="pr-3">
            <a href="resume.pdf" download>
                <FontAwesomeIcon icon={["fas", "file"]} size="2x" />
            </a>
        </div>
        <div className="pr-3">
            <a target="_blank" rel="noopener noreferrer" href="mailto:jacob@biehlerj.xyz">
                <FontAwesomeIcon icon={["fas", "envelope"]} size="2x" />
            </a>
        </div>
    </div>
);

export default SocialIcons;