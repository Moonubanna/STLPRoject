import { connect } from 'react-redux'

import STLYoutubeVideos from '../../components/Screens/STLYoutubeVideos'
import {

} from '../../thunks'

const mapStateToProps = ({ AppUsers  }) => ({

})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(STLYoutubeVideos)