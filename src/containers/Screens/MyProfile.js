import { connect } from 'react-redux'

import MyProfile from '../../components/Screens/MyProfile'
import {
    myProfileApi,
    updateProfileApi,
    countryMyProfileApi,
    stateMyProfileApi,
    cityMyProfileApi,
} from '../../thunks'

const mapStateToProps = ({ MyProfile  }) => ({
    loading: MyProfile.loading,
    error:MyProfile.error,
    data:MyProfile.data
})

const mapDispatchToProps = {
    requestMyProfileApi: myProfileApi,
    requestUpdateProfileApi: updateProfileApi,
    requestCountryApi:countryMyProfileApi,
    requestStateApi:stateMyProfileApi,
    requestCityApi:cityMyProfileApi,
}

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile)