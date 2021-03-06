import React from 'react';
import styles from './Logo.scss';
import classNames from 'classnames/bind';
import logo from 'static/images/logo.png';

const cx = classNames.bind(styles);

const Logo = () => {
    return (
        <div className={cx('logo')}>
            Coinmulate
        </div>
    );
};

export default Logo;