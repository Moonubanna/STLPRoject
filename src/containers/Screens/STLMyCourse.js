import { connect } from 'react-redux'

import STLMyCourse from '../../components/Screens/STLMyCourse'
import {

} from '../../thunks'

const mapStateToProps = ({ AppUsers  }) => ({

})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(STLMyCourse)