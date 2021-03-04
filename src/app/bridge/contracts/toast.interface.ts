export interface IToastImpl {

  presentGeneralError(): Promise<void>;

  presentWarning(header: string, msg: string): Promise<void>;

  dismiss(): void;
}
