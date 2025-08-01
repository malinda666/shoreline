type ArrowProps = {
  className?: string;
};

const Arrow = ({ className }: ArrowProps) => (
  <div className={className}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 17"
      fill="none"
    >
      <path
        d="M11.5914 16.5557C11.6063 16.5708 12.0644 16.6856 12.6092 16.8108C13.1541 16.936 13.6059 17.0194 13.6131 16.9961C13.6203 16.9728 13.6767 16.5946 13.7384 16.1556C13.8622 15.2741 14.1621 14.2449 14.4825 13.6013C15.4812 11.5952 17.2731 10.267 19.4464 9.92175L19.9998 9.83382V8.94765V8.06142L19.4982 7.97726C16.2119 7.42593 14.0694 4.96872 13.6686 1.29151C13.6424 1.05139 13.6111 0.854996 13.5991 0.854996C13.4883 0.854996 11.6518 1.29759 11.617 1.33265C11.5919 1.358 11.6106 1.5831 11.6586 1.83279C12.19 4.59765 13.7117 6.84749 15.6862 7.7882L16.1599 8.01386L6.41978 8.03153L0.260742 8.04275V9.83621L6.43562 9.84744L16.1528 9.86518L15.5548 10.1682C14.0035 10.9541 12.7753 12.4958 12.052 14.5652C11.8459 15.1547 11.5349 16.4988 11.5914 16.5557Z"
        fill="currentColor"
      />
    </svg>
  </div>
);
const Arrow2 = ({ className }: ArrowProps) => (
  <div className={className}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M1.14285 16.8571L15.3811 2.61891M16.8571 16.8571V5.95937C16.8571 3.29928 14.7007 1.14285 12.0406 1.14285H1.14285"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);
const Arrow3 = ({ className }: ArrowProps) => (
  <div className={className}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 21 21"
      fill="none"
    >
      <path
        d="M19.7438 14.1387L19.7438 1.2562L13.203 7.8311C15.5911 5.43035 19.6903 7.10372 19.716 10.4899L19.7438 14.1387Z"
        fill="currentColor"
      />
      <path
        d="M19.7438 1.2562L11.1555 1.2562L6.86133 1.2562L10.4889 1.26933C13.9055 1.28169 15.6126 5.40886 13.203 7.8311L19.7438 1.2562Z"
        fill="currentColor"
      />
      <path
        d="M0.997796 20.0022L13.203 7.8311M19.7438 1.2562L11.1555 1.2562L6.86133 1.2562M19.7438 1.2562L19.7438 14.1387M19.7438 1.2562L13.203 7.8311M2.56718 1.2562L6.86133 1.2562M19.7438 18.4328V14.1387M6.86133 1.2562L10.4889 1.26933C13.9055 1.28169 15.6126 5.40886 13.203 7.8311V7.8311M19.7438 14.1387L19.716 10.4899C19.6903 7.10372 15.5911 5.43035 13.203 7.8311V7.8311"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export { Arrow, Arrow2, Arrow3 };
