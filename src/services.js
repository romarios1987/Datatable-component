import axios from 'axios';

const BASE_URL = 'https://romarios1987.github.io/phone-catalog/api';

const getResource = async (url) => {
  try {
    return await axios.get(`${url}.json`)
  } catch (error) {
    console.error(error)
  }
};

export async function getAllPhones() {
  return await getResource(`${BASE_URL}/phones`);
}


export async function getPhoneById(phoneId) {
    return await getResource(`${BASE_URL}/phones/${phoneId}`);
}
