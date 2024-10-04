"use client";

import { useToast } from "@/hooks/use-toast";

import { useEffect } from 'react';

const Toast = ({ title = '', message }) => {
   const { toast } = useToast();

   useEffect(() => {
      toast({
         title: title || undefined,
         description: message,
         className: 'bg-blue-500 text-white'
      });
   }, [toast]); // Appel automatique au chargement du composant

   return null;
}

export default Toast;