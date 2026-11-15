export default function Analytics() {
  return (
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-5VRSSL1TKP"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5VRSSL1TKP', { page_path: window.location.pathname });
          `,
        }}
      />
    </>
  );
}
