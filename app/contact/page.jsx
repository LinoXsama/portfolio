'use client';

import { MailIcon, HomeIcon, PhoneCall } from 'lucide-react';
// My custom components Form and Popup
import Form from '@/components/Form';
import Popup from '@/components/Popup';

import { useReducer } from 'react';
import { initialState, formReducer } from '@/reducers/formReducer';


const Contact = () => {

  const [state, dispatch] = useReducer(formReducer, initialState);
  const { formData, isSubmitting, showPopup, error} = state;

  // console.log('formData:', formData, 'isSubmitting:', isSubmitting, 'showPopup:', showPopup, 'error:', error);


  return (
    <section>
      {showPopup === 'success' &&
        <Popup
          message="Formulaire soumis avec succès !"
          styles='bg-blue-500 text-white'
        />
      }

      {showPopup === 'error' &&
        <Popup
          title="Oh oh une erreur s'est produite !"
          message="Il semble y avoir un souci avec l'envoi du formulaire"
          styles='bg-red-500 text-white'
        />
      }

      <div className='container mx-auto'>
        {/* text & illustration*/}
        <div className='grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24'>
          {/* text */}
          <div className='flex flex-col justify-center'>
            <div className='flex items-center gap-x-4 text-primary text-lg mb-4'>
              <span className='w-[30px] h-[2px] bg-primary'></span>
              Hello 😄 !
            </div>
            <h1 className='h1 max-w-md md-8'>Travaillons ensemble !</h1>
            <p className='subtitle max-w-[400px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          {/* illustration */}
          <div className='hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat'></div>
        </div>
        {/* info text & form */}
        <div className='grid xl:grid-cols-2 mb-24 xl:mb-32'>
          {/* info text */}
          <div className='flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg'>
            {/* mail */}
            <div className='flex items-center gap-x-8'>
              <MailIcon size={18} className='text-primary' />
              <div>elmorelyss@gmail.com</div>
            </div>
            {/* address */}
            <div className='flex items-center gap-x-8'>
              <HomeIcon size={18} className='text-primary' />
              <div>1 Bis Quai des Tanneurs<br />34090 Montpellier<br />Quartier des Beaux-Arts </div>
            </div>
            {/* phone */}
            <div className='flex items-center gap-x-8'>
              <PhoneCall size={18} className='text-primary' />
              <div>06 59 34 82 49</div>
            </div>
          </div>
          <Form
            formDataState={formData}
            isSubmittingState={isSubmitting}
            dispatcher={dispatch}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;