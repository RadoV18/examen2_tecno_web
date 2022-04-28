import axios from 'axios'
const baseUrl = '/api/service-forms'

const create = async (newServiceForm) => {
  const response = await axios.post(baseUrl, newServiceForm)
  return response.data
}

const exports = {
  create
}

export default exports
