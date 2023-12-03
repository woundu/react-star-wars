import  styles from './PeopleList.module.css';
import { ReactPropTypes } from 'react';

const PeopleList =({people})=> {
    return (
        <ul className={styles.list__container}>
                {people.map(({ id,name, img }) =>
                    <li key = {id} className={styles.list__item}>
                        <a href="#">
                            <img src={img} alt={name} className={styles.person__photo} />
                            <p>{name}</p>
                        </a>
                        
                    </li>
                )}
            </ul>
    );
}
export default PeopleList;