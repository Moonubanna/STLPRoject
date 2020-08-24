import { connect } from 'react-redux'

import CommonPages from '../../components/Screens/CommonPages'
import {

} from '../../thunks'

const mapStateToProps = ({ AppUsers  }) => ({

})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(CommonPages)