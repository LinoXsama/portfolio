'use client';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react';

import { useState } from 'react';


const Form = () => {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {

    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

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
    setIsSubmitting(true);

    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      console.error('HTTP error', response.status);
      setError('An error occurred while submitting the form.'); // Gère l'erreur
      return;
    }

    

    // const result = await response.json();
    // console.log(result);
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

      <Button className='flex items-center max-w-[166px] gap-x-1'>
        Let's Talk <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;