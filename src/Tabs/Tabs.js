import TabItem from "./TabItem";
import './tabs.css'
const Tabs = ({setActiveTab}) => {
    return(
        <div className="stl">
            {
            ['tab one'.toUpperCase(), 'tab two'.toUpperCase(), 'tab three'.toUpperCase()].map((tab, index) => (
                <TabItem 
                key={ index }
                tab={ tab }
                index={ index }
                setActiveTab={ setActiveTab }/>)
            )
            }

        </div>
    )
}
export default Tabs;