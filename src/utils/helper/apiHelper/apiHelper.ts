import axios, {AxiosResponse, AxiosError} from 'axios';
import {BASE_SERVER_URL} from '../../constants';

const customFetch = async (
  endpoint: string,
): Promise<AxiosResponse<any> | AxiosError<any>> => {
  const url = `${BASE_SERVER_URL}/${endpoint}`;
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    return error;
  }
};

export default customFetch;
