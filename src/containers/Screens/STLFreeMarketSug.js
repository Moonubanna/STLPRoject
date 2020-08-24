import { connect } from 'react-redux'

import STLFreeMarketSug from '../../components/Screens/STLFreeMarketSug'
import {

} from '../../thunks'

const mapStateToProps = ({ AppUsers  }) => ({

})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(STLFreeMarketSug)