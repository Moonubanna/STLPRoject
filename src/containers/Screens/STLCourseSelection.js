import { connect } from 'react-redux'

import STLCourseSelection from '../../components/Screens/STLCourseSelection'
import {

} from '../../thunks'

const mapStateToProps = ({ AppUsers  }) => ({

})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(STLCourseSelection)