import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const cookieStore = cookies();
  const languageCookie = cookieStore.get("NEXT_LOCALE");

  const locale = languageCookie ? languageCookie.value : "pl";

  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default,
  };
});
