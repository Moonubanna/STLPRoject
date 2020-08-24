import { connect } from 'react-redux'

import Signup from '../../components/Auth/Signup'
import {
    countryApi,
    stateApi,
    cityApi,
    signUpUserApi
} from '../../thunks'

const mapStateToProps = ({ Signup  }) => ({
    loading: Signup.loading,
    error:Signup.error,
    data:Signup.data
})

const mapDispatchToProps = {
    requestCountryApi:countryApi,
    requestStateApi:stateApi,
    requestCityApi:cityApi,
    requestSignupUserApi:signUpUserApi,
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)