import { connect } from 'react-redux'

import ExclusiveLiveTCondition from '../../components/Screens/ExclusiveLiveTCondition'
import {

} from '../../thunks'

const mapStateToProps = ({ AppUsers  }) => ({

})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ExclusiveLiveTCondition)