import Notifier from "./Notifier";
<<<<<<< HEAD

export default class IranSMSProvider implements Notifier {
=======
import SMSProvider from "./SMSProvider";

export default class IranSMSProvider implements SMSProvider {
>>>>>>> af6f3d6fa9b8eb5fa94d1cb5ee6ec39fbf0dd46d
  sendSMS(message: string): void {
    throw new Error("Method not implemented.");
  }
  sendEmail(message: string): void {
    throw new Error("Method not implemented.");
  }
  sendPushNotification(message: string): void {
    throw new Error("Method not implemented.");
  }
}
