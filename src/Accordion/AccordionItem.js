import { useState } from "react"

export const AccordionItem = ({title, content}) => {

const [isOpen, setIsOpen] = useState(false);

const handleIsOpen = () => {
    setIsOpen(!isOpen)
}

    return(
        <div className="style">
            <div className={isOpen ? "active" : "default"} onClick={handleIsOpen}>
                <div className="titleStile">
                    <h3>{title}</h3>
                    <img className="arrow" width="48" height="48" src="https://img.icons8.com/sf-regular/48/down-squared.png" alt="down-squared"/>
                </div>

            </div>
            {isOpen && <div className="content">
                {content}
                </div>
            }
        </div>
    )
}