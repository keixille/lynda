import '../stylesheets/ui.scss'

const percentToDecimal = (decimal) => {
    return ((decimal * 100) + '%')
}
const calcGoalProgress = (total, goal) => {
    return percentToDecimal(total/goal)
}

// ##### OTHER METHOD #####
// export const SkiDayCount = (props) => (
//     <div className="ski-day-count">
//         <div className="total-days">
//             <span>{props.total}</span>
//             <span>days</span>
//         </div>
//         <div className="powder-days">
//             <span>{props.powder}</span>
//             <span>days</span>
//         </div>
//         <div className="backcountry-days">
//             <span>{props.backcountry}</span>
//             <span>days</span>
//         </div>
//         <div className="backcountry-days">
//             <span>{calcGoalProgress(props.total, props.goal)}</span>
//         </div>
//     </div>
// )

export const SkiDayCount = ({total, powder, backcountry, goal}) => (
    <div className="ski-day-count">
        <div className="total-days">
            <span>{total}</span>
            <span>days</span>
        </div>
        <div className="powder-days">
            <span>{powder}</span>
            <span>days</span>
        </div>
        <div className="backcountry-days">
            <span>{backcountry}</span>
            <span>days</span>
        </div>
        <div className="backcountry-days">
            <span>{calcGoalProgress(total, goal)}</span>
        </div>
    </div>
)