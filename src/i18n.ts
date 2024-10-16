import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
 
const locales = ['en', 'hi'];
 
export default getRequestConfig(async ({locale}) => {
  if (!locales.includes(locale as any)) notFound();
 
  return {
    messages: (await import(`../Dictionary/${locale}.json`)).default
  };
});


// import { notFound } from 'next/navigation';
// import { getRequestConfig } from 'next-intl/server';

// const locales = ['en', 'hi'];

// export default getRequestConfig(async ({ locale }) => {
//   if (!locales.includes(locale as any)) {
//     notFound();
//   }

//   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//   const data = await response.json();

//   const messages = {
//     title: data.title,
//     completed: data.completed,
//   };

//   return {
//     messages: messages
//   };
// });
