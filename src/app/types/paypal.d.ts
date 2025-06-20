export {};

declare global {
  interface Window {
    paypal: {
      Buttons: (options: any) => {
        render: (container: HTMLElement) => void;
      };
    };
  }
}
