import axios from 'axios';

const Api = {
    Groups: {
        List: (page, filter) => {
            let fields = [
                '_id',
                'name',
                'project_name',
                'custom_fields',
                'tags',
                'description'
            ]
            let url = `/api/v1/groups/?_fields=${fields.join(',')}&_page=${page}&_filter=${filter}`
            return axios.get(url)
        }
    },
    Hosts: {
        List: (page, filter) => {
            let fields = [
                '_id',
                'fqdn',
                'datacenter_name',
                'custom_fields',
                'tags',
                'description',
                'group_name'
            ]
            let url = `/api/v1/hosts/?_fields=${fields.join(',')}&_page=${page}&_filter=${filter}`
            return axios.get(url)
        }
    }
}

export default Api