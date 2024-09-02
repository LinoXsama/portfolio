'use client';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react';


const Form = () => {
  return (
    <form>
      {/* input */}
      <div className='relative flex items-center'>
         <Input type='name' id='name' placeholder='Name' />
         <User className='absolute right-6' size={20} />
      </div>
    </form>
  )
}

export default Form;