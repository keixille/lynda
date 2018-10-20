import '../../stylesheets/ui.scss'
import { Component, PropTypes } from 'react'
import { MdTerrain as Terrain } from 'react-icons/md'
import { TiWeatherSnow as SnowFlake } from 'react-icons/ti'
import { FaCalendar as Calendar } from 'react-icons/fa'

export class SkiDayCount extends Component {
    percentToDecimal(decimal) {
        return ((decimal * 100) + '%')
    }
    calcGoalProgress(total, goal) {
        return this.percentToDecimal(total/goal)
    }
    render() {
        return (
            <div className="ski-day-count">
                <div className="total-days">
                    <span>{this.props.total}</span>
                        <Calendar />
                    <span>days</span>
                </div>
                <div className="powder-days">
                    <span>{this.props.powder}</span>
                        <SnowFlake />
                    <span>days</span>
                </div>
                <div className="backcountry-days">
                    <span>{this.props.backcountry}</span>
                        <Terrain />
                    <span>days</span>
                </div>
                <div className="backcountry-days">
                    <span>{this.calcGoalProgress(this.props.total, this.props.goal)}</span>
                </div>
            </div>
        )
    }
}

SkiDayCount.defaultProps = {
    total: 50,
    powder: 10,
    backcountry: 15,
    goal: 75
}

SkiDayCount.propTypes = {
    total: PropTypes.number,
    powder: PropTypes.number,
    backcountry: PropTypes.number
}