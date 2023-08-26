import { useState } from "react"

export const AccordionItem = ({title, content}) => {

const [isOpen, setIsOpen] = useState(false);

const handleIsOpen = () => {
    setIsOpen(!isOpen)
}

    return(
        <div className="style">
            <div className={isOpen ? "active" : "default"} onClick={handleIsOpen}>
                {title}
            </div>
            {isOpen && <div className="content">
                {content}
                </div>
            }
        </div>
    )
}