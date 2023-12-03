import './PeoplePage.module.css';
import { useState, useEffect } from 'react';
import { getApiResource } from '../../utils/network';
import { API_PEOPLE } from '../../constants/api';
import { getPeopleId, getPeopleImage } from '../../services/getPeopleData';
import PeopleList from '../../components/PeoplePage/PeopleList/PeopleList';
import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import PropTypes from 'prop-types'


const PeoplePage = ({setErrorApi}) => {
    const [people, setPeople] = useState(null);

    
    const getResource = async (url) => {
        const res = await getApiResource(url);
        if (res) {
            const peopleList = res.results.map(({ name, url }) => {
                const id = getPeopleId(url)
                console.log(id)
                const img = getPeopleImage(id)
                console.log(img)
                return {
                    id,
                    name,
                    img,
                }
            })
            setPeople(peopleList)
            setErrorApi(false)
        }else {
            setErrorApi(true)
        }
        
    }
    useEffect(() => {
        getResource(API_PEOPLE);
    }, []);
    return (
        <div>
           
         {people && <PeopleList people={people} />}           
               
        </div>
    );
}

PeopleList.propTypes = {
    people: PropTypes.array,
}

export default withErrorApi(PeoplePage);
