import { connect } from 'react-redux'

import STLPremiumClub from '../../components/Screens/STLPremiumClub'
import {

} from '../../thunks'

const mapStateToProps = ({ AppUsers  }) => ({

})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(STLPremiumClub)