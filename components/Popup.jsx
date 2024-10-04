"use client";

import { useToast } from "@/hooks/use-toast";

import { useEffect } from 'react';

const Popup = ({ title = '', message, styles = '' }) => {
   const { toast } = useToast();

   useEffect(() => {
      toast({
         title: title || undefined,
         description: message,
         className: styles
      });
   }, [toast]); // Appel automatique au chargement du composant

   return null;
}

export default Popup;