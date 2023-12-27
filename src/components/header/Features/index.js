import React, { useState } from "react"
import { NavLink } from "react-router-dom"
// import { FEATURES } from "../../../../../constants/routes"
import Menu from "./Menu"

const FeaturesLink = ({name,state}) => {
    const [visible, setVisible] = useState(false)

    const displayMenu = () => {
        setVisible(true)
    }
    const hideMenu = () => {
        setVisible(false)
    }
    return <div className="block"
        onMouseLeave={hideMenu}>
        <NavLink
            // to={FEATURES.link}
            className="xl:mr-0 sm:mr-8 md:mr-8 mr-4 sm:text-sm text-sm"

            activeClassName="cursor-pointer text-orange-400"
            onMouseOver={displayMenu}
        >
            {/* {FEATURES.name} */} {name}
        </NavLink>
        <Menu state={state} isVisible={visible} />
    </div>
}
export default FeaturesLink