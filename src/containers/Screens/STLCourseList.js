import { connect } from 'react-redux'

import STLCourseList from '../../components/Screens/STLCourseList'
import {

} from '../../thunks'

const mapStateToProps = ({ AppUsers  }) => ({

})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(STLCourseList)