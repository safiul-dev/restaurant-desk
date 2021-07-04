import Middle3Main from "../middle3/middle3Main";
import Middle2Main from "../Middle2/middle2Main";
import Middle1Main from "../Middle1/middle1Main";
export default function Main () {
    return (
        <div className="w-full h-full flex">
                        
            <div className="w-middle1 h-middleSegmentHeight"><Middle1Main/></div>
            <div className="w-middle2 h-middleSegmentHeight mr-1 "><Middle2Main/></div>
            <div className="w-middle3 h-middleSegmentHeight mr-1 ml-3"><Middle3Main/></div>
        </div>
    )
}