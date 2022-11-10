import React, {useCallback} from 'react';
import classNames from 'classnames';
import {bool, shape, number, func} from 'prop-types';

import './styles.css';

function Card(props) {
    const {data, onClick} = props;
    const {num, isOpen, active, id, guessed} = data;
    const click = useCallback(()=> {
        if(!isOpen) {
            onClick(id)
        }
    }, [id, isOpen, onClick])

    return (
        <div
            onClick={click}
            className={classNames('card', {show: guessed, active, disable: isOpen})}
        >
            <span className={classNames({textHide: !isOpen})}>{num}</span>
        </div>
    );
}

Card.propTypes = {
    data: shape({
        id: number,
        num: number,
        isOpen: bool,
        active: bool,
    }).isRequired,
    onClick: func.isRequired,
};

export default Card;
