import { connect } from 'react-redux'

import STLCourseTandC from '../../components/Screens/STLCourseTandC'
import {

} from '../../thunks'

const mapStateToProps = ({ AppUsers  }) => ({

})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(STLCourseTandC)