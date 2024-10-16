import { MultiStep } from "@/components/core";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from 'next-intl/server';
export default async function Home() {
  const messages = await getMessages();
  return (
    <div className="md:space-y-7 space-y-5">
      <NextIntlClientProvider messages={messages}>
        <MultiStep />
      </NextIntlClientProvider>
    </div>
  );
}
