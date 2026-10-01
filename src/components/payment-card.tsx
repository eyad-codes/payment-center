import {
  Building2,
  Smartphone,
  WalletCards,
} from "lucide-react";

import type { PaymentMethod } from "@/data/payment-methods";

import CopyButton from "./copy-button";

type PaymentCardProps = {
  payment: PaymentMethod;
};

function PaymentIcon({
  type,
}: {
  type: PaymentMethod["type"];
}) {
  const props = {
    size: 22,
    strokeWidth: 1.8,
  };

  if (type === "bank") {
    return <Building2 {...props} />;
  }

  if (type === "wallet") {
    return <WalletCards {...props} />;
  }

  return <Smartphone {...props} />;
}

const PaymentCard = ({
  payment,
}: PaymentCardProps)=> {
  return (
    <article
      className="
        overflow-hidden
        rounded-[28px]
        border
        border-white/[0.08]
        bg-[#0b1118]
        shadow-[0_20px_70px_rgba(0,0,0,0.28)]
        transition-transform
        duration-300
        hover:-translate-y-0.5
      "
    >
      {/* Header */}

      <header
        className="
          flex
          items-center
          gap-4
          border-b
          border-white/[0.07]
          px-5
          py-5
          sm:px-6
        "
      >
        <div
          className="
            flex
            size-12
            shrink-0
            items-center
            justify-center
            rounded-2xl
            bg-white/[0.07]
            text-white
          "
        >
          <PaymentIcon type={payment.type} />
        </div>

        <div className="min-w-0">
          <h2 className="truncate text-lg font-bold text-white sm:text-xl">
            {payment.name}
          </h2>

          <p
            dir="ltr"
            className="mt-0.5 text-sm text-white/35"
          >
            {payment.nameEn}
          </p>
        </div>
      </header>

      {/* Fields */}

      <div className="space-y-5 p-5 sm:p-6">
        {payment.fields.map((field) => (
          <div key={`${field.label}-${field.value}`}>
            <div
              className="
                mb-2
                flex
                items-center
                justify-between
                gap-3
              "
            >
              <span
                className="
                  text-[10px]
                  font-bold
                  tracking-[0.14em]
                  text-white/30
                "
              >
                {field.label}
              </span>

              <CopyButton value={field.value} />
            </div>

            <div
              dir={field.direction ?? "ltr"}
              className="
                overflow-hidden
                rounded-xl
                bg-black/20
                px-4
                py-3
                text-sm
                font-semibold
                leading-6
                text-white/90
                sm:text-[15px]
              "
            >
              {field.value}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
export default PaymentCard;