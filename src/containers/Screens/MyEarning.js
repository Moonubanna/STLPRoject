import { connect } from 'react-redux'

import MyEarning from '../../components/Screens/MyEarning'
import {

} from '../../thunks'

const mapStateToProps = ({ AppUsers  }) => ({

})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MyEarning)