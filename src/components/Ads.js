import { useRouter } from 'next/router';
import { useEffect } from 'react';

const adClient = 'pub-5406034099856189';
let pageLevelAdsEnabled = false;

export default function Ad() {
  const router = useRouter();

  useEffect(() => {
    if (window.adsbygoogle && !pageLevelAdsEnabled) {
      window.adsbygoogle.push({
        google_ad_client: adClient,
        enable_page_level_ads: true,
      });
      pageLevelAdsEnabled = true;
    }
  }, [router.asPath]);

  return null;
}