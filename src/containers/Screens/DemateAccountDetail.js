import { connect } from 'react-redux'

import DemateAccountDetail from '../../components/Screens/DemateAccountDetail'
import {
    demateDetailApi
} from '../../thunks'

const mapStateToProps = ({ DemateAccountDetail  }) => ({
    loading: DemateAccountDetail.loading,
    error:DemateAccountDetail.error,
    data:DemateAccountDetail.data
})

const mapDispatchToProps = {
    requestDemateDetailApi: demateDetailApi,
}

export default connect(mapStateToProps, mapDispatchToProps)(DemateAccountDetail)