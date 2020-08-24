import { connect } from 'react-redux'

import DemateLinksList from '../../components/Screens/DemateLinksList'
import {
    demateLinkApi
} from '../../thunks'

const mapStateToProps = ({ DemateLinksList  }) => ({
    loading: DemateLinksList.loading,
    error:DemateLinksList.error,
    data:DemateLinksList.data
})

const mapDispatchToProps = {
    requestDemateLinkApi: demateLinkApi,
}

export default connect(mapStateToProps, mapDispatchToProps)(DemateLinksList)