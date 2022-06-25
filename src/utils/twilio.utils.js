import twilio from 'twilio';

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
// const message = {
//     body: 'mensaje desde twilio',
//     from: process.env.TWILIO_WSP,
//     to: 'whatsapp:+542235341995',
//     // mediaUrl: ["https://www.mundomotero.com/wp-content/uploads/2017/06/BMW-F-700-GS.jpg"],
//   };

export const sendWsp = async (message) => {
  try {
    // const message = {
    //   body: 'mensaje desde twilio',
    //   from: process.env.TWILIO_WSP,
    //   to: 'whatsapp:+549'+ `${user.phone}`,
    //   // mediaUrl: ["https://www.mundomotero.com/wp-content/uploads/2017/06/BMW-F-700-GS.jpg"],
    // };
    const response = await client.messages.create(message);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
