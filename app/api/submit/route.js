import mongoose from 'mongoose';

// Connexion à MongoDB
const connectMongo = async () => {
   if (mongoose.connection.readyState >= 1) return;

   return mongoose.connect(process.env.MONGO_URI);
};

// Définition du Schéma Mongoose du formulaire
const FormDataSchema = new mongoose.Schema({
   name: { type: String, required: true },
   email: { type: String, required: true },
   message: { type: String, required: true }
});

// Si le modèle n'existe pas, on le crée
const FormData = mongoose.models.visitors || mongoose.model('visitors', FormDataSchema);

export async function POST(req) {
   await connectMongo();

   try {
      const { name, email, message } = await req.json(); // Utilise req.json() pour obtenir le corps
      const newFormData = new FormData({ name, email, message });
      await newFormData.save();
      return new Response(JSON.stringify({ message: 'Form submitted successfully' }), {
         status: 201,
         headers: { 'Content-Type': 'application/json' },
      });
   } catch (error) {
      return new Response(JSON.stringify({ error: 'Failed to submit form' }), {
         status: 500,
         headers: { 'Content-Type': 'application/json' },
      });
   }
};
