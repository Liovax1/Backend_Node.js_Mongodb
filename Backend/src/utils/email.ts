export const sendEmail = async (to: string, subject: string, text: string): Promise<void> => {
  console.log(`Envoi d'un email à ${to}: ${subject} - ${text}`);
  // Simuler l'envoi d'email
};
