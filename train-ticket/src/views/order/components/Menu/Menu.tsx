import React from 'react';
import classNames from 'classnames';
import './Menu.scss';

interface optionType {
    title: string;
    value: string | number;
}
interface infoType {
    id: number;
    type: string;
    options: optionType[];
}
interface menuProps {
    show: boolean;
    info: infoType;
    onPress: (id: number, type: string, value: any) => void;
    hideMenu: () => void;
}

const Menu: React.FC<menuProps> = props => {
    const {show, info, onPress, hideMenu} = props;
    return (
        <div>
            {show && <div className="menu-mask" onClick={() => hideMenu()}></div>}
            <div className={classNames('menu', {show})}>
                <div className="menu-title"></div>
                <ul>
                    {info.options &&
                        info.options.map(option => {
                            return (
                                <li
                                    key={option.value}
                                    onClick={() => {
                                        onPress(info.id, info.type, option.value);
                                    }}>
                                    {option.title}
                                </li>
                            );
                        })}
                </ul>
            </div>
        </div>
    );
};

export default Menu;
