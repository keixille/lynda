import '../../stylesheets/ui.scss'
import { MdTerrain as Terrain } from 'react-icons/md'
import { TiWeatherSnow as SnowFlake } from 'react-icons/ti'
import { FaCalendar as Calendar } from 'react-icons/fa'

const percentToDecimal = (decimal) => {
    return ((decimal * 100) + '%')
}
const calcGoalProgress = (total, goal) => {
    return percentToDecimal(total/goal)
}

export const SkiDayCount = ({total, powder, backcountry, goal}) => (
    <div className="ski-day-count">
        <div className="total-days">
            <span>{total}</span>
                <Calendar />
            <span>days</span>
        </div>
        <div className="powder-days">
            <span>{powder}</span>
                <SnowFlake />
            <span>days</span>
        </div>
        <div className="backcountry-days">
            <span>{backcountry}</span>
                <Terrain />
            <span>days</span>
        </div>
        <div className="backcountry-days">
            <span>{calcGoalProgress(total, goal)}</span>
        </div>
    </div>
)