import { useRouter } from 'next/router';
import { useEffect } from 'react';

const adClient = 'pub-5406034099856189';

export default function Ad() {
  const router = useRouter();

  useEffect(() => {
    if (window.adsbygoogle) {
      window.adsbygoogle.push({
        google_ad_client: adClient,
        enable_page_level_ads: true,
      });
      window.adsbygoogle.push({
        google_ad_client: adClient,
        enable_page_level_ads: true,
      });
    }
  }, [router.asPath]);

  return null;
}
