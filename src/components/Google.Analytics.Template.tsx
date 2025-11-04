// app/template.js
'use client';

export default function GoogleAnalyticsTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  // GTM is injected globally in layout.tsx; this becomes a pass-through wrapper
  return <>{children}</>;
}
