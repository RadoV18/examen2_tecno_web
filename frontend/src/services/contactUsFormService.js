import axios from 'axios'
const baseUrl = '/api/contact-us-forms'

const create = async (newContactUsForm) => {
  const response = await axios.post(baseUrl, newContactUsForm)
  return response.data
}

const exports = {
  create
}

export default exports
