import { connect } from 'react-redux'

import STLCoursePay from '../../components/Screens/STLCoursePay'
import {

} from '../../thunks'

const mapStateToProps = ({ AppUsers  }) => ({

})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(STLCoursePay)