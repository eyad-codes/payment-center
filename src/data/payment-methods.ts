export type PaymentMethod = {
  id: string;
  name: string;
  nameEn: string;
  type: "wallet" | "bank";
  fields: {
    label: string;
    value: string;
    direction?: "rtl" | "ltr";
  }[];
};

export const paymentMethods: PaymentMethod[] = [
  {
    id: "barq",
    name: "برق",
    nameEn: "Barq",
    type: "wallet",

    fields: [
      {
        label: "اسم الحساب",
        value: "أحمد عباس طربين",
        direction: "rtl",
      },
      {
        label: "ACCOUNT NAME",
        value: "AHMED ABBAS TRABEN",
        direction: "ltr",
      },
    ],
  },

  {
    id: "urpay",
    name: "يور باي",
    nameEn: "urpay",
    type: "wallet",

    fields: [
      {
        label: "رقم الحساب",
        value: "0506814671",
        direction: "ltr",
      },
      {
        label: "اسم الحساب",
        value: "أحمد عباس طربين",
        direction: "rtl",
      },
      {
        label: "ACCOUNT NAME",
        value: "AHMED ABBAS TRABEN",
        direction: "ltr",
      },
    ],
  },

  {
    id: "anb",
    name: "البنك الأهلي السعودي",
    nameEn: "Saudi National Bank",
    type: "bank",

    fields: [
      {
        label: "اسم الحساب",
        value: "غازي حشيفان العتيبي",
        direction: "rtl",
      },
      {
        label: "ACCOUNT NAME",
        value: "Ghazi Hashifan Al-Otaibi",
        direction: "ltr",
      },
      {
        label: "IBAN",
        value: "SA9010000039700000418605",
        direction: "ltr",
      },
    ],
  },
];