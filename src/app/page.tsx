import {
  ShieldCheck,
  ArrowDown,
} from "lucide-react";

import PaymentCard from "@/components/payment-card";

import { paymentMethods } from "@/data/payment-methods";

export default function HomePage() {
  return (
    <main className="min-h-screen px-4 py-6 sm:px-6 sm:py-10">

      <div className="mx-auto w-full max-w-2xl">

        {/* =====================================
            HERO
        ====================================== */}

        <section
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-white/[0.08]
            bg-[#0b1118]
            px-6
            py-10
            text-center
            shadow-[0_30px_100px_rgba(0,0,0,0.35)]
            sm:px-10
            sm:py-12
          "
        >
          {/* Glow */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              size-72
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-white/[0.04]
              blur-3xl
            "
          />

          {/* Logo */}

          <div
            className="
              relative
              mx-auto
              flex
              size-20
              items-center
              justify-center
              rounded-[25px]
              bg-white
              text-3xl
              font-black
              text-black
              shadow-[0_15px_50px_rgba(255,255,255,0.08)]
            "
          >
            P
          </div>

          {/* Label */}

          <p
            dir="ltr"
            className="
              mt-6
              text-[10px]
              font-bold
              tracking-[0.28em]
              text-white/30
              sm:text-xs
            "
          >
            DEVELOPER PAYMENT CENTER
          </p>

          {/* Title */}

          <h1
            className="
              mt-4
              text-3xl
              font-black
              tracking-tight
              text-white
              sm:text-4xl
            "
          >
            بيانات الدفع الآمنة
          </h1>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-4
              max-w-md
              text-sm
              leading-7
              text-white/40
            "
          >
            اختر وسيلة الدفع المناسبة واضغط على
            نسخ لنسخ البيانات المطلوبة مباشرة.
          </p>

          {/* Secure badge */}

          <div
            className="
              mx-auto
              mt-7
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/[0.07]
              bg-white/[0.03]
              px-4
              py-2
              text-xs
              font-medium
              text-white/45
            "
          >
            <ShieldCheck size={15} />

            دفع آمن
          </div>
        </section>

        {/* =====================================
            NOTICE
        ====================================== */}

        <section
          className="
            mt-5
            rounded-2xl
            border
            border-emerald-400/15
            bg-emerald-400/[0.05]
            px-5
            py-4
            text-sm
            leading-7
            text-emerald-100/70
          "
        >
          <strong className="text-emerald-300">
            تنبيه الدفع:
          </strong>{" "}
          بعد إتمام عملية الدفع، يرجى إرسال إيصال
          التحويل إلى المطور للتأكد من العملية.
        </section>

        {/* =====================================
            PAYMENT METHODS
        ====================================== */}

        <section className="mt-6 space-y-5">

          {paymentMethods.map((payment) => (
            <PaymentCard
              key={payment.id}
              payment={payment}
            />
          ))}

        </section>

        {/* =====================================
            FOOTER
        ====================================== */}

        <footer className="px-4 py-10 text-center">

          <p
            className="
              text-xs
              leading-6
              text-white/25
            "
          >
            يرجى التأكد من بيانات المستفيد
            <br />
            قبل إجراء التحويل.
          </p>

          <div
            className="
              mx-auto
              mt-5
              flex
              size-8
              items-center
              justify-center
              rounded-full
              border
              border-white/[0.06]
              text-white/20
            "
          >
            <ArrowDown size={14} />
          </div>

        </footer>

      </div>
    </main>
  );
}