export const sendEmail = async (to: string, subject: string, text: string): Promise<void> => {
  try {
    console.log(`Envoi d'un email à ${to}: ${subject} - ${text}`);
    // Simuler l'envoi d'email
  } catch (error) {
    console.error(`Erreur lors de l'envoi de l'email à ${to}:`, error);
    throw new Error('Erreur lors de l\'envoi de l\'email');
  }
};
