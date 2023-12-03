
import { HTTP, HTTPS,SWAPI_PEOPLE, SWAPI_ROOT , GUIDE_IMG_EXTENSION, URL_IMG_PERSON} from "../constants/api";


const getId = (url, cat)=> {
    const id = url.replace(HTTPS+SWAPI_ROOT+cat,'').replace(/\//g, "")
    return id;
}

export const getPeopleId =  url => getId(url, SWAPI_PEOPLE);

export const getPeopleImage = id => `${URL_IMG_PERSON}/${id+GUIDE_IMG_EXTENSION }`