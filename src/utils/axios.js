import axios from 'axios'

import { REACT_APP_API_URL, AUTH_KEY } from '../config'

const singletonEnforcer = Symbol()

class AxiosClient {
    axiosClient
    static aciosClientInstance

    constructor(enforcer) {
        if(enforcer !== singletonEnforcer) {
            throw new Error('Cannot initialise Axios client single instance')
        }

        this.axiosClient = axios.create({
            baseURL : REACT_APP_API_URL,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'x-auth-key': AUTH_KEY
            }
        })
        
        this.axiosClient.interceptors.request.use(
            (configure) => {
                return configure
            },
            (error) => {
                return Promise.reject(error.response.data.message)
            }
        )

        this.axiosClient.interceptors.response.use(
            (response) => {
                /*if(response.data.data && Array.isArray(response.data.data.data)) {
                    response.data.data.dataObject = response.data.data.data.reduce((dataObject, item) => {
                        dataObject[item.id] = item
                        return dataObject
                    }, {})
                }*/
                return response.data
            },
            (error) => {
                return Promise.reject(error.response.data.message)
            }
        )
    }

    static get instance() {
        if(!this.axiosClientInstance) {
            this.axiosClientInstance = new AxiosClient(singletonEnforcer)
        }

        return this.axiosClientInstance
    }

    setHeader(userToken = '') {
        this.axiosClient.defaults.headers.Authorization = `Bearer ${AUTH_KEY}`
    }

    get(resource, config = {}) {
        const requestURL = `${resource}`
        return this.axiosClient
            .get(requestURL, config)
    }
}

export default AxiosClient.instance