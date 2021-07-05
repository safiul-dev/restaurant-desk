import CategoryMain from './Category/CategoryMain';
import SubCategory from './SubCategory/SubCategory';

export default function CategoryRightbar1() {
    return(
        <div className=" w-full h-full flex">
        <div className="w-width40% h-height96% mt-2 mr-1">
            <CategoryMain/>
            
        </div>
        <div className="w-width55% h-height96% mt-2 ml-1 mr-1">
          <SubCategory/>
        </div>
        <div className="w-width5% h-full bg-black">
        </div>
      </div>
    )
}