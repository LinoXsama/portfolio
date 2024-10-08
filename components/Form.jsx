'use client'; // à supprimer

import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

import { User, MailIcon, ArrowRightIcon, MessageSquare, LoaderPinwheel } from 'lucide-react';


const Form = ({ formData, isSubmitting, dispatch }) => {

  const handleChange = (e) => {

    const { name, value } = e.target;
    dispatch({ type: 'SET_FORM_DATA', payload: { [name]: value }});

    // Affichage du contenu de l'état formData !

    // Manière 1 : 
    // Object.entries(formData).map(([key, value]) => {
    //   console.log(`${key}: ${value}`);
    //   return null; // Tu peux retourner `null` ou `undefined` car `map` nécessite un retour.
    // });

    // Manière 2 :
    // console.log(formData);
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    dispatch({ type: 'SET_IS_SUBMITTING', payload: true });
    dispatch({ type: 'SET_ERROR', payload: null });

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        dispatch({ type: 'SET_SHOW_POPUP', payload: 'success' });

        // Réinitialiser les champs du formulaire !
        dispatch({ type: 'SET_FORM_DATA', payload: { name: '', email: '', message: '' } });
      }

    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error });
      dispatch({ type: 'SET_SHOW_POPUP', payload: 'error' });

    } finally {
      dispatch({ type: 'SET_IS_SUBMITTING', payload: false });
    }
  };


  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-y-4'>
      {/* name input */}
      <div className='relative flex items-center'>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nom"
          required
        />
        <User className='absolute right-6' size={20} />
      </div>

      {/* email input */}
      <div className='relative flex items-center'>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <MailIcon className='absolute right-6' size={20} />
      </div>

      {/* message textarea */}
      <div className='relative flex items-center'>
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Ecrivez votre message ici..."
          required
        />
        <MessageSquare className='absolute top-4 right-6' size={20} />
      </div>

      <Button className='flex items-center justify-center max-w-[166px] gap-x-1'>
        Envoyer <ArrowRightIcon size={20} />
        {isSubmitting && <LoaderPinwheel className='ml-2 animate-spin' />}
      </Button>
    </form>
  );
};

export default Form;