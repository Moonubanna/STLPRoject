import { connect } from 'react-redux'

import OurYoutubeVideos from '../../components/Screens/OurYoutubeVideos'
import {

} from '../../thunks'

const mapStateToProps = ({ AppUsers  }) => ({

})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(OurYoutubeVideos)