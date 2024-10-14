import { MultiStep } from "@/components/core";
import { NextIntlClientProvider } from "next-intl";
import {getLocale, getMessages} from 'next-intl/server';
export default async function Home() {
  const messages = await getMessages();
  return (
    <div className="space-y-7">
      <NextIntlClientProvider messages={messages}>
      <MultiStep />
      </NextIntlClientProvider>
    </div>
  );
}
