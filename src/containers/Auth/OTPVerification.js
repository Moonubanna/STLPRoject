import { connect } from 'react-redux'

import OTPVerification from '../../components/Auth/OTPVerification'
import {
    
} from '../../thunks'

const mapStateToProps = ({ OTPVerification  }) => ({
//   loading: OTPVerification.loading,
//     error:OTPVerification.error,
//     data:OTPVerification.data
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(OTPVerification)