import { connect } from 'react-redux'

import Login from '../../components/Auth/Login'
import {
  loginUserApi,
} from '../../thunks'

const mapStateToProps = ({ Login  }) => ({
  loading: Login.loading,
    error:Login.error,
    data:Login.data
})

const mapDispatchToProps = {
  requestLoginUserApi: loginUserApi
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)