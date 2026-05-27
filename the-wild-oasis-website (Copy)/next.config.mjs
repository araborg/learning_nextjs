/** @type {import('next').NextConfig} */
// const nextConfig = {};

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				// hostname: 'assets.example.com',
				hostname: "ygwpskojiijcdkxcypys.supabase.co",
				port: "",
				// pathname: '/account123/**',
				pathname: "/storage/v1/object/public/cabin-images/**",
			},
		],
	},

	// needed in case u want to mk d website static
	// output: "export",
};

export default nextConfig;
