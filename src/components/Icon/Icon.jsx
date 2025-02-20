import './Icon.scss'
import classNames from "classnames";
import { Icon as MinistaIcon } from 'minista'

const Icon = (props) => {
    const {
        className,
        name,
        hasFill = false,

    } = props;

    return (
        <span
            className={classNames(className, 'icon')}
        >
            <MinistaIcon
                fill={hasFill ? 'currentColor' : 'none'}
                iconId={name}
                stroke={hasFill ? 'none' : 'currentColor'}
            />
        </span>
    )


}

export default Icon;