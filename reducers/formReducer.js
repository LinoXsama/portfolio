export const initialState = {
   formData: { name: '', email: '', message: '' },
   isSubmitting: false,
   error: null,
   showPopup: null,
};

export const formReducer = (state, action) => {
   switch (action.type) {
      case 'SET_FORM_DATA':
         return {
            ...state,
            formData: { ...state.formData, ...action.payload }
         }
      case 'SET_IS_SUBMITTING':
         return {
            ...state,
            isSubmitting: action.payload
         }
      case 'SET_ERROR':
         return {
            ...state,
            error: action.payload
         }
      case 'SET_SHOW_POPUP':
         return {
            ...state,
            showPopup: action.payload
         }
      default:
         return state;
   }
};