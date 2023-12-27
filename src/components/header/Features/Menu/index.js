import React from "react"
import SubMenu from "./SubMenu"
// import RequestButton from "./RequestButton"
import { items } from "./state"

const Menu = ({ state,isVisible }) => {

    return (<div className={`${isVisible ? 'block' : 'hidden'} absolute -left-20 w-[20rem]`} >
        <div className="mt-4 rounded-tr-base rounded-tl-base bg-gray-50 px-4 py-4 w-full">
            <SubMenu items={state} />
        </div>
        {/* <RequestButton /> */}
    </div>)
}
export default Menu