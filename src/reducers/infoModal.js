const initialState = {
  visible: false
}

const infoModal = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_INFO_MODAL':
      return {
        ...state,
        visible: !state.visible
      }
    default:
      return state
  }
}

export default infoModal
