import { connect } from 'react-redux'

import STLCoursePrograms from '../../components/Screens/STLCoursePrograms'
import {

} from '../../thunks'

const mapStateToProps = ({ AppUsers  }) => ({

})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(STLCoursePrograms)