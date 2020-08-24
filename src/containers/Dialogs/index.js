import { connect } from 'react-redux'

import DialogsScreen from '../../components/Dialogs'
import { dialogSelectReset } from '../../actionCreators'
import {
  deleteDialog,
  logout,
} from '../../thunks'

const mapStateToProps = ({ auth, dialogs }) => ({
  selected: dialogs.selected,
  userName: auth.user && auth.user.fullName,
})

const mapDispatchToProps = {
  deleteDialog,
  logout,
  resetSelection: dialogSelectReset,
}

export default connect(mapStateToProps, mapDispatchToProps)(DialogsScreen)