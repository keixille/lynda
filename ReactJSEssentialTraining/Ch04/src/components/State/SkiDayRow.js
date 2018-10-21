import { MdTerrain as Terrain } from 'react-icons/md'
import { TiWeatherSnow as SnowFlake } from 'react-icons/ti'
import { PropTypes } from 'react'

export const SkiDayRow = ({resort, date, powder, backcountry}) => (
    <tr>
        <td>{date.getMonth()+1}/{date.getDate()}/{date.getFullYear()}</td>
        <td>{resort}</td>
        <td>{(powder) ? <SnowFlake /> : null}</td>
        <td>{(backcountry) ? <Terrain /> : null}</td>
    </tr>
)

SkiDayRow.propTypes = {
    resort: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    powder: PropTypes.bool,
    backcountry: PropTypes.bool
}