import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/a187c4dfa896a5ea449a4c5d3927b20a~c5_100x100.jpeg?x-expires=1652670000&x-signature=gtnhCBhqPe22RiTzZwOpKlTQN2o%3D"
                alt="Mixi"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Mixi Moi</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Thanh Mixi Moi</span>
            </div>
        </div>
    );
}

export default AccountItem;
