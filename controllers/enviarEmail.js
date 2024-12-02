import SibApiV3Sdk from 'sib-api-v3-sdk';
import dotenv from 'dotenv'
dotenv.config();
export async function main(emailUsuario) {
  const defaultClient = SibApiV3Sdk.ApiClient.instance;

  const apiKey = defaultClient.authentications['api-key'];
  apiKey.apiKey = process.env.API_KEY;

  const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

  const sendSmtpEmail = {
    to: [
      { email: emailUsuario, name: 'Huespes' } 
    ],
    sender: { email: 'billycastro.1822@gmail.com', name: 'Admin El Palomar' },
    subject: 'Confirmacion de Reserva',
    htmlContent: '<html><body><h1>Su Reserva se creo con éxito diga yupi para verificar la reserva</h1></body></html>'
  };

  try {
    const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log('Correo enviado correctamente:', data);
  } catch (error) {
    console.error('Error al enviar el correo:', error);
  }
}
