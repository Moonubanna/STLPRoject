import { connect } from 'react-redux'

import ExclusiveLiveEventDetail from '../../components/Screens/ExclusiveLiveEventDetail'
import {

} from '../../thunks'

const mapStateToProps = ({ AppUsers  }) => ({

})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ExclusiveLiveEventDetail)