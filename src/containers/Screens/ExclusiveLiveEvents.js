import { connect } from 'react-redux'

import ExclusiveLiveEvents from '../../components/Screens/ExclusiveLiveEvents'
import {

} from '../../thunks'

const mapStateToProps = ({ AppUsers  }) => ({

})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ExclusiveLiveEvents)