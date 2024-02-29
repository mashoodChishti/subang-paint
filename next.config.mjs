if (!URL.canParse(process.env.NEXT_PUBLIC_WORDPRESS_API_URL)) {
    throw new Error(`
      Please provide a valid WordPress instance URL.
      Add to your environment variables WORDPRESS_API_URL.
    `);
}

const { protocol, hostname, port, pathname } = new URL(
    process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
);
/** @type {import('next').NextConfig} */
const nextConfig = {

};

export default nextConfig;
