const bankBaseUrl = process.env.BANK_BASE_URL || "https://seimosbankas.lt";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/sandbox",
        destination: `${bankBaseUrl}/sandbox?brand=banquedefamille&lang=fr`,
        permanent: false
      },
      {
        source: "/register",
        destination: `${bankBaseUrl}/register?brand=banquedefamille&lang=fr`,
        permanent: false
      },
      {
        source: "/bank/:path*",
        destination: `${bankBaseUrl}/:path*`,
        permanent: false
      }
    ];
  }
};

export default nextConfig;
