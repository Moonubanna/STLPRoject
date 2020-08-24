import { connect } from 'react-redux'

import Dashboard from '../../components/Screens/Dashboard'
import {
    getCityApi,
    postSearchApi,
} from '../../thunks'

const mapStateToProps = ({ Dashboard  }) => ({
    loading: Dashboard.loading,
    error:Dashboard.error,
    data:Dashboard.data
})

const mapDispatchToProps = {
    requestGetCityApi: getCityApi,
  requestPostSearchApi: postSearchApi,
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)